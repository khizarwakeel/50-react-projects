import { useState } from "react";
import MenuList from "./menuList";
import { Link } from "react-router-dom";

const MenuItem = ({ item }) => {
    const [displayCurrentMenu, setDisplayCurrentMenu] = useState({});
    const handleToggleChildren = (getCurrentLabel) => {
        setDisplayCurrentMenu({ ...displayCurrentMenu, [getCurrentLabel]: !displayCurrentMenu[getCurrentLabel] })
    }
    return (
        <li>
            <div className="flex items-center gap-3">
                <p>
                    <Link to={item.to}>
                        {item.label}
                    </Link>
                </p>
                {
                    item && item.children && item.children.length ? (
                        <span onClick={() => handleToggleChildren(item.label)} className="cursor-pointer duration-500">
                            {
                                displayCurrentMenu[item.label] ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 font-bold">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                )
                            }
                        </span>
                    ) : null
                }
            </div>
            <div className="ml-2 mt-3 duration-1000">
                {
                    item && item.children && item.children.length > 0 && displayCurrentMenu[item.label] ? (
                        <MenuList list={item.children} />
                    ) : null
                }
            </div>
        </li>
    )
}

export default MenuItem;