import Link from 'next/link';
import Navbar from '../../components/navbar.js';

const Podcast = (props) => {
	return (<div className="static flex flex-col place-items-center w-screen mb-36">
		<div className="flex flex-col sticky w-full">
			<Navbar />
		</div>
		<div className="flex flex-col mt-10 place-items-center">
			<div className="text-4xl font-typeface mb-10">
				Podcast:
			</div>
			<audio
				controls
				src="/audio/tib-21.wav"
				className="w-150">
				Your browser seems to not support embeded audio :(
			</audio>
			<div className="flex flex-col mt-10 place-items-center text-4xl font-typeface">
				<div>
					Sources:
				</div>
				<div className="child-links flex flex-col mt-5 place-items-center text-2xl font-typeface">
					<a target="_blank" href="https://www.history.com/topics/black-history/thirteenth-amendment">https://www.history.com/topics/black-history/thirteenth-amendment</a>
					<a target="_blank" href="https://www.nytimes.com/2015/03/29/opinion/sunday/why-reconstruction-matters.html">https://www.nytimes.com/2015/03/29/opinion/sunday/why-reconstruction-matters.html</a>
					<a target="_blank" href="https://www.fjc.gov/history/timeline/civil-rights-act-1866">https://www.fjc.gov/history/timeline/civil-rights-act-1866</a>
					<a target="_blank" href="https://www.loc.gov/classroom-materials/elections/right-to-vote/voting-rights-for-african-americans/">https://www.loc.gov/classroom-materials/elections/right-to-vote/voting-rights-for-african-americans/</a>
					<a target="_blank" href="https://online.law.tulane.edu/articles/history-of-law-the-fourteenth-amendment">https://online.law.tulane.edu/articles/history-of-law-the-fourteenth-amendment</a>
					<a target="_blank" href="https://www.wxxinews.org/post/historian-eric-foner-unresolved-legacy-reconstruction">https://www.wxxinews.org/post/historian-eric-foner-unresolved-legacy-reconstruction</a>
					<a target="_blank" href="https://www.npr.org/2019/09/17/761551835/second-founding-examines-how-reconstruction-remade-the-constitution">https://www.npr.org/2019/09/17/761551835/second-founding-examines-how-reconstruction-remade-the-constitution</a>
					<a target="_blank" href="https://www.ourdocuments.gov/doc.php?flash=false&doc=100">https://www.ourdocuments.gov/doc.php?flash=false&doc=100</a>
					<a target="_blank" href="https://www.archives.gov/legislative/features/voting-rights-1965">https://www.archives.gov/legislative/features/voting-rights-1965</a>
					<a target="_blank" href="https://www.nytimes.com/2013/06/26/us/supreme-court-ruling.html">https://www.nytimes.com/2013/06/26/us/supreme-court-ruling.html</a>
					<a target="_blank" href="https://www.oyez.org/cases/2012/12-96">https://www.oyez.org/cases/2012/12-96</a>
					<a target="_blank" href="https://fivethirtyeight.com/features/what-we-know-about-voter-id-laws/">https://fivethirtyeight.com/features/what-we-know-about-voter-id-laws/</a>
					<a target="_blank" href="https://www.latimes.com/opinion/la-xpm-2012-aug-12-la-oe-thernstrom-vote-photo-i.d.-suppression-20120812-story.html">https://www.latimes.com/opinion/la-xpm-2012-aug-12-la-oe-thernstrom-vote-photo-i.d.-suppression-20120812-story.html</a>
					<a target="_blank" href="https://www.washingtonpost.com/opinions/voter-id-laws-are-good-protection-against-fraud/2011/07/08/gIQAGnURBI_story.html">https://www.washingtonpost.com/opinions/voter-id-laws-are-good-protection-against-fraud/2011/07/08/gIQAGnURBI_story.html</a>
					<a target="_blank" href="https://www.usnews.com/debate-club/should-photo-id-be-required-to-vote/voter-id-laws-are-designed-to-keep-people-from-voting">https://www.usnews.com/debate-club/should-photo-id-be-required-to-vote/voter-id-laws-are-designed-to-keep-people-from-voting</a>
				</div>
			</div>
		</div>
	</div>)
}

export default Podcast