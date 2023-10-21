import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthControl";


import { Link } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";



const Signup = () => {


    const { signup } = useContext(authContext)
    const handleform = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const img = form.img.value;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 6) {

            Swal.fire({
                icon: 'error',
                title: 'Oops Password...',
                text: 'Please Grater than 6 characters',
                footer: '<a href="">Why do I have this issue?</a>'
            })
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            // swal("Error!", "capital letter plz", "error")
            Swal.fire({
                icon: 'error',
                title: 'Oops Password...',
                text: 'Please Capital letter',
                footer: '<a href="">Why do I have this issue?</a>'
            })
            return;
        }
        else if (!/\W|_/g.test(password)) {

            Swal.fire({
                icon: 'error',
                title: 'Oops password...',
                text: 'please Special Characters',
                footer: '<a href="">Why do I have this issue?</a>'
            })
            return;
        }
        signup(email, password)
            .then(result => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'SignUp Succesful',
                    showConfirmButton: false,
                    timer: 2000
                })
                updateProfile(result.user, {
                    displayName: name, photoURL: img
                })
                    .then(() => {
                        console.log('yes')
                    })
                    .catch(() => {
                        console.log('no')
                    })
            })
            .catch(error => {
                console.log(error.message)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops SignUp...',
                    text: `${error.message}`,
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            })
    }


    return (
        <div>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    {/* <div className="text-center lg:text-left grid grid-cols-2 gap-3">
                       
                    </div> */}
                    <div className="card flex-shrink-0 w-96 p-5  shadow-2xl bg-base-100">
                        <form onSubmit={handleform}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="email" name="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="text" placeholder="Image url" name="img" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />

                            </div>
                            <div>

                                <div className="flex justify-between items-center mt-3">
                                    <a href="" className="text-xl">Already account ?</a>
                                    <Link className="text-xl" to={'/login'}>Login</Link>
                                </div>


                            </div>
                            <div className="form-control mt-3">
                                <button className="btn btn-primary">SignUp</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;