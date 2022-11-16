import React, { createContext, ReactNode, useState } from 'react';
import axios, { AxiosError } from 'axios';

import { api } from '../lib/axios';

import { WriterProps } from '../models/writer';

export interface AuthContextDataProps {
    writer: WriterProps;
    signUp: (name: string, password: string) => Promise<void>;
    signIn: (name: string, password: string) => Promise<void>;
    isWriterLoading: boolean;
}

interface AuthProviderProps {
    children: ReactNode
}


export const AuthContext = createContext({} as AuthContextDataProps);

export const AuthContextProvider = ({ children }: AuthProviderProps) => {

    const [writer, setWriter] = useState<WriterProps>({} as WriterProps);
    const [isWriterLoading, setIsWriterLoading] = useState(false);

    const signUp = async (name: string, password: string) => {
        try {
            setIsWriterLoading(true);

            await api.post("/signup", {
                name,
                password
            });

            alert("Writer created!");
        } catch(error: AxiosError | unknown) {
            if(axios.isAxiosError(error)) {
                // Here could be implemented a flash message to customize the alert
                alert(error.response?.data.message);
            }
        } finally {
            setIsWriterLoading(false);
        }
    }

    const signIn = async (name: string, password: string) => {
        try {
            setIsWriterLoading(true);

            // Here it's possible get JWT token from response
            const auth = await api.post("/signin", {
                name,
                password
            });

            const response = await api.get("/me", {
                headers: {
                    Authorization: `Bearer ${auth.data.jwt}`
                }
            });

            setWriter(response.data);

            alert('Writer signed in!');
        } catch(error: AxiosError | unknown) {
            // Here could be implemented a flash message to customize the alert
            if(axios.isAxiosError(error)) {
                alert(error.response?.data.message);
            }
        } finally {
            setIsWriterLoading(false);
        }
    }

    return (
        <AuthContext.Provider value={{
            signUp,
            signIn,
            writer,
            isWriterLoading
        }}>
            { children }
        </AuthContext.Provider>
    )
}