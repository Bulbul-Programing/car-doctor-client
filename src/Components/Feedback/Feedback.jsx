
const Feedback = () => {
    return (
        <div>
            <div className="text-center space-y-3 my-10">
                <h1 className="text-xl font-bold text-[#FF3811] text-center">Testimonial</h1>
                <h1 className="text-3xl font-bold">What Customer Says</h1>
                <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomized <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="my-10 mx-20 flex justify-between gap-x-7">
                <div className="w-[50%] px-10 shadow-2xl rounded-3xl py-7">
                    <div className="flex justify-between">
                        <div className="flex items-center gap-x-5"> 
                            <img className="w-[80px] rounded-full" src="https://i.ibb.co/8zg2jtN/alexander-hipp-i-EEBWg-Y-6l-A-unsplash.jpg" alt="" />
                            <div>
                                <p className="text-xl font-bold text-[#444444]">Awlad Hossain</p>
                                <div className="badge text-sm text-[#737373] font-medium badge-ghost">Businessman</div>
                            </div>
                        </div>
                        <img className="w-[80px] opacity-25" src="https://i.ibb.co/VvVS6m7/quote.png" alt="" />
                    </div>
                    <p className="w-[80%] text-[#737373] mt-7">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                </div>
                <div className="w-[50%] px-10 shadow-2xl rounded-3xl py-7">
                    <div className="flex justify-between">
                        <div className="flex items-center gap-x-5"> 
                            <img className="w-[80px] rounded-full" src="https://i.ibb.co/F8StFg5/alex-suprun-ZHv-M3-XIOHo-E-unsplash.jpg" alt="" />
                            <div>
                                <p className="text-xl font-bold text-[#444444]">Awlad Hossain</p>
                                <div className="badge text-sm text-[#737373] font-medium badge-ghost">Businessman</div>
                            </div>
                        </div>
                        <img className="w-[80px] opacity-25" src="https://i.ibb.co/VvVS6m7/quote.png" alt="" />
                    </div>
                    <p className="w-[80%] text-[#737373] mt-7">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                </div>
            </div>
        </div>
    );
};
//https://i.ibb.co/VvVS6m7/quote.png
//https://i.ibb.co/8zg2jtN/alexander-hipp-i-EEBWg-Y-6l-A-unsplash.jpg
//https://i.ibb.co/F8StFg5/alex-suprun-ZHv-M3-XIOHo-E-unsplash.jpg

export default Feedback;