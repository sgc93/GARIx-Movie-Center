import { useState } from "react";
import "./Searched.css";

import MovieCard from "../../Utilities/MovieCard";

function Loading() {
	return (
		<div className="loader">
			<h1>LOADING ...</h1>
		</div>
	);
}

function Searched({ movies, openDetail, isLoading }) {
	const [isOpen1, setIsOpen1] = useState(true);
	return (
		<div>
			<div className={isOpen1 ? "main app__scrollbar-v" : "hidden"}>
				<div className="box">
					<button
						className="btn-toggle"
						onClick={() => setIsOpen1((open) => !open)}
					>
						-
					</button>
					{isOpen1 &&
						(isLoading ? (
							<Loading />
						) : (
							<ul className="list">
								{movies?.map((movie) => (
									<>
										<MovieCard
											key={movie.imdbID}
											movie={movie}
											openDetail={openDetail}
											isLoading={isLoading}
										/>
									</>
								))}
							</ul>
						))}
				</div>
			</div>
		</div>
	);
}

export default Searched;
