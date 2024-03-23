import { useState } from 'react';
import { DESTINATION_INFO } from '../constants/destinationInfo';
import { MENU_DESTINATION_TABS } from '../constants/menuTabs';
import { StyledSectionContainer } from './styles';

const Destination = () => {
	const [tab, setTab] = useState(0);

	const section = DESTINATION_INFO[0];

	return (
		<StyledSectionContainer>
			<>
				<h1>{section.title}</h1>
				<img src={section.images[tab]} />
			</>
			<>
				{MENU_DESTINATION_TABS.map((tab, index) => (
					<h3 key={tab.tab} onClick={() => setTab(index)}>
						{tab.tab}
					</h3>
				))}
				<h2>{section.name[tab]}</h2>
				{section.stats[tab].map(stat => (
					<div key={stat.id}>
						<h4>{stat.title}</h4>
						<h2>{stat.stat}</h2>
					</div>
				))}
			</>
		</StyledSectionContainer>
	);
};

export default Destination;
