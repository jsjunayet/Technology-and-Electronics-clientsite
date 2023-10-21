
import React, { useContext, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import Section from './Navigate/Section';
import Footer from './Navigate/Footer';
import Section1 from './Section1';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const loaders = useLoaderData();
    console.log(loaders)
    const handleget = (name) => {
        fetch(`https://backend-site-by9c5gtna-junayet-shiblus-projects.vercel.app/card/${name}`, {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div className='h-[550px]'>
            <>
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }}
                    speed={600}
                    parallax={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Parallax, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <div
                        slot="container-start"
                        className="parallax-bg opacity-40"
                        style={{
                            'background-image':
                                'url("/bg.jpg")',
                        }}
                        data-swiper-parallax="-23%"
                    ></div>
                    <SwiperSlide className='lg:mt-10 mt-2'>
                        <div className="lg:text-5xl lg:text-bold text-2xl font-semibold text-center" data-swiper-parallax="-300">
                            Technology and Electronics
                        </div>
                        <div className="subtitle text-4xl font-semibold" data-swiper-parallax="-200">
                            Apply
                        </div>
                        <div className="text" data-swiper-parallax="-100">
                            <p className='px-2 lg:px-20 lg:text-xl text-sm'>
                                Apple Inc., founded in 1976 by Steve Jobs, Steve Wozniak, and Ronald Wayne, is a prominent American multinational technology company. Renowned for its cutting-edge consumer electronics and software, Apple has an illustrious product line that includes the iPhone, iPad, Mac, iPod, Apple Watch, and Apple TV. Notable for its sleek design and user-friendly interface, Apple's products have garnered a devoted global following. Its software offerings, such as macOS, iOS, iTunes, Safari, and various productivity suites, are widely acclaimed for their functionality and integration. The company's online services, including the App Store, iTunes Store, Apple Music, and iCloud, further contribute to its comprehensive technological ecosystem. With an unwavering commitment to innovation and quality, Apple has solidified its position as one of the world's leading and most recognizable brands in the technology sector
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='lg:mt-10 mt-2'>
                        <div className="lg:text-5xl lg:text-bold text-2xl font-semibold text-center" data-swiper-parallax="-300">
                            Technology and Electronics
                        </div>
                        <div className="subtitle text-4xl font-semibold" data-swiper-parallax="-200">
                            Samsung
                        </div>
                        <div className="text" data-swiper-parallax="-100">
                            <p className='px-2 lg:px-20 lg:text-xl text-sm'>
                                Samsung, a South Korean multinational conglomerate, is a key player in the global technology industry. Established in 1938, the company has diversified its operations across various sectors, including consumer electronics, mobile devices, semiconductors, and home appliances. Renowned for its innovative and high-quality products, Samsung's extensive range encompasses smartphones, such as the Galaxy series, along with tablets, laptops, and smartwatches. The company's semiconductor division is a leading producer of memory chips and other semiconductor components, playing a crucial role in the global technology supply chain. Samsung's home appliance segment is also widely recognized for its modern design and advanced functionalities. With a strong emphasis on research and development, Samsung continues to be a prominent name in the global tech market, consistently pushing the boundaries of technological advancement.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='lg:text-5xl lg:text-bold text-2xl font-semibold text-center'>
                        <div className="lg:title text-2xl" data-swiper-parallax="-300">
                            Technology and Electronics
                        </div>
                        <div className="subtitle text-4xl font-semibold" data-swiper-parallax="-200">
                            Google
                        </div>
                        <div className="text" data-swiper-parallax="-100">
                            <p className='px-2 lg:px-20 lg:text-xl text-sm'>
                                Google, an American multinational technology company founded in 1998 by Larry Page and Sergey Brin, is a dominant force in the digital landscape. Known primarily for its internet-related services and products, Google has an expansive portfolio that includes the world's most widely used search engine, along with other offerings such as Google Maps, Google Chrome, and Google Workspace. The company's Android operating system is the most popular mobile operating system globally, powering a wide range of smartphones and other devices. Google's innovative approach to technology has led to the development of various hardware products, including the Pixel smartphone, Chromecast, and Google Home smart speakers. Additionally, the company's forays into artificial intelligence and machine learning have significantly impacted the advancement of these fields on a global scale. With its ubiquitous presence and continuous focus on technological innovation, Google remains a central pillar in the modern digital era.
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-2 mt-5'>
                {
                    loaders.map(loader =>
                        <div onClick={() => handleget(loader.name)} key={loader.name}>
                            <Link to={`/card/${loader.name}`} className=' relative' >
                                <img className='h-full  lg:h-72' src={loader.img} alt="" />
                                <p className='text-2xl font-semibold bg-lime-400 px-3 py-2 rounded absolute bottom-6'>{loader.name}</p>
                            </Link>
                        </div>

                    )
                }
            </div>
            <div>
                <Section></Section>
            </div>
            <div>
                <Section1></Section1>
            </div>
            <div className='mt-10'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;