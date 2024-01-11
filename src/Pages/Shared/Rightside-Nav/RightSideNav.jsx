import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 mb-6'>
                <h2 className="text-2xl mb-3">Login with</h2>
                <button className="btn btn-outline w-full mb-2">
                <FaGoogle></FaGoogle>
                Google
                </button>
                <button className="btn btn-outline w-full ">
                <FaGithub></FaGithub>
                Github
                </button>
            </div>
            <div className='p-4 mb-6'>
                <h2 className="text-2xl mb-3">Find Us on</h2>
                
                <a className='p-4 border rounded-t-lg text-lg gap-3 flex items-center' href=''>
                    <FaFacebook></FaFacebook>
                    Facebook
                </a>
                <a className='p-4 border-x text-lg gap-3 flex items-center' href=''>
                    <FaTwitter></FaTwitter>
                    Twitter
                </a>
                <a className='p-4 border rounded-b-lg text-lg gap-3 flex items-center' href=''>
                    <FaInstagram></FaInstagram>
                    Instagram
                </a>
            </div>
            {/* q zone */}
            <div className='py-2 rounded-lg px-1 mb-6 bg-slate-600'>
                <h2 className="text-2xl text-center mb-3">Q Zone</h2>
                <img src="https://i.ibb.co/hK5zfJ1/qZone1.png" alt="" />
                <img src="https://i.ibb.co/qRKFVCv/qZone2.png" alt="" />
                <img src="https://i.ibb.co/4Vj3W4b/qZone3.png" alt="" />
                <div className='mt-20 text-center absolute ml-3'>
                <h2 className='text-3xl text-white '>
                Create an <br /> Amazing <br /> Newspaper
                </h2>
                <p className='mt-6'>
                    Discover thousands of <br /> options,
                     easy to <br /> customize layouts, one- <br />click to 
                     import demo <br /> and much more.
                    </p>
                    <button className='py-3 px-4 mt-4 bg-red-400 text-white'>Learn More</button>
                </div>
            </div>
            <div>
                <div>
                    <img src="https://i.ibb.co/yR3QLmX/bg.png" alt="" />
                </div>
                <div className=''>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;