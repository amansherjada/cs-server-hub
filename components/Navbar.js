import Link from 'next/link';
import React from 'react'

const Navbar = () => {
    return (
        <nav className="h-16 bg-black flex justify-between px-3 items-center text-white">
            <div className="logo font-bold text-3xl cursor-pointer">
                <Link href={"/"}>CS Server Hub</Link>
            </div>
            <ul className="flex gap-16 justify-center item-center">
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/about"}>About</Link></li>
                <li><Link href={"/contact"}>Contact Us</Link></li>
                <li>
                    <Link href="https://github.com/amansherjada" target="_blank">
                        <button className="bg-[#474747] rounded-lg shadow-lg py-1 px-3 font-bold">GitHub</button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar
