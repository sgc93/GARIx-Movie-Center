function MovieCard({ movie, openDetail, tag }) {
	return tag === 0 ? (
		<MovieCard0 movie={movie} openDetail={openDetail} />
	) : (
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

function MovieCard0({ movie, openDetail }) {
	return (
		<li
			key={movie.imdbID}
			onClick={() => {
				openDetail(movie.imdbID);
			}}
		>
			<img
				src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
				alt={`${movie.title} poster`}
			/>
			<div className="list__movie-data">
				<h3>{movie.title}</h3>
				<div>
					<span>📅{movie.release_date}</span>
					<span>{movie.popularity}</span>
				</div>
			</div>
		</li>
	);
}

export default MovieCard;
