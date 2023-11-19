import MovieCard from "../../Utilities/MovieCard";

function Trending({ movies }) {
	return (
		<div className="app__trending">
			<h1 className="app__trending-title">Trending Movies</h1>
			<ul className="app__trending-list list">
				{movies.map((movie) => (
					<MovieCard movie={movie} />
				))}
			</ul>
		</div>
	);
}

export default Trending;
