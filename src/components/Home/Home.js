import { Carousel } from "flowbite-react";
import React from "react";

const Home = () => {
	return (
		<div>
			<div id="controls-carousel" className="relative" data-carousel="static">
				{/* <!-- Carousel wrapper --> */}
				<div className="relative h-56 overflow-hidden rounded-lg md:h-96">
					{/* <!-- Item 1 --> */}
					<div
						className="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10"
						data-carousel-item=""
					>
						<img
							src="https://i.ibb.co/4mQxJ6c/study2.jpg"
							className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
							alt="..."
						/>
					</div>
					{/* <!-- Item 2 --> */}
					<div
						className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
						data-carousel-item="active"
					>
						<img
							src="https://i.ibb.co/q0RKgN9/study4.jpg"
							className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
							alt="..."
						/>
					</div>
					{/* <!-- Item 3 --> */}
					<div
						className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10"
						data-carousel-item=""
					>
						<img
							src="https://i.ibb.co/C1DqXgv/study5.jpg"
							className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
							alt="..."
						/>
					</div>
				</div>
				{/* <!-- Slider controls --> */}
				<button
					type="button"
					className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
					data-carousel-prev=""
				>
					<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
						<svg
							aria-hidden="true"
							className="w-6 h-6 text-white dark:text-gray-800"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 19l-7-7 7-7"
							></path>
						</svg>
						<span className="sr-only">Previous</span>
					</span>
				</button>
				<button
					type="button"
					className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
					data-carousel-next=""
				>
					<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
						<svg
							aria-hidden="true"
							className="w-6 h-6 text-white dark:text-gray-800"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 5l7 7-7 7"
							></path>
						</svg>
						<span className="sr-only">Next</span>
					</span>
				</button>
			</div>

			{/* <div classNameName="h-56 sm:h-64 xl:h-80 2xl:h-96">
				<Carousel>
					<img
						src="https://i.ibb.co/q0RKgN9/study4.jpg"
						alt="..."
					/>
					<img
						src="https://i.ibb.co/4mQxJ6c/study2.jpg"
						alt="..."
					/>
					<img
						src="https://i.ibb.co/C1DqXgv/study5.jpg"
						alt="..."
					/>
					
				</Carousel>
			</div> */}
		</div>
	);
};

export default Home;
