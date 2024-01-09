import React from 'react';
import Image from 'next/image';

const Articles = ({ posts }) => {
	return (
		<section className="container mx-auto px-5 md:grid md:grid-cols-2 md:gap-3">
			{posts.map((post) => (
				<article
					key={post.tags}
					className="mt-10 bg-gray-800 p-3 rounded-lg shadow-lg hover:translate-y-1 transition-all duration-300 grid grid-rows-2"
				>
					<div className="relative bg-black inline-block">
						<Image
							src={post.image}
							alt="post.title"
							width={100}
							height={100}
							className="absolute inset-0 w-full h-full object-cover block opacity-70 rounded-lg"
							loading="lazy"
						/>
					</div>
					<div className="mt-5">
						<h3 className="font-bold text-gray-100">{post.title}</h3>
						<hr className="border-gray-500 my-2" />
						<p className="text-gray-100">{post.description}</p>
						<div className="my-5">
							<span className="text-gray-100">{post.date}</span>
							<span className="text-gray-500"> | </span>
							{post.tags.map((tag) => (
								<span
									className="text-gray-100 inline-block bg-blue-900 px-2 rounded-full"
									key={tag}
								>
									{tag}
								</span>
							))}
						</div>
					</div>
				</article>
			))}
		</section>
	);
};

export default Articles;
