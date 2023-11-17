import { useState } from "react";
import MovieDetail from "./Utilities/MovieDetail";
import Header from "./components/Header/Header";
import Searched from "./components/Searched/Searched";
import SideBar from "./components/Sidebar/Sidebar";
const tempMovieData = [
	{
		id: "tt1375666",
		title: "Inception",
		year: "2010",
		rating: "9.0",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
	},
	{
		id: "tt0133093",
		title: "The Matrix",
		year: "1999",
		rating: "9.0",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
	},
	{
		id: "tt6751668",
		title: "Parasite",
		year: "2019",
		rating: "9.0",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
	},
	{
		id: "tt1375666",
		title: "Inception",
		year: "2010",
		rating: "9.0",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
	},
	{
		id: "tt0133093",
		title: "The Matrix",
		year: "1999",
		rating: "9.0",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
	},
	{
		id: "tt6751668",
		title: "Parasite",
		year: "2019",
		rating: "9.0",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
	},
	{
		id: "tt1375666",
		title: "Inception",
		year: "2010",
		rating: "9.0",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
	},
	{
		id: "tt0133093",
		title: "The Matrix",
		year: "1999",
		rating: "9.0",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
	},
	{
		id: "tt6751668",
		title: "Parasite",
		year: "2019",
		rating: "9.0",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
	},
	{
		id: "tt1375666",
		title: "Inception",
		year: "2010",
		rating: "9.0",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
	},
	{
		id: "tt0133093",
		title: "The Matrix",
		year: "1999",
		rating: "9.0",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
	},
	{
		id: "tt6751668",
		title: "Parasite",
		year: "2019",
		rating: "9.0",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
	},
	{
		id: "tt1375666",
		title: "Inception",
		year: "2010",
		rating: "9.0",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
	},
	{
		id: "tt0133093",
		title: "The Matrix",
		year: "1999",
		rating: "9.0",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
	},
	{
		id: "tt6751668",
		title: "Parasite",
		year: "2019",
		rating: "9.0",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
	},
	{
		id: "tt1375666",
		title: "Inception",
		year: "2010",
		rating: "9.0",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
	},
	{
		id: "tt0133093",
		title: "The Matrix",
		year: "1999",
		rating: "9.0",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
	},
	{
		id: "tt6751668",
		title: "Parasite",
		year: "2019",
		rating: "9.0",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
	},
	{
		id: "tt1375666",
		title: "Inception",
		year: "2010",
		rating: "9.0",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
	},
	{
		id: "tt0133093",
		title: "The Matrix",
		year: "1999",
		rating: "9.0",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
	},
	{
		id: "tt6751668",
		title: "Parasite",
		year: "2019",
		rating: "9.0",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
	},
	{
		id: "tt1375666",
		title: "Inception",
		year: "2010",
		rating: "9.0",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
	},
	{
		id: "tt0133093",
		title: "The Matrix",
		year: "1999",
		rating: "9.0",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
	},
	{
		id: "tt6751668",
		title: "Parasite",
		year: "2019",
		rating: "9.0",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
	},
];

export default function App() {
	const [detailId, setDetailId] = useState("tt0133093");
	const [isDetailOpen, setIsDetailOpen] = useState(false);
	const [movies] = useState(tempMovieData);

	let movie;
	if (isDetailOpen) {
		tempMovieData.forEach((data) => {
			if (data.id === detailId) {
				movie = data;
			}
		});
	}

	function closeDetail() {
		setIsDetailOpen((isDetailOpen) => !isDetailOpen);
	}

	function openDetail(id) {
		setDetailId((detailId) => id);
		setIsDetailOpen((isDetailOpen) => !isDetailOpen);
	}

	return (
		<>
			<Header movies={movies} />
			<SideBar />
			<Searched movies={movies} openDetail={openDetail} />
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
