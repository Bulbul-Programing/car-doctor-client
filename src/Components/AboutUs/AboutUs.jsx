
const AboutUs = () => {
    return (
        <div className="flex my-16">
            <div className="flex w-[50%] px-10">
                <div className="relative">
                    <img className=" rounded-lg" src="https://i.ibb.co/0fYGkt8/person.jpg" alt="" />
                    <img className="w-[55%] absolute -right-20 bottom-24 border-8 rounded-md border-white" src="https://i.ibb.co/94gTgHh/parts.jpg" alt="" />
                </div>
            </div>
            <div className="px-20 w-[50%]">
                <h3 className="text-[#FF3811] text-xl font-bold">About Us</h3>
                <h1 className="text-5xl font-bold my-6">We are qualified & of experience in this field</h1>
                <p className="text-[#737373] my-7">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. </p>
                <p className="text-[#737373] mb-5">the majority have suffered alteration in some form, by injected humour, or randomized words which do not look even slightly believable. </p>
                <button className="btn bg-[#FF3811] font-medium text-white hover:text-black border-0">Get More Info</button>
            </div>
        </div>
    );
};

export default AboutUs;