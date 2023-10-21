import { useLoaderData } from "react-router-dom";


const Detail = () => {
    const Detail = useLoaderData()
    console.log(Detail)
    const handleDetalis = () => {
        const { price, description, rating, img, name } = Detail || {}
        console.log(Details)
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-types': 'Application/json'
            },
            body: JSON.stringify(Detail)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <div className="flex justify-center mt-20">
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <img className="mx-auto" src={Detail.img} alt="Shoes" />
                <div className="card-body">
                    <div className="flex gap-20 items-center">
                        <h2 className="card-title">{Detail.name}</h2>
                        <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                className="-mt-0.5 h-5 w-5 text-yellow-700"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            {Detail?.rating}
                        </p>
                    </div>
                    <p>{Detail.description}</p>
                    <div className="card-actions flex justify-between items-center">
                        <p className="text-xl font-semibold">Price : $ {Detail.price}</p>
                        <button onClick={handleDetalis} className="btn btn-primary">Add My Card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;