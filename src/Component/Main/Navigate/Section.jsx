

const Section = () => {
    return (
        <div>
            <div>
                <div className="hero">
                    <div className="hero-content flex-col gap-24 lg:flex-row">
                        <img data-aos="fade-right" src="/section.jpg" className="lg:w-[50%] w-full " />
                        <div data-aos="fade-left" className="w-full lg:w-[50%]">
                            <h1 className="text-4xl font-bold">Technology and Electronics</h1>
                            <p className="py-6">The rapid advancements in technology and electronics have not only streamlined everyday tasks but have also facilitated the development of innovative solutions for complex global challenges. From the proliferation of smart home devices to the integration of artificial intelligence in various sectors, the transformative impact of technology continues to redefine the way people live and work, fostering unprecedented levels of interconnectedness and efficiency. As the world embraces a digital future, the integration of technology and electronics is expected to play an increasingly central role in shaping the way societies function and progress.</p>
                            <div className="flex items-center gap-5">
                                <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                                <button className="bg-[#97C33C] lg:px-3 px-1 lg:py-[10px] py-[5px] text-black lg:text-xl text-sm rounded hover:bg-slate-200">Get Started</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section;