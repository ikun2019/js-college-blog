import Image from 'next/image';

const Hero = () => {
	return (
		<div className="h-full bg-hero-image bg-cover bg-center py-2 before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-black before:opacity-20">
			<div className="container items-center mx-auto my-8 grid md:grid-cols-2 md:gap-3">
				<div className="px-5">
					<h1 className="text-2xl font-bold text-gray-100">個人開発のための技術ブログ</h1>
					<p className="text-gray-100 py-4">
						Web開発に必要な「環境構築・開発・運用・集客」までの情報を提供します。
					</p>
				</div>
				<div className="text-gray-100 px-5">
					<ul className="grid grid-cols-2 bg-white rounded-lg bg-opacity-20">
						<li className="block p-3 mx-auto">
							<Image src="/logo-icon/js.svg" alt="JavaScriptアイコン" width={60} height={60} />
						</li>
						<li className="block p-3 mx-auto">
							<Image src="/logo-icon/node.svg" alt="NodeJSアイコン" width={60} height={60} />
						</li>
						<li className="block p-3 mx-auto">
							<Image src="/logo-icon/react.svg" alt="ReactJSアイコン" width={60} height={60} />
						</li>
						<li className="block p-3 mx-auto">
							<Image src="/logo-icon/next.svg" alt="NextJSアイコン" width={60} height={60} />
						</li>
						<li className="block p-3 mx-auto">
							<Image src="/logo-icon/docker.svg" alt="Dockerアイコン" width={60} height={60} />
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Hero;
