"use client";

import { useState } from "react";
import { type Conference } from "@/lib/course-data";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";
import { Progress } from "@/components/ui/progress";

import { useTranslations } from "next-intl";
import { CodeBlock } from "./code-block";

interface SlideDeckProps {
	conference: Conference;
}

export function SlideDeck({ conference }: SlideDeckProps) {
	const t = useTranslations("Course");
	const [currentSlide, setCurrentSlide] = useState(0);
	const totalSlides = conference.slides.length;
	const slide = conference.slides[currentSlide];

	const goToNext = () => {
		if (currentSlide < totalSlides - 1) {
			setCurrentSlide(currentSlide + 1);
		}
	};

	const goToPrev = () => {
		if (currentSlide > 0) {
			setCurrentSlide(currentSlide - 1);
		}
	};

	const handleDownload = () => {
		window.print();
	};

	return (
		<div>
			<div className='no-print mb-8 p-4 rounded-lg bg-card border flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
				<div>
					<h1 className='font-headline text-2xl md:text-3xl font-bold'>
						{conference.title}
					</h1>
					<p className='text-muted-foreground'>{conference.description}</p>
				</div>
				<Button onClick={handleDownload}>
					<Download className='mr-2 h-4 w-4' />
					{t("downloadPdf")}
				</Button>
			</div>

			<div className='hidden print-only'>
				{conference.slides.map((s, index) => (
					<Card key={index} className='slide-card mb-4'>
						<CardHeader>
							<CardTitle className='font-headline'>{s.title}</CardTitle>
							<CardDescription>
								{t("slide", { current: index + 1, total: totalSlides })}
							</CardDescription>
						</CardHeader>
						<CardContent>
							{s.content.map((item, i) =>
								typeof item === "string" ? (
									<p key={i} className='mb-3'>
										{item}
									</p>
								) : (
									<CodeBlock key={i} code={item.code} />
								)
							)}
						</CardContent>
					</Card>
				))}
			</div>

			<div className='no-print'>
				<Card className='slide-card shadow-lg min-h-[400px]'>
					<CardHeader>
						<CardTitle className='font-headline text-2xl'>
							{slide.title}
						</CardTitle>
					</CardHeader>
					<CardContent>
						{slide.content.map((item, i) =>
							typeof item === "string" ? (
								<p key={i} className='mb-4 text-base leading-relaxed'>
									{item}
								</p>
							) : (
								<CodeBlock key={i} code={item.code} />
							)
						)}
					</CardContent>
				</Card>

				<div className='mt-4 flex items-center justify-between'>
					<Button
						variant='outline'
						onClick={goToPrev}
						disabled={currentSlide === 0}
					>
						<ArrowLeft className='mr-2 h-4 w-4' /> {t("previous")}
					</Button>
					<div className='flex-1 mx-4 flex flex-col items-center gap-2'>
						<Progress
							value={((currentSlide + 1) / totalSlides) * 100}
							className='w-full'
						/>
						<span className='text-sm text-muted-foreground'>
							{t("slide", { current: currentSlide + 1, total: totalSlides })}
						</span>
					</div>
					<Button
						onClick={goToNext}
						disabled={currentSlide === totalSlides - 1}
					>
						{t("next")} <ArrowRight className='ml-2 h-4 w-4' />
					</Button>
				</div>
			</div>
		</div>
	);
}
