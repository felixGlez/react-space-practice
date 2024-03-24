import { useState } from 'react';
import { DESTINATION_INFO } from '../constants/destinationInfo';
import { MENU_DESTINATION_TABS } from '../constants/menuTabs';
import {
	StyledImgContainer,
	StyledInfo,
	StyledInfoContainer,
	StyledSectionContainer,
	StyledStatsContainer,
	StyledStatsStat,
	StyledStatsTitle,
	StyledTabsContainer,
	StyledTitle
} from './styles';
import { actualBg } from '../constants/functions';

const Destination = ({ path }) => {
	const [tab, setTab] = useState(0);

	const section = DESTINATION_INFO;

	const background = actualBg(path);

	return (
		<StyledSectionContainer $background={background}>
			<StyledImgContainer>
				<h1>{section.title}</h1>
				<img src={section.images[tab]} />
			</StyledImgContainer>
			<StyledInfoContainer>
				<StyledTabsContainer>
					{MENU_DESTINATION_TABS.map((tab, index) => (
						<h3 key={tab.id} onClick={() => setTab(index)}>
							{tab.tab}
						</h3>
					))}
				</StyledTabsContainer>
				<StyledTitle>{section.name[tab]}</StyledTitle>
				<StyledInfo>{section.text[tab]}</StyledInfo>
				<StyledStatsContainer>
					{section.stats[tab].map(stat => (
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
