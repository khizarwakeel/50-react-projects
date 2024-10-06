import { Link } from 'react-router-dom';
import Wrapper from '../components/shared/wrapper';
import { useEffect, useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

const Slider = ({ url, limit = 5, page }) => {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);

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

    const handlePrevious = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    };

    const handleNext = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    };

    return (
        <section>
            <Wrapper>
                {/* Back to Home */}
                <div className="flex mt-10 hover:text-[#017fa5] duration-300">
                    <Link className="flex items-center" to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                        <span>Back to home</span>
                    </Link>
                </div>

                <div className="my-10 max-w-4xl mx-auto bg-gray-200 rounded-xl shadow-lg">
                    <div className="py-5 px-4">
                        <div className="text-center py-4">
                            <h1 className="md:text-5xl text-2xl">Slider</h1>
                        </div>
                    </div>

                    {/* Loading and Error Messages */}
                    <>
                        {loading && (
                            <div role="status" className="flex justify-center pb-10">
                                <svg
                                    aria-hidden="true"
                                    className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                    viewBox="0 0 100 101"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentFill"
                                    />
                                </svg>
                                <span className="sr-only">Loading...</span>
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
                    {!loading && images.length > 0 && (
                        <div className="relative">
                            <div className="flex justify-center items-center">
                                <BsArrowLeftCircleFill onClick={handlePrevious} className="text-3xl cursor-pointer text-blue-600 mx-2" />

                                {/* Display only current slide */}
                                {images.map((image, index) => (
                                    <div key={image.id} className={`${currentSlide === index ? 'block' : 'hidden'} transition-opacity duration-500`}>
                                        <img
                                            src={image.download_url}
                                            alt={`Slide ${index}`}
                                            className="rounded-xl w-[50rem] h-96 object-cover"
                                        />
                                    </div>
                                ))}

                                <BsArrowRightCircleFill onClick={handleNext} className="text-3xl cursor-pointer text-blue-600 mx-2" />
                            </div>

                            {/* Slide Indicator Dots */}
                            <div className="flex justify-center py-3 space-x-2">
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`w-4 h-4 rounded-full ${currentSlide === index ? 'bg-blue-600' : 'bg-gray-400'} transition-colors duration-300`}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </Wrapper>
        </section>
    );
};

export default Slider;