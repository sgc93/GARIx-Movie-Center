import { useEffect, useState } from "react";
import MovieDetail from "./Utilities/MovieDetail";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Searched from "./components/Searched/Searched";
import SideBar from "./components/Sidebar/Sidebar";
const tempMovieData = [
	{
		imdbID: "tt1375666",
		Title: "Inception",
		Year: "2010",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
	},
	{
		imdbID: "tt0133093",
		Title: "The Matrix",
		Year: "1999",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
	},
	{
		imdbID: "tt6751668",
		Title: "Parasite",
		Year: "2019",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
	},
	{
		imdbID: "tt1375666",
		Title: "Inception",
		Year: "2010",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
	},
	{
		imdbID: "tt0133093",
		Title: "The Matrix",
		Year: "1999",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
	},
	{
		imdbID: "tt6751668",
		Title: "Parasite",
		Year: "2019",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
	},
];

const KEY = "988ba0f866b64552dd0b251b74c2b78d";

export default function App() {
	const [detailId, setDetailId] = useState("");
	const [movie, setMovie] = useState({});
	const { genres } = movie;
	const [isDetailOpen, setIsDetailOpen] = useState(false);
	const [movies, setMovies] = useState([]);
	const [query, setQuery] = useState("");
	const [isDetailLoading, setIsDetailLoading] = useState(false);

	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(
		function () {
			const controller = new AbortController();
			setIsLoading(true);
			async function fetchMovies() {
				try {
					const response = await fetch(
						`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${query}`,
						{ signal: controller.signal }
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
			if (query.length < 3) {
				setIsLoading(false);
				setError("");
				return;
			}
			fetchMovies();

			return () => {
				controller.abort();
			};
		},
		[query]
	);

	useEffect(
		function () {
			setIsDetailLoading(true);
			async function fetchDetail() {
				if (!detailId) {
					setIsDetailLoading(false);
					return;
				}
				const response = await fetch(
					`https://api.themoviedb.org/3/movie/${detailId}?api_key=${KEY}`
				);
				const data = await response.json();
				setMovie((movie) => data);
				console.log(data);
				setIsDetailLoading(false);
			}

			fetchDetail();
		},
		[detailId]
	);

	function onSearch(movieName) {
		setQuery((query) => movieName);
	}

	function closeDetail() {
		setIsDetailOpen((isDetailOpen) => !isDetailOpen);
	}

	function handleOverlayclick(e) {
		if (e.target === e.currentTarget) {
			closeDetail();
		}
	}

	function openDetail(id) {
		setIsDetailOpen((isDetailOpen) => !isDetailOpen);
		setDetailId((detailId) => id);
	}

	return (
		<>
			<Header movies={movies} query={query} onSearch={onSearch} />
			<SideBar />
			{isDetailOpen && (
				<MovieDetail
					movie={movie}
					genres={genres}
					isDetailOpen={isDetailOpen}
					closeDetail={closeDetail}
					isDetailLoading={isDetailLoading}
					handleOverlayclick={handleOverlayclick}
				/>
			)}

			{query ? (
				<>
					<Searched
						movies={movies}
						openDetail={openDetail}
						isLoading={isLoading}
						error={error}
						query={query}
						setQuery={setQuery}
					/>
				</>
			) : (
				<Home openDetail={openDetail} />
			)}
		</>
	);
}
