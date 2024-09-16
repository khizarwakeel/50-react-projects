import { Link } from 'react-router-dom';
import Wrapper from '../components/shared/wrapper'

const Slider = () => {

    return (
        <section>
            <Wrapper>
                {/* Back to Home */}
                <div className='flex mt-10 hover:text-[#017fa5] duration-300'>
                    <Link className='flex items-center' to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                        <span>Back to home</span>
                    </Link>
                </div>
                <div className='my-10 max-w-4xl mx-auto bg-gray-200 rounded-xl shadow'>
                    <div className='py-5 px-4'>
                        <div className='text-center py-4'>
                            <h1 className='md:text-5xl text-2xl'>Slider</h1>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
};

export default Slider;