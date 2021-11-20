/**
 * EXTERNAL IMPORTS
 */
import { Container } from '@chakra-ui/react';

/**
 * COMPONENTS
 */
import Navigation from '../src/sections/Navigation';
import Title from '../src/sections/Title';
import Description from '../src/sections/Description';
import Details from '../src/sections/Details';
import Canvas from '../src/sections/Canvas';
import About from '../src/sections/About';
import Streams from '../src/sections/Streams';
import Schedule from '../src/sections/Schedule';
import Sponsors from '../src/sections/Sponsors';
import Team from '../src/sections/Team';
import RegisterContact from '../src/sections/RegisterContact';

const Home = () => {
	return (
		<Container maxW="full" p="0" h="auto" alignItems="center">
			<Navigation />

			<Container maxW="75vw" p="0" mt="40" h="auto">
				<Title />
				<Description />
				<Details />
				<Canvas />
				<About id="about" />
				<Streams id="streams" />
				<Schedule id="schedule" />
				<Sponsors id="sponsors" />
				<Team id="team" />
				<RegisterContact id="register" />
			</Container>
		</Container>
	);
};

export default Home;
