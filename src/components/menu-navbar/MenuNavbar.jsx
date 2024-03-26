import { Link } from 'react-router-dom';
import { MENU_NAVBAR } from '../../constants/menuNavbar';
import {
	StyledBar,
	StyledLogo,
	StyledLogoContainer,
	StyledMenu,
	StyledMenuContainer,
	StyledMenuItem
} from './styles';

const MenuNavbar = () => {
	return (
		<StyledMenuContainer>
			<StyledLogoContainer>
				<StyledLogo src={'./assets/shared/logo.svg'} />
			</StyledLogoContainer>
			<StyledBar />
			<StyledMenu>
				{MENU_NAVBAR.map(menuItem => (
					<StyledMenuItem key={menuItem.id}>
						<Link to={menuItem.path}>{menuItem.section}</Link>
					</StyledMenuItem>
				))}
			</StyledMenu>
		</StyledMenuContainer>
	);
};

export default MenuNavbar;
