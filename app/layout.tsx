import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'
import PageTransitionEffect from '@/components/PageTransitionEffect';

// const inter = Inter({ subsets: ['latin'] })
const inter = localFont({
	src: '../public/Inter.ttf',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Projectastic',
	description: 'Manage all of your projects - for free!',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					{process.env.NODE_ENV === 'development'
						?
						<>{children}</>
						:
						<PageTransitionEffect>{children}</PageTransitionEffect>
					}
				</ThemeProvider>
			</body>
		</html>
	)
}
