import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className="w-full h-full px-5 py-4 bg-transparent">
			<div className="container flex justify-between items-center">
				<Link href="/" className="text-2xl text-gray-100 font-bold">
					JSC
				</Link>
				<div>
					<ul className="flex items-center text-sm">
						<li className=" hover:text-blue-500 transition-all duration-300">
							<Link
								href="/"
								className={`${styles.header_link_border} block px-4 py-2 text-gray-100`}
							>
								Home
							</Link>
						</li>
						<li className="hover:text-blue-500 transition-all duration-300">
							<Link
								href="/blogs"
								className={`${styles.header_link_border} block px-4 py-2 text-gray-100`}
							>
								Blogs
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
