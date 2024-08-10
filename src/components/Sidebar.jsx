import svgLinkedin from '../assets/linkedin.svg';
import svgGithub from '../assets/github.svg';
import svgCross from '../assets/cross.svg';
import profilePicture from '../assets/icon.jpeg';
import gifSpyro from '../assets/spyro_running.gif';
import { useState } from 'react';

export default function Sidebar({ showSidebar, setShowSidebar }) {
	let [count, setCount] = useState(0);
	let [displaySpyro, setDisplaySpyro] = useState(false);
	function handleClickCross() {
		setShowSidebar(false);
	}

	function handleClickProfilePicture() {
		if (count > 1) {
			setCount(0);
			setDisplaySpyro(true);
			setTimeout(() => {
				setDisplaySpyro(false);
			}, 3000);
		} else {
			setCount(count + 1);
		}
	}

	return (
		<div
			className={
				'absolute sm:sticky w-full sm:w-5/12 z-10 h-screen top-0 sm:translate-x-0 sidebar ' +
				(showSidebar ? 'sidebar-active' : '')
			}>
			<div
				className={
					'flex flex-col justify-evenly w-full h-full z-bg-blue-dark'
				}>
				<div
					onClick={handleClickCross}
					className="sm:hidden ml-4 mt-4 mb-4 shrink-1">
					<img className="w-10" src={svgCross} alt="Cross" />
				</div>
				<div
					onClick={handleClickProfilePicture}
					className="grow sm:grow-0">
					<div className="flex justify-center">
						<img
							className={
								'w-6/12 ' + (displaySpyro ? 'hidden' : '')
							}
							src={profilePicture}
							alt="Profile Picture"
						/>
						<img
							className={
								'w-6/12 ' + (displaySpyro ? '' : 'hidden')
							}
							src={gifSpyro}
							alt="Profile Picture"
						/>
					</div>
				</div>
				<nav className="grow sm:grow-0 text-white flex flex-col items-center">
					<ul>
						<a href="">
							<li className="py-2">Home</li>
						</a>

						<a href="mailto:alejokimwork@gmail.com">
							<li className="py-2">Contact Me</li>
						</a>
					</ul>
				</nav>
				<div className="grow sm:grow-0 flex justify-center">
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
		</div>
	);
}
