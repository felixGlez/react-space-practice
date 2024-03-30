import { actualBg } from '../constants/functions';
import {
	StyledHomeBtn,
	StyledHomeBtnContainer,
	StyledHomeBtnText,
	StyledHomeInfoContainer,
	StyledHomeIntro,
	StyledHomeTitle,
	StyledInfo,
	StyledSectionContainer
} from './styles';

const Home = ({ path }) => {
	const background = actualBg(path);

	return (
		<StyledSectionContainer $background={background}>
			<StyledHomeInfoContainer>
				<StyledHomeIntro>SO, YOU WANT TO TRAVEL TO</StyledHomeIntro>
				<StyledHomeTitle>SPACE</StyledHomeTitle>
				<StyledInfo>
					Let’s face it; if you want to go to space, you might as well genuinely
					go to outer space and not hover kind of on the edge of it. Well sit
					back, and relax because we’ll give you a truly out of this world
					experience!
				</StyledInfo>
			</StyledHomeInfoContainer>
			<StyledHomeBtnContainer>
				<StyledHomeBtn>
					<StyledHomeBtnText>EXPLORE</StyledHomeBtnText>
				</StyledHomeBtn>
			</StyledHomeBtnContainer>
		</StyledSectionContainer>
	);
};

export default Home;
