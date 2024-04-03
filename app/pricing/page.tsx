import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils';

import { DownloadIcon, ReaderIcon } from "@radix-ui/react-icons"

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import { Button, buttonVariants } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"

import Topbar from '@/components/Topbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Pricing - Projectastic',
	description: 'Check out our generous pricing model (hint: it\'s 100% free!)',
}

const PRICING_DATA = [
	{
		name: 'Hobby',
		tagline: 'Don\'t pay, use forever',
		price: 'FREE',
		priceline: 'Download Now',
		pricecolor: 'default',
		features: [
			'Everything',
			'Also everything',
			'Even more everything',
			'And even more everything',
			'No hidden fees',
			'No data stored',
		]
	},
	{
		name: <span className='text-pink-500'>Pro</span>,
		tagline: 'Go Pro at absolutely no cost',
		price: <span className='text-pink-500'>FREE</span>,
		priceline: 'Upgrade',
		pricecolor: 'pink',
		features: [
			<b className='text-pink-500'>Everything included in Hobby, plus:</b>,
			'You already have everything...',
			<span className='text-transparent select-none'>You</span>,
			<span className='text-transparent select-none'>Found</span>,
			<span className='text-transparent select-none'>Filler</span>,
			<span className='text-transparent select-none'>Text</span>,
		]
	},
	{
		name: 'Enterprise',
		tagline: 'Bring your own company',
		price: 'FREE',
		priceline: 'Contact Sales',
		pricecolor: 'default',
		features: [
			<b className='text-white'>Everything included in Pro, plus:</b>,
			'...was it not clear enough?',
			<span className='text-transparent select-none'>You</span>,
			<span className='text-transparent select-none'>Found</span>,
			<span className='text-transparent select-none'>Filler</span>,
			<span className='text-transparent select-none'>Text</span>,
		]
	}
]

type ArrayElement<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
type ValueOf<T> = T[keyof T];


function PricingPanel({ data }: { data: ArrayElement<typeof PRICING_DATA>}) {
	return (
		<Card className="w-[350px]">
			<CardHeader>
				<div className="font-bold">
					<div className="text-4xl">{data.name}</div>
					<div className="mt-5 font-normal text-muted-foreground/75 text-xl">{data.tagline}</div>
					<div className="mt-7 text-2xl">{data.price}</div>
				</div>
				<div className="font-medium text-muted-foreground/50">/month</div>
			</CardHeader>
			<CardContent>
				<ul className="flex flex-col justify-start space-y-3">
					{data.features.map((feature, i) => {
						return <li key={i} className="text-md text-muted-foreground">{feature}</li>
					})}
				</ul>
			</CardContent>
			<CardFooter className="flex justify-center">
				<Link href={'/download'} style={{ 'width': '90%' }} className={buttonVariants({ variant: data.pricecolor as any })}>{data.priceline}</Link>
			</CardFooter>
		</Card>
	)
}

export default function Pricing() {
	return (
		<div className='min-h-screen h-fit flex flex-col'>
			<Topbar />
			<div className="flex flex-grow"></div>
			<div className="flex flex-col justify-start items-center text-center">
				<div className="mt-16 text-6xl font-bold">Pick the plan that works for you</div>
				<div className="mt-10 text-2xl text-primary/30">We're sure you'll like something we have to offer</div>
				<div className="mt-14 flex flex-row justify-center items-center space-x-10">
					{PRICING_DATA.map((data, i) => {
						return <PricingPanel key={i} data={data} />
					})}
				</div>
				<div className="mt-14 font-bold text-3xl">Still have questions?</div>
				<Accordion type="single" collapsible className="my-10 w-1/3 text-left">
					<AccordionItem value="item-1">
						<AccordionTrigger>So, this is free?</AccordionTrigger>
						<AccordionContent>
							Yup! Projectastic is 100% free and open source, with all code hosted on Github. Feel free to check it out and contribute!
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2">
						<AccordionTrigger>Is there a catch?</AccordionTrigger>
						<AccordionContent>
							Nope, none at all. We never collect or process any of your data, so there&apos;s no risk to your data whatsoever.
							Projectastic runs completely on your computer, and data sync can be enabled through Git syncing at your discretion.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-3">
						<AccordionTrigger>Can I support this project?</AccordionTrigger>
						<AccordionContent>
							As of currently, there is no way to officially support the developement of Projectastic, but you can <Link href={'https://github.com/Projectastic/projectastic-web'} className='underline'>leave a ⭐️ on our repo!</Link>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
			<div className="flex flex-grow"></div>
		</div>
	)
}