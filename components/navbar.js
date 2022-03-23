import Link from 'next/link';
import Image from 'next/image';

const pages = [
	{
		name: "World",
		url: "world"
	},
	{
		name: "U.S.",
		url: "us"
	},
	{
		name: "Politics",
		url: "politics"
	},
	{
		name: "Business",
		url: "business"
	},
	{
		name: "Tech",
		url: "tech"
	},
	{
		name: "Science",
		url: "science"
	},
	{
		name: "Health",
		url: "health"
	},
	{
		name: "Sports",
		url: "sports"
	},
	{
		name: "Arts",
		url: "arts"
	},
	{
		name: "Books",
		url: "books"
	},
	{
		name: "Style",
		url: "style"
	},
	{
		name: "Food",
		url: "food"
	},
	{
		name: "Travel",
		url: "travel"
	},
	{
		name: "Real Estate",
		url: "real-estate"
	}
]

const Navbar = (props) => {
	let buttons = "";
	let width = "250";
	let pt = "2"
	if (props.home) {
		width = "500"
		pt = "8"
		buttons = (
			<div>
				<div className="sticky flex flex-row place-items-center place-content-center text-xs nav space-x-4 mb-1">
					{
						pages.map(page => (
							<Link href={`/category/${page.url}`}>
								<div className="rounded-sm hover:bg-gray-100 cursor-pointer px-2 py-1 mt-1">
									<span>
										{page.name}
									</span>
								</div>
							</Link>
						))
					}
				</div>
				<hr className="border-black" />
			</div>
		)
	}
	return (
		<div className="relative flex flex-col select-none">
			<div className={`flex flex-row w-full pt-${pt} pb-2 place-items-center place-content-center`}>
				<Link href="/">
					<div className="flex flex-row cursor-pointer">
						<Image
							src="/images/logo.svg"
							alt="Awww... (Due to an error) you can't see my really cool logo :( I was so proud of it..."
							draggable="false"
							width={width}
							height={width * 0.091140854}
						/>
					</div>
				</Link>
			</div>
			<hr className="border-gray-200" />
			{buttons}
		</div>
	)
}

export default Navbar;