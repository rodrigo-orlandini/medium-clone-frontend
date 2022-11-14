import { useState, useEffect } from 'react';
import Image from "next/image";
import dayjs from "dayjs";

import Container from "../../components/Container";

import trendingIcon from '../../assets/trending.svg';

import { PostProps } from "../../models/post";

interface TrendingProps {
    posts: PostProps[];
}

const TrendingPosts = ({ posts }: TrendingProps) => {

    const handlePostClick = (post: PostProps) => {
        // Here, should navigate to post page
        console.log(`Post ${post.title} clicked.`);
    }

    useEffect(() => {
        console.log(posts)
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
                        <div 
                            key={index} 
                            className="flex flex-row font-main mb-8 hover:cursor-pointer" 
                            onClick={() => handlePostClick(post)}
                        >
                            <h2 className='text-3xl text-gray-100 font-bold mr-6'>0{index + 1}</h2>

                            <div>
                                <div className='flex flex-row items-center'>
                                    <Image 
                                        src={post.writer.avatarUrl} 
                                        alt="Writer picture" 
                                        width={24} 
                                        height={24} 
                                        className="rounded-full mr-3"
                                    />
                                    <p className='text-sm text-gray-600'>{post.writer.name}</p>
                                </div>

                                <h2 className='text-base font-bold text-gray-600 my-2'>{post.title}</h2>

                                <div className='flex flex-row items-center text-sm text-gray-500'>
                                    <p>{dayjs(post.createdAt).format("MMM[,] DD")}</p>
                                    <div className='w-1 h-1 rounded-full bg-gray-500 mx-2' />
                                    <p>{post.readingTime} min read</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default TrendingPosts;