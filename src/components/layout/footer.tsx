import { useTranslations } from "next-intl";

export function Footer() {
	const currentYear = new Date().getFullYear();
	const t = useTranslations("Footer");
	return (
		<footer className='bg-card border-t no-print'>
			<div className='container mx-auto py-6 px-4 sm:px-6 lg:px-8'>
				<p className='text-center text-sm text-muted-foreground'>
					&copy; {currentYear} Assembly Language Academy. {t("rights")}
				</p>
			</div>
		</footer>
	);
}
