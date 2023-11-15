import "./Sidebar.css";

function SideBar() {
	return (
		<div className="app__sidebar">
			<div className="app__sidebar-genre">
				<p className="p__subtopic">Genre</p>
				<div className="app__sidebar-links">
					<a href="#Adventure" className="link">
						Adventure
					</a>
					<a href="#Fantasy" className="link">
						Fantasy
					</a>
					<a href="#Animation" className="link">
						Animation
					</a>
					<a href="#Drama" className="link">
						Drama
					</a>
					<a href="#Horror" className="link">
						Horror
					</a>
					<a href="#Action" className="link">
						Action
					</a>
					<a href="#Action" className="link">
						Action
					</a>
					<a href="#Comedy" className="link">
						Comedy
					</a>
					<a href="#History" className="link">
						History
					</a>
					<a href="#Western" className="link">
						Western
					</a>
					<a href="#Thriller" className="link">
						Thriller
					</a>
					<a href="#Crime" className="link">
						Crime
					</a>
					<a href="#Documentary" className="link">
						Documentary
					</a>
					<a href="#ScienceFiction" className="link">
						Science Fiction
					</a>
					<a href="#Mystery" className="link">
						Mystery
					</a>
					<a href="#Music" className="link">
						Music
					</a>
					<a href="#Romance" className="link">
						Romance
					</a>
					<a href="#Family" className="link">
						Family
					</a>
					<a href="#War" className="link">
						War
					</a>
				</div>
			</div>
			<div className="app__sidebar-language">
				<p className="p__subtopic">Language</p>
				<div className="app__sidebar-links">
					<a href="#English" className="link">
						English
					</a>
					<a href="#Hindi" className="link">
						Hindi
					</a>
					<a href="#Baghi" className="link">
						Baghi
					</a>
				</div>
			</div>
			<div className="app__sidebar-copyright">
				<p>SGC, 2023</p>
			</div>
		</div>
	);
}

export default SideBar;
