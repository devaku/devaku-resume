import { useState } from 'react';
import './output.css';

import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

function App() {
	const [showSidebar, setShowSidebar] = useState(false);

	return (
		<>
			<div className="z-bg-blue">
				<div className="flex">
					<Sidebar
						showSidebar={showSidebar}
						setShowSidebar={setShowSidebar}></Sidebar>
					<main className={'w-11/12 md:w-6/12 mx-auto text-white '}>
						<Header setShowSidebar={setShowSidebar}></Header>
						<section className="my-4">
							<h3 className="text-3xl roboto-serif-700">
								Profile
							</h3>
							<p className="text-justify">
								A skilled professional, bringing a strong work
								ethic, web development expertise, and simple yet
								creative solutions to technical problems. Eager
								to join the workforce, I am ready to hit the
								ground running and apply myself to the job to
								the best of my ability. My goal is to put my
								knowledge, skills and understanding to good use
								and provide remarkable service to the
								organization.
							</p>
						</section>

						<section className="my-4 overflow-hidden">
							<div>
								<h3 className="text-3xl roboto-serif-700">
									Experience
								</h3>
							</div>
							<div>
								<div className="flex">
									<div className="mr-2">
										<span className="block w-4 h-4 rounded-full mt-1 z-bg-yellow"></span>
										<span className="block w-1 h-full translate-x-[6px] z-bg-yellow"></span>
									</div>
									<div className="">
										<div className="font-bold">
											<span>Web Developer</span>
											<span>TinkrTech Inc</span>
										</div>
										<div className="">
											<div>April 2022 - April 2024</div>
											<div>
												Dasmariñas City, Cavite,
												Philippines
											</div>
										</div>

										<div className="text-justify">
											<p>
												Developed microservices to break
												down a currently existing
												monolithic software.
											</p>
											<p>
												Led the creation of various REST
												APIs that interfaced with
												different applications in the
												company.
											</p>
											<p>
												Assisted in the continued
												maintenance of the software of
												the company.
											</p>
										</div>
									</div>
								</div>

								<div className="flex">
									<div className="mr-2">
										<span className="block w-4 h-4 rounded-full mt-1 z-bg-yellow"></span>
									</div>
									<div className="">
										<div className="font-bold">
											<span>
												Information Technology
												Programmer
											</span>
											<span>HTech Corporation</span>
										</div>
										<div className="">
											<div>April 2016 - May 2022</div>
											<div>
												Muntinlupa, Alabang, Philippines
											</div>
										</div>
										<div className="text-justify">
											<p>
												Developed a Rule-Based Chatbot
												Application: GetBotty.
											</p>
											<p>
												Integrated different
												payment-gateway services to the
												GetBotty project: Stripe,
												PayMaya, GrabPay
											</p>
											<p>
												Created various technical
												applications for internal use
												within the company.
											</p>
										</div>
									</div>
								</div>
							</div>
						</section>

						<section>
							<div>
								<h3 className="text-3xl roboto-serif-700">
									Skills
								</h3>
							</div>

							<div className="grid grid-cols-3 gap-1 text-center">
								<div>HTML</div>
								<div>CSS</div>
								<div>JavaScript</div>
								<div>React</div>
								<div>Express</div>
								<div>NodeJS</div>
								<div>SQL</div>
								<div>Python</div>
							</div>
						</section>

						<section className="my-4 overflow-hidden">
							<div>
								<h3 className="text-3xl roboto-serif-700">
									Education
								</h3>
							</div>
							<div>
								<div className="flex">
									<div className="mr-2">
										<span className="block w-4 h-4 rounded-full mt-1 z-bg-yellow"></span>
										<span className="block w-1 h-full translate-x-[6px] z-bg-yellow"></span>
									</div>
									<div className="">
										<div className="font-bold">
											Diploma in Software Development
										</div>
										<div>
											<div>
												Expected Date: December 2025
											</div>
											<div>
												Southern Alberta Institute of
												Technology
											</div>
										</div>
									</div>
								</div>

								<div className="flex">
									<div className="mr-2">
										<span className="block w-4 h-4 rounded-full mt-1 z-bg-yellow"></span>
										<span className="block w-1 h-full translate-x-[6px] z-bg-yellow"></span>
									</div>
									<div className="">
										<div className="font-bold">
											Master in Information Technology
										</div>
										<div className="">
											<div>2017 - 2021</div>
											<div>
												De La Salle
												University–Dasmariñas
											</div>
										</div>
									</div>
								</div>

								<div className="flex">
									<div className="mr-2">
										<span className="block w-4 h-4 rounded-full mt-1 z-bg-yellow"></span>
									</div>
									<div className="">
										<div className="font-bold">
											Bachelor of Science in Computer
											Science
										</div>
										<div className="">
											<div>2011 - 2014</div>
											<div>
												De La Salle
												University–Dasmariñas
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
					</main>
				</div>

				<Footer></Footer>
			</div>
		</>
	);
}

export default App;
