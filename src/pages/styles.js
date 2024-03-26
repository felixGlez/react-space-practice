import styled from 'styled-components';
import { FONTS } from '../styles/fonts';

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
	color: #ffffff;
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
	font-size: 9.375rem;
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
	StyledSeparator
};
