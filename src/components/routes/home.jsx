import { Link } from "react-router-dom";
import { projectsData } from "../../data/data";
import Wrapper from "../shared/wrapper";

const Home = () => {
    return (
        <section>
            <Wrapper>
                <div>
                    <h1 className="text-center md:py-10 py-7 lg:text-4xl text-3xl font-bold text-[#017fa5]">50 React Projects</h1>
                </div>
                <div className="grid lg:grid-cols-3 lg:gap-12 md:gap-16 gap-10 md:grid-cols-2 grid-cols-1 md:pb-10 pb-7">
                    {projectsData.map((item, index) => (
                        <div key={index}>
                            <div className="relative group">
                                <Link to={item.link} className="relative block border border-gray-200 rounded-xl shadow-xl">
                                    <img
                                        src={item.thumbnail}
                                        alt={item.title}
                                        title={item.title}
                                        className="rounded-xl duration-500 w-full object-cover"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black bg-opacity-65 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                            </svg>

                                        </div>
                                        <h2 className="text-white text-lg font-semibold">{item.title}</h2>
                                    </div>
                                </Link>
                            </div>
                            <h2 className="text-center mt-4 text-2xl">{item.title}</h2>
                        </div>
                    ))}
                </div>
            </Wrapper>
        </section>
    );
};

export default Home;