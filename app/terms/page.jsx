import Head from 'next/head';
import React from 'react';
import '../../styles/fashion/_terms.scss'

const Terms = () => {
    return (
        <>
            <Head>
                <title>Terms & Condition | Float Fashion</title>
            </Head>
            <Hero/>
        </>
    );
};

export default Terms;

const Hero = () => {
    return (
        <>
            <div id="terms">
                <h1>terms and condition</h1>
            </div>
        </>
    )
}