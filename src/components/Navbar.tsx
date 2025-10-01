import Container from "./Container";
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-navbar-background-light text-navbar-foreground-light py-4 shadow">
            <Container>
                <div className="flex items-center justify-between">
                    <div>
                        <Link href="/" className="text-2xl font-bold text-primary">Hiplando</Link>
                    </div>
                    <div className="flex items-center space-x-6">
                        <ul className="flex space-x-4">
                            <li className="cursor-pointer">Horses</li>
                            <li className="cursor-pointer">Transport</li>
                            <li className="cursor-pointer">Competitions</li>
                            <li className="cursor-pointer">Services</li>
                            {/* <li className="cursor-pointer">About</li>
                            <li className="cursor-pointer">Contact</li> */}
                        </ul>
                        <Link href="/login" className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition">
                            Login
                        </Link>
                    </div>
                </div>
            </Container>

            
        </nav>
    )
}