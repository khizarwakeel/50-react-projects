import { Link } from "react-router-dom";
import Wrapper from "./wrapper";
import Button from "./Button";

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
                        <span className="ml-3 md:text-2xl text-sm font-semibold text-gray-800">50 React Projects</span>
                    </div>
                    <div>
                        <Link to={'https://khizarwakeel.vercel.app'} target="_blank">
                            <Button>
                            Khizar Wakeel
                            </Button>
                        </Link>
                    </div>
                </div>
            </Wrapper>
        </header>
    );
};

export default Header;