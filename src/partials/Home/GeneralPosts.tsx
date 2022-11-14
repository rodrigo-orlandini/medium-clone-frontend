import { useState, useEffect } from 'react';
import Image from 'next/image';
import dayjs from 'dayjs';

import { PostProps } from '../../models/post';
import { TopicProps } from '../../models/topic';

interface GeneralProps {
    posts: PostProps[];
    topics: TopicProps[];
}

const GeneralPosts = ({ posts, topics }: GeneralProps) => {

    const [generalPosts, setGeneralPosts] = useState(posts);

    const handlePostClick = (post: PostProps) => {
        // Here, should navigate to post page
        console.log(`Post ${post.title} clicked.`);
    }

    useEffect(() => {
        setGeneralPosts(posts.slice(6, posts.length));
    }, []);

    return (
        <section className="
            w-3/5
            max-[1024px]:order-2 max-[1024px]:w-full
        ">
            {generalPosts.map((post, index) => (
                <div 
                    className='
                        font-main mb-10 hover:cursor-pointer flex flex-row mr-14 justify-between items-center
                        max-[1024px]:mr-0
                    '
                    onClick={() => handlePostClick(post)}
                >
                    <div 
                        key={index} 
                    >
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

                        <h2 className='text-2xl font-bold text-gray-600 my-2'>{post.title}</h2>

                        <p className='text-base text-gray-500 mb-2'>{post.description}</p>

                        <div className='flex flex-row items-center text-sm text-gray-500'>
                            <p>{dayjs(post.createdAt).format("MMM[,] DD")}</p>
                            <div className='w-1 h-1 rounded-full bg-gray-500 mx-2' />
                            <p>{post.readingTime} min read</p>
                            <div className='w-1 h-1 rounded-full bg-gray-500 mx-2' />

                            <div className="bg-gray-200 px-2 py-1 rounded-full">
                                <span className="text-gray-500">{topics.filter((topic) => topic.id === post.topicId)[0].label}</span>
                            </div>
                        </div>
                    </div>

                    <Image 
                        src={post.imageUrl} 
                        alt="Post image" 
                        width={200} 
                        height={134}
                        className="
                            ml-5
                            max-[768px]:w-[100px] max-[768px]:h-[100px]
                            max-[425px]:hidden
                        "
                    />
                </div>
            ))}
        </section>
    );
}

export default GeneralPosts;