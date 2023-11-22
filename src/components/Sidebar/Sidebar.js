import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { TbCategoryFilled } from "react-icons/tb";
import genres from "../../constants/Genre";
import "./Sidebar.css";

function GenreBox({ genre, isSelected, onSelect }) {
	const handleClick = () => {
		onSelect(genre.id);
	};

	return (
		<a
			href={`#${genre.name}`}
			className={isSelected ? "selected" : "link"}
			onClick={handleClick}
		>
			{genre.name}
		</a>
	);
}

function SideBar({ setGenre }) {
	const [isSmallScreen, setSmallScreen] = useState(false);
	const [selectedGenre, setSelectedGenre] = useState("");

	const handleGenreSelect = (genreId) => {
		setGenre(genreId);
		setSelectedGenre(genreId);
	};

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
							<GenreBox
								key={genre.id}
								genre={genre}
								isSelected={selectedGenre === genre.id}
								onSelect={handleGenreSelect}
							/>
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
