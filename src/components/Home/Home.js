import "./Home.css";
import Playing from "./Playing";
import Top from "./Top";
import Trending from "./Trending";
import Upcoming from "./Upcoming";
function Home({ openDetail }) {
	return (
		<div className="app__home app__scrollbar-v">
			<Playing />
			<div className="app__home-list">
				<Trending openDetail={openDetail} />
				<Top openDetail={openDetail} />
				<Upcoming openDetail={openDetail} />
			</div>
		</div>
	);
}

export default Home;
