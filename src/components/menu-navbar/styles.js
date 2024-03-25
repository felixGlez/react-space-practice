import styled from 'styled-components';

const StyledMenuContainer = styled.div`
	width: 100%;
	max-width: 1440px;
	/* margin-left: auto;
	margin-right: auto; */
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: absolute;
	top: 2.5rem;
	left: 50%;
	transform: translateX(-50%);
`;

const StyledLogoContainer = styled.div`
	width: 20%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledLogo = styled.img`
	width: 3rem;
`;

const StyledBar = styled.div`
	width: 50%;
	height: 1px;
	background-color: #ffffff;
	opacity: 0.2;
`;

const StyledMenu = styled.ul`
	display: flex;
	width: 45%;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	background-color: #ffffff0a;
	padding: 30px 20px;
	color: #ffffff;
	backdrop-filter: blur(5px);
`;

export {
	StyledMenuContainer,
	StyledLogo,
	StyledMenu,
	StyledLogoContainer,
	StyledBar
};
