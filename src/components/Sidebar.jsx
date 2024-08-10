import svgLinkedin from '../assets/linkedin.svg';
import svgGithub from '../assets/github.svg';
import svgCross from '../assets/cross.svg';
import profilePicture from '../assets/icon.jpeg';

export default function Sidebar({ showSidebar, setShowSidebar }) {
	function handleClickCross() {
		setShowSidebar(false);
	}

	return (
		<div
			className={
				'absolute md:fixed flex flex-col justify-evenly w-full h-full z-bg-blue-dark z-10 sidebar ' +
				(showSidebar ? 'sidebar-active' : '')
			}>
			<div onClick={handleClickCross} className="ml-4 mt-4 mb-4 shrink-1">
				<img className="w-10" src={svgCross} alt="Cross" />
			</div>
			<div className="grow">
				<div className="flex justify-center">
					<img
						className="w-6/12"
						src={profilePicture}
						alt="Profile Picture"
					/>
				</div>
			</div>
			<nav className="grow text-white flex flex-col items-center">
				<ul>
					<a href="">
						<li className="py-2">Home</li>
					</a>

					<a href="mailto:alejokimwork@gmail.com">
						<li className="py-2">Contact Me</li>
					</a>
				</ul>
			</nav>
			<div className="grow flex justify-center">
				<div className="w-full flex justify-center gap-4">
					<a href="https://www.linkedin.com/in/devaku/">
						<img
							className="inline-block invert"
							src={svgLinkedin}
							alt="LinkedIn"
						/>
					</a>

					<a href="https://github.com/devaku?tab=repositories">
						<img
							className="inline-block invert"
							src={svgGithub}
							alt="Github"
						/>
					</a>
				</div>
			</div>
		</div>
	);
}
