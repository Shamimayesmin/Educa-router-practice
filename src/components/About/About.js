import React from "react";
import Chart from "../Chart/Chart";

const About = () => {
	return (
		<div>
			<div className="flex mb-10 bg-slate-50 mt-10">
				<div className="w-1/2 ">
					<img
						className="w-96 mx-auto h-96 rounded-full"
						src="https://i.ibb.co/M9mcxtg/study12.jpg"
						alt=""
					/>
				</div>
				<div className="w-1/2 p-10">
					<h2 className="text-3xl font-bold mb-8">
						Welcome to Shelly University
					</h2>
					<p className="text-justify">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
						placeat asperiores pariatur porro velit reiciendis, commodi labore
						maxime rem neque quas repellendus impedit nisi ipsum repudiandae
						voluptates nemo sunt iste.
					</p>
				</div>
			</div>
			<div className="flex mb-10 bg-slate-50 mt-10">
				<div className="w-1/2 p-10">
					<h2 className="text-3xl font-bold mb-8">Our Mission</h2>
					<p className="text-justify">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
						placeat asperiores pariatur porro velit reiciendis, commodi labore
						maxime rem neque quas repellendus impedit nisi ipsum repudiandae
						voluptates nemo sunt iste.
					</p>
				</div>

				<div className="w-1/2 ">
					<img
						className="w-96 mx-auto h-96 rounded-full"
						src="https://i.ibb.co/LRkqf1X/study6.jpg"
						alt=""
					/>
				</div>

				
			</div>

            <div className="grid mb-8 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
					<figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
						<blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
								Very easy this was to integrate
							</h3>
							<p className="my-4 font-light">
								If you care for your time, I hands down would go with this."
							</p>
						</blockquote>
						<figcaption className="flex justify-center items-center space-x-3">
							<img
								className="w-9 h-9 rounded-full"
								src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
								alt=""
							/>
							<div className="space-y-0.5 font-medium dark:text-white text-left">
								<div>Bonnie Green</div>
								<div className="text-sm font-light text-gray-500 dark:text-gray-400">
									Developer at Open AI
								</div>
							</div>
						</figcaption>
					</figure>
					<figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-tr-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
						<blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
								Solid foundation for any project
							</h3>
							<p className="my-4 font-light">
								Designing with Figma components that can be easily translated to
								the utility classes of Tailwind CSS is a huge timesaver!"
							</p>
						</blockquote>
						<figcaption className="flex justify-center items-center space-x-3">
							<img
								className="w-9 h-9 rounded-full"
								src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
								alt=""
							/>
							<div className="space-y-0.5 font-medium dark:text-white text-left">
								<div>Roberta Casas</div>
								<div className="text-sm font-light text-gray-500 dark:text-gray-400">
									Lead designer at Dropbox
								</div>
							</div>
						</figcaption>
					</figure>
					<figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-bl-lg border-b border-gray-200 md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
						<blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
								Mindblowing workflow
							</h3>
							<p className="my-4 font-light">
								Aesthetically, the well designed components are beautiful and
								will undoubtedly level up your next application."
							</p>
						</blockquote>
						<figcaption className="flex justify-center items-center space-x-3">
							<img
								className="w-9 h-9 rounded-full"
								src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
								alt=""
							/>
							<div className="space-y-0.5 font-medium dark:text-white text-left">
								<div>Jese Leos</div>
								<div className="text-sm font-light text-gray-500 dark:text-gray-400">
									Software Engineer at Facebook
								</div>
							</div>
						</figcaption>
					</figure>
					<figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-b-lg border-gray-200 md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
						<blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
								Efficient Collaborating
							</h3>
							<p className="my-4 font-light">
								You have many examples that can be used to create a fast
								prototype for your team."
							</p>
						</blockquote>
						<figcaption className="flex justify-center items-center space-x-3">
							<img
								className="w-9 h-9 rounded-full"
								src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
								alt=""
							/>
							<div className="space-y-0.5 font-medium dark:text-white text-left">
								<div>Joseph McFall</div>
								<div className="text-sm font-light text-gray-500 dark:text-gray-400">
									CTO at Google
								</div>
							</div>
						</figcaption>
					</figure>
			</div>
			<Chart></Chart>
		</div>
	);
};

export default About;
