function Error({ error }) {
	return (
		<div className="error">
			<p>
				{error === "Failed to fetch"
					? "🛜You Have Lost Your Connection!"
					: error}
			</p>
		</div>
	);
}

export default Error;
