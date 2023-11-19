import "./Home.css";
import Playing from "./Playing";
import Top from "./Top";
import Trending from "./Trending";
import Upcoming from "./Upcoming";
function Home() {
	return (
		<div className="app__home">
			<Playing />
			<Trending />
			<Top />
			<Upcoming />
		</div>
	);
}

export default Home;
