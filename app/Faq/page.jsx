"use client"
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import '../../styles/fashion/_faq.scss'
import Head from 'next/head';
import React, { useState } from 'react';
import AddIcon from "@mui/icons-material/Add";
import { BsInfoCircleFill, BsCartCheckFill } from 'react-icons/bs';
import { IoIosShirt } from 'react-icons/io';
import { MdPayment, MdCancel } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';
import { FcAbout, FcCancel, FcMoneyTransfer, FcServices, FcShop } from 'react-icons/fc';

const Faq = () => {
    return (
        <>
            <Head>
                <title>FAQ | Float Fashion</title>
            </Head>
            <Hero />
            <FAQSection />
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
const FAQSection = () => {
    const [selectedTab, setSelectedTab] = useState('about')
    return (
        <>
            <div className="mx-auto max-w-screen-xl my-5 px-5 paddingBottom" id='accord'>
                <h1 className='text-center text-2xl font-bold my-10'>FAQs: Your Questions Answered</h1>
                <div className='lg:flex gap-5'>
                    <div className='lg:w-3/5 mt-5 flex justify-center'>
                        <FAQBtn selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

                    </div>
                    <div>
                        {selectedTab == "about" && <About />}
                        {selectedTab == "product" && <Product />}
                        {selectedTab == "order" && <Order />}
                        {selectedTab == "payment" && <Payment />}
                        {selectedTab == "delivery" && <Delivery />}
                        {selectedTab == "return" && <Cancellation />}
                    </div>
                </div>
            </div>
        </>
    )
}
const FAQBtn = ({ setSelectedTab, selectedTab }) => {
    return (
        <>
            <div id='faqbtn'>
                <ul className="nav nav-tabs" role="tablist">
                    <li
                        className="nav-item"
                        onClick={() => {
                            setSelectedTab("about");
                        }}
                    >
                        <a
                            className={
                                selectedTab == "about"
                                    ? "nav-link btn active"
                                    : "nav-link btn"
                            }
                            data-toggle="tab"
                            role="tab"
                            aria-selected="false"
                        >
                            <BsInfoCircleFill />  About Float Fashion
                        </a>
                    </li>
                    <li
                        className="nav-item"
                        onClick={() => {
                            setSelectedTab("product");
                        }}
                    >
                        <a
                            className={
                                selectedTab == "product"
                                    ? "nav-link btn active"
                                    : "nav-link btn"
                            }
                            data-toggle="tab"
                            role="tab"
                            aria-selected="false"
                        >
                            <IoIosShirt />  Product & Service
                        </a>
                    </li>
                    <li
                        className="nav-item"
                        onClick={() => {
                            setSelectedTab("order");
                        }}
                    >
                        <a
                            className={
                                selectedTab == "order"
                                    ? "nav-link btn text-center active"
                                    : "nav-link btn text-center"
                            }
                            data-toggle="tab"
                            role="tab"
                            aria-selected="true"
                        >
                            <BsCartCheckFill />  My Orders
                        </a>
                    </li>
                    <li
                        className="nav-item"
                        onClick={() => {
                            setSelectedTab("payment");
                        }}
                    >
                        <a
                            className={
                                selectedTab == "payment"
                                    ? "nav-link btn active"
                                    : "nav-link btn"
                            }
                            data-toggle="tab"
                            role="tab"
                            aria-selected="true"
                        >
                            <MdPayment /> Payments
                        </a>
                    </li>
                    <li
                        className="nav-item"
                        onClick={() => {
                            setSelectedTab("delivery");
                        }}
                    >
                        <a
                            className={
                                selectedTab == "delivery"
                                    ? "nav-link btn active"
                                    : "nav-link btn"
                            }
                            data-toggle="tab"
                            role="tab"
                            aria-selected="true"
                        >
                            <TbTruckDelivery />  Delivery
                        </a>
                    </li>
                    <li
                        className="nav-item"
                        onClick={() => {
                            setSelectedTab("return");
                        }}
                    >
                        <a
                            className={
                                selectedTab == "return"
                                    ? "nav-link btn active"
                                    : "nav-link btn"
                            }
                            data-toggle="tab"
                            role="tab"
                            aria-selected="true"
                        >
                            <MdCancel /> Cancellation & Return
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}
const About = () => {
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
        <div className="mx-auto max-w-screen-xl mb-5 paddingBottom" id='accord'>
            <div className='customfaqlist'>
                <div className='text-2xl font-bold mb-5 flex items-center gap-3'><FcAbout className='text-6xl' /> <div>About Float Fashion <p className='text-sm text-slate-500'>Get help with Float Fashion</p></div> </div>
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
    );
};
const Product = () => {
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
            <div className='customfaqlist'>
            <div className='text-2xl font-bold my-5 flex items-center gap-3'><FcServices className='text-6xl' /> <div>Product & Services <p className='text-sm text-slate-500'>Get help with product & services</p></div> </div>
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
    );
};
const Order = () => {
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
            <div className='customfaqlist'>
            <div className='text-2xl font-bold my-5 flex items-center gap-3'><FcShop className='text-6xl' /> <div>My Orders <p className='text-sm text-slate-500'>Order details</p></div> </div>
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
    );
};
const Payment = () => {
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
            <div className='customfaqlist'>
            <div className='text-2xl font-bold my-5 flex items-center gap-3'><FcMoneyTransfer className='text-6xl' /> <div>Payment <p className='text-sm text-slate-500'>Get help with payment</p></div> </div>
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
    );
};
const Delivery = () => {
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
            <div className='customfaqlist'>
            <div className='text-2xl font-bold my-5 flex items-center gap-3'><TbTruckDelivery className='text-6xl' /> <div>Delivery <p className='text-sm text-slate-500'>Get help with delivery</p></div> </div>
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
    );
};
const Cancellation = () => {
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
            <div className='customfaqlist'>
            <div className='text-2xl font-bold my-5 flex items-center gap-3'><FcCancel className='text-6xl' /> <div>Cancellation & Return <p className='text-sm text-slate-500'>Get help with cancellation & return</p></div> </div>
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
    );
};