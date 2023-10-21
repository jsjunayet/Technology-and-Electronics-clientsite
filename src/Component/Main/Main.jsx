
import { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthControl";
import Swal from "sweetalert2";




const Main = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const theme = isDarkMode ? 'dark' : 'light';

    const { user, logout } = useContext(authContext);
    const handleLogout = () => {
        logout()
            .then(result => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'LogOut Succesful',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops LogOut...',
                    text: `${error.message}`,
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            })
    }
    console.log(user)
    return (
        <div>
            <div>
                <div className=" max-w-7xl mx-auto">
                    <div className="navbar bg-[#D0D9E5]">
                        <div className="flex-1">
                            <img src="/logo.jpg" alt="" />
                        </div>

                        <div className="lg:flex gap-10">
                            <div className="">
                                <Link to={'/'} className="text-2xl ml-10 font-semibold">Home</Link>
                                <Link to={'/product'} className="text-2xl ml-10 font-semibold">Add Product</Link>
                                <Link to={'/card'} className="text-2xl ml-10 font-semibold">My Card</Link>

                            </div>

                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        {user ?
                                            <img src={user?.photoURL} /> :
                                            <img src="/profile.png" />
                                        }
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3  p-2 shadow menu  dropdown-content bg-base-100 rounded-box w-64 z-10">
                                    <li>

                                        {
                                            user ? <span className="">Name : {user?.displayName} </span> :
                                                <span className=""> Name : </span>
                                        }

                                        {user ? <a className="justify-between whitespace-nowrap">Email : {user?.email}</a> :
                                            <a className="justify-between">Email : </a>
                                        }

                                    </li>
                                </ul>
                            </div>
                            <div>
                                {
                                    user ? <Link onClick={handleLogout} className="text-xl font-semibold bg-[#004B91] text-white px-2 py-1 rounded">LogOut</Link> :
                                        <Link to={'/login'} className="text-2xl font-semibold bg-[#004B91]] text-black px-2 py-1 rounded">Login</Link>
                                }

                            </div>
                            <button onClick={toggleTheme} className="text-xl  bg-[#98C53B] text-white px-2 py-1 rounded">
                                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                            </button>
                        </div>
                    </div>


                </div>
                <div className="max-w-7xl mx-auto">
                    <Outlet></Outlet>
                </div>
                <div className="my-10">

                </div>
            </div>

        </div>

    );
};

export default Main;