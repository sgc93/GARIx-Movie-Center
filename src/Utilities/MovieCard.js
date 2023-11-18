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
			<div>
				<h3>{movie.Title}</h3>
				<p>
					<span>
						{movie.Type === "movie" ? "🍿 Movie" : `📺 ${movie.Type}`}
					</span>
					<span>📅{movie.Year}</span>
				</p>
			</div>
		</li>
	);
}

export default MovieCard;
