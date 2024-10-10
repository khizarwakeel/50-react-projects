import { Link } from 'react-router-dom';
import Wrapper from '../components/shared/wrapper';
import { useEffect, useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

const Slider = ({ url, limit = 5, page }) => {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [imageLoadingStatus, setImageLoadingStatus] = useState({});

    const placeholderImage = "https://via.placeholder.com/800x600?text=Image+is+loading...";

    const fetchImages = async (getUrl) => {
        try {
            setLoading(true);
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();
            if (data) {
                setImages(data);
                setLoading(false);
            }
        } catch (error) {
            setErrorMessage(error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (url !== '') {
            fetchImages(url);
        }
    }, [url]);

    useEffect(() => {
        if (images.length > 0) {
            const interval = setInterval(() => {
                handleNext();
            }, 10000);

            return () => clearInterval(interval);
        }
    }, [currentSlide, images]);

    const handlePrevious = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    };

    const handleNext = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    };

    // Handle image loading status and errors
    const handleImageLoad = (index) => {
        setImageLoadingStatus((prevState) => ({
            ...prevState,
            [index]: true, // Mark this image as loaded
        }));
    };

    const handleImageError = (index, e) => {
        e.target.src = placeholderImage; // Set placeholder if image fails to load
        setImageLoadingStatus((prevState) => ({
            ...prevState,
            [index]: false, // Keep the placeholder for failed images
        }));
    };

    return (
        <section>
            <Wrapper>
                {/* Back to Home */}
                <div className="flex mt-10">
                    <Link className="flex items-center hover:text-[#017fa5] duration-300" to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                        <span>Back to home</span>
                    </Link>
                </div>

                <div className="my-10 py-5 max-w-4xl mx-auto bg-gray-200 rounded-xl shadow-lg">
                    <div className="py-5 px-4">
                        <div className="text-center mb-5">
                            <h1 className="md:text-5xl text-3xl">Slider</h1>
                        </div>
                    </div>

                    {/* Loading and Error Messages */}
                    <>
                        {loading && (
                            <div className="flex justify-center pb-10 px-3">
                                {/* Placeholder image while loading */}
                                <img
                                    src={placeholderImage}
                                    alt="Loading..."
                                    className="!rounded-xl md:w-[50rem] md:h-[25rem] w-full h-80 object-cover"
                                />
                            </div>
                        )}

                        {errorMessage && (
                            <div className="max-w-96 text-center mx-auto pb-5">
                                <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                    <span className="font-medium">Error occurred!</span> {errorMessage}
                                </div>
                            </div>
                        )}
                    </>

                    {/* Slider Logic */}
                    {images.length > 0 && (
                        <div className="relative">
                            <div className="md:flex justify-center items-center">
                                <BsArrowLeftCircleFill onClick={handlePrevious} className="text-3xl md:block hidden cursor-pointer flex-shrink-0 text-[#017fa5] mx-2" />

                                {/* Display only current slide */}
                                {images.map((image, index) => (
                                    <div key={image.id} className={`${currentSlide === index ? 'block' : 'hidden'} px-3 md:px-0 transition-opacity duration-500`}>
                                        <img
                                            src={imageLoadingStatus[index] ? image.download_url : placeholderImage} // Show placeholder until image loads
                                            alt={`Slide ${index}`}
                                            className="rounded-xl md:w-[50rem] md:h-[25rem] w-full h-80 object-cover"
                                            onLoad={() => handleImageLoad(index)} // Mark image as loaded
                                            onError={(e) => handleImageError(index, e)} // Show placeholder if image fails
                                        />
                                    </div>
                                ))}
                                <BsArrowRightCircleFill onClick={handleNext} className="text-3xl cursor-pointer flex-shrink-0 md:block hidden text-[#017fa5] mx-2" />
                            </div>

                            {/* Slide Indicator Dots */}
                            <div className="flex justify-center py-3 space-x-2 mt-5">
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-[#017fa5]' : 'bg-gray-400'} transition-colors duration-300`}
                                    />
                                ))}
                            </div>

                            {/* Mobile Navigation */}
                            <div className="md:hidden block">
                                <div className="flex justify-center pt-5">
                                    <div>
                                        <BsArrowLeftCircleFill onClick={handlePrevious} className="text-3xl md:hidden block cursor-pointer flex-shrink-0 text-[#017fa5] mx-2" />
                                    </div>
                                    <div>
                                        <BsArrowRightCircleFill onClick={handleNext} className="text-3xl cursor-pointer flex-shrink-0 md:hidden block text-[#017fa5] mx-2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </Wrapper>
        </section>
    );
};

export default Slider;
