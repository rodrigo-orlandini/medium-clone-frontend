import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import { HomePartials } from "../partials/Home";

import { api } from "../lib/axios";

import { TopicProps } from '../models/topic';
import { PostProps } from '../models/post';

interface HomeProps {
	posts: PostProps[];
	topics: TopicProps[];
}

const Home = ({ posts, topics }: HomeProps) => {

	return (
		<main>
			<Header />

			<HomePartials.Welcome />

			{posts.length === 0 && (
				<HomePartials.EmptyPosts />
			)}

			{posts.length > 0 && (
				<HomePartials.TrendingPosts posts={posts}/>
			)}

			{posts.length > 6 && (
				<div className="
					bg-white my-16 font-main
					max-[1024px]:my-8
				">
					<Container className="
						flex flex-row
						max-[1024px]:flex-col
					">
						<HomePartials.GeneralPosts posts={posts} topics={topics} />
						<HomePartials.Topics topics={topics} />
					</Container>
				</div>
			)}

			<Footer />
		</main>
	);
}

// The Server Side Generation will fetch data from server according value settled in revalidate property (5 hours)
export const getStaticProps = async () => {
	const response = await api.get("/home");

	return {
		props: {
			posts: response.data.posts,
			topics: response.data.topics
		},
		revalidate: 60 * 60 * 5
	}
}

export default Home;