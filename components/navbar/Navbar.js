import Link from "next/link";

export default function Navbar(){
    return (
        <nav className="flex justify-between bg-sky-400 px-6 py-3">
            <div>logo</div>
                <ul className="flex gap-x-6">
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/about-us'>About Us</Link></li>
                    <li><Link href='/services'>Services</Link></li>
                    <li><Link href='/contact'>Contact Us</Link></li>
                </ul>
        </nav>
    )
}