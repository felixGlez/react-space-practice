import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../pages/Home';
import Destination from '../pages/Destination';
import Crew from '../pages/Crew';

const Router = () => {
	return (
		<Routes>
			<Route path={'/'} element={<Layout />}>
				<Route index element={<Home />} />
				<Route
					path={'/destination'}
					element={<Destination path={'/destination'} />}
				/>
				<Route path={'/crew'} element={<Crew path={'/crew'} />} />
				<Route path={'/technology'} element={<h1>Technology</h1>} />
			</Route>
		</Routes>
	);
};

export default Router;
