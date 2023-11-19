import { useEffect, useState } from "react";
import MovieDetail from "./Utilities/MovieDetail";
import Header from "./components/Header/Header";
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

const KEY = "eaf312c3";
// const tmdbKey = "988ba0f866b64552dd0b251b74c2b78d";

export default function App() {
	const [detailId, setDetailId] = useState("tt1375666");
	const [movie, setMovie] = useState({});
	const [isDetailOpen, setIsDetailOpen] = useState(false);
	const [movies, setMovies] = useState(tempMovieData);
	const [query, setQuery] = useState("Inception");

	const [isLoading, setIsLoading] = useState(false);

	useEffect(
		function () {
			setIsLoading(true);
			async function fetchMovies() {
				const response = await fetch(
					`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
				);
				const data = await response.json();
				setMovies((movies) => data.Search);
				setIsLoading(false);
			}

			fetchMovies();
		},
		[query]
	);

	useEffect(
		function () {
			async function fetchDetail() {
				const response = await fetch(
					`http://www.omdbapi.com/?apikey=${KEY}&i=${detailId}`
				);
				const data = await response.json();
				setMovie((movie) => data);
				console.log(data);
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

	function openDetail(imdbID) {
		setDetailId((detailId) => imdbID);
		setIsDetailOpen((isDetailOpen) => !isDetailOpen);
	}

	return (
		<>
			<Header movies={movies} query={query} onSearch={onSearch} />
			<SideBar />
			<Searched movies={movies} openDetail={openDetail} isLoading={isLoading} />
			{isDetailOpen && (
				<MovieDetail
					movie={movie}
					isDetailOpen={isDetailOpen}
					closeDetail={closeDetail}
				/>
			)}
		</>
	);
}
