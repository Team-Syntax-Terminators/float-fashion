import '../../styles/fashion/_faq.scss'
import Head from 'next/head';
import React from 'react';

const Faq = () => {
    return (
        <>
            <Head>
                <title>FAQ | Float Fashion</title>
            </Head>
            <Hero />
        </>
    );
};
export default Faq;

const Hero = () => {
    return (
        <section
            id="faq"
        >
            <div className="mx-auto max-w-screen-xl pt-5">
                <div className="md:flex justify-center gap-5 items-center">
                    <div className='md:w-1/2'>
                        <h1 className='text-xl font-bold'>Frequently Asked Questions</h1>
                        <p>Float Fashion understands the importance of keeping the FAQ section up to date. They regularly review and update the information to ensure its accuracy and relevance. As new products are introduced, policies are revised, or common customer queries arise, the FAQ section is promptly updated to reflect the latest information.</p>
                    </div>
                    <div>
                        <img src="/assets/faq/faq.jpg" alt="" />
                    </div>
                </div>
                <div className="flex flex-wrap md:-mx-3 md:-mb-6 gap-5 justify-center text-center overflow-hidden">
                    <div
                        className="w-full md:w-1/2 lg:w-1/4 mb-6"
                    >
                        <div className="p-12 bg-white shadow rounded">
                            <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
                                1
                            </div>
                            <h3 className="mb-2 font-bold font-heading text-xl h-12">
                                Quality Products
                            </h3>
                            <p className="text-sm text-blueGray-400 leading-relaxed">
                                Explore our wide range of high-quality fashion products that are designed to make you look and feel great.
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-6">
                        <div
                            className="p-12 bg-white shadow rounded"
                        >
                            <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
                                2
                            </div>
                            <h3 className="mb-2 font-bold font-heading text-xl h-12">
                                Fast and Secure Shipping
                            </h3>
                            <p className="text-sm text-blueGray-400 leading-relaxed">
                                We provide quick and secure shipping options to ensure that your fashion items arrive at your doorstep in no time.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
