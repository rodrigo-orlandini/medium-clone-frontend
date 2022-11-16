import React, { useState } from 'react';
import Modal from 'react-modal';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { useAuth } from '../../hooks/useAuth';

interface AuthModalProps {
    visibility: boolean;
    setVisibility: (visibility: boolean) => void; 
}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: 20
    },
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.5)"
    }
}

const AuthModal = ({ visibility, setVisibility }: AuthModalProps) => {

    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const { signUp, signIn, isWriterLoading } = useAuth();

    const handleSignUpClick = async () => {
        if(name.trim().length === 0) {
            // Here could be implemented a flash message to customize the alert
            alert("Please, fill the WRITER NAME field");
            return;
        }

        if(password.trim().length === 0) {
            // Here could be implemented a flash message to customize the alert
            alert("Please, fill the PASSWORD field");
            return;
        }
        
        signUp(name, password);
        setName("");
        setPassword("");
    }

    const handleSignInClick = async () => {
        if(name.trim().length === 0) {
            // Here could be implemented a flash message to customize the alert
            alert("Please, fill the WRITER NAME field");
            return;
        }

        if(password.trim().length === 0) {
            // Here could be implemented a flash message to customize the alert
            alert("Please, fill the PASSWORD field");
            return;
        }
            
        signIn(name, password);
        setName("");
        setPassword("");
        setVisibility(false);
    }

    const handleCloseClick = () => {
        setVisibility(false);
    }

    return (
        <Modal
            isOpen={visibility}
            style={customStyles}
        >
            <div className='
                w-[600px] font-main
                max-[768px]:w-[90%] max-[768px]:mx-auto
            '>
                <div className='text-center pt-2 pb-6 border-b border-b-gray-100'>
                    <h5 className='font-bold text-base'>CREATE AN ACCOUNT OR SIGN IN MEDIUM</h5>
                </div>
                    
                {isWriterLoading ? (
                    <div className='flex flex-1 justify-center items-center'>
                        {/* Here could be implemented a visually dynamic loading */}
                        <h5 className='font-bold text-base my-8'>LOADING ...</h5>
                    </div>
                ) : (
                    <div className='
                        w-[400px] mx-auto
                        max-[768px]:w-[90%] max-[768px]:mx-auto
                        max-[425px]:w-[100%] max-[425px]:mx-none
                    '>
                        <h5 className='font-bold text-sm mt-8'>WRITER NAME</h5>
                        <Input 
                            value={name}
                            setValue={setName}
                            type="text"
                        />

                        <h5 className='font-bold text-sm mt-5'>PASSWORD</h5>
                        <Input 
                            value={password}
                            setValue={setPassword}
                            type="password"
                        />

                        <div className='flex flex-row justify-between mt-8 mb-5 w-full mx-auto'>
                            <Button 
                                text='Sign Up'
                                onClick={handleSignUpClick}
                            />

                            <Button 
                                text='Sign In'
                                onClick={handleSignInClick}
                            />

                            <Button 
                                text='X'
                                onClick={handleCloseClick}
                                className="bg-red-500 font-bold"
                            />
                        </div>
                    </div>
                )}
            </div>
        </Modal>
    );
}

export default AuthModal;