import styled from 'styled-components';

const StyledSectionContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: space-between;
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

const StyledInfoContainer = styled.div`
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const StyledTabsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: #ffffff;
	gap: 2rem;
`;

const StyledTitle = styled.h2`
	font-size: 3rem;
	color: #ffffff;
`;

const StyledInfo = styled.p`
	width: 70%;
	color: #d0d6f9;
`;

const StyledStatsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 3rem;
`;

const StyledStatsTitle = styled.h4`
	color: #d0d6f9;
`;

const StyledStatsStat = styled.h4`
	color: #ffffff;
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
	StyledTitle,
	StyledStatsContainer,
	StyledStatsTitle,
	StyledStatsStat,
	StyledInfo,
	StyledCrewTabs
};
