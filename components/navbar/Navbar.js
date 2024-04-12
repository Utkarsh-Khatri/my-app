import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
    return (
        <nav className="flex justify-between items-center bg-sky-400 px-6 py-3">
                <Image src='/logo.svg' height={60} width={60} className="rounded-full"/>
                <ul className="flex gap-x-6 text-2xl text-white ">
                    <li className="hover:text-orange-300 transition-colors duration-200"><Link href='/'>Home</Link></li>
                    <li className="hover:text-orange-300 transition-colors duration-200"><Link href='/about-us'>About Us</Link></li>
                    <li className="hover:text-orange-300 transition-colors duration-200"><Link href='/services'>Services</Link></li>
                    <li className="hover:text-orange-300 transition-colors duration-200"><Link href='/contact'>Contact Us</Link></li>
                </ul>
        </nav>
    )
}