import { Outlet } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export const Root = () => {
	return (
		<>
			<Navigation />
			<Outlet />
			<Footer />
		</>
	);
};
