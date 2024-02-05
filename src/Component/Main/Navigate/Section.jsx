

const Section = () => {
    return (
        <div>
            <div>
                <div className="container">
                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row gap-8">
                            <img src="/section.jpg" className="lg:w-[50%] w-full rounded-xl" alt="Technology and Electronics Image" />
                            <div className="w-full lg:w-[50%]">
                                <h1 className="text-4xl font-bold mb-4">Technology and Electronics</h1>
                                <p className="text-gray-600 mb-8">Experience the future with the latest in technology and electronics. Discover innovative solutions that simplify your life and address global challenges. From smart home devices to artificial intelligence, our advancements are reshaping how societies function and progress.</p>
                                <div className="flex items-center gap-4">
                                    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                                    <button className="bg-green-500 px-3 py-2 text-white text-lg rounded hover:bg-green-600">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;