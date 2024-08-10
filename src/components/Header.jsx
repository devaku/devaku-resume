import burgerSvg from '../assets/burger.svg';

export default function Header({ setShowSidebar }) {
	function handleBurgerClick() {
		setShowSidebar(true);
	}
	return (
		<header className="mt-4 overflow-hidden">
			<div className="flex flex-row overflow-hidden">
				<div
					onClick={handleBurgerClick}
					className="md:hidden w-10 flex flex-col items-center">
					<img src={burgerSvg} alt="Burger Menu" />
				</div>
				<div className="grow-1 text-3xl w-full content-center">
					<p className="roboto-serif-700 text-center">Alejo Kim Uy</p>
				</div>
			</div>
		</header>
	);
}
