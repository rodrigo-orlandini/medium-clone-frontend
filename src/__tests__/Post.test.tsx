import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import dayjs from "dayjs";

import Post from '../components/Post';

describe('<Post />', () => {
    const handlePostClick = jest.fn();
    beforeEach(() => {
        const post = {
            id: 1,
            title: "How to build an REST API with Express",
            description: "Building a CRUD with NodeJS and Express, plus introducing some util libraries.",
            imageUrl: "https://th.bing.com/th/id/OIP.qBokozZV0hRf1unYL8x7iQHaE7?pid=ImgDet&rs=1",
            createdAt: "2022-11-15T04:09:03.557Z",
            readingTime: 8,
            numOfLike: 23,
            content: "",
            writerId: 1,
            topicId: 1,
            writer: {
                name: "Rodrigo Orlandini",
                avatarUrl: "https://github.com/rodrigo-orlandini.png"
            }
        };
        const topics = [{
            id: 1,
            label: "Programming"
        }];

        render(
            <Post 
                post={post}
                topics={topics}
                index={1}
                handlePostClick={handlePostClick}
            />
        );
    });
    
    afterEach(() => {
        cleanup();
    });
    
    it("Post rendering", () => {
        const post = screen.getByTestId("post");
        const title = screen.getByText("How to build an REST API with Express");
        const description = screen.getByText("Building a CRUD with NodeJS and Express, plus introducing some util libraries.");
        const createdAt = screen.getByText(dayjs("2022-11-15T04:09:03.557Z").format("MMM[,] DD"));
        const readingTime = screen.getByText("8 min read");
        const label = screen.getByText("Programming");
        const avatar = screen.getByTestId("post-avatar");
        const image = screen.getByTestId("post-image");
        const writer = screen.getByText("Rodrigo Orlandini");

        expect(post).toBeInTheDocument();
        expect(title).toBeInTheDocument();
        expect(description).toBeInTheDocument();
        expect(createdAt).toBeInTheDocument();
        expect(readingTime).toBeInTheDocument();
        expect(label).toBeInTheDocument();
        expect(avatar).toBeInTheDocument();
        expect(image).toBeInTheDocument();
        expect(writer).toBeInTheDocument();
    });

    it("Post click", () => {
        const post = screen.getByTestId("post");

        fireEvent.click(post);
        expect(handlePostClick).toBeCalledTimes(1);
    });
});