import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home'
import { ErrorPage } from './pages/ErrorPage';
import { Marketplace } from './pages/Marketplace';
import { Profile } from './pages/Profile';
import { Login } from './pages/Login';
import { Root } from './pages/Root';
import { Signup } from './pages/Signup';

function App() {

  const router = createBrowserRouter([
		{
			path: '/',
			element: <Root />,
			errorElement: <ErrorPage />,
			children: [
				{ path: '/', element: <Home /> },
				{ path: '/marketplace', element: <Marketplace /> },
				{ path: '/profile', element: <Profile /> },
				{ path: '/login', element: <Login /> },
				{ path: '/signup', element: <Signup /> },
			],
		},
	]);

  return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App