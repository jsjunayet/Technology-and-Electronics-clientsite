import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const Update = () => {
    const oldData = useLoaderData();
    const { _id, img, name, brand, type, price, description, rating } = oldData
    console.log(oldData)
    const handleform = (event) => {
        event.preventDefault();
        const form = event.target;
        const img = form.img.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const Myproduct = { img, name, brand, type, price, description, rating }
        form.reset()
        fetch(`https://backend-site-by9c5gtna-junayet-shiblus-projects.vercel.app/update/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Myproduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'yes modifier this data',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    })
                }
            })

    }
    return (
        <div>
            <div className="px-20">
                <p className="text-3xl text-center font-semibold my-5">Please update the form</p>
                <form onSubmit={handleform}>
                    <div className="flex gap-10 w-full">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input defaultValue={img} type="text" placeholder="Image url" name="img" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input defaultValue={name} type="text" placeholder="Name" name="name" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex gap-10 w-full items-center">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <input defaultValue={brand} type="text" placeholder="Brand Name" name="brand" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-1/2 ">
                            <p className="">Types</p>
                            <select name="type" className="select select-info w-full mt-2">
                                <option disabled selected>types</option>
                                <option value='Mobile'>Mobile</option>
                                <option value='Laptop'>Laptop</option>
                                <option value='Computer'>Computer</option>
                                <option value='Monitor'>Monitor</option>
                            </select>
                        </div>

                    </div>
                    <div className="flex gap-10 w-full">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input defaultValue={price} type="text" placeholder="Price" name="price" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text">Short description</span>
                            </label>
                            <input defaultValue={description} type="text" placeholder="description" name="description" className="input input-bordered" required />
                        </div>

                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input defaultValue={rating} type="text" placeholder="Rating" name="rating" className="input input-bordered" required />
                    </div>
                    <button className="w-full bg-red-600 px-4 py-3 text-center my-5 rounded text-xl font-semibold">
                        Submit button</button>
                </form>
            </div>
        </div>
    );
};

export default Update;