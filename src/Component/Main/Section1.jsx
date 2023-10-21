

const Section1 = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5">
            <div className="relative flex w-full lg:max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-pink-600 to-[#00589F] bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
                <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
                        Apple
                    </p>
                    <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
                        <span className="mt-2 text-4xl">$</span>900
                        <span className="self-end text-4xl">/mo</span>
                    </h1>
                </div>
                <div className="p-0">
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-3 h-3"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                5 Model Product
                            </p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-3 h-3"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                200+ Item
                            </p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-3 h-3"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                120+ country
                            </p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-3 h-3"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                1 year free updates
                            </p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-3 h-3"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                Life time technical support
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="p-0 mt-12">
                    <button
                        className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-dark="true"
                    >
                        Read more...
                    </button>
                </div>
            </div>
            <div className="relative flex w-full lg:max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-[#97C33C] to-pink-400 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
                <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
                        Samsung
                    </p>
                    <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
                        <span className="mt-2 text-4xl">$</span>300
                        <span className="self-end text-4xl">/mo</span>
                    </h1>
                </div>
                <div className="p-0">
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-3 h-3"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                15 Model Product
                            </p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-3 h-3"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                220+ Item
                            </p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-3 h-3"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                120+ country
                            </p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-3 h-3"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                2 year free updates
                            </p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-3 h-3"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                Life time technical support
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="p-0 mt-12">
                    <button
                        className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-dark="true"
                    >
                        Read more...
                    </button>
                </div>
            </div>
            <div className="relative flex w-full lg:marker:max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-[#00589F] to-pink-400 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
                <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
                        Intel
                    </p>
                    <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
                        <span className="mt-2 text-4xl">$</span>190
                        <span className="self-end text-4xl">/mo</span>
                    </h1>
                </div>
                <div className="p-0">
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-3 h-3"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                25 Model Product
                            </p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-3 h-3"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                210+ Item
                            </p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-3 h-3"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                50+ country
                            </p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-3 h-3"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                1 year free updates
                            </p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-3 h-3"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                Life time technical support
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="p-0 mt-12">
                    <button
                        className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-dark="true"
                    >
                        Read more...
                    </button>
                </div>
            </div>
            <div className="relative flex w-full lg:max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-pink-600 to-[#97C33C] bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
                <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
                        Sony
                    </p>
                    <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
                        <span className="mt-2 text-4xl">$</span>280
                        <span className="self-end text-4xl">/mo</span>
                    </h1>
                </div>
                <div className="p-0">
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-3 h-3"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                35 Model Product
                            </p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-3 h-3"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                240+ Item
                            </p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-3 h-3"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                110+ country
                            </p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-3 h-3"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                3 year free updates
                            </p>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="w-3 h-3"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                Life time technical support
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="p-0 mt-12">
                    <button
                        className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-dark="true"
                    >
                        Read more...
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Section1;