'use client';

import Image from 'next/image'
import Link from 'next/link'
import React from 'react';

import { cn } from '@/lib/utils';

import {
	Avatar,
	AvatarFallback,
	AvatarImage
} from '@/components/ui/avatar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Button } from './ui/button';
import { ArrowRightIcon, DesktopIcon, DownloadIcon } from '@radix-ui/react-icons';
import { ThemeToggle } from './ThemeToggle';

// export default function Home() {
// 	return (
// 		<NavigationMenu>
// 			<NavigationMenuList>
// 				<NavigationMenuItem>
// 					<NavigationMenuTrigger>Item One</NavigationMenuTrigger>
// 					<NavigationMenuContent>
// 						<Link href="/docs" legacyBehavior passHref>
// 							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
// 								Documentation
// 							</NavigationMenuLink>
// 						</Link>
// 					</NavigationMenuContent>
// 				</NavigationMenuItem>
// 			</NavigationMenuList>
// 		</NavigationMenu>
// 	)
// }

interface Item {
	available: boolean;
	href: string;
	name: string;
}

interface DetailedItem extends Item {
	description: string;
	recent?: boolean;
}

const features: DetailedItem[] = [
	{
		available: false,
		name: "Views",
		href: "/docs/views",
		description:
			"Never miss a detail with ever-customizable views",
		recent: false,
	},
	{
		available: false,
		name: "Lists",
		href: "/docs/lists",
		description:
			"A simple but powerful way to manage issues and features",
		recent: false,
	},
	{
		available: false,
		name: "Kanban Boards",
		href: "/docs/kanban",
		description:
			"The industry-standard for project management",
		recent: true,
	},
	{
		available: false,
		name: "Roadmaps",
		href: "/docs/roadmaps",
		description:
			"Create a timeline for your features and releases",
		recent: false,
	},
	{
		available: false,
		name: "Automations",
		href: "/docs/automations",
		description:
			"Use our custom triggers to supercharge your workflow",
		recent: true,
	},
	{
		available: false,
		name: "Integrations",
		href: "/docs/integrations",
		description:
			"Plug in custom integrations & webhooks to work with Projectastic",
		recent: true,
	},
];

const useCases: Array<Item & { emoji: string }> = [
	{
		available: true,
		href: "/solutions/creative",
		emoji: '🎨',
		name: "Creative Design",
	},
	{
		available: true,
		href: "/solutions/marketing",
		emoji: '🖥',
		name: "Marketing Campaigns",
	},
	{
		available: true,
		href: "/solutions/devteams",
		emoji: '👨‍💻',
		name: "Developer Teams",
	},
	{
		available: true,
		href: "/solutions/startups",
		emoji: '📈',
		name: "Startups",
	},
	{
		available: true,
		href: "/solutions/remote",
		emoji: '🤝',
		name: "Remote Collaboration",
	},
];

const compare: Item[] = [
	{
		available: true,
		href: "/compare/trello",
		name: "Trello",
	},
	{
		available: true,
		href: "/compare/jira",
		name: "Jira",
	},
	{
		available: true,
		href: "/compare/github",
		name: "GitHub",
	},
	{
		available: true,
		href: "/compare/asana",
		name: "Asana",
	},
	{
		available: true,
		href: "/compare/clickup",
		name: "ClickUp",
	},
];

const products: DetailedItem[] = [
	{
		available: true,
		description: 'An elegant interface for managing your projects.',
		name: 'Projectastic',
		href: '/products/platform',
	},
	{
		available: false,
		description: 'Update your projects via the command line.',
		name: 'CLI',
		href: '/products/cli',
	},
];

const resources: Item[] = [
	{
		available: true,
		href: '/blog',
		name: 'Blog',
	},
	{
		available: true,
		href: '/docs',
		name: 'Documentation',
	},
	{
		available: true,
		href: '/help/faq',
		name: 'FAQ',
	},
	{
		available: false,
		href: '/resources/stories',
		name: 'Customer Stories',
	},
	{
		available: false,
		href: '/help/contact',
		name: 'Help Center',
	},
];

export default function Topbar() {
	return (
		<div className='py-5 top-0 sticky flex flex-row justify-center items-center bg-background'>
			{/* <div className='ml-5 max-w-[20%] flex flex-row justify-start'>
				hiiiiiiiiiiiiiiiiiii
			</div> */}
			<div className="ml-10 flex flex-grow justify-start items-center space-x-3">
				{/* <DesktopIcon className='aspect-square md:scale-110 lg:scale-150' /> */}
				<Link href={'/'}>
					<span className='text-xl font-bold bg-gradient-to-r bg-[size:200%_100%] from-pink-500 via-yellow-500 to-pink-500 bg-clip-text text-transparent animate-flow'>Projectastic</span>
				</Link>
			</div>
			<NavigationMenu className='justify-center'>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger>Product</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid grid-cols-2 grid-rows-7 gap-3 p-4 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
								{products.map((product, i) => (
									<li key={i} className="row-span-4">
										<Link href={product.href} legacyBehavior passHref>
											<NavigationMenuLink asChild>
												<div
													className="group flex h-full w-full select-none flex-col justify-end hover:scale-105 transition-all duration-200 rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md cursor-pointer"
												>
													{/* <Icons.logo className="h-6 w-6" /> */}
													<div className="mb-2 mt-4 text-lg font-medium">
														{product.name}
													</div>
													<p className="text-sm leading-tight text-muted-foreground">
														{product.description}
													</p>
												</div>
											</NavigationMenuLink>
										</Link>
									</li>
								))}
								<ListItem href="/about" title="About" className="col-span-2 row-start-5">
									Explore how you can supercharge your projects with Projectastic
								</ListItem>
								<ListItem href="/docs/quickstart" title="Quickstart" className="col-span-2 row-start-6">
									Hit the ground running with this all-in-one starter guide
								</ListItem>
								<ListItem href="/docs/installation" title="Installation" className="col-span-2 row-start-7">
									Put our shiny CLI tools in your $PATH (if you want, of course)
								</ListItem>
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
						<NavigationMenuContent>
							<div className="grid grid-rows-1 grid-cols-3 md:w-[700px] lg:w-[750px]">
								<div className="col-start-1 p-6 flex flex-col justify-start space-y-3">
									<div className="mb-1 text-[0.9rem] font-medium font-mono">USE CASES</div>
									{useCases.map((useCase, i) => (
										<Link key={i} href={useCase.href} className='text-muted-foreground hover:text-foreground transition duration-200'>{useCase.emoji}&nbsp;&nbsp;{useCase.name}</Link>
									))}
								</div>
								<div className="col-start-2 p-6 flex flex-col justify-start space-y-3">
									<div className="mb-1 text-[0.9rem] font-medium font-mono">COMPARE</div>
									{compare.map((c, i) => (
										<Link key={i} href={c.href} className='group'>
											{/* <span className='bg-gradient-to-r from-pink-500 to-yellow-500 group-hover:from-pink-600 group-hover:to-yellow-600 dark:group-hover:from-pink-400 dark:group-hover:to-yellow-400 bg-clip-text text-transparent transition duration-200'>✨ Projectastic</span> */}
											<span className='bg-gradient-to-r bg-[size:200%_100%] from-pink-500 via-yellow-500 to-pink-500 animate-flow bg-clip-text text-transparent transition-all'>✨ Projectastic</span>
											<span className='text-muted-foreground group-hover:text-foreground transition duration-200'> vs {c.name}</span>
										</Link>
									))}
								</div>
								<div className="col-start-3 p-6 flex flex-col justify-start space-y-3">
									<div className="mb-1 text-[0.9rem] font-medium font-mono">RESOURCES</div>
									{resources.map((r, i) => (
										r.available ?
											<Link key={i} href={r.href} className='group'>
												<span className='text-muted-foreground group-hover:text-foreground transition duration-200'>{r.name}</span>
											</Link>
											:
											<span key={i} className='text-muted-foreground/50 cursor-default'>{r.name}</span>
									))}
								</div>
							</div>
							<hr className='mx-auto my-2 w-[95%] border-muted-foreground/75' />
							<div className="px-8 py-6 flex flex-row justify-start items-center">
								<span className='font-semibold text-2xl'>Try&nbsp;&nbsp;</span>
								<span className='font-bold text-2xl bg-gradient-to-r bg-[size:200%_100%] from-pink-500 via-yellow-500 to-pink-500 animate-flow bg-clip-text text-transparent transition-all'>Projectastic</span>
								<div className="flex flex-grow"></div>
								{/* <span className="text-muted-foreground/75 text-lg">Unlock a new level of productivity</span> */}
								<span className="text-muted-foreground text-center text-sm text-wrap w-[45%]">Unlock a new level of productivity with our assortment of project management tools</span>
								<div className="flex flex-grow"></div>
								<Button variant={'outline'}>
									See how<ArrowRightIcon className="ml-2 h-4 w-4" />
								</Button>
							</div>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuTrigger>Documentation</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
								{features.map((feature, i) => (
									<ListItem
										title={feature.name}
										key={i}
										href={feature.href}
										available={feature.available}
										recent={feature.recent}
									>
										{feature.description}
									</ListItem>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link href="/pricing" legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Pricing
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
			{/* <div className="flex flex-grow"></div> */}
			{/* <DropdownMenu>
				<DropdownMenuTrigger>
					<Avatar>
						<AvatarImage src="https://github.com/shadcn.png" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-56">
					<DropdownMenuLabel>My Account</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						<DropdownMenuItem>
							Profile
							<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
						</DropdownMenuItem>
						<DropdownMenuItem>
							Billing
							<DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
						</DropdownMenuItem>
						<DropdownMenuItem>
							Settings
							<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
						</DropdownMenuItem>
						<DropdownMenuItem>
							Keyboard shortcuts
							<DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
						</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						<DropdownMenuItem>Team</DropdownMenuItem>
						<DropdownMenuSub>
							<DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
							<DropdownMenuPortal>
								<DropdownMenuSubContent>
									<DropdownMenuItem>Email</DropdownMenuItem>
									<DropdownMenuItem>Message</DropdownMenuItem>
									<DropdownMenuSeparator />
									<DropdownMenuItem>More...</DropdownMenuItem>
								</DropdownMenuSubContent>
							</DropdownMenuPortal>
						</DropdownMenuSub>
						<DropdownMenuItem>
							New Team
							<DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
						</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuItem>GitHub</DropdownMenuItem>
					<DropdownMenuItem>Support</DropdownMenuItem>
					<DropdownMenuItem disabled>API</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						Log out
						<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu> */}
			{/* <div className='mr-5 w-1/5 justify-right'> */}
			<div className='mr-10 flex flex-grow justify-end space-x-3'>
				<ThemeToggle />
				<Button asChild className=''>
					<Link href={'/download'}>
						<DownloadIcon className="mr-2 h-4 w-4" /> Download
					</Link>
				</Button>
			</div>
		</div>)
}

const ListItem = ({ className, title, children, href, recent, ...props }: any) => {
	return (
		<li className={cn(className)}>
			<Link href={href} legacyBehavior passHref>
				<NavigationMenuLink asChild>
					<div
						className={cn(
							"cursor-pointer block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
							className
						)}
						{...props}
					>
						<div className="flex flex-row justify-start items-center space-x-2 text-sm font-medium leading-none">
							<span>{title}</span>
							{recent ?
								<div className="flex flex-row justify-center items-center w-10 py-[1px] bg-clip-border bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full">
									<div className="flex flex-row justify-center items-center w-[95%] h-[95%] bg-background text-xs rounded-full">NEW</div>
								</div>
								:
								<></>
							}
						</div>
						<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
							{children}
						</p>
					</div>
				</NavigationMenuLink>
			</Link>
		</li>
	)
}
ListItem.displayName = "ListItem";