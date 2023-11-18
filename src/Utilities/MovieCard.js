function MovieCard({ movie, openDetail }) {
	return (
		<li
			key={movie.imdbID}
			onClick={() => {
				openDetail(movie.imdbID);
			}}
		>
			<img
				src={movie.Poster === "N/A" ? "./logo.png" : movie.Poster}
				alt={`${movie.Title} poster`}
			/>
			<div className="list__movie-data">
				<h3>{movie.Title}</h3>
				<div>
					<span>
						{movie.Type === "movie" ? "🍿 Movie" : `📺 ${movie.Type}`}
					</span>
					<span>📅{movie.Year}</span>
				</div>
			</div>
		</li>
	);
}

export default MovieCard;
