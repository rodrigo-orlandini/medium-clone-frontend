import React, { useState, useEffect } from 'react';

import { PostProps } from '../../models/post';
import { TopicProps } from '../../models/topic';
import Post from '../../components/Post';

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
                <Post
                    post={post}
                    topics={topics}
                    index={index}
                    handlePostClick={handlePostClick}
                    key={index}
                />
            ))}
        </section>
    );
}

export default GeneralPosts;