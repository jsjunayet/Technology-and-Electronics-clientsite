
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import Section from './Navigate/Section';
import Footer from './Navigate/Footer';
import Section1 from './Section1';
import { Link, useLoaderData } from 'react-router-dom';
import Hero from '../Hero';

const Home = () => {
    const loaders = useLoaderData();
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
        <div className='pt-20'>
            <Hero></Hero>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mt-5'>
                {loaders.map(loader =>
                    <div className='bg-base-200 h-full p-5 shadow-xl rounded relative overflow-hidden transition-transform transform hover:scale-105 group transition-all duration-300' onClick={() => handleget(loader.name)} key={loader.name} style={{
                        borderImage: 'linear-gradient(45deg, #ff00cc, #3333ff, #00ccff) 1',
                        borderImageSlice: '1',
                        borderRadius: '16px',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                    }}>
                        <Link to={`/card/${loader.name}`} className='block h-full relative overflow-hidden'>
                            <img className='h-full lg:h-72 rounded-xl' src={loader.img} alt="" />
                            <p className='text-2xl font-semibold px-3 py-2 text-white rounded absolute bottom-6 left-0 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity'>
                                {loader.name}
                            </p>
                        </Link>
                    </div>
                )}
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