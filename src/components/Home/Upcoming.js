import MovieCard from "../../Utilities/MovieCard";

function Upcoming({ movies }) {
	return (
		<div className="app__trending">
			<h1 className="app__trending-title">Upcoming Movies</h1>
			<ul className="app__trending-list list">
				{movies.map((movie) => (
					<MovieCard movie={movie} />
				))}
			</ul>
		</div>
	);
}

export default Upcoming;
