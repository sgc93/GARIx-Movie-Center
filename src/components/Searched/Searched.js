import { useState } from "react";
import Error from "../../Utilities/Error";
import Loading from "../../Utilities/Loading";
import MovieCard from "../../Utilities/MovieCard";
import "./Searched.css";

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
								<ul className="result__list list">
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
