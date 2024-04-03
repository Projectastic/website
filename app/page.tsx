import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils';

import { DownloadIcon, ReaderIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"

import Topbar from '@/components/Topbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Home - Projectastic',
	description: 'Manage all of your projects - for free!',
}

export default function Home() {
	return (
		<div className='min-h-screen h-fit flex flex-col'>
			<Topbar />
			<div className="flex flex-grow"></div>
			<div className="flex flex-col justify-center items-center text-center">
				<div className="text-9xl [line-height:1.25] font-bold bg-gradient-to-r bg-[size:200%_100%] from-pink-500 via-yellow-500 to-pink-500 bg-clip-text text-transparent animate-flow"> Projectastic</div>
				<div className='mt-10 text-4xl font-semibold'>Say hello to the next generation of project management</div>
				<div className="mt-16 flex flex-row justify-center text-center space-x-10">
					<Link href={'/download'}>
						<div className="px-9 py-3 flex flex-row justify-center items-center text-center bg-primary font-medium text-primary-foreground text-xl rounded-lg hover:bg-primary/80 transition duration-200"><DownloadIcon className="mr-2 h-5 w-5" /> Download</div>
					</Link>
					<Link href={'/docs'}>
						<div className="group px-0.5 py-0.5 font-medium flex flex-col justify-center items-center border bg-gradient-to-r bg-[size:200%_100%] from-pink-500 via-yellow-500 to-pink-500 animate-flow bg-clip-border rounded-lg">
							<div className="px-9 py-3 h-max w-max flex flex-row justify-center items-center bg-primary-foreground group-hover:bg-muted rounded-md text-primary text-center text-xl transition duration-200"><ReaderIcon className="mr-2 h-5 w-5" /> Docs</div>
						</div>
					</Link>
				</div>
			</div>
			<div className="flex flex-grow"></div>
		</div>
	)
}