import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { TbCategoryFilled } from "react-icons/tb";

import "./Sidebar.css";

const genres = [
	{ id: 28, name: "Action" },
	{ id: 12, name: "Adventure" },
	{ id: 16, name: "Animation" },
	{ id: 35, name: "Comedy" },
	{ id: 80, name: "Crime" },
	{ id: 99, name: "Documentary" },
	{ id: 18, name: "Drama" },
	{ id: 10751, name: "Family" },
	{ id: 14, name: "Fantasy" },
	{ id: 36, name: "History" },
	{ id: 27, name: "Horror" },
	{ id: 10402, name: "Music" },
	{ id: 9648, name: "Mystery" },
	{ id: 10749, name: "Romance" },
	{ id: 878, name: "Science Fiction" },
	{ id: 10770, name: "Tv Movie" },
	{ id: 53, name: "Thriller" },
	{ id: 10752, name: "War" },
	{ id: 37, name: "Western" },
];
const KEY = "988ba0f866b64552dd0b251b74c2b78d";

function GenreBox({ genre, setGenre }) {
	return (
		<a href="#Adventure" className="link" onClick={() => setGenre(genre.id)}>
			{genre.name}
		</a>
	);
}

function SideBar({ setGenre }) {
	const [isSmallScreen, setSmallScreen] = useState(false);

	useEffect(function () {
		async function fetchGenres() {
			const res = await fetch(
				`https://api.themoviedb.org/3/genre/tv/list?api_key=${KEY}`
			);
			const data = await res.json();
			console.log(data);
		}

		fetchGenres();
	});
	return (
		<>
			<div className="app__sidebar-icon hover">
				<TbCategoryFilled
					className={
						isSmallScreen
							? "app__sidebar-icon_svg-small"
							: "app__sidebar-icon_svg"
					}
					onClick={() => {
						setSmallScreen((isSmallScreen) => !isSmallScreen);
					}}
				/>
				<FaTimes
					className={
						isSmallScreen
							? "app__sidebar-icon_svg"
							: "app__sidebar-icon_svg-small"
					}
					onClick={() => {
						setSmallScreen((isSmallScreen) => !isSmallScreen);
					}}
				/>
			</div>
			<div
				className={
					isSmallScreen
						? "app__small-sidebar app__scrollbar-v"
						: "app__sidebar app__scrollbar-v"
				}
			>
				<div className="app__sidebar-genre">
					<p className="p__subtopic">Genre</p>
					<div className="app__sidebar-links">
						{genres.map((genre) => (
							<GenreBox genre={genre} setGenre={setGenre} />
						))}
					</div>
				</div>
				<div className="app__sidebar-language">
					<p className="p__subtopic">Language</p>
					<div className="app__sidebar-links">
						<a href="#English" className="link">
							English
						</a>
						<a href="#Hindi" className="link">
							Hindi
						</a>
						<a href="#Baghi" className="link">
							Baghi
						</a>
					</div>
				</div>
				<div className="app__sidebar-divider">_________________________</div>
				<div className="app__sidebar-copyright">
					<p>SGC, 2023</p>
				</div>
			</div>
		</>
	);
}

export default SideBar;
