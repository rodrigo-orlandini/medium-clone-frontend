import { useState, useEffect } from 'react';

import { TopicProps } from "../../models/topic";

interface TopicsSectionProps {
    topics: TopicProps[];
}

const Topics = ({ topics }: TopicsSectionProps) => {

    const [selectedTopics, setSelectedTopics] = useState<number[]>([]);

    const handleTopicClick = (topic: TopicProps) => {
        if(selectedTopics.indexOf(topic.id) === -1) {
            setSelectedTopics((selected) => [...selected, topic.id]);
        } else {
            setSelectedTopics((selected) => selected.filter((item) => item !== topic.id));
        }

        // Here, should be created the filter logic
    }

    return (
        <aside className="
            w-2/5
            max-[1024px]:order-1 max-[1024px]:w-full
        ">
            <h5 className='text-xs font-bold'>DISCOVER MORE OF WHAT MATTERS TO YOU</h5>

            <div className='
                flex flex-row flex-wrap py-5 border-b border-b-gray-100 mb-7
                max-[768px]:justify-center
            '>
                {topics.map((topic) => (
                    <div 
                        key={topic.id} 
                        className={`px-3 py-2 rounded-[3px] mr-4 mb-3 hover:cursor-pointer transition-all
                            ${selectedTopics.indexOf(topic.id) === -1 ?
                            "bg-gray-100 border border-gray-500 text-gray-500 hover:scale-105" :
                            "bg-yellow-500 font-bold text-black hover:scale-95"}
                        `}
                        onClick={() => handleTopicClick(topic)}
                    >
                        <span className="text-sm">{topic.label}</span>
                    </div>
                ))}
            </div>
        </aside>
    );
}

export default Topics;