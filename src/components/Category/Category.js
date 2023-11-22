import { useEffect, useState } from "react";
import Error from "../../Utilities/Error";
import Loading from "../../Utilities/Loading";
import MovieCard from "../../Utilities/MovieCard";

const KEY = "988ba0f866b64552dd0b251b74c2b78d";

function Category({ genre, setGenre, openDetail }) {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const [movies, setMovies] = useState([]);

	useEffect(
		function () {
			setIsLoading(true);
			async function fetchDetail() {
				try {
					const response = await fetch(
						`https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&include_video=true&sort_by=popularity.desc&with_genres=${genre}'`
					);
					if (!response.ok) throw new Error("🛜You Have Lost Your Connection!");
					const data = await response.json();
					if (data.Response === "False") {
						throw new Error("⛔Movie Not Found!");
					} else if (response.ok) {
						setError((error) => "");
					}
					setMovies((movies) => data.results);
					setError("");
				} catch (err) {
					if (err.name !== "AbortError") {
						setError((error) => err.message);
					}
				} finally {
					setIsLoading(false);
				}
			}

			fetchDetail();
		},
		[genre]
	);

	return (
		<>
			<div className={"main app__scrollbar-v"}>
				<p className="header">
					<span>{genre}</span> Movies
				</p>
				<div className="box">
					<button
						className={"btn-toggle hover"}
						onClick={() => setGenre((genre) => "")}
					>
						&times;
					</button>
					{isLoading && <Loading />}
					{error && <Error error={error} />}
					{!isLoading && !error && (
						<ul className="result__list list">
							{movies?.map((movie) => (
								<MovieCard
									key={movie.imdbID}
									movie={movie}
									openDetail={openDetail}
									isLoading={isLoading}
								/>
							))}
						</ul>
					)}
				</div>
			</div>
		</>
	);
}

export default Category;
