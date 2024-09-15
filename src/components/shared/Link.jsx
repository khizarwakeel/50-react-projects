import { Link } from "react-router-dom";

const LinkComp = ({ children, classes, ...props }) => {
    return (
        <Link {...props} className={`py-2.5 ${classes} md:px-5 px-2 md:text-xs lg:text-base text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-[#017fa5] focus:z-10 focus:ring-4 focus:ring-gray-100 `}>{children}</Link>
    );
};

export default LinkComp;