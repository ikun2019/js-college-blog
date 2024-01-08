import Navbar from '@/components/Layout/Navbar';

const Layout = ({ children }) => {
	return (
		<div className="w-full h-full">
			<Navbar />
			{children}
		</div>
	);
};

export default Layout;
