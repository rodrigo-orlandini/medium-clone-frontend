export interface PostProps {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    createdAt: string;
    readingTime: number;
    numOfLike: number;
    content: string;
    writerId: number;
    topicId: number;
    writer: {
        name: string;
        avatarUrl: string;
    }
}