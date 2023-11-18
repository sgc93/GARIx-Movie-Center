import "./MovieDetail.css";
import RatingStar from "./RatingStar";

function MovieDetail({ movie, closeDetail }) {
	return (
		<div className="detail__box">
			<img src={movie.Poster} alt={`${movie.Title} poster`} />
			<div className="about">
				<h3 className="title">{movie.Title}</h3>
				<p className="rate__release">
					<span className="release">📅 {movie.Year}</span>
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
				<RatingStar movie={movie} maxRating={10} />
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
