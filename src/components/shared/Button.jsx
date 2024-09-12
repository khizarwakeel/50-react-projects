const Button = ({ children, ...props }) => {
    return (
        <button {...props} type="button" className="py-2.5 md:px-5 px-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-[#017fa5] focus:z-10 focus:ring-4 focus:ring-gray-100 ">{children}</button>
    );
};

export default Button;