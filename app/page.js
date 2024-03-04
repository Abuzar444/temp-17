import Link from 'next/link';
import React from 'react';

const HomePage = () => {
    return (
        <main className='hero min-h-screen'>
            <div className='hero-content text-center'>
                <div className='max-w-md'>
                    <h1 className='text-6xl font-bold text-primary'>
                        GPTGenius
                    </h1>
                    <p className='py-6 text-lg leading-loose'>
                        GPTGenius: Your AI language companion. Powered by
                        OpenAI, it enhances your conversations, content
                        creation, and more!'
                    </p>

                    <Link href='/chat' className='btn btn-secondary'>
                        get started
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default HomePage;
