import { useState } from 'react';
import {
	StyledCrewTabs,
	StyledImgContainer,
	StyledInfo,
	StyledInfoContainer,
	StyledSectionContainer,
	StyledTabsContainer,
	StyledTitle
} from './styles';
import { actualBg } from '../constants/functions';
import { MENU_CREW_TABS } from '../constants/menuTabs';
import { CREW_INFO } from '../constants/crewInfo';

const Crew = ({ path }) => {
	const [tab, setTab] = useState(0);

	const background = actualBg(path);

	const section = CREW_INFO;

	return (
		<StyledSectionContainer $background={background}>
			<StyledInfoContainer>
				<StyledTabsContainer>
					{MENU_CREW_TABS.map((tab, index) => (
						<StyledCrewTabs key={tab.id} onClick={() => setTab(index)} />
					))}
				</StyledTabsContainer>
				<StyledTitle>{section.roles[tab]}</StyledTitle>
				<StyledTitle>{section.name[tab]}</StyledTitle>
				<StyledInfo>{section.text[tab]}</StyledInfo>
			</StyledInfoContainer>
			<StyledImgContainer>
				<h1>{section.title}</h1>
				<img src={section.images[tab]} />
			</StyledImgContainer>
		</StyledSectionContainer>
	);
};

export default Crew;
