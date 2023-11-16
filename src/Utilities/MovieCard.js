function MovieCard({ movie, openDetail }) {
	return (
		<li
			key={movie.id}
			onClick={() => {
				openDetail(movie.id);
			}}
		>
			<img src={movie.Poster} alt={`${movie.title} poster`} />
			<div>
				<h3>{movie.title}</h3>
				<p>
					<span>⭐{movie.rating}</span>
					<span>📅{movie.year}</span>
				</p>
			</div>
		</li>
	);
}

export default MovieCard;
