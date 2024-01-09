import { getAllPosts } from '../lib/notionAPI';
import Hero from '@/components/Hero/Hero';
import Articles from '@/components/Articles';

export default function Home({ allPosts }) {
	return (
		<>
			<Hero />
			<main className="lg:w-3/4 lg:flex">
				<Articles posts={allPosts} />
				<div className="text-gray-500">sidebar</div>
			</main>
		</>
	);
}

export async function getStaticProps() {
	const allPosts = await getAllPosts();
	return {
		props: {
			allPosts: allPosts,
		},
		revalidate: 60,
	};
}
