import Head from 'next/head';
import React from 'react';
import '../../styles/fashion/_privacy.scss'

const Privacy = () => {
    return (
        <>
            <Head>
                <title>Privacy & Policy | Float Fashion</title>
            </Head>
            <Hero />
            <Details />
        </>
    );
};
export default Privacy;
const Hero = () => {
    return (
        <section id='privacy' className='privacy'>
            <div className="mx-auto max-w-screen-xl" style={{
                margin: 'auto',
                position: 'relative'
            }}>
                <h1> Privacy & Policy <span className='text-orange-600'>🔑 </span> </h1>
                <p className='md:w-2/5'>This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information.</p>
            </div>
        </section>
    );
};
const Details = () => {
    const details = [
      {
        _id: 1,
        title: 'Information Collection',
        description: [
          {
            list1: 'Personal Information: We may collect personal information such as your name, email address, shipping address, and payment details when you create an account, place an order, or subscribe to our newsletter. This information is necessary to fulfill your orders and provide a personalized shopping experience.',
          },
          {
            list2: 'Non-Personal Information: We may collect non-personal information such as your IP address, browser type, operating system, and website usage data. This information is collected to improve our website performance, enhance user experience, and analyze trends.',
          },
        ],
      },
    ];
  
    return (
      <section className="bg-gray-700" id="privacyDetails">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex justify-center py-10">
            <h1 className="text-center w-11/12 text-white" style={{ fontFamily: 'revert' }}>
              At Fashion Float, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and disclose the information you provide to us when using our website. By using Fashion Float, you consent to the practices described in this policy.
            </h1>
          </div>
          <div id="cards">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {details.map((info) => {
                const { _id, title, description } = info;
                return (
                  <div key={_id} className="p-10 card">
                    <h1 className="font-bold text-xl text-center pb-5">
                      {title}
                    </h1>
                    <ul>
                      {description.map((item, index) => {
                        const listItem = Object.values(item)[0];
                        return (
                          <li key={index} className="list-disc" style={{ listStyleType: 'disc' }}>
                            {listItem}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  
  
  
  