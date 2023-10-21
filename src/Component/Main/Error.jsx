import Main from "./Main";


const Error = () => {
    return (

        <div className="">
            <Main></Main>
            <div className="flex justify-center items-center">
                <div>
                    <p className="text-3xl my-5 font-bold">Oops there is not content</p>
                    <img className="w-96" src="/error.jpg" alt="" />
                </div>
            </div>
        </div>


    );
};

export default Error;