import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { TbCategoryFilled } from "react-icons/tb";
import logo from "../../assets/logo.jpg";
import CategoryData from "../../constants/Genre";
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

function LanguageBox({ language, isSelected, onSelect }) {
	const handleClick = () => {
		onSelect(language.code);
	};

	return (
		<a
			href={`#${language.name}`}
			className={isSelected ? "selected" : "link"}
			onClick={handleClick}
		>
			{language.name}
		</a>
	);
}

function SideBar({ setGenre, setLanguage, setTag, lg, setLG }) {
	const [isSmallScreen, setSmallScreen] = useState(false);
	const [selectedGenre, setSelectedGenre] = useState("");
	const [selectedLanguage, setSelectedLanguage] = useState("");

	const handleGenreSelect = (genreId) => {
		setLG("g");
		setTag("g");
		setGenre(genreId);
		setSelectedGenre(genreId);
	};

	const handleLanguageSelect = (langCode) => {
		setLG("l");
		setTag("l");
		setLanguage(langCode);
		setSelectedLanguage(langCode);
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
				<div className={isSmallScreen ? "app__sidebar-logo hover" : "hidden"}>
					<img src={logo} alt="logo" />
				</div>
				<div className="app__sidebar-genre">
					<p className="p__subtopic">Genre</p>
					<div className="app__sidebar-links">
						{CategoryData[0].map((genre) => (
							<GenreBox
								key={genre.id}
								genre={genre}
								isSelected={selectedGenre === genre.id && lg === "g"}
								onSelect={handleGenreSelect}
							/>
						))}
					</div>
				</div>
				<div className="app__sidebar-language">
					<p className="p__subtopic">Language</p>
					<div className="app__sidebar-links">
						{CategoryData[1].map((language) => (
							<LanguageBox
								key={language.code}
								language={language}
								isSelected={selectedLanguage === language.code && lg === "l"}
								onSelect={handleLanguageSelect}
							/>
						))}
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
