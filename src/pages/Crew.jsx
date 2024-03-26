import {
	StyledCrewTabs,
	StyledImgContainer,
	StyledInfo,
	StyledInfoContainer,
	StyledSectionContainer,
	StyledTabsContainer
} from './styles';
import { actualBg } from '../constants/functions';
import { MENU_CREW_TABS } from '../constants/menuTabs';
import { CREW_INFO } from '../constants/crewInfo';
import { useTabs } from '../hooks/useTabs';

const Crew = ({ path }) => {
	const [tabs, handleTabs] = useTabs();

	const background = actualBg(path);

	const section = CREW_INFO;

	return (
		<StyledSectionContainer $background={background}>
			<StyledInfoContainer>
				<StyledTabsContainer>
					{MENU_CREW_TABS.map((tab, index) => (
						<StyledCrewTabs key={tab.id} onClick={() => handleTabs(index)} />
					))}
				</StyledTabsContainer>
				<h2>{section.roles[tabs]}</h2>
				<h2>{section.name[tabs]}</h2>
				<StyledInfo>{section.text[tabs]}</StyledInfo>
			</StyledInfoContainer>
			<StyledImgContainer>
				<h1>{section.title}</h1>
				<img src={section.images[tabs]} />
			</StyledImgContainer>
		</StyledSectionContainer>
	);
};

export default Crew;
