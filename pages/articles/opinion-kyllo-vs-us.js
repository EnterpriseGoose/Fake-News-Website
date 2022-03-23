import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/navbar.js';



const Article = props => {

	return (
		<div className="static flex flex-col place-items-center w-screen mb-36">
			<div className="flex flex-col sticky w-full">
				<Navbar />
			</div>
			<div className="flex flex-col mt-10 place-items-center">
				<div className="flex flex-col mb-8">
					<Link href="/category/opinion">
						<span className="text-red-600 text-center text-md font-body cursor-pointer">
							OPINION
						</span>
					</Link>
					<span className="text-center text-md mb-3 font-body">
						OLIVER WU
					</span>
					<hr className="w-3/4 self-center" />
				</div>
				<span className="font-title text-center text-6xl">
					Kyllo v. United States: <br /> Does Kyllo have a chance?
				</span>
				<span className="font-typeface text-s text-gray-800 mt-5 mb-6">
					February 23, 2001
				</span>
				<div className="flex flex-col">
					<Image 
						src="/images/thermal_street.jpeg"
						alt="Oops... The image didn't show up. An image of a street that has been thermally scanned was supposed to be here."
						width={500 * 1.99585921}
						height={500}
						layout="intrinsic"
						draggable="false"
					/>
					<span className="font-body text-xs text-gray-500 mt-1.5 ml-1 place-self-start">
						Thermal scan of street - Unknown
					</span>
				</div>
				<div className="flex flex-col w-1/3 mt-16">
					<hr/>
					<div className="flex flex-row my-6 font-typeface ml-16">
						<span>
							<strong>By <u><Link href="/authors/Oliver-Wu">Oliver Wu</Link></u></strong>
							<br/>
							<div className="text-gray-800">Opinion Columnist</div>
						</span>
					</div>
					<hr/>
					<span className="font-body text-black mt-10 text-xl mb-10 leading-relaxed">
						The supreme court case Kyllo v. The United States will set an important precedent for our privacy within and around our own homes. This case started when officers suspected that Kyllo had been growing marijuana. They didn’t have probable cause, though, which is required to get a warrant under the 4th amendment. 
						<br/><br/>
						They then, to get a warrant to be able to search Kyllo’s house, used thermal imaging on Kyllo’s house to show that Kyllo had a suspicious amount of heat. They assumed that this thermal scan was allowed under the fourth amendment. They then used this information to get a warrant, search Kyllo’s home, and find the marijuana plants. 
						<br/><br/>
						Kyllo is arguing that the thermal scan was unconstitutional, so therefore the warrant and then search were unconstitutional, so the court couldn’t’ve used the information gathered from the search against him. The US is arguing that the information was not protected under the fourth amendment, so all of it could be constitutionally searched and used in court.
						<br/><br/>
						It was already decided last year in the lower courts that the US was allowed to take the thermal scan. This was from a more legal view, comparing this case to previous precedents. 
						<br/><br/>
						Looking at the case this way, with no thought about the morals of whether or not the government <i>should</i> be allowed to search your heat signature, makes it pretty clear that the officers were right. 
						<br/><br/>
						After all, one common misconception about thermal scans is that they don’t actually give any information about the heat inside of the house, it’s just what heat comes out, and once heat gets outside the house, it’s in public domain, just in plain view, so the officers should just be allowed to look at it. Multiple precedents have been set in the past allowing exceptions to 4th amendment rights, one of them <i>being</i> that officers are allowed to search and seize items that are just in plain view.
						<br/><br/>
						Firstly, there is a common misconception that these thermal scans can see inside places, that they’re some kind of x-ray device. This is not true, a thermal imager can only see heat that’s within plain view of the imager, so just whatever heat is leaking out of the house. 
						<br/><br/>
						As you can see from the image below, you can only see that there’s a bunch of heat around the windows, roof, and gaps between the walls and roof, but no heat signature from the inside of the house.
					</span>
				</div>
				<div className="flex flex-col">
					<Image 
						src="/images/thermal_house.png"
						alt="Oops... the image didn't show up.. (Doc C was supposed to be here)"
						width={800}
						height={800 * 0.580357143}
						draggable="false"
					/>
					<span className="font-body text-xs text-gray-500 mt-1.5 ml-1 place-self-start mb-10">
						Thermal scan of house - 123rf Royalty Free Photos (Doc C)
					</span>
				</div>
				<div className="flex flex-col w-1/3">
					<span className="font-body text-black text-xl mb-4 leading-relaxed">
					This already means that the information the thermal imager is getting is not super private. Any information that a thermal scanner gets is just sitting there, in plain public view. 
					<br/><br/>
					As the US said in their court reply brief, the thermal scan just “scanned a surface exposed to public view in order to detect the physical fact of relative heat (escape).” (Doc E) This means that the thermal scanner just looked at what was exposed to the public and analyzed it for the heat that was escaping; information that should be under public domain.
					<br/><br/>
					The next part of this to discuss is - even if it’s in public domain - whether or not officers can search it. 
					<br/><br/>
					There have been multiple exceptions to the 4th amendment over the years, such as with the Carroll v. United States case where vehicles were established as an exception (Doc A), or the Coolidge v. New Hampshire case, which made objects in plain view an exception. 
					<br/><br/>
					This is an example of where the heat image was in plain view, so it shouldn’t be protected, so the officers should be able to search it.
					<br/><br/>
					In the end, legally, it feels like the 9th circuit court got this case correct. There’s even another argument that’s a little less legally-based, that is: if the police could go around with a thermal scanner, it would crack down on illegal drug growing significantly. 
					<br/><br/>
					If this technology became normalized, it could make the police much more efficient. As a guide to using thermal imaging (that we took from 6 years in the future) will say, using a thermal scanner on a suspect’s house can be “another indicator in your investigation that the suspect is indeed growing marijuana.” (Doc B) Using this tool could help police a lot, so there is also an argument to be had that police should be able to use this tool just for efficiency’s sake.
					<br/><br/>
					<br/>
					After all is said and done, though, really the supreme court isn’t picking just a legal decision, it’s also picking a moral one. The supreme court shapes the constitution so much that it’s decisions need to be based somewhat on what is morally right, and in the end I feel like the government shouldn’t really be able to just willy-nilly take a thermal image of your house. 
					<br/><br/>
					Even if it’s not exposing specific details of the inside of your house, it still feels like it’s intruding in your privacy. I also think that this may be a reason why the supreme court took this case in the first place. It seems like what happened was that legally the supreme court agreed with the lower courts, but it took the case so that it could set a precedent that this kind of action is not morally right, so it should no longer be legal. 
					<br/><br/>
					I think this case will end with at least a 6-3 decision towards Kyllo, but we will just have to wait and see: Will the legal argument, or the moral argument win?
					<br/><br/>
					</span>
				</div>
			</div>
		</div>

	)
}

export default Article;