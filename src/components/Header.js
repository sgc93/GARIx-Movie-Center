import { useState } from "react";
import logo from "../assets/logo.jpg";

function Logo() {
	return (
		<div className="logo">
			<img src={logo} alt="GARIx" />
		</div>
	);
}

function Search() {
	const [query, setQuery] = useState("");
	return (
		<input
			className="search"
			type="text"
			placeholder="Search movies..."
			value={query}
			onChange={(e) => setQuery(e.target.value)}
		/>
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
			<Search />
			{movies.length > 0 && <Result movies={movies} />}
			{movies.length === 0 && <Subscribe />}
		</nav>
	);
}

export default Header;
