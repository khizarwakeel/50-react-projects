import { Link } from "react-router-dom";
import Wrapper from "../components/shared/wrapper";

const LoadMoreData = () => {

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
                {/* Cards Data */}
                <div>
                    
                </div>
            </Wrapper>
        </section>
    );
};

export default LoadMoreData;