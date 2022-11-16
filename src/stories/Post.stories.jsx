import Post from '../components/Post';

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

export default {
    title: "Post",
    component: Post,
    argTypes: {
        index: {
            control: false
        }
    }
}

const Template = (args) => <Post 
    post={args.post} 
    topics={args.topics} 
    index={1} 
    handlePostClick={() => console.log("Storybook Post Click")}
/>;

export const Primary = Template.bind({});
Primary.args = { post, topics };