import MovieCard from "../../Utilities/MovieCard";

function Top({ movies }) {
	return (
		<div className="app__trending">
			<ul className="app__trending-list">
				{movies.map((movie) => (
					<MovieCard movie={movie} />
				))}
			</ul>
		</div>
	);
}
export default Top;
