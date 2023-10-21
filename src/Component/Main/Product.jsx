


const Product = () => {
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
        console.log(Myproduct);
        fetch('https://backend-site-by9c5gtna-junayet-shiblus-projects.vercel.app/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Myproduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

        form.reset()
    }
    return (
        <div className="lg:px-20 px-2">
            <form onSubmit={handleform}>
                <div className="flex lg:gap-10 gap-2 w-full">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" placeholder="Image url" name="img" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                    </div>
                </div>
                <div className="flex lg:gap-10 gap-2 w-full items-center">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <input type="text" placeholder="Brand Name" name="brand" className="input input-bordered" required />
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
                <div className="flex lg:gap-10 gap-2 w-full">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" placeholder="Price" name="price" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Short description</span>
                        </label>
                        <input type="text" placeholder="description" name="description" className="input input-bordered" required />
                    </div>

                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="text" placeholder="Rating" name="rating" className="input input-bordered" required />
                </div>
                <button className="w-full bg-red-600 px-4 py-3 text-center my-5 rounded text-xl font-semibold">
                    Add button</button>
            </form>
        </div>
    );
};

export default Product;