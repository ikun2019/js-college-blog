import { getAllPosts, getSinglePost } from '../../lib/notionAPI';
import ReactMarkdown from 'react-markdown';

const Post = ({ post }) => {
	return (
		<section className="container">
			<h2>{post.metadata.title}</h2>
			<div>
				<ReactMarkdown children={post.markdown.parent}></ReactMarkdown>
			</div>
		</section>
	);
};

export async function getStaticPaths() {
	const posts = await getAllPosts();
	const slugs = posts.map((post) => {
		return { params: { slug: post.slug } };
	});
	return {
		paths: slugs,
		fallback: 'blocking',
	};
}

export async function getStaticProps(context) {
	const { slug } = context.params;
	const post = await getSinglePost(slug);
	return {
		props: {
			post,
		},
		revalidate: 600,
	};
}

export default Post;
