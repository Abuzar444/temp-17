'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import TourInfo from './TourInfo';
import {
    createNewTour,
    generateTourResponse,
    getExistingTour,
} from '../utils/action';
import toast from 'react-hot-toast';

const NewTour = () => {
    const queryClient = useQueryClient();
    const {
        isPending,
        mutate,
        data: tour,
    } = useMutation({
        mutationFn: async (destination) => {
            const existingTour = await getExistingTour(destination);

            if (existingTour) return existingTour;
            const newTour = await generateTourResponse(destination);
            if (newTour) {
                await createNewTour(newTour);
                queryClient.invalidateQueries({ queryKey: ['tours'] });
                return newTour;
            }

            toast.error('No matching city found...');
            return null;
        },
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const destination = Object.fromEntries(formData.entries());

        mutate(destination);
    };

    if (isPending) {
        return <span className='loading loading-xl'></span>;
    }
    return (
        <>
            <form onSubmit={handleSubmit} className='max-w-xl'>
                <h2 className='mb-4'>Select your dream destination</h2>
                <div className='join w-full'>
                    <input
                        type='text'
                        className='input input-bordered join-item w-full'
                        placeholder='city'
                        name='city'
                        required
                    />
                    <input
                        type='text'
                        className='input input-bordered join-item w-full'
                        placeholder='country'
                        name='country'
                        required
                    />

                    <input
                        type='submit'
                        value='generate tour'
                        className='btn btn-primary join-item text-base-300 uppercase'
                    />
                </div>
            </form>
            <div className='mt-16'>
                {tour ? <TourInfo tour={tour} /> : null}
            </div>
        </>
    );
};

export default NewTour;
