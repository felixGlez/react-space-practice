import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Destination from '../pages/Destination';
import Crew from '../pages/Crew';
import Home from '../pages/Home';
import Technology from '../pages/Technology';

const Router = () => {
	return (
		<Routes>
			<Route path={'/'} element={<Layout />}>
				<Route index element={<Home path={'/'} />} />
				<Route
					path={'/destination'}
					element={<Destination path={'/destination'} />}
				/>
				<Route path={'/crew'} element={<Crew path={'/crew'} />} />
				<Route
					path={'/technology'}
					element={<Technology path={'/technology'} />}
				/>
			</Route>
		</Routes>
	);
};

export default Router;
