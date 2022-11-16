import React from "react";

import Image from "next/image";
import dayjs from "dayjs";

import { PostProps } from '../models/post';

interface TrendingProps {
    post: PostProps;
    index: number;
    handlePostClick: (post: PostProps) => void;
}

const Trending = ({ post, index, handlePostClick  }: TrendingProps) => {
    return (
        <div 
            className="flex flex-row font-main mb-8 hover:cursor-pointer" 
            onClick={() => handlePostClick(post)}
            data-testid="trending"
            key={index}
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
                        data-testid="trending-avatar"
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
    );
}

export default Trending;