import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Main() {
	return (
		<div>
			<div class="h-screen bg-black">
				<div class="container relative text-center text-white">
					<Image
						src="/main.png"
						objectFit="contain"
						width="100%"
						height="100%"
						layout="responsive"
					/>
					<div class="absolute top-4 left-4 text-4xl text-black">
						The CA Rob
					</div>
					<div class="absolute top-3 left-4 text-4xl text-black">
						The CA Rob
					</div>
					<div class="absolute top-14 left-1 text-4xl text-black">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</div>
					<Link href="https://www.youtube.com/watch?v=dKCnHUgfGRw">
						<div class="absolute top-[54px] left-8 cursor-pointer text-lg text-black hover:text-red-500 ">
							Watch the Official Music Video
							<span class="text-red-500">(Love Over Fear)</span>
						</div>
					</Link>

					<Link href="https://www.instagram.com/the_ca_rob/">
						<div class="absolute top-24 left-8 text-lg text-black hover:text-red-500 ">
							Shop The Collection (Coming Soon)
						</div>
					</Link>

					<Link href="https://www.youtube.com/c/TheCARob">
						<div class="absolute top-32 left-8 text-lg text-black hover:text-red-500 ">
							Watch The Latest
						</div>
					</Link>
				</div>
				{/* social media */}
				<div class="flex justify-around py-2">
					<Link href="https://www.apple.com/apple-music/">
						<Image
							src="/apple.png"
							objectFit="none"
							width={30}
							height={30}
							class="cursor-pointer hover:scale-110"
						/>
					</Link>

					<Link href="https://open.spotify.com/artist/2hY99xxvMKhHvySIZ1WFlY">
						<Image
							src="/spotify.png"
							objectFit="none"
							width={30}
							height={30}
							class="cursor-pointer hover:scale-110"
						/>
					</Link>

					<Link href="https://soundcloud.com/dj-yellow-5/morning-uplift-ft-the-ca-rob">
						<Image
							src="/soundcloud.png"
							objectFit="none"
							width={30}
							height={30}
							class="cursor-pointer hover:scale-110"
						/>
					</Link>
					<Link href="https://twitter.com/">
						<Image
							src="/twitter.png"
							objectFit="none"
							width={30}
							height={30}
							class="cursor-pointer hover:scale-110"
						/>
					</Link>
					<Link href="https://www.instagram.com/the_ca_rob/">
						<Image
							src="/instagram.png"
							objectFit="none"
							width={30}
							height={30}
							class="cursor-pointer hover:scale-110"
						/>
					</Link>
					<Link href="https://www.facebook.com/">
						<Image
							src="/facebook.png"
							objectFit="none"
							width={30}
							height={30}
							class="cursor-pointer hover:scale-110"
						/>
					</Link>

					<Link href="https://www.youtube.com/c/TheCARob">
						<Image
							src="/youtube.png"
							objectFit="none"
							width={30}
							height={30}
							class="cursor-pointer hover:scale-110"
						/>
					</Link>
				</div>
				<div class="flex flex-col px-5">
					<Link href="https://www.instagram.com/the_ca_rob/">
						<p class="cursor-pointer py-3 text-white hover:text-red-500">
							Agency
						</p>
					</Link>
					<Link href="https://www.instagram.com/the_ca_rob/">
						<p class="cursor-pointer py-3 text-white hover:text-red-500">
							Press
						</p>
					</Link>
					<Link href="https://www.instagram.com/the_ca_rob/">
						<p class="cursor-pointer py-3 text-white hover:text-red-500">
							Management
						</p>
					</Link>
					<Link href="https://www.instagram.com/the_ca_rob/">
						<p class="cursor-pointer py-3 text-white hover:text-red-500">
							Booking
						</p>
					</Link>
					<div class="absolute bottom-14 right-8 text-4xl text-white">🚀</div>
				</div>
			</div>
			{/* BG image */}
			{/* Header */}
			{/* 2 Links */}
			{/* Shop The Collection */}
			{/* Watch The Latest */}
			{/* BG Image */}
			{/* 1st footer social media */}
			{/* 2nd footer  */}
			{/* rocket emoji */}
		</div>
	);
}

export default Main;
