import { useState } from "react";
import MovieCard from "../../Utilities/MovieCard";
import "./Searched.css";

function Loading() {
	return (
		<div className="loader">
			<h1>LOADING ...</h1>
		</div>
	);
}

function Error({ error }) {
	return (
		<div className="error">
			<p>{error}</p>
		</div>
	);
}

function Searched({ movies, openDetail, isLoading, error }) {
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
					{isOpen1 && (
						<>
							{isLoading && <Loading />}
							{!isLoading && !error && (
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
							)}
							{error && <Error error={error} />}
						</>
					)}
					{/* {isOpen1 &&
						{ isLoading && <Loading />}
					{!isLoading && !error & (
							
					)}
					 */}
				</div>
			</div>
		</div>
	);
}

export default Searched;
