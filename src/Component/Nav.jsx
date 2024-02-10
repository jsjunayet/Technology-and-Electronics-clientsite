import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosHome, IoIosBuild, IoIosPeople, IoIosPaper, IoIosMail } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, useAnimation } from "framer-motion";

const Nav = () => {
    const links = [
        { name: "HOME", path: "/", icon: <IoIosHome /> },
        { name: "SERVICE", path: "/service", icon: <IoIosBuild /> },
        { name: "ABOUT", path: "/about", icon: <IoIosPeople /> },
        { name: "BLOG'S", path: "/blogs", icon: <IoIosPaper /> },
        { name: "CONTACT", path: "/contact", icon: <IoIosMail /> },
    ];
    const [open, setOpen] = useState(false);
    const controls = useAnimation();
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const isScrollingDown = currentScrollPos > prevScrollPos;

            // Adjust this threshold value based on when you want the animation to trigger
            const threshold = 78;

            if (isScrollingDown && currentScrollPos > threshold) {
                // Scrolling down and beyond the threshold, hide the navbar
                controls.start({ opacity: 0, y: -50 });
            } else {
                // Scrolling up or not beyond the threshold, show the navbar
                controls.start({ opacity: 1, y: 0 });
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos, controls]);

    const closeMenu = () => setOpen(false);

    return (
        <motion.div className="shadow-md w-full fixed top-0 left-0 z-50" animate={controls} initial={{ opacity: 1, y: 0 }}>
            <div className="flex items-center justify-between bg-white py-5 md:px-10 px-7">
                <Link to="/" className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
                    <span className="text-3xl text-indigo-600 mr-1 pt-2">
                        <ion-icon name="logo-ionic"></ion-icon>
                    </span>
                    Designer
                </Link>

                <div className="md:hidden">
                    <div
                        onClick={() => setOpen(!open)}
                        className="text-3xl cursor-pointer transition-transform duration-300 transform"
                    >
                        {open ? <FiX onClick={closeMenu} /> : <FiMenu />}
                    </div>
                </div>

                <ul
                    className={`md:flex md:items-center md:pb-0 pb-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-0 opacity-100' : 'hidden md:flex'}`}
                >
                    {links.map((link) => (
                        <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                            <Link to={link.path} className="flex items-center text-black hover:text-gray-400 duration-500" onClick={closeMenu}>
                                <span className="mr-2">{link.icon}</span>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <li className="md:ml-8 text-xl md:my-0 my-7">
                        <button className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-all duration-300">
                            Get Started
                        </button>
                    </li>
                </ul>
            </div>
        </motion.div>
    );
};

export default Nav;
