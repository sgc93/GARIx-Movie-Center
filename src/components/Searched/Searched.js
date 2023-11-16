import { useState } from "react";
import "./Searched.css";

import MovieCard from "../../Utilities/MovieCard";

function Searched({ movies, openDetail }) {
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
						<ul className="list">
							{movies?.map((movie) => (
								<>
									<MovieCard movie={movie} openDetail={openDetail} />
								</>
							))}
						</ul>
					)}
				</div>
			</div>
		</div>
	);
}

export default Searched;
