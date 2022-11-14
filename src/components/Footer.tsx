import Image from "next/image";

import Container from "./Container";

import whiteLogo from "../assets/logo-white.svg";

const Footer = () => {
    return (
        <footer className="h-32 bg-black">
            <Container className="flex flex-col justify-center h-full">
                <Image src={whiteLogo} alt="Medium logo" />

                <nav className="flex pt-2 font-main text-white">
                    {/* Here, should be used a <Link /> imported from Next to setup a navigation between screens */}
                    <p className="mr-6">About</p>
                    <p className="mr-6">Help</p>
                    <p className="mr-6">Terms</p>
                    <p className="mr-6">Privacy</p>
                </nav>
            </Container>
        </footer>   
    );
}

export default Footer;