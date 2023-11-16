import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import logo from "../../assets/logo.jpg";
import "./Header.css";

function Logo({ isClosed }) {
	return (
		<div className={isClosed ? "hide" : "logo"}>
			<img src={logo} alt="GARIx" />
		</div>
	);
}

function SearchBox({ isClosed }) {
	const [query, setQuery] = useState("");
	return (
		<input
			className={isClosed ? "search__box-two" : "search__box"}
			type="text"
			placeholder="Search movies..."
			value={query}
			onChange={(e) => setQuery(e.target.value)}
		/>
	);
}

function CloseIcon({ isClosed, setIsClosed }) {
	return (
		<div className={isClosed ? "close__icon" : "hide"}>
			<FaTimes
				className="close__icon-svg"
				onClick={() => {
					setIsClosed((isClosed) => false);
				}}
			/>
		</div>
	);
}

function SearchIcon({ isClosed, setIsClosed }) {
	return (
		<dvi className={isClosed ? "hide" : "search__icon"}>
			<IoSearchSharp
				className="search__icon-svg"
				onClick={() => {
					setIsClosed((isClosed) => true);
				}}
			/>
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
	const [isClosed, setIsClosed] = useState(false);

	return (
		<nav className="nav-bar">
			<Logo isClosed={isClosed} />
			<SearchBox isClosed={isClosed} />
			<CloseIcon isClosed={isClosed} setIsClosed={setIsClosed} />
			<SearchIcon isClosed={isClosed} setIsClosed={setIsClosed} />
			{/* <Result movies={movies} /> */}
			<Subscribe />
		</nav>
	);
}

export default Header;
