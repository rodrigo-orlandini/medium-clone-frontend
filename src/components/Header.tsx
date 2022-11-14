import Image from "next/image";

import logoBlack from '../assets/logo-black.svg';

import Button from "./Button";
import Container from "./Container";

const Header = () => {
    return (
        <header className="bg-yellow-500 h-20 border-b border-b-gray-600">
            <Container className="flex flex-row justify-between items-center h-full">
                <div>
                    <Image src={logoBlack} alt="Medium logo" />
                </div>

                <nav className="flex flex-row font-main text-sm">
                    {/* Here, should be used a <Link /> imported from Next to setup a navigation between screens */}
                    <div className="max-[768px]:hidden flex flex-row items-center">
                        <p className="mr-6 hover:cursor-pointer hover:scale-105">Our story</p>
                        <p className="mr-6 hover:cursor-pointer hover:scale-105">Membership</p>
                        <p className="mr-6 hover:cursor-pointer hover:scale-105">Write</p>
                        <p className="mr-6 hover:cursor-pointer hover:scale-105">Sign In</p>
                    </div>

                    <Button 
                        text="Get started"
                        onClick={() => console.log("Get Started")}
                    />
                </nav>
            </Container>
        </header>
    );
}

export default Header;