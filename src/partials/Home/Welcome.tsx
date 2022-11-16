import React from "react";
import Image from "next/image";

import balloon from '../../assets/balloon.png';

import Container from "../../components/Container";
import Button from "../../components/Button";

const Welcome = () => {

    return (
        <section className="bg-yellow-500 border-b border-b-gray-600">
            <Container className="flex flex-row justify-between items-center">
                <div className="max-[1024px]:my-12">
                    <h1 className="
                        font-brand font-bold text-8xl
                        max-[640px]:text-7xl
                    ">
                        Stay curious.
                    </h1>

                    <h3 className="
                        font-main text-2xl mt-9 mb-12
                        max-[640px]:text-lg
                    ">
                        Discover stories, thinking and expertise
                        <br />
                        from writers on any topic.
                    </h3>

                    <Button 
                        text="Start reading"
                        onClick={() => console.log("Start reading")}
                    />
                </div>

                <div className="
                    my-8
                    max-[1024px]:hidden
                ">
                    <Image src={balloon} alt="Balloon with typing effect" />
                </div>
            </Container>
        </section>
    );
}

export default Welcome;