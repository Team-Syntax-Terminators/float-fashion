"use client"
import Head from 'next/head';
import React from 'react';
import { GiRotaryPhone } from 'react-icons/gi';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { MdLocationPin } from 'react-icons/md';


const Contact = () => {
    return (
        <>
            <Head>
                <title>
                    Contact | Float Fashion
                </title>
            </Head>
            <Hero />
            <Details />
        </>
    );
};

export default Contact;
const Hero = () => {
    return (
        <section
            id="faq"
        >
            <div className="mx-auto max-w-screen-xl px-5 md:px-0 pt-5">
                <div className="md:flex justify-center gap-5 items-center">
                    <div className='md:w-1/2'>
                        <h1 className='text-4xl font-bold py-2' style={{
                            fontFamily: 'sans-serif'
                        }}>
                            Contact Us
                        </h1>
                        <p style={{
                            fontFamily: 'sans-serif'
                        }}>
                            We are here to assist you with any inquiries or concerns you may have. Reach out to us using the contact details below.
                        </p>
                    </div>
                    <div className='flex justify-center'>
                        <img src="/assets/banner/contact.png" alt="" />
                    </div>
                </div>

                <div className='flex justify-center'>
                    <h1 className='text-center my-5 md:w-2/3' style={{
                        fontFamily: 'sans-serif'
                    }}>Our customer support team is available Monday to Friday, from 9:00 AM to 6:00 PM (GMT). We aim to respond to all inquiries within 24 hours.</h1>
                </div>
                <div className="flex flex-wrap md:-mx-3 md:-mb-6 gap-5 justify-center text-center overflow-hidden">
                    <div
                        className="w-full md:w-1/2 lg:w-1/4 mb-6"
                    >
                        <div className="p-12 bg-white shadow rounded">
                            <div className="flex w-12 h-12 mx-auto items-center justify-center text-white font-bold font-heading bg-[#e5642e] rounded-full">
                                <MdLocationPin className='text-2xl' />
                            </div>
                            <h3 className="mb-2 font-bold font-heading text-xl mt-2">
                                Our Main Office
                            </h3>
                            <p className="text-sm text-blueGray-400 leading-relaxed">
                                Jatrabari, Dhaka-1236, Bangladesh
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-6">
                        <div
                            className="p-12 bg-white shadow rounded"
                        >
                            <div className="flex w-12 h-12 mx-auto items-center justify-center text-white font-bold font-heading bg-[#e5642e] rounded-full">
                                <GiRotaryPhone className='text-2xl' />
                            </div>
                            <h3 className="mb-2 font-bold font-heading text-xl mt-2">
                                Phone Number
                            </h3>
                            <p className="text-sm text-blueGray-400 leading-relaxed">
                                <a href="tel: +8801872400423"> +8801872400423</a>
                                <a href="tel: +8801400573702"> +8801400573702</a>
                            </p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-6">
                        <div
                            className="p-12 bg-white shadow rounded"
                        >
                            <div className="flex w-12 h-12 mx-auto items-center justify-center text-white font-bold font-heading bg-[#e5642e] rounded-full">
                                <HiOutlineMailOpen className='text-2xl' />
                            </div>
                            <h3 className="mb-2 font-bold font-heading text-xl mt-2">
                                Email
                            </h3>
                            <p className="text-sm text-blueGray-400 leading-relaxed">
                                <a href="mailto:asifsikder23@gmail.com">asifsikder23@gmail.com</a> <br />
                                <a href="mailto:asifsikder23@gmail.com">writerabutaher@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
const Details = () => {
    return (
        <>
            <div id="Form-details">
                <div className="container mx-auto my-10">
                    <div className="md:grid md:grid-cols-2">
                        <div className='bg-black p-10'>
                            <ContactForm />
                        </div>
                        <div className="relative" style={{ paddingTop: '56.25%' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.0440428565807!2d90.43179927440639!3d23.710121190323193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9cbc59133f5%3A0x1496634384d98b5c!2sJatrabari%20Bus%20Stop!5e0!3m2!1sen!2sbd!4v1688553489999!5m2!1sen!2sbd"
                                width="100%"
                                height="100%"
                                style={{ position: 'absolute', top: 0, left: 0, border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        // Handle form submission here, such as sending data to your server
        console.log(data);
        // Clear form fields after submission
        reset();
    };

    return (
        <>
            <h1 className='text-4xl text-white font-bold pb-5'>Contact info</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    id="filled-basic"
                    label="Name"
                    placeholder="Write Your Full Name"
                    variant="filled"
                    fullWidth
                    InputProps={{
                        classes: {
                            root: 'input',
                            focused: 'focused',
                        },
                    }}
                    sx={{
                        background: '#F5F5F5',
                        '& .input': {
                            '&:after': {
                                borderBottomColor: '#e5642e',
                            },
                        },
                        '& .MuiFilledInput-root.Mui-focused': {
                            color: '#e5642e',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: '#e5642e',
                        },
                    }}
                    {...register('name', { required: '*Name Missing' })}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                />
                <TextField
                    id="filled-basic"
                    label='Email'
                    placeholder="Write Your Email Here"
                    variant="filled"
                    fullWidth
                    className='mt-2'
                    InputProps={{
                        classes: {
                            root: 'input',
                            focused: 'focused',
                        },
                    }}
                    sx={{
                        background: '#F5F5F5',
                        '& .input': {
                            '&:after': {
                                borderBottomColor: '#e5642e',
                            },
                        },
                        '& .MuiFilledInput-root.Mui-focused': {
                            color: '#e5642e',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: '#e5642e',
                        },
                    }}
                    {...register('email', {
                        required: '*Email missing',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address',
                        },
                    })}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />
                <TextField
                    id="filled-basic"
                    label="Subject"
                    placeholder="What is your subject?"
                    variant="filled"
                    fullWidth
                    className='mt-2'
                    InputProps={{
                        classes: {
                            root: 'input',
                            focused: 'focused',
                        },
                    }}
                    sx={{
                        background: '#F5F5F5',
                        '& .input': {
                            '&:after': {
                                borderBottomColor: '#e5642e',
                            },
                        },
                        '& .MuiFilledInput-root.Mui-focused': {
                            color: '#e5642e',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: '#e5642e',
                        },
                    }}
                    {...register('subject', { required: '*subject missing' })}
                    error={!!errors.subject}
                    helperText={errors.subject?.message}
                />
                <TextField
                    id="filled-basic"
                    label="Message"
                    placeholder="What's on your mind ?"
                    variant="filled"
                    multiline
                    rows={4}
                    fullWidth
                    InputProps={{
                        classes: {
                            root: 'input',
                            focused: 'focused',
                        },
                    }}
                    sx={{
                        background: '#F5F5F5',
                        '& .input': {
                            '&:after': {
                                borderBottomColor: '#e5642e',
                            },
                        },
                        '& .MuiFilledInput-root.Mui-focused': {
                            color: '#e5642e',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: '#e5642e',
                        },
                    }}
                    className='mt-2'
                    {...register('message', { required: '*Message missing' })}
                    error={!!errors.message}
                    helperText={errors.message?.message}
                />
                <Button
                    variant="contained"
                    color="info"
                    type="submit"
                    className='w-full bg-white text-black hover:bg-orange-600 hover:text-white mt-2'>
                    Send Message
                </Button>
            </form>
        </>
    );
};