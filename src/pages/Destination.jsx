import { DESTINATION_INFO } from '../constants/destinationInfo';
import { MENU_DESTINATION_TABS } from '../constants/menuTabs';
import {
	StyledImgContainer,
	StyledIndex,
	StyledInfo,
	StyledInfoContainer,
	StyledPlanetName,
	StyledSectionContainer,
	StyledSeparator,
	StyledStatsContainer,
	StyledStatsStat,
	StyledStatsTitle,
	StyledTab,
	StyledTabsContainer,
	StyledTitle
} from './styles';
import { actualBg } from '../constants/functions';
import { useTabs } from '../hooks/useTabs';

const Destination = ({ path }) => {
	const [tabs, handleTabs] = useTabs();

	const section = DESTINATION_INFO;

	const background = actualBg(path);

	return (
		<StyledSectionContainer $background={background}>
			<StyledImgContainer>
				<StyledTitle>
					<StyledIndex>01</StyledIndex> {section.title}
				</StyledTitle>
				<img src={section.images[tabs]} />
			</StyledImgContainer>
			<StyledInfoContainer>
				<StyledTabsContainer>
					{MENU_DESTINATION_TABS.map((tab, index) => (
						<StyledTab
							key={tab.id}
							$isActive={tabs === index}
							onClick={() => handleTabs(index)}
						>
							{tab.tab}
						</StyledTab>
					))}
				</StyledTabsContainer>
				<StyledPlanetName>{section.name[tabs]}</StyledPlanetName>
				<StyledInfo>{section.text[tabs]}</StyledInfo>
				<StyledSeparator />
				<StyledStatsContainer>
					{section.stats[tabs].map(stat => (
						<div key={stat.id}>
							<StyledStatsTitle>{stat.title}</StyledStatsTitle>
							<StyledStatsStat>{stat.stat}</StyledStatsStat>
						</div>
					))}
				</StyledStatsContainer>
			</StyledInfoContainer>
		</StyledSectionContainer>
	);
};

export default Destination;
