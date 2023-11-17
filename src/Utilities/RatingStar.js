import { useState } from "react";

const emptyStar = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke="#fcc419"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="{2}"
			d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
		/>
	</svg>
);

const fullStar = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 20 20"
		fill="#fcc419"
		stroke="#fcc419"
	>
		<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
	</svg>
);

function TempStar({ index, setTempRate, tempRate, setRate }) {
	return (
		<span
			onClick={() => setRate(index + 1)}
			onMouseEnter={() => setTempRate(index + 1)}
			onMouseLeave={() => setTempRate(index)}
		>
			{tempRate >= index + 1 ? fullStar : emptyStar}
		</span>
	);
}

function Star({ index, setRate, rate }) {
	return (
		<span onClick={() => setRate(index + 1)}>
			{rate >= index + 1 ? fullStar : emptyStar}
		</span>
	);
}

function RatingStar({ movie, maxRating = 5 }) {
	const [rate, setRate] = useState(0);
	const [tempRate, setTempRate] = useState(0);
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className="app__rating">
			<p>Rate : {movie.title} </p>
			<div
				className="app__rating-stars"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				{Array.from({ length: maxRating }, (_, index) =>
					isHovered ? (
						<TempStar
							index={index}
							setRate={setRate}
							tempRate={tempRate}
							setTempRate={setTempRate}
						/>
					) : (
						<Star index={index} setRate={setRate} rate={rate} />
					)
				)}
				<p>{isHovered ? tempRate || "" : rate || ""}</p>
			</div>
		</div>
	);
}

export default RatingStar;
