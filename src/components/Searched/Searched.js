import Error from "../../Utilities/Error";
import Loading from "../../Utilities/Loading";
import MovieCard from "../../Utilities/MovieCard";
import "./Searched.css";

function Searched({ movies, openDetail, isLoading, error, setQuery }) {
	return (
		<div>
			<div className={"main app__scrollbar-v"}>
				<div className="box">
					<button
						className={"btn-toggle hover"}
						onClick={() => setQuery((query) => "")}
					>
						&times;
					</button>
					{isLoading && <Loading />}
					{error && <Error error={error} />}
					{!isLoading && !error && (
						<ul className="result__list list">
							{movies?.map((movie) => (
								<MovieCard
									key={movie.imdbID}
									movie={movie}
									openDetail={openDetail}
									isLoading={isLoading}
								/>
							))}
						</ul>
					)}
				</div>
			</div>
		</div>
	);
}

export default Searched;
