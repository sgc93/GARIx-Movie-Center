import { useEffect, useState } from "react";
import MovieDetail from "./Utilities/MovieDetail";
import Category from "./components/Category/Category";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Searched from "./components/Searched/Searched";
import SideBar from "./components/Sidebar/Sidebar";

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

	const [genre, setGenre] = useState("");
	const [language, setLanguage] = useState("");
	const [tag, setTag] = useState("");
	const [lg, setLG] = useState("");

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
					if (data.total_results === 0) {
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
			if (query.length === 0) {
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
			<SideBar
				setGenre={setGenre}
				setLanguage={setLanguage}
				setTag={setTag}
				lg={lg}
				setLG={setLG}
			/>
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
			) : genre || language ? (
				<Category
					genre={genre}
					setGenre={setGenre}
					language={language}
					setLanguage={setLanguage}
					tag={tag}
					setLG={setLG}
					openDetail={openDetail}
				/>
			) : (
				<Home openDetail={openDetail} />
			)}
		</>
	);
}
