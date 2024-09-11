import { Link } from "react-router-dom";
import Wrapper from "./wrapper";

const Header = () => {
    return (
        <header className="bg-white shadow-md py-4">
            <Wrapper>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Link to={'/'} title="Home">
                            <img
                                src="/assets/reactLogo.png"
                                alt="Logo"
                                className="md:w-16 w-12"
                            />
                        </Link>
                        <span className="ml-3 md:text-2xl font-semibold text-gray-800">React 25 Projects</span>
                    </div>
                    <Link to={'https://khizarwakeel.vercel.app'} target="_blank">
                        <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-[#017fa5] focus:z-10 focus:ring-4 focus:ring-gray-100 ">Khizar Wakeel</button>
                    </Link>
                </div>
            </Wrapper>
        </header>
    );
};

export default Header;