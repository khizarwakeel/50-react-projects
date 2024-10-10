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
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        alt={product.title}
                                        src={product.thumbnail}
                                        width={product.dimensions.width}
                                        height={product.dimensions.height}
                                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                                    />
                                </div>
                                <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
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