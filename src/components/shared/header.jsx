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
                        <h1 className="md:text-xl text text-gray-700">Khizar Wakeel</h1>
                    </Link>
                </div>
            </Wrapper>
        </header>
    );
};

export default Header;