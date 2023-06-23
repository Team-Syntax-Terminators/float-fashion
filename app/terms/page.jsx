import Head from 'next/head';
import React from 'react';
import '../../styles/fashion/_terms.scss'

const Terms = () => {
    return (
        <>
            <Head>
                <title>Terms & Condition | Float Fashion</title>
            </Head>
            <Hero />
        </>
    );
};
export default Terms;

const Hero = () => {
    return (
        <section id='terms' className='terms'>
            <div className="mx-auto max-w-screen-xl" style={{
                margin: 'auto',
                position: 'relative'
            }}>
                <h1> Terms & Condition <span className='text-orange-600'>🖱</span> </h1>
                <p className='md:w-2/5'>Terms of service are the legal agreements between a service provider and a person who wants to use that service. The person must agree to abide by the terms of service in order to use the offered service.</p>
            </div>
        </section>
    );
};