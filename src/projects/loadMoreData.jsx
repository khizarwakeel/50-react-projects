import { Link } from "react-router-dom";
import Wrapper from "../components/shared/wrapper";
import { useEffect, useState } from "react";
import Button from "../components/shared/Button";

const LoadMoreData = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disableButton, setDisableButton] = useState(false);

    const fetchProducts = async () => {
        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
            const result = await response.json();
            console.log(result)
            if (result && result.products && result.products.length) {
                setProducts((prevData => [...prevData, ...result.products]));
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [count])

    useEffect(() => {
        if (products && products.length === 100) {
            setDisableButton(true)
        }
    }, [products])

    return (
        <section className="md:mb-20 mb-10">
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
                {/* Cards Data */}
                <div className="py-10">
                    <h1 className="md:text-4xl text-2xl text-center">Products List</h1>
                </div>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products && products.length ? (
                        products.map((product, index) => (
                            <div key={`${product.id}-${index}`} className="group">
                                {
                                    loading ? (
                                        <div role="status" className="flex justify-center items-center">
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
                                    ) : (
                                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                            <img
                                                alt={product.title}
                                                src={product.thumbnail}
                                                width={200}
                                                height={200}
                                                className="h-full w-full object-cover object-center group-hover:opacity-75"
                                            />
                                        </div>
                                    )
                                }
                                <h3 className={`mt-4 text-sm text-gray-700`}>{product.title}</h3>
                                <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
                            </div>
                        ))) : null}
                </div>
                {
                    loading === false ? (
                        <div className="md:mt-20 mt-10 flex justify-center">
                            <Button disabled={disableButton} classes={`!rounded-full !px-10 ${disableButton && "text-red-400 cursor-not-allowed hover:text-red-400 hover:bg-white"}`} onClick={() => setCount(count + 1)}>
                                Load More
                            </Button>
                        </div>
                    ) : null
                }
            </Wrapper>
        </section>
    );
};

export default LoadMoreData;