import { MENU_NAVBAR } from '../../constants/menuNavbar';
import {
	StyledBar,
	StyledLogo,
	StyledLogoContainer,
	StyledMenu,
	StyledMenuContainer,
	StyledMenuItem,
	StyledNavLink
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
						<StyledNavLink to={menuItem.path}>{menuItem.section}</StyledNavLink>
					</StyledMenuItem>
				))}
			</StyledMenu>
		</StyledMenuContainer>
	);
};

export default MenuNavbar;
