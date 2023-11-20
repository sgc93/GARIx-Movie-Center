import { useEffect, useState } from "react";
import Error from "../../Utilities/Error";
import Loading from "../../Utilities/Loading";

const KEY = "988ba0f866b64552dd0b251b74c2b78d";

function Playing() {
	const [isLoading, setIsLoading] = useState(false);
	const [isSelectedLoading, setSelectionLoading] = useState(false);
	const [error, setError] = useState("");
	const [playing, setPlaying] = useState([]);
	const [selected, setSelected] = useState({});
	const { genres } = selected;
	const [selectedId, setSelectedId] = useState("");
	useEffect(function () {
		setIsLoading(true);
		async function fetchPlayings() {
			try {
				const response = await fetch(
					`https://api.themoviedb.org/3/movie/now_playing?api_key=${KEY}`
				);

				if (!response.ok) {
					throw new Error("something went wrong");
				}
				const data = await response.json();
				setSelectedId(data.results[0].id);
				setPlaying((playing) => data.results);
			} catch (err) {
				setError(err.message);
			} finally {
				setIsLoading(false);
			}
		}

		fetchPlayings();
	}, []);

	useEffect(
		function () {
			setSelectionLoading(true);
			async function fetchSelected() {
				try {
					const response = await fetch(
						`https://api.themoviedb.org/3/movie/${selectedId}?api_key=${KEY}`
					);
					if (!response.ok) {
						throw new Error("Something went wrong!");
					}
					const data = await response.json();
					setSelected(data);
					console.log(data);
				} catch (err) {
					setError(err.message);
				} finally {
					setSelectionLoading(false);
				}
			}
			fetchSelected();
		},
		[selectedId]
	);

	const style = selected && {
		backgroundImage: `url("https://image.tmdb.org/t/p/original/${selected.poster_path}")`,
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center top",
		backgroundSize: "100% 250%",
	};

	return (
		<>
			{error && <Error err={error} />}
			{isLoading && <Loading />}
			{!isLoading && !error && (
				<div className="app__playing">
					{isSelectedLoading && <Loading />}
					{!selected && !isSelectedLoading ? (
						<Error error={"not selected"} />
					) : (
						<>
							<div className="app__playing-bg" style={style}></div>
							<div className="app__playing-about">
								<h1 className="about__title">{selected.title}</h1>
								<div className="about__detail">
									<p className="release__rate">
										<span>{selected.release_date}</span>
										<span>{selected.runtime} min</span>
										<span>⭐7.7</span>
									</p>
									<div className="genre">
										{genres.map((genre) => (
											<p key={genre.id}>{genre.name}</p>
										))}
									</div>
									<p className="plot">{selected.overview}</p>
									<p className="actors">Abebe K, Alemu A, sheger M</p>
								</div>
								<button className="hover"> Watch Later</button>
							</div>
						</>
					)}
					<div className="app__playing-movies">
						<ul className="Playing__list">
							{playing.map((movie) => (
								<Image movie={movie} setSelectedId={setSelectedId} />
							))}
						</ul>
					</div>
				</div>
			)}
		</>
	);
}

function Image({ movie, setSelectedId }) {
	return (
		<li onClick={() => setSelectedId((selectedId) => movie.id)}>
			<img
				src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
				alt={`${movie.title} poster`}
			/>
		</li>
	);
}

export default Playing;
