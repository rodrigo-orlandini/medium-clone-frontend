import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import dayjs from "dayjs";

import Trending from '../components/Trending';

describe('<Trending />', () => {
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

        render(
            <Trending 
                post={post}
                index={1}
                handlePostClick={handlePostClick}
            />
        );
    });
    
    afterEach(() => {
        cleanup();
    });
    
    it("Trending rendering", () => {
        const trending = screen.getByTestId("trending");
        const id = screen.getByText("02");
        const title = screen.getByText("How to build an REST API with Express");
        const createdAt = screen.getByText(dayjs("2022-11-15T04:09:03.557Z").format("MMM[,] DD"));
        const readingTime = screen.getByText("8 min read");
        const avatar = screen.getByTestId("trending-avatar");
        const writer = screen.getByText("Rodrigo Orlandini");

        expect(trending).toBeInTheDocument();
        expect(id).toBeInTheDocument();
        expect(title).toBeInTheDocument();
        expect(createdAt).toBeInTheDocument();
        expect(readingTime).toBeInTheDocument();
        expect(avatar).toBeInTheDocument();
        expect(writer).toBeInTheDocument();
    });

    it("Trending click", () => {
        const trending = screen.getByTestId("trending");

        fireEvent.click(trending);
        expect(handlePostClick).toBeCalledTimes(1);
    });
});