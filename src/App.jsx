import { BrowserRouter } from 'react-router-dom';
import { DESTINATION_INFO } from './constants/destinationInfo';
import Router from './router/Router';
import { GlobalStyles } from './styles/global-styles';

const App = () => {
	console.log(DESTINATION_INFO[0].stats[0]);
	return(
		<BrowserRouter>
			<GlobalStyles />
			<Router />
		</BrowserRouter>
	)
};

export default App;
