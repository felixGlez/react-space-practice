import { Link } from 'react-router-dom';
import { MENU_NAVBAR } from '../../constants/menuNavbar';
import {
	StyledLogo,
	StyledLogoContainer,
	StyledMenu,
	StyledMenuContainer
} from './styles';

const MenuNavbar = () => {
	return (
		<StyledMenuContainer>
			<StyledLogoContainer>
				<StyledLogo src={'./assets/shared/logo.svg'} />
			</StyledLogoContainer>
			<StyledMenu>
				{MENU_NAVBAR.map(menuItem => (
					<li key={menuItem.id}>
						<Link to={menuItem.path}>{menuItem.section}</Link>
					</li>
				))}
			</StyledMenu>
		</StyledMenuContainer>
	);
};

export default MenuNavbar;
