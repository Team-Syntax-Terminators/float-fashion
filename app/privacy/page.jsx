import Head from 'next/head';
import React from 'react';
import '../../styles/fashion/_privacy.scss'
import CTA from '@/components/Cta/cta';

const Privacy = () => {
  return (
    <>
      <Head>
        <title>Privacy & Policy | Float Fashion</title>
      </Head>
      <Hero />
      <Details />
      <CTA/>
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
    {
      _id: 2,
      title: 'Information Use',
      description: [
        {
          list1: 'We use your personal information to process and fulfill your orders, communicate with you regarding your purchases, provide customer support, and deliver relevant updates and promotional offers.',
        },
        {
          list2: 'Non-personal information is used to analyze trends, track website usage, and improve our websites functionality and performance. This information may also be shared with third-party analytics services to help us better understand our users preferences and behavior.',
        },
      ],
    },
    {
      _id: 3,
      title: 'Information Sharing',
      description: [
        {
          list1: 'We do not sell, trade, or rent your personal information to third parties for marketing purposes without your consent. However, we may share your information with trusted third-party service providers who assist us in operating our website, conducting business, and providing services to you (e.g., payment processors, shipping companies).',
        },
        {
          list2: 'We may disclose your information when required by law, to protect our rights, or to comply with a legal process.',
        },
      ],
    },
    {
      _id: 4,
      title: 'Data Security',
      description: [
        {
          list1: 'We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. We use encryption, secure servers, and strict access controls to safeguard your data.',
        },
        {
          list2: 'While we take reasonable precautions to protect your information, no data transmission over the internet or electronic storage is completely secure. We cannot guarantee the absolute security of your information.',
        },
      ],
    },
    {
      _id: 5,
      title: 'Third-Party Links',
      description: [
        {
          list1: 'Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or the content of those websites. We encourage you to review the privacy policies of third-party websites before providing any personal information.',
        },
      ],
    },
    {
      _id: 6,
      title: 'Updates to the Privacy Policy',
      description: [
        {
          list1: 'We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website or through other communication methods.',
        },
      ],
    },
  ];

  return (
    <section id="privacyDetails">
      <div className="mx-auto max-w-screen-xl">
        <div className="flex justify-center py-10 my-10 bg-gray-700">
          <h1 className="text-center w-11/12 text-white" style={{ fontFamily: 'revert' }}>
            At Fashion Float, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and disclose the information you provide to us when using our website. By using Fashion Float, you consent to the practices described in this policy.
          </h1>
        </div>
        <div id="cards">
          <div className="mb-10">
            {details.map((info) => {
              const { _id, title, description } = info;
              return (
                <div key={_id} className="px-10 py-5 card">
                 <div>
                 <h1 className="font-bold text-xl pb-2 mb-3">
                    {title}
                  </h1>
                 </div>
                  <ul>
                    {description.map((item, index) => {
                      const listItem = Object.values(item)[0];
                      return (
                        <li key={index} className="list-disc">
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




