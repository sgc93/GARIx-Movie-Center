import Loading from "./Loading";
import "./MovieDetail.css";
import RatingStar from "./RatingStar";

function MovieDetail({ movie, closeDetail, isDetailLoading }) {
	return (
		<div className="detail__box">
			{isDetailLoading ? (
				<Loading />
			) : (
				<>
					{" "}
					<img src={movie.Poster} alt={`${movie.Title} poster`} />
					<div className="about">
						<h3 className="title">{movie.Title}</h3>
						<p className="rate__release">
							<span className="release">📅 {movie.Released}</span>
							<span className="duration">
								{movie.Type === "movie"
									? `🍿 ${movie.Runtime}`
									: `📺${movie.totalSeasons} Seasons`}
							</span>
							<span className="rating">⭐ {movie.imdbRating}</span>
						</p>
						<p className="story">{movie.Plot}</p>
						<p className="genre">{movie.Genre}</p>
						<p className="casts"> {movie.Actors}</p>
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
				</>
			)}
		</div>
	);
}

export default MovieDetail;
