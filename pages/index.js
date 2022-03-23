import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/navbar.js';



const Index = props => {

	return (
		<div className="static flex flex-col place-items-center overflow-y-auto overscroll-x-none w-screen">
			<div className="static w-3/5">
				<div className="flex flex-col mb-10">
					<Navbar home />
				</div>
				<div className="flex flex-row space-x-3">
					<div className="flex flex-col w-2/3">
						<Link href="/articles/motivational-penguins">
							<div className="flex flex-row cursor-pointer">
								<div className="flex flex-col w-3/5 mr-10">
									<span className="text-black font-body font-bold text-xl">New motivational website helps you with the power of penguins!</span>
									<span className="text-gray-500 font-body text-sm mt-3">This website includes 3 different hand drawn images that randomly appear every time you reload.</span>
									<span className="text-gray-500 font-body text-sm mt-3">Currently, you get the same color background every time you reload, but an exclusive interview with the developer may reveal an upcoming update to change this.</span>
								</div>
								<div className="flex flex-col w-1/3">
									<Image 
										src="/images/penguin.png"
										alt="An image of motivationalpengu.in's logo was supposed to be here"
										width={250}
										height={250}
									/>
								</div>
							</div>
						</Link>
						<hr className="my-7" />
						<div className="flex flex-row">
								<Link href="https://www.nytimes.com/2021/05/13/us/coronavirus-vaccine-children-ages-12-15.html">
									<div className="flex flex-col w-1/2 mr-3 cursor-pointer">
										<span className="text-black font-body font-bold text-xl">‘I Just Got My Vaccine’: U.S. Rollout Expands to Children Ages 12 to 15</span>
										<span className="text-gray-500 font-body text-sm mt-3">About 17 million children in the age group are newly eligible for the vaccine, the biggest indication yet that life could soon return to something more like normal for American teenagers.</span>
									</div>
								</Link>
								<div className="h-36 w-px bg-gray-300"></div>
								<Link href="https://www.nytimes.com/2021/05/15/world/americas/covid-vaccine-patent-biden.html">
									<div className="flex flex-col w-1/2 ml-3 cursor-pointer">
										<span className="text-black font-body font-bold text-xl">What Would It Take to Vaccinate the World Against Covid?</span>
										<span className="text-gray-500 font-body text-sm mt-3">When President Biden joined a push to set aside patents for Covid shots, he entered a roiling debate over how to ensure poor countries get enough vaccine.</span>
									</div>
								</Link>
						</div>
					</div>
					<div className="flex flex-col">
						<div className="h-96 w-px bg-gray-300"></div>
						<div className="h-96 w-px bg-gray-300"></div>
					</div>
					<div className="flex flex-col w-1/3">
						<span className="font-body text-lg">Opinion</span>
						<Link href="/articles/opinion-kyllo-vs-us">
							<div className="flex flex-row mt-3 cursor-pointer">
								<div className="flex flex-col w-1/2">
									<span className="font-body text-gray-400 font-bold">Oliver Wu</span>
									<span className="font-body text-black font-bold">Kyllo v. United States: Does Kyllo have a chance?</span>
								</div>
								<Image 
									src="/images/thermal_street_square.png"
									alt="An image of a street that has been thermally scanned was supposed to be here."
									width={100}
									height={100}
								/>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>

	)
}

export default Index;