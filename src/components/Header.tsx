import React, { useState, useEffect } from 'react';
import Image from "next/image";

import logoBlack from '../assets/logo-black.svg';
import avatar from '../assets/avatar.png';

import Button from "./Button";
import Container from "./Container";
import { AuthenticationModalPartials } from '../partials/AuthenticationModal';

import { useAuth } from '../hooks/useAuth';

const Header = () => {

    const [authModalVisibility, setAuthModalVisibility] = useState<boolean>(false);
    const [headerStyles, setHeaderStyles] = useState({
        header: "bg-yellow-500",
        button: "bg-gray-700"
    });

    const handleScroll = () => {
        const position = window.pageYOffset;
        if(position > 600){
            setHeaderStyles({
                header: "bg-white",
                button: "bg-green-500"
            });
        } else {
            setHeaderStyles({
                header: "bg-yellow-500",
                button: "bg-gray-700"
            });
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const { writer } = useAuth();

    const handleSignInClick = () => {
        setAuthModalVisibility(true);
    }

    return (
        <>
            <header className={`${headerStyles.header} h-20 border-b border-b-gray-600 sticky top-0`} data-testid="header">
                <Container className="flex flex-row justify-between items-center h-full">
                    <div>
                        <Image src={logoBlack} alt="Medium logo" data-testid="header-logo" width={160} height={40} />
                    </div>

                    <nav className="flex flex-row font-main text-sm">
                        {/* Here, should be used a <Link /> imported from Next to setup a navigation between screens */}
                        <div className="max-[768px]:hidden flex flex-row items-center">
                            <p className="mr-6 hover:cursor-pointer hover:scale-105">Our story</p>
                            <p className="mr-6 hover:cursor-pointer hover:scale-105">Membership</p>
                            <p className="mr-6 hover:cursor-pointer hover:scale-105">Write</p>

                            {writer?.id ? (
                                <Image 
                                    src={writer.avatarUrl ? writer.avatarUrl : avatar} 
                                    width={24} height={24} 
                                    className="rounded-full mr-6" 
                                    alt='Writer picture'
                                />
                            ) : (
                                <p className="mr-6 hover:cursor-pointer hover:scale-105" onClick={handleSignInClick}>Sign In</p>
                            )}
                        </div>

                        <Button 
                            text="Get started"
                            onClick={() => console.log("Get Started")}
                            className={`${headerStyles.button}`}
                        />
                    </nav>
                </Container>
            </header>

            <AuthenticationModalPartials.Modal 
                visibility={authModalVisibility}
                setVisibility={setAuthModalVisibility}
            />
        </>
    );
}

export default Header;