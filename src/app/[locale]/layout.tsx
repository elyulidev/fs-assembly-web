import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "sonner";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { notFound } from "next/navigation";
import { routing } from "@/lib/i18n/routing";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Assembly Language Academy",
	description: "Learn Assembly Language from the ground up.",
};

type Props = {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
	// Ensure that the incoming `locale` is valid
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}
	const messages = await getMessages();

	return (
		<html lang={locale} className='h-full' suppressHydrationWarning>
			<head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='anonymous'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap'
					rel='stylesheet'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Literata:opsz,wght@7..72,400;700&display=swap'
					rel='stylesheet'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;600&display=swap'
					rel='stylesheet'
				/>
			</head>
			<body
				className={cn(
					"font-body antialiased bg-background h-full flex flex-col",
					geistSans.variable,
					geistMono.variable
				)}
			>
				<NextIntlClientProvider locale={locale} messages={messages}>
					<ThemeProvider attribute='class' defaultTheme='system' enableSystem>
						<Header />
						<main className='flex-1'>{children}</main>
						<Footer />
						<Toaster />
					</ThemeProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
