import "./Home.css";
import Playing from "./Playing";
import Top from "./Top";
import Trending from "./Trending";
import Upcoming from "./Upcoming";
function Home({ movies }) {
	return (
		<div className="app__home app__scrollbar-v">
			<Playing />
			<Trending movies={movies} />
			<Top movies={movies} />
			<Upcoming />
		</div>
	);
}

export default Home;
