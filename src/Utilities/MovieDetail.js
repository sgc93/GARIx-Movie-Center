import Loading from "./Loading";
import "./MovieDetail.css";
import RatingStar from "./RatingStar";

import { useEffect, useState } from "react";

const KEY = "eaf312c3";

function MovieDetail({
	movie,
	genres,
	closeDetail,
	isDetailLoading,
	handleOverlayclick,
}) {
	const [imdbID, setImdbId] = useState("");
	const [imdbData, setImdbData] = useState({});

	useEffect(
		function () {
			if (movie.title) {
				document.title = `GARIx | ${movie.title}`;
			}
			return () => {
				document.title = "GARIx Movie Center";
			};
		},
		[movie]
	);

	useEffect(
		function () {
			setImdbId(movie.imdb_id);
		},
		[movie]
	);

	useEffect(
		function () {
			async function fetchDetail() {
				if (!imdbID) {
					return;
				}
				const response = await fetch(
					`http://www.omdbapi.com/?apikey=${KEY}&i=${imdbID}`
				);
				const data = await response.json();
				setImdbData(data);
				console.log(data);
			}

			fetchDetail();
		},
		[imdbID]
	);

	return (
		<div className="app__detail-overlay" onClick={handleOverlayclick}>
			<div className="detail__box">
				{isDetailLoading ? (
					<Loading />
				) : (
					<>
						{" "}
						<img
							src={
								movie.poster_path === null
									? "./logo.png"
									: `https://image.tmdb.org/t/p/original/${movie.poster_path}`
							}
							alt={`${movie.title} poster`}
						/>
						<div className="about">
							<h3 className="title">{movie.title}</h3>
							<p className="rate__release">
								<span className="release">{`📅 ${movie.release_date}`}</span>
								<span className="duration">{`🍿 ${imdbData.Runtime}`}</span>
								<span className="rating"> {`⭐${imdbData.imdbRating}`}</span>
							</p>
							<p className="story">{movie.overview}</p>
							<div className="genres">
								{genres &&
									genres.map((genre) => (
										<span className="genre" key={genre.id}>
											{genre.name}
										</span>
									))}
							</div>
							<p className="casts"> {imdbData.Actors}</p>
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
		</div>
	);
}

export default MovieDetail;
