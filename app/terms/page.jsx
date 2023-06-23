"use client"

import Head from 'next/head';
import React from 'react';
import '../../styles/fashion/_terms.scss'
import Link from 'next/link';
import Lottie from 'react-lottie-player';

const Terms = () => {
    return (
        <>
            <Head>
                <title>Terms & Condition | Float Fashion</title>
            </Head>
            <Hero />
            <Details />
            <CTA />
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
const Details = () => {
    return (
        <>
            <section className="mx-auto max-w-screen-xl" id='details'>
                <div className="lg:grid lg:grid-cols-2 items-center my-12 gap-5">
                    <div id='conBox1'>
                        <h1 className='text-2xl font-bold text-orange-600'>Overview</h1>
                        <p>Welcome to Float Fashion Shop, your ultimate fashion destination. Step into a world of style and discover a curated selection of chic clothing and accessories that will take your fashion game to new heights. Whether you're looking for the perfect outfit for a special occasion or everyday essentials with a twist, we've got you covered. Embrace your individuality, express your personal style, and make a statement with Float Fashion Shop. Get ready to float effortlessly through the world of fashion.</p>
                        <br />
                        <p>Please read these terms and conditions carefully before using the Fashion Float website. By accessing or using our website, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms and conditions, please do not use our website.</p>
                    </div>
                    <div className="flex justify-center">
                        <div className="privacy-box">
                            <h1 className="text-center font-bold text-xl">Table of Contents</h1>
                            <ul className='pl-5'>
                                <li><a className="nav-link" href="#conBox1">Overview</a></li>
                                <li><a className="nav-link" href="#conBox2">Account Registration:</a></li>
                                <li><a className="nav-link" href="#conBox3">Use of the Website</a></li>
                                <li><a className="nav-link" href="#conBox4">Product Information and Pricing:</a></li>
                                <li><a className="nav-link" href="#conBox5">Intellectual Property:</a></li>
                                <li><a className="nav-link" href="#conBox6">Privacy:</a></li>
                                <li><a className="nav-link" href="#conBox7">Limitation of Liability:</a></li>
                                <li><a className="nav-link" href="#conBox8">Modification of Terms:</a></li>
                                <li><a className="nav-link" href="#conBox9">Governing Law:</a></li>

                            </ul>
                        </div>
                    </div>
                </div>
                <br />
                <div id='conBox2'>
                    <div className="lg:grid lg:grid-cols-2 items-center gap-5 px-5 lg:px-0">
                        <div>
                            <h1 className='text-2xl font-bold text-orange-600'>Account Registration:</h1>
                            <ul className='pl-5'>
                                <li>
                                    <p> To use certain features of Fashion Float, you may be required to create an account. You must provide accurate and complete information during the registration process.
                                    </p>
                                </li>
                                <li>

                                    <p>You are solely responsible for maintaining the confidentiality of your account information, including your password. You agree to notify us immediately of any unauthorized use of your account.
                                    </p>
                                </li>
                                <li>

                                    <p>You must be at least 18 years old or have the consent of a parent or guardian to create an account.
                                    </p>
                                </li>
                            </ul> <br />
                            <p>
                                We collect information stored in your social media profile that you authorize us to access when you use your social media profile to execute features on the Sites, such as the ability to log into the Sites using your social media profile credentials.
                            </p> <br />
                            <p>
                                In addition, when you visit our Sites, we may collect certain information by automated means, such as cookies and web beacons, as described in more detail below. The information we may collect by automated means includes:
                            </p>
                        </div>
                        <div>
                            <img src="https://cdn.dribbble.com/users/988448/screenshots/5240042/media/c296ba4addc74658d6ac1d039fb7f082.gif" alt="" />

                        </div>
                    </div>

                </div>
                <div id='conBox3'>
                    <div className="lg:grid lg:grid-cols-2 items-center gap-5 px-5 lg:px-0">
                        <div>
                            <img src="https://cdn.dribbble.com/users/979911/screenshots/4674355/caza_website_animation_strategy.gif" alt="" />

                        </div>
                        <div>

                            <h1 className='text-2xl font-bold text-orange-600'>Use of the Website:</h1>
                            <ul className='pl-5'>
                                <li>
                                    <p> Fashion Float grants you a limited, non-exclusive, non-transferable, and revocable license to access and use the website for personal and non-commercial purposes.
                                    </p>
                                </li>
                                <li>
                                    <p>You agree not to use the website for any unlawful or prohibited purposes. You will not engage in any activity that may disrupt or interfere with the website's functionality.
                                    </p>
                                </li>
                                <li>
                                    <p>Fashion Float reserves the right to suspend or terminate your access to the website at any time without notice if you violate these terms and conditions.
                                    </p>
                                </li>
                            </ul> <br />
                            <p>
                                In the digital age, having a well-designed and functional website is crucial for the success of any online business. For Float Fashion, an emerging online shop, harnessing the power of its website is paramount. In this article, we will explore the various ways in which Float Fashion can utilize its website to drive traffic, enhance customer experience, and boost sales.
                            </p>
                        </div>

                    </div>

                </div>
                <div id='conBox4'>
                    <div className="lg:grid lg:grid-cols-2 items-center gap-5 px-5 lg:px-0">

                        <div>
                            <h1 className='text-2xl font-bold text-orange-600'>Product Information and Pricing:</h1>
                            <ul className='pl-5'>
                                <li>
                                    <p> Fashion Float strives to provide accurate product information, including descriptions, images, and pricing. However, we do not warrant the accuracy, completeness, or reliability of the information displayed on the website.
                                    </p>
                                </li>
                                <li>
                                    <p>Prices are subject to change without notice. We reserve the right to modify or discontinue any product or service without prior notice.
                                    </p>
                                </li>
                                <li>
                                    <p>Fashion Float does not guarantee the availability of any specific product or size. We will make reasonable efforts to fulfill your order but reserve the right to cancel or limit quantities at our discretion.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <img src="https://cdn.dribbble.com/users/790118/screenshots/6971331/media/d1e6cf91d6df3a0ba4dcdffd0b4a05f2.gif" alt="" />

                        </div>

                    </div>

                </div>
                <div id='conBox5'>
                    <div className="lg:grid lg:grid-cols-2 items-center gap-5 px-5 lg:px-0">
                        <div>
                            <img src="https://cdn.dribbble.com/users/480005/screenshots/6178028/ampoule-dribble.gif" alt="" />

                        </div>
                        <div>
                            <h1 className='text-2xl font-bold text-orange-600'>Intellectual Property:</h1>
                            <ul className='pl-5'>
                                <li>
                                    <p> All content on the Fashion Float website, including text, graphics, logos, images, and software, is the property of Fashion Float or its licensors and is protected by copyright and other intellectual property laws.
                                    </p>
                                </li>
                                <li>
                                    <p>You may not reproduce, distribute, modify, transmit, or use any of the content without prior written permission from Fashion Float.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div id='conBox6'>
                    <div className="lg:grid lg:grid-cols-2 items-center gap-5 px-5 lg:px-0">

                        <div>
                            <h1 className='text-2xl font-bold text-orange-600'> Privacy:</h1>
                            <p> Fashion Float values your privacy and handles personal information in accordance with our Privacy Policy. By using the website, you consent to the collection, use, and disclosure of your information as described in our Privacy Policy.
                            </p>
                        </div>
                        <div>
                            <img src="https://cdn.dribbble.com/users/985415/screenshots/4517632/dribbble_ap_02.gif" alt="" />
                        </div>
                    </div>

                </div>
                <div id='conBox7'>
                    <div className="lg:grid lg:grid-cols-2 items-center gap-5 px-5 lg:px-0">
                        <div>
                            <img src="https://cdn.dribbble.com/users/480005/screenshots/6178069/balance-dribble.gif" alt="" />
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold text-orange-600'>Limitation of Liability:</h1>
                            <ul className='pl-5'>
                                <li>
                                    <p> Fashion Float and its affiliates shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use or inability to use the website.
                                    </p>
                                </li>
                                <li>
                                    <p>Fashion Float does not guarantee the accuracy, reliability, or completeness of any information on the website. You acknowledge that any reliance on such information is at your own risk.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div id='conBox8'>
                    <div className="lg:grid lg:grid-cols-2 items-center gap-5 px-5 lg:px-0">
                        <div>
                            <h1 className='text-2xl font-bold text-orange-600'>Modification of Terms:</h1>
                            <p> Fashion Float reserves the right to modify or update these terms and conditions at any time without prior notice. Your continued use of the website after any changes constitutes your acceptance of the modified terms.
                            </p>
                        </div>
                        <div>
                            <img src="https://cdn.dribbble.com/users/130603/screenshots/5691237/ah_chooseplan_anim_dribbble.gif" alt="" />
                        </div>
                    </div>
                </div>
                <div id='conBox9'>
                    <div className="lg:grid lg:grid-cols-2 items-center gap-5 px-5 lg:px-0">
                        <div>
                            <img src="https://cdn.dribbble.com/users/619833/screenshots/3002058/illustration2.gif" alt="" />
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold text-orange-600'>Governing Law:</h1>
                            <p>  These terms and conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which Fashion Float is located.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
const CTA = () => {
    return (
        <>
            <section id="download-2">
                <div className="bg-scroll bg-inner division">
                    <section id="Cta">
                        <div className="text-center">
                            <h2 className="text-white pb-3">Need assistance?</h2>
                            <p className="text-white">If you have any questions or concerns regarding these terms and conditions, please contact us.</p>
                            <div className="displayBtn">
                                <div className="my-3">
                                    <Link href="/faq">
                                        <button type="button" className="btn text-white text-center">Go to FAQ</button>
                                    </Link>
                                </div>
                                <div className="my-3">
                                    <Link href="/contact">
                                        <button type="button" className="btn text-white">Contact Now</button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </section>
                </div>
            </section>

        </>
    )
}