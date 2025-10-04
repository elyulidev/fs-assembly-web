"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

export default function LanguageSwitcher() {
	const router = useRouter();
	const pathname = usePathname();
	const locale = useLocale();
	const t = useTranslations("LanguageSwitcher");

	const changeLocale = (nextLocale: string) => {
		const segments = pathname.split("/");
		if (segments[1] && ["es", "pt"].includes(segments[1])) {
			segments[1] = nextLocale;
		} else {
			segments.splice(1, 0, nextLocale);
		}
		const newPath = segments.join("/") || "/";
		router.replace(newPath, { scroll: false });
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant='ghost' size='icon'>
					<Languages className='h-[1.2rem] w-[1.2rem]' />
					<span className='sr-only'>{t("toggle")}</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuItem
					onClick={() => changeLocale("es")}
					disabled={locale === "es"}
				>
					Español
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => changeLocale("pt")}
					disabled={locale === "pt"}
				>
					Português
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
