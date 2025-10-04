import Link from "next/link";
import { BookOpen, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
	const t = useTranslations("Header");
	return (
		<header className='bg-card border-b sticky top-0 z-10 no-print'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between h-16'>
					<div className='flex items-center'>
						<Link
							href='/'
							className='flex items-center gap-2 text-xl font-headline font-bold text-primary'
						>
							<BookOpen className='h-6 w-6' />
							<span>Assembly Language Academy</span>
						</Link>
					</div>
					<nav className='flex items-center gap-2'>
						<Button variant='ghost' asChild>
							<Link href='/faq'>
								<HelpCircle className='h-4 w-4 mr-2' />
								{t("faq")}
							</Link>
						</Button>
						<LanguageSwitcher />
						<ThemeToggle />
					</nav>
				</div>
			</div>
		</header>
	);
}
