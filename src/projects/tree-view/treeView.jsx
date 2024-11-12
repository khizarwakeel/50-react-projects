import { Link, useParams } from "react-router-dom"
import Wrapper from '../../components/shared/wrapper'
import MenuList from "./menuList";

const TreeView = ({ menus = [] }) => {
    const { treePage } = useParams();
    let fullWord;

    if (treePage) {
        let treePageAlt = treePage.charAt(0).toUpperCase();
        let restPageWord = treePage.slice(1);
        fullWord = treePageAlt + restPageWord;
    }
    return (
        <section className="md:mb-20 mb-10">
            <Wrapper>
                {/* Back to Home */}
                <div className="flex mt-10">
                    <Link className="flex items-center hover:text-[#017fa5] duration-300" to="/">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 mr-2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                        <span>Back to home</span>
                    </Link>
                </div>
                {/* Main Data */}
                <div className="text-center mt-10">
                    <h1 className="md:text-4xl text-2xl">Tree View Data Menu</h1>
                </div>
                <div className="flex items-center md:mt-14 mt-8">
                    <div className="bg-gray-300 md:w-80 h-screen md:max-h-[35rem] w-full md:px-6 px-4 pb-5">
                        <h2 className="md:text-center pb-8 md:text-2xl text-xl  pt-10">Sidebar Menu</h2>
                        <div className="mb-10 duration-1000">
                            <MenuList list={menus} />
                        </div>
                    </div>
                    <div className="bg-gray-200 h-screen md:max-h-[35rem] w-full">
                        {
                            treePage && (
                                <div className="text-center mt-10">
                                    <h1 className="md:text-2xl text-xl">{fullWord} Page</h1>
                                </div>
                            )
                        }
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default TreeView;