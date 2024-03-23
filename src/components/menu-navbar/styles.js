import styled from 'styled-components';

const StyledMenuContainer = styled.div`
	width: 100%;
	max-width: 1920px;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyledMenu = styled.ul`
	display: flex;
	width: 70%;
	justify-content: center;
	align-items: center;
	gap: 2rem;
`;

const StyledLogoContainer = styled.div`
	width: 20%;
	justify-content: center;
	align-items: center;
`;

const StyledLogo = styled.img`
	width: 3rem;
`;

export { StyledMenuContainer, StyledLogo, StyledMenu, StyledLogoContainer };