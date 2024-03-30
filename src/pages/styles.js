import styled from 'styled-components';
import { FONTS } from '../styles/fonts';

// ---------HOME--------
const StyledHomeInfoContainer = styled.div`
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
	padding-left: 5rem;
`;

const StyledHomeBtnContainer = styled(StyledHomeInfoContainer)`
	align-items: center;
	padding-top: 10rem;
`;

const StyledHomeBtn = styled.div`
	position: relative;
	width: 17.125rem;
	height: 17.125rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #ffffff;
	border-radius: 50%;
	cursor: pointer;
	transition: 0.3s;

	&::after {
		content: '';
		width: 0;
		height: 0;
		background-color: rgba(255, 255, 255, 0.2);
		position: absolute;
		border-radius: 50%;
		transition: 0.3s;
	}

	&:hover::after {
		width: 28.125rem;
		height: 28.125rem;
	}
`;

const StyledHomeBtnText = styled.h4`
	font-family: ${FONTS.primary};
	font-size: 2rem;
	font-weight: 400;
	letter-spacing: 0.125rem;
	color: #0b0d17;
`;

const StyledHomeIntro = styled.h5`
	font-family: ${FONTS.secondary};
	font-size: 1.75rem;
	color: #d0d6f9;
	letter-spacing: 0.295rem;
`;
const StyledHomeTitle = styled.h1`
	font-family: ${FONTS.primary};
	font-size: 9.375rem;
	font-weight: 400;
	color: #ffffff;
	margin-block: 0;
`;

// ---------DESTINATION--------
const StyledSectionContainer = styled.div`
	width: 100%;
	max-width: 1440px;
	height: 100vh;
	margin-inline: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	background: url(${({ $background }) => $background});
	background-size: cover;
	background-position: center;
`;

const StyledImgContainer = styled.div`
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const StyledTitle = styled.h5`
	font-family: ${FONTS.secondary};
	font-size: 1.75rem;
	color: #ffffff;
	letter-spacing: 0.295rem;
`;

const StyledIndex = styled.span`
	font-family: ${FONTS.secondary};
	font-size: 1.75rem;
	color: rgba(255, 255, 255, 0.25);
	font-weight: 700;
	padding-right: 1rem;
`;

const StyledPlanetName = styled.h1`
	font-family: ${FONTS.primary};
	font-size: 6.25rem;
	font-weight: 400;
	color: #ffffff;
	margin-block: 0;
`;

const StyledInfoContainer = styled.div`
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
	padding-left: 3rem;
	padding-top: 5rem;
`;

const StyledTabsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: #ffffff;
	gap: 2rem;
`;

const StyledTab = styled.p`
	font-family: ${FONTS.secondary};
	font-size: 1rem;
	color: ${({ $isActive }) => ($isActive ? '#FFFFFF' : '#d0d6f9')};
	border-bottom: ${({ $isActive }) => $isActive && '3px solid #FFFFFF'};
	padding-bottom: 0.5rem;
	cursor: pointer;
`;

const StyledInfo = styled.p`
	width: 70%;
	color: #d0d6f9;
	font-family: ${FONTS.secondary};
	font-size: 1.125rem;
	line-height: 2rem;
`;

const StyledSeparator = styled.div`
	background-color: #383b4b;
	width: 80%;
	height: 1px;
	margin: 2rem 0 1rem 0;
`;

const StyledStatsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 3rem;
`;

const StyledStatsTitle = styled.h4`
	font-family: ${FONTS.secondary};
	font-size: 0.875rem;
	letter-spacing: 0.148rem;
	color: #d0d6f9;
`;

const StyledStatsStat = styled.h4`
	font-family: ${FONTS.primary};
	font-size: 1.75rem;
	letter-spacing: 0.148rem;
	font-weight: 400;
	color: #ffffff;
	margin-block: 0;
`;

const StyledCrewTabs = styled.div`
	background-color: #ffffff;
	width: 1rem;
	height: 1rem;
	border-radius: 50%;
	cursor: pointer;
`;

// ---------TECHNOLOGY--------
const StyledTechInfoContainer = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
`;

const StyledTechTabsContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
`;

const StyledTechTabs = styled.div`
	width: 20%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;
`;

const StyledTechTab = styled.div`
	width: 5rem;
	height: 5rem;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	// 1px solid white;
	border: ${({ $isActive }) =>
		$isActive ? 'none' : '1px solid rgba(255, 255, 255, 0.25);'};
	background-color: ${({ $isActive }) => $isActive && '#ffffff'};
	color: ${({ $isActive }) => ($isActive ? '#0B0D17' : '#ffffff')};
	font-family: ${FONTS.primary};
	font-size: 2rem;
	font-weight: 400;
`;

const StyledTechInfo = styled.div`
	width: 70%;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
`;

const StyledTechTitle = styled.h3`
	font-family: ${FONTS.primary};
	font-weight: 400;
	font-size: 3.5rem;
	color: #ffffff;
	margin-block: 0;
`;

const StyledTechImgContainer = styled.div`
	width: 40%;
	display: flex;
`;

const StyledTechImg = styled.img`
	width: 100%;
`;

export {
	StyledSectionContainer,
	StyledImgContainer,
	StyledInfoContainer,
	StyledTabsContainer,
	StyledStatsContainer,
	StyledStatsTitle,
	StyledStatsStat,
	StyledInfo,
	StyledCrewTabs,
	StyledPlanetName,
	StyledTab,
	StyledTitle,
	StyledIndex,
	StyledSeparator,
	StyledHomeTitle,
	StyledHomeIntro,
	StyledHomeInfoContainer,
	StyledHomeBtn,
	StyledHomeBtnText,
	StyledHomeBtnContainer,
	StyledTechInfoContainer,
	StyledTechTabsContainer,
	StyledTechTabs,
	StyledTechTab,
	StyledTechTitle,
	StyledTechInfo,
	StyledTechImg,
	StyledTechImgContainer
};
