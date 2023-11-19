import avatar from "./avatar.jpg";
import avenger from "./avengers.jpg";
import black from "./blackp.jpg";
const style = {
	backgroundImage: `url(${avatar})`,
	backgroundRepeat: "no-repeat",
	backgroundPosition: "center top",
	backgroundSize: "100% 150%",
};

function Playing() {
	return (
		<div className="app__playing">
			<div className="app__playing-bg" style={style}></div>
			<div className="app__playing-about">
				<h1 className="about__title">Black Panther</h1>
				<div className="about__detail">
					<p className="release__rate">
						<span>May 34, 2023</span>
						<span>🍿123 min</span>
						<span>⭐7.7</span>
					</p>
					<p className="genre">scifi, adventure, mystery</p>
					<p className="plot">
						lorem dlsdjfsd ldjfsl ldjfsd sldjfs jl sdfs jflsd ljflsd lj ljl
						dfsjl ldjflsjdfl ljdflsdfj ljflsd fsldjfsd{" "}
					</p>
					<p className="actors">Abebe K, Alemu A, sheger M</p>
				</div>
				<button className="hover"> Watch Later</button>
			</div>
			<div className="app__playing-movies">
				<ul className="Playing__list">
					<li>
						<img src={avatar} alt="blackp" />
					</li>
					<li>
						<img src={avenger} alt="avengers" />
					</li>
					<li>
						<img src={black} alt="black" />
					</li>
					<li>
						<img src={avenger} alt="blackp" />
					</li>
					<li>
						<img src={avatar} alt="blackp" />
					</li>
					<li>
						<img src={avenger} alt="avengers" />
					</li>
					<li>
						<img src={black} alt="black" />
					</li>
					<li>
						<img src={avenger} alt="blackp" />
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Playing;
