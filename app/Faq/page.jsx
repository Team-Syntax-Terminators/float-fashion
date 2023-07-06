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
            question: 'How did float fashion originate?',
            answer: 'The exact origins of float fashion are difficult to trace, as fashion trends often evolve over time. However, float fashion gained popularity through various fashion shows, editorials, and artistic collaborations that aimed to explore new dimensions of design and aesthetics.',
        },
        {
            question: 'Can float fashion be worn in everyday life?',
            answer: 'While float fashion may be more common in avant-garde or editorial settings, elements of float fashion can be incorporated into everyday outfits. For example, you can experiment with sheer or layered pieces, light fabrics, or iridescent accessories to add a touch of float fashion to your personal style.',
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
            question: 'What products does your store offer?',
            answer: 'Our store offers a wide range of float fashion clothing products. This includes dresses, blouses, tops, skirts, and accessories that incorporate the principles of float fashion. We strive to curate a collection that captures the essence of this trend and offers a variety of styles and designs for our customers.',
        },
        {
            question: 'How can I care for float fashion clothing?',
            answer: 'Care instructions may vary depending on the specific fabric and design of the garment. We recommend following the care instructions provided with each product to ensure its longevity. In general, float fashion clothing should be handled gently and may require delicate or handwashing, avoiding harsh detergents or high heat drying.',
        },
        {
            question: 'Are there any discounts or promotions available?',
            answer: 'We occasionally offer discounts, promotions, or special sales events. To stay updated on our latest offers, we recommend signing up for our newsletter or following our social media accounts. This way, you will be the first to know about any exciting deals or exclusive offers.',
        },
        {
            question: 'What if the item I want is currently out of stock?',
            answer: ' If an item is out of stock, you can join our waiting list or subscribe to notifications for that specific product. We strive to restock popular items whenever possible, and by joining the waiting list, you will be notified as soon as the item becomes available again.',
        },
    ]
    const handleChange = (isExpanded, i) => {
        setExpanded(isExpanded ? i : false);
    };
    return (
        <div className="mx-auto max-w-screen-xl mb-5 paddingBottom" id='accord'>
            <div className='customfaqlist'>
            <div className='text-2xl font-bold mb-5 flex items-center gap-3'><FcServices className='text-6xl' /> <div>Product & Services <p className='text-sm text-slate-500'>Get help with product & services</p></div> </div>
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
            question: 'How do I place an order?',
            answer: ' Placing an order is simple. Browse our collection and click on the desired item to view its details. Select the appropriate size and quantity, then click the "Add to Cart" button. You can continue shopping or proceed to checkout. Follow the prompts to enter your shipping and payment information, review your order, and click "Place Order" to complete the process.',
        },
        {
            question: 'Can I make changes to my order after it has been placed?',
            answer: 'Once an order has been placed, it is processed and prepared for shipping as quickly as possible. Therefore, we recommend reviewing your order carefully before finalizing it. If you need to make changes, such as updating your shipping address or canceling an item, please contact our customer support team as soon as possible. While we cannot guarantee that changes can be made, we will do our best to assist you.',
        },
        {
            question: 'How can I check the status of my order?',
            answer: 'You will receive a confirmation email after placing your order, which includes a unique order number. You can use this number to track the status of your order on our website. Simply visit the "Order Tracking" page and enter your order number and email address to access the latest information about your shipment.',
        },
        {
            question: 'How long does it take to process and ship an order?',
            answer: 'We strive to process orders promptly. Generally, it takes 1-3 business days to process an order before it is shipped. Once shipped, the delivery time depends on your location and the shipping method chosen during checkout. You can refer to our shipping policy for estimated delivery times to different destinations.',
        },
        {
            question: 'Do you offer gift wrapping or special packaging options?',
            answer: 'At this time, we do not offer gift wrapping or special packaging options. However, we ensure that our products are carefully packaged to prevent any damage during transit. If you are purchasing items as gifts, we recommend adding a personalized note or card when presenting them.',
        },
        {
            question: 'What should I do if I encounter any issues with my order?',
            answer: ' If you experience any issues with your order, such as receiving a damaged item or having concerns about the product quality, please contact our customer support team immediately. We will work with you to resolve the issue promptly and ensure your satisfaction.',
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
            <div className='text-2xl font-bold mb-5 flex items-center gap-3'><FcShop className='text-6xl' /> <div>My Orders <p className='text-sm text-slate-500'>Order details</p></div> </div>
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
            question: 'What payment methods do you accept?',
            answer: 'We accept various payment methods, including major credit cards (Visa, MasterCard, American Express), PayPal, and other secure online payment options. During the checkout process, you can select your preferred payment method and complete the transaction securely.',
        },
        {
            question: ' Is my payment information secure?',
            answer: 'Yes, the security of your payment information is a top priority for us. We employ industry-standard encryption technology to protect your data during the checkout process. We do not store payment information, and all transactions are processed through trusted and secure payment gateways.',
        },
        {
            question: 'Can I use multiple payment methods for a single order?',
            answer: 'At this time, we only accept a single payment method for each order. If you wish to use multiple payment methods, we recommend placing separate orders for each payment method you would like to use.',
        },
        {
            question: 'Do you offer any discounts or coupon codes for payments?',
            answer: 'We occasionally offer discounts or coupon codes as part of promotional campaigns or special events. These discounts or codes can be applied during the checkout process by entering the provided coupon code in the designated field. Please note that discounts and coupon codes may have specific terms and conditions associated with them.',
        },
        {
            question: 'Can I use a gift card or store credit for my purchase?',
            answer: 'If you have a gift card or store credit, you may be able to use it for your purchase. During the checkout process, there will be an option to enter the gift card or store credit code. If the code is valid, the corresponding amount will be deducted from your total order value.',
        },
        {
            question: 'Can I change the payment method after placing an order?',
            answer: 'Once an order has been placed, the payment method cannot be changed. We recommend reviewing your order and payment details carefully before completing the checkout process to ensure accuracy.',
        },
        {
            question: 'Will I receive an invoice for my order?',
            answer: 'Yes, you will receive an order confirmation email that serves as an invoice for your purchase. This email will include details such as the items ordered, quantities, prices, shipping information, and the total amount paid.',
        },
        {
            question: 'Do you offer installment or layaway payment options?',
            answer: 'At this time, we do not offer installment or layaway payment options. We require full payment at the time of purchase.',
        },
        {
            question: 'Can I get a refund if I return an item?',
            answer: 'Yes, if you return an item in accordance with our return policy, you will be eligible for a refund. The refund will be issued to the original payment method used for the purchase. Please review our return policy for more information on the refund process.',
        },
    ]
    const handleChange = (isExpanded, i) => {
        setExpanded(isExpanded ? i : false);
    };
    return (
        <div className="mx-auto max-w-screen-xl mb-5 paddingBottom" id='accord'>
            <div className='customfaqlist'>
            <div className='text-2xl font-bold mb-5 flex items-center gap-3'><FcMoneyTransfer className='text-6xl' /> <div>Payment <p className='text-sm text-slate-500'>Get help with payment</p></div> </div>
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
            question: 'What are your shipping options?',
            answer: 'We offer several shipping options to cater to different needs. These options may include standard shipping, express shipping, and international shipping. During the checkout process, you can select the shipping method that best suits your preferences and requirements.',
        },
        {
            question: 'How long does it take to process and ship an order?',
            answer: 'We strive to process orders promptly. Generally, it takes 1-3 business days to process an order before it is shipped. Once shipped, the delivery time depends on your location and the shipping method chosen during checkout. You can refer to our shipping policy for estimated delivery times to different destinations.',
        },
        {
            question: 'Do you offer free shipping?',
            answer: 'We may offer free shipping promotions from time to time. These promotions may be based on certain order thresholds or specific campaigns. Please refer to our website or subscribe to our newsletter to stay updated on any ongoing free shipping offers.',
        },
        {
            question: 'Do you ship internationally?',
            answer: 'Yes, we offer international shipping to select countries. During the checkout process, you can enter your location to check if we ship to your country. Please note that additional customs fees or duties may apply, depending on your location, and are the responsibility of the buyer.',
        },
        {
            question: 'Can I track my order?',
            answer: 'Yes, once your order has been shipped, you will receive a shipping confirmation email that includes a tracking number. You can use this number to track the status and location of your package. Simply visit the designated tracking website or enter the tracking number on our websites "Order Tracking" page.',
        },
        {
            question: 'What if I am not available to receive the delivery?',
            answer: 'If you are not available to receive the delivery, the courier may leave a notification card with instructions on how to reschedule delivery or collect the package from a nearby pickup location. Alternatively, the courier may attempt delivery on a different day or time, depending on their policy. It is always best to follow the instructions provided by the courier for successful delivery.',
        },
        {
            question: 'What should I do if my package is lost or damaged during shipping?',
            answer: 'If your package is lost or damaged during shipping, please contact our customer support team immediately. We will work with the shipping carrier to investigate the issue and resolve it as quickly as possible. It may be necessary to provide relevant documentation or photographs of the damaged package for the investigation.',
        },
        {
            question: 'Can I change the shipping address after placing an order?',
            answer: 'Once an order has been placed, the shipping address cannot be changed. We recommend reviewing your shipping information carefully before completing the checkout process to ensure accuracy. However, if you need to make changes, please contact our customer support team as soon as possible, and we will assist you to the best of our abilities.',
        },
        {
            question: 'What happens if my package is returned to the sender?',
            answer: 'If a package is returned to us due to an incorrect address or failed delivery attempts, we will contact you to verify the shipping details and arrange for reshipment. Additional shipping fees may apply in such cases. Please ensure that the shipping address provided is accurate and complete to avoid any delays or return issues.',
        },
        {
            question: 'Do you provide packaging materials that are eco-friendly?',
            answer: 'We are committed to sustainable practices and strive to minimize our environmental impact. Whenever possible, we use packaging materials that are recyclable or made from sustainable materials. We also encourage our customers to reuse or recycle the packaging materials they receive.',
        },
    ]
    const handleChange = (isExpanded, i) => {
        setExpanded(isExpanded ? i : false);
    };
    return (
        <div className="mx-auto max-w-screen-xl mb-5 paddingBottom" id='accord'>
            <div className='customfaqlist'>
            <div className='text-2xl font-bold mb-5 flex items-center gap-3'><TbTruckDelivery className='text-6xl' /> <div>Delivery <p className='text-sm text-slate-500'>Get help with delivery</p></div> </div>
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
            question: 'Can I cancel my order?',
            answer: 'Yes, you can cancel your order, but please note that we process orders quickly. If you wish to cancel, please contact our customer support team as soon as possible. If your order has not yet been processed for shipping, we will cancel it and issue a refund. However, if the order has already been shipped, you may need to initiate a return following our return policy.',
        },
        {
            question: 'What is your return policy?',
            answer: 'Our return policy allows you to return eligible items within a specified timeframe (usually 30 days) from the date of delivery. The items must be unworn, in their original condition, with all tags and labels attached. Please review our return policy on our website for detailed instructions and any specific conditions that may apply.',
        },
        {
            question: 'How do I initiate a return?',
            answer: 'To initiate a return, please contact our customer support team or visit the Returns section on our website. Provide your order details and reason for the return. Our team will guide you through the process and provide you with the necessary instructions, including the return address and any required forms or documentation.',
        },
        {
            question: 'Do I have to pay for return shipping?',
            answer: 'The responsibility for return shipping costs may vary. If the return is due to our error (e.g., wrong item or defective product), we will cover the return shipping costs. However, if the return is due to a change of mind or other non-defective reasons, the customer is typically responsible for the return shipping fees. Please refer to our return policy for specific details.',
        },
        {
            question: 'How long does it take to process a return?',
            answer: 'Once we receive your returned item, we will inspect it to ensure it meets our return policy criteria. After inspection, we will process the return and issue a refund to the original payment method used for the purchase. The refund processing time may vary depending on your bank or payment provider, but it usually takes a few business days.',
        },
        {
            question: 'Can I exchange an item instead of returning it?',
            answer: 'We currently do not offer direct exchanges. If you wish to exchange an item for a different size, color, or style, we recommend initiating a return for the original item and placing a new order for the desired item. This ensures a quicker and smoother process for both parties involved.',
        },
        {
            question: 'What if I receive a defective or incorrect item?',
            answer: 'If you receive a defective or incorrect item, please contact our customer support team immediately. We will work with you to resolve the issue, which may include providing a prepaid return label for the return and sending you the correct item or issuing a refund, depending on the situation.',
        },
        {
            question: 'Can I return a sale or discounted item?',
            answer: 'Our return policy generally applies to sale or discounted items as well. However, please note that certain sale or clearance items may be marked as final sale and are not eligible for returns. This information will be specified in the product description or during the checkout process.',
        },
        {
            question: 'What if I received a damaged package?',
            answer: 'If you receive a damaged package, please document the damage by taking photographs and contact our customer support team immediately. We will work with the shipping carrier to resolve the issue and ensure you receive a replacement or refund for the damaged items.',
        },
        {
            question: 'Can I return an item purchased from a physical store location?',
            answer: 'Generally, returns for items purchased from our online store can only be processed through our online return process. If you purchased an item from a physical store location, please refer to their return policy and contact their customer support for assistance.',
        },
    ]
    const handleChange = (isExpanded, i) => {
        setExpanded(isExpanded ? i : false);
    };
    return (
        <div className="mx-auto max-w-screen-xl mb-5 paddingBottom" id='accord'>
            <div className='customfaqlist'>
            <div className='text-2xl font-bold mb-5 flex items-center gap-3'><FcCancel className='text-6xl' /> <div>Cancellation & Return <p className='text-sm text-slate-500'>Get help with cancellation & return</p></div> </div>
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