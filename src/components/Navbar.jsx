import { navLists } from "../constants"
import { appleImg, searchImg } from "../utils"

const Navbar = () => {

    return (
        <header className=" w-full py-5 sm:px-10 flex justify-between items-center">
            <nav className="  px-10 flex w-full screen-max-width justify-between">
                <img src={appleImg} alt="apple image" />

                <ul className="flex flex-1 justify-center max-sm:hidden ">
                    {navLists.map((nav, index) => (
                        <li key={index} className="px-5 text-md cursor-pointer text-gray hover:text-gold">
                            {nav}
                        </li>
                    ))}
                </ul>
                <article>
                    <img src={searchImg} alt="search Image" width={18} height={18} />
                </article>

            </nav>
        </header>
    )
}

export default Navbar