import React, { useState, useEffect } from 'react';
import Image from "next/image";

import Container from "../../components/Container";

import trendingIcon from '../../assets/trending.svg';

import { PostProps } from "../../models/post";
import Trending from '../../components/Trending';

interface TrendingPostsProps {
    posts: PostProps[];
}

const TrendingPosts = ({ posts }: TrendingPostsProps) => {

    const handlePostClick = (post: PostProps) => {
        // Here, should navigate to post page
        console.log(`Post ${post.title} clicked.`);
    }

    useEffect(() => {
        setTrending(posts.slice(0, 6));
    }, []);

    const [trending, setTrending] = useState<PostProps[]>(posts);

    return (
        <section className="
            bg-white my-16 border-b border-b-gray-100
            max-[1024px]:mt-8 max-[1024px]:mb-6
        ">
            <Container>
                <div className="flex flex-row items-center">
                    <Image src={trendingIcon} alt="Trending on Medium" />
                    <h5 className="font-main font-bold ml-4 text-xs">TRENDING ON MEDIUM</h5>
                </div>

                <div className='
                    grid grid-cols-3 grid-rows-2 gap-x-5 mt-6
                    max-[768px]:grid-cols-2 max-[768px]:grid-rows-3
                    max-[640px]:grid-cols-1 max-[640px]:grid-rows-6
                '>
                    {trending.map((post, index) => (
                        <Trending 
                            post={post}
                            index={index}
                            handlePostClick={handlePostClick}
                            key={index}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default TrendingPosts;