import { useEffect, useState } from "react";
import Error from "../../Utilities/Error";
import Loading from "../../Utilities/Loading";
import MovieCard from "../../Utilities/MovieCard";

const KEY = "988ba0f866b64552dd0b251b74c2b78d";

function Upcoming({ openDetail }) {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const [upcoming, setUpcoming] = useState([]);

	useEffect(function () {
		setIsLoading(true);
		async function fetchUpcoming() {
			try {
				const response = await fetch(
					`https://api.themoviedb.org/3/movie/upcoming?api_key=${KEY}`
				);

				if (!response.ok) {
					throw new Error("something went wrong");
				}
				const data = await response.json();
				setUpcoming((upcoming) => data.results);
			} catch (err) {
				setError(err.message);
			} finally {
				setIsLoading(false);
			}
		}

		fetchUpcoming();
	}, []);

	return (
		<div className="app__trending">
			<h1 className="app__trending-title">Upcoming Movies</h1>
			{error && <Error error={error} />}
			{isLoading && <Loading />}
			{!error && !isLoading && (
				<>
					<ul className="app__trending-list list">
						{upcoming.map((movie) => (
							<MovieCard
								movie={movie}
								openDetail={openDetail}
								key={movie.id}
								tag={0}
							/>
						))}
					</ul>
				</>
			)}
		</div>
	);
}

export default Upcoming;
