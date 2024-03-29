import React from 'react';

const TourInfo = ({ tour }) => {
    const { title, description, stops } = tour;

    return (
        <main className='max-w-2xl'>
            <h1 className='text-4xl font-semibold mb-4'>{title}</h1>
            <p className='leading-loose mb-6'>{description}</p>
            <ul>
                {stops.map((stop, index) => (
                    <li key={index} className='mb-4 bg-base-100 p-4 rounded-xl'>
                        <p>{stop}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default TourInfo;
