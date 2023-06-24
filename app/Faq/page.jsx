"use client"
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import '../../styles/fashion/_faq.scss'
import Head from 'next/head';
import React, { useState } from 'react';
import AddIcon from "@mui/icons-material/Add";

const Faq = () => {
    return (
        <>
            <Head>
                <title>FAQ | Float Fashion</title>
            </Head>
            <Hero />
            <Students />
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
                        <h1 className='text-2xl font-bold py-2' style={{
                            fontFamily: 'sans-serif'
                        }}>
                            Frequently Asked Questions
                        </h1>
                        <p style={{
                            fontFamily: 'sans-serif'
                        }}>
                            Float Fashion understands the importance of keeping the FAQ section up to date. They regularly review and update the information to ensure its accuracy and relevance. As new products are introduced, policies are revised, or common customer queries arise, the FAQ section is promptly updated to reflect the latest information.
                        </p>
                    </div>
                    <div className='flex justify-center'>
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
const Students = () => {
    const [expanded, setExpanded] = useState(false);
    const faqlist = [
        {
            question: 'What is Fashion Float?',
            answer: 'Fashion Float is an online clothing store that offers a wide range of trendy fashion items for men, women and kids.',
        },
        {
            question: 'How can I place an order?',
            answer: 'To place an order, simply browse our website, select the desired items, add them to your shopping cart, and proceed to the checkout page.',
        },
        {
            question: 'What payment methods do you accept?',
            answer: 'We accept major credit cards, PayPal, and bank transfers as payment methods.',
        },
        {
            question: 'How long does shipping take?',
            answer: 'Shipping times may vary depending on your location. Typically, orders are delivered within 5-7 business days for domestic shipments and 7-14 business days for international shipments.',
        },
        {
            question: 'Can I return or exchange items?',
            answer: 'Yes, we have a hassle-free return and exchange policy. If you\'re not satisfied with your purchase, you can return or exchange it within 30 days of receiving the order. Please refer to our Returns and Exchanges page for more details.',
        },
        {
            question: 'Does Float Fashion offer international shipping?',
            answer: 'Yes, Float Fashion provides international shipping to customers around the world. During the checkout process, you will be prompted to enter your shipping address, and available shipping options and associated fees will be displayed based on your location.',
        },
        {
            question: 'Does Float Fashion offer any promotions, discounts, or rewards?',
            answer: 'Float Fashion may offer promotions, discounts, or rewards programs from time to time. Check their website or subscribe to their newsletter to stay updated on any ongoing promotions, exclusive discounts, or loyalty programs they may offer.',
        },
    ]
    const handleChange = (isExpanded, i) => {
        setExpanded(isExpanded ? i : false);
    };
    return (
        <div className="mx-auto max-w-screen-xl my-5 paddingBottom" id='accord'>
            <div className='md:grid grid-cols-2 items-center gap-5'>
                <div>
                    <img src="https://cdn.dribbble.com/users/985415/screenshots/6290809/clothing.gif" />
                </div>
                <div className='customfaqlist'>
                    <h1 className='text-center text-2xl font-bold'>FAQ</h1>
                    {faqlist.map((q, i) => (
                        <Accordion
                            elevation={0}
                            key={i}
                            expanded={expanded === i}
                            onChange={(event, isExpanded) => handleChange(isExpanded, i)}
                        >
                            <AccordionSummary
                                focusVisibleClassName="text-blue-300"
                                expandIcon={<AddIcon />}
                                aria-controls="panel1a-content"
                            >
                                <Typography variant="h6" className="font-bold text-lg text-black">
                                    {q.question}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>{q.answer}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </div>
        </div>
    );
};
