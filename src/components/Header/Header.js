import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import logo from "../../assets/logo.jpg";
import "./Header.css";

function Logo() {
	return (
		<div className="logo">
			<img src={logo} alt="GARIx" />
		</div>
	);
}

function SearchBox() {
	const [query, setQuery] = useState("");
	return (
		<input
			className="search__box"
			type="text"
			placeholder="Search movies..."
			value={query}
			onChange={(e) => setQuery(e.target.value)}
		/>
	);
}

function SearchIcon() {
	return (
		<dvi className="search__icon">
			<IoSearchSharp className="search__icon-svg" onClick={() => {}} />
		</dvi>
	);
}

function Result({ movies }) {
	return (
		<p className="num-results">
			Found <strong>{movies.length}</strong> results
		</p>
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

function Header({ movies }) {
	return (
		<nav className="nav-bar">
			<Logo />
			<SearchBox />
			<SearchIcon />
			{/* <Result movies={movies} /> */}
			<Subscribe />
		</nav>
	);
}

export default Header;
