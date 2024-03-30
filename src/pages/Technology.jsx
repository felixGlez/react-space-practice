import { actualBg } from '../constants/functions';
import { MENU_TECHNOLOGY_TABS } from '../constants/menuTabs';
import { TECHNOLOGY_INFO } from '../constants/technologyInfo';
import { useTabs } from '../hooks/useTabs';
import {
	StyledIndex,
	StyledInfo,
	StyledSectionContainer,
	StyledTab,
	StyledTechImg,
	StyledTechImgContainer,
	StyledTechInfo,
	StyledTechInfoContainer,
	StyledTechTab,
	StyledTechTabs,
	StyledTechTabsContainer,
	StyledTechTitle,
	StyledTitle
} from './styles';

const Technology = ({ path }) => {
	const [tabs, handleTabs] = useTabs();
	console.log(tabs);
	const background = actualBg(path);
	const section = TECHNOLOGY_INFO;

	return (
		<StyledSectionContainer $background={background}>
			<StyledTechInfoContainer>
				<StyledTitle>
					<StyledIndex>03</StyledIndex> {section.title}
				</StyledTitle>
				<StyledTechTabsContainer>
					<StyledTechTabs>
						{MENU_TECHNOLOGY_TABS.map((menuItem, index) => (
							<StyledTechTab
								key={menuItem.id}
								onClick={() => handleTabs(index)}
								$isActive={index === tabs}
							>
								{menuItem.tab}
							</StyledTechTab>
						))}
					</StyledTechTabs>
					<StyledTechInfo>
						<StyledTab>{section.subtitle}</StyledTab>
						<StyledTechTitle>{section.stats[tabs].stat}</StyledTechTitle>
						<StyledInfo>{section.text[tabs]}</StyledInfo>
					</StyledTechInfo>
				</StyledTechTabsContainer>
			</StyledTechInfoContainer>
			<StyledTechImgContainer>
				<StyledTechImg src={section.images[tabs]} />
			</StyledTechImgContainer>
		</StyledSectionContainer>
	);
};

export default Technology;
