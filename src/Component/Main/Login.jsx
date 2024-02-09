import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthControl";
import Swal from "sweetalert2";
import { PiEyeSlash } from "react-icons/pi";
import { PiEyeLight } from "react-icons/pi";



const Login = ({ children }) => {
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate()
    const { login, google } = useContext(authContext)
    const location = useLocation()
    const googlehadle = () => {
        console.log('helllo')
        google()
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/')
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login Succesful',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .then(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops Login...',
                    text: `${error.message}`,
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            })
    }
    const handlelogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        login(email, password)
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/')
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login Succesfull',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops Login...',
                    text: `${error.message}`,
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            })

    }

    return (
        <div className=" pt-40">
            <div className="w-full lg:max-w-[520px] mx-auto ">
                <div className="p-8  bg-[#f1faee] border- border-t-4 rounded-xl shadow-2xl dark:bg-gray-800 dark:border-blue-700">
                    <h1 className=" text-3xl  text-center py-2 text-black">Login</h1>
                    <form onSubmit={handlelogin} className=" w-full">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Your E-Mail"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="relative">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text dark:text-white">Password</span>
                                </label>
                                <input
                                    type={showPass ? "text" : "password"}
                                    name="password"
                                    placeholder="Enter Your Password"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="absolute -mt-[42px] right-0 flex items-center pr-3">
                                <p
                                    onClick={() => setShowPass(!showPass)}
                                    className="p-2 focus:outline-none"
                                >
                                    {showPass ? (
                                        <PiEyeLight className="h-5 w-5 text-black dark:text-white" />
                                    ) : (
                                        <PiEyeSlash className="h-5 w-5 text-black dark:text-white" />
                                    )}
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked="checked"
                                        className="checkbox checkbox-sm checkbox-primary"
                                    />
                                    <span className="label-text ml-3 text-base">Remember me</span>
                                </label>
                            </div>
                            <div>
                                <label className="label">
                                    <a
                                        href="#"
                                        className="label-text-alt text-base text-[#4F46E5] link link-hover cursor-pointer"
                                    >
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                        </div>
                        <div className="form-control mx-auto mt-5">
                            <button
                                type="submit"
                                className=" py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                            >
                                Submit
                            </button>
                        </div>
                        <div>
                            <div className="py-6 flex items-center text-xs  before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 text-white/80 dark:before:border-gray-600 dark:after:border-gray-600">
                                Or Continue with
                            </div>
                            <div className="w-full gap-8 flex justify-between">
                                <button onClick={googlehadle} className="btn flex-1  bg-[#4B5563] text-white/90">
                                    Google
                                </button>
                                <button className="btn flex-1 bg-[#4B5563] text-white/90">
                                    Github
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="flex text-white flex-col justify-center items-center">
                    <div className="mt-7 text-center">
                        <h4 className="text-base">
                            <span className="opacity-90 mr-10">Don't have an account yet?</span>{" "}
                            <Link href="/registration">
                                <span className="text-[#4F46E5] cursor-pointer">
                                    Registration
                                </span>
                            </Link>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;