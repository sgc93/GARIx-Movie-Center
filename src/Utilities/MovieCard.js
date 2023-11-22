function MovieCard({ movie, openDetail }) {
	return (
		<li
			key={movie.id}
			onClick={() => {
				openDetail(movie.id);
			}}
		>
			<img
				src={
					movie.poster_path === null
						? "./logo.png"
						: `https://image.tmdb.org/t/p/original/${movie.poster_path}`
				}
				alt={`${movie.title} poster`}
			/>
			<div className="list__movie-data">
				<h3>{movie.title}</h3>
				<div>
					<span>📅{movie.release_date}</span>
					<span>🍿{movie.popularity}</span>
				</div>
			</div>
		</li>
	);
}

export default MovieCard;
