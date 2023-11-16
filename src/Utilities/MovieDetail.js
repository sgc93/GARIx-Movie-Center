function MovieDetail({ movie, isDetailOpen, closeDetail }) {
	return (
		<div className="detail__box">
			<img src={movie.Poster} alt={`${movie.title} poster`} />
			<div className="about">
				<h3 className="title">{movie.title}</h3>
				<p className="rate__release">
					<span className="release">📅 {movie.year}</span>
					<span className="rating">⭐ {movie.rating}</span>
				</p>
				<p className="story">
					lorem dlfjsld ldjfsl fsdjfsldfjsd flfjsldjf lsdjfsdjf ljdf sdfj ldfjs
					orem dlfjsld ldjfsl fsdjfsldfjsd flfjsldjf lsdjfsdjf ljdf sdfj ldfjs
					orem dlfjsld ldjfsl fsdjfsldfjsd flfjsldjf lsdjfsdjf ljdf sdfj ldfjs
				</p>
				<p className="casts">
					<span>Alexander W.</span> |<span>Leonardo ZQ.</span> |
					<span>Onala C.</span> |<span>Beyonce A.</span> |<span>Bbdc B.</span>
				</p>
			</div>
			<div className="close">
				<p
					onClick={() => {
						closeDetail();
					}}
				>
					&times;
				</p>
			</div>
		</div>
	);
}

export default MovieDetail;
