import Wrapper from '../components/shared/wrapper';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';

const Rating = ({ noOfStars = 5 }) => {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [ratingText, setRatingText] = useState("");

    const getRatingText = (currentIndex) => {
        switch (Math.ceil(currentIndex)) {
            case 1:
                return "Worst";
            case 2:
                return "Bad";
            case 3:
                return "Neutral";
            case 4:
                return "Good";
            case 5:
                return "Excellent";
            default:
                return "";
        }
    };

    const handleClick = (getCurrentIndex) => {
        setRating(getCurrentIndex);
        setRatingText(getRatingText(getCurrentIndex));
    };

    const handleMouseEnter = (getCurrentIndex) => {
        setHover(getCurrentIndex);
    };

    const handleMouseLeave = () => {
        setHover(rating);
    };

    const handleMouseMove = (event, starIndex) => {
        const { left, width } = event.target.getBoundingClientRect();
        const x = event.clientX - left;
        const isHalf = x < width / 2;
        const currentRating = isHalf ? starIndex - 0.5 : starIndex;
        setHover(currentRating);
    };

    return (
        <section>
            <Wrapper>
                {/* Back to Home */}
                <div className='flex mt-10'>
                    <Link className='flex items-center hover:text-[#017fa5] duration-300' to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                        <span>Back to home</span>
                    </Link>
                </div>
                <div className='my-10 max-w-4xl mx-auto bg-gray-200 rounded-xl shadow'>
                    <div className='py-5 px-4'>
                        <div className='text-center py-4'>
                            <h1 className='md:text-5xl text-2xl'>Star Rating</h1>
                        </div>
                        <div className='flex justify-center mt-5'>
                            {
                                [...Array(noOfStars)].map((_, index) => {
                                    index += 1;
                                    return (
                                        <div
                                            key={index}
                                            onClick={() => handleClick(hover)}
                                            onMouseEnter={() => handleMouseEnter(index)}
                                            onMouseMove={(event) => handleMouseMove(event, index)}
                                            onMouseLeave={handleMouseLeave}
                                            style={{ cursor: 'pointer', position: 'relative', width: '40px' }}
                                        >
                                            <FaStar
                                                size={40}
                                                className={index <= Math.floor(hover) ? 'text-yellow-500' : 'text-gray-600'}
                                                style={{ position: 'absolute', left: 0 }}
                                            />
                                            {
                                                hover === index - 0.5 && (
                                                    <FaStar
                                                        size={40}
                                                        className="text-yellow-500"
                                                        style={{ position: 'absolute', clipPath: 'inset(0 50% 0 0)', left: 0 }}
                                                    />
                                                )
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='mt-14 text-center md:text-2xl text-xl flex flex-col justify-center gap-2'>
                            {
                                ratingText && (
                                    <>
                                        <h3>You got <span className='font-bold text-yellow-700'>{rating}</span> star rating!</h3>
                                        <h4><span className='font-bold text-yellow-700'>{ratingText}</span> rating!</h4>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
};

export default Rating;