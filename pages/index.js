import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
	return (
		<div className="h-screen bg-black">
			<Head>
				<title>The CA Rob</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link
					rel="icon"
					href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡️</text></svg>"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<Link href="/Main">
				<h1 class="mb-10 cursor-pointer py-10 text-center text-2xl text-white underline decoration-gray-400">
					CLICK TO ENTER
				</h1>
			</Link>

			<Link href="/Main">
				<p class="cursor-pointer py-10 text-center  text-9xl text-white">
					THE CA ROB
				</p>
			</Link>
		</div>

		// Header
		// TheCARob
		// Best Mexican-American Rapper
	);
}
