import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import logo from "../../assets/logo.jpg";
import "./Header.css";

function Logo({ isFocused }) {
	return (
		<div className={isFocused ? "hide" : "logo"}>
			<img src={logo} alt="GARIx" />
		</div>
	);
}

function SearchBox({ isFocused, query, onSearch }) {
	return (
		<input
			className={isFocused ? "search__box-two" : "search__box"}
			type="text"
			placeholder="Search movies..."
			value={query}
			onChange={(e) => onSearch(e.target.value)}
		/>
	);
}

function CloseIcon({ isFocused, setIsFocused }) {
	return (
		<div className={isFocused ? "close__icon" : "hide"}>
			<FaTimes
				className="close__icon-svg"
				onClick={() => {
					setIsFocused((isFocused) => false);
				}}
			/>
		</div>
	);
}

function SearchIcon({ isFocused, setIsFocused }) {
	return (
		<div className={isFocused ? "hide" : "search__icon"}>
			<IoSearchSharp
				className="search__icon-svg"
				onClick={() => {
					setIsFocused((isFocused) => true);
				}}
			/>
		</div>
	);
}

function Subscribe() {
	return (
		<div className="app__navbar-btn">
			<button className="btn__login">Log In</button>
			<button className="btn__subscribe">Subscribe</button>
		</div>
	);
}

function Header({ query, onSearch }) {
	const [isFocused, setIsFocused] = useState(false);

	return (
		<nav className="nav-bar">
			<Logo isFocused={isFocused} />
			<SearchBox isFocused={isFocused} onSearch={onSearch} query={query} />
			<CloseIcon isFocused={isFocused} setIsFocused={setIsFocused} />
			<SearchIcon isFocused={isFocused} setIsFocused={setIsFocused} />
			<Subscribe />
		</nav>
	);
}

export default Header;
