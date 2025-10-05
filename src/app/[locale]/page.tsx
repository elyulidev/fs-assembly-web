import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { getCourseData } from "@/lib/course-data";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Book, Clock } from "lucide-react";
import { getTranslations } from "next-intl/server";

export type HomePageProps = {
	params: Promise<{ locale: string }>;
};

export default async function Home({ params }: HomePageProps) {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "HomePage" });
	const tCourse = await getTranslations({ locale, namespace: "Course" });
	const courseData = getCourseData(tCourse);
	const heroImage = PlaceHolderImages.find((img) => img.id === "hero");

	return (
		<div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
			<section className='relative rounded-lg overflow-hidden mb-16 shadow-lg'>
				<div className='absolute inset-0 bg-primary/80 z-10' />
				{heroImage && (
					<Image
						src={heroImage.imageUrl}
						alt={heroImage.description}
						fill
						className='object-cover'
						data-ai-hint={heroImage.imageHint}
						priority
					/>
				)}
				<div className='relative z-20 flex flex-col items-center justify-center text-center p-8 md:p-16'>
					<h1 className='font-headline text-4xl md:text-6xl font-bold text-primary-foreground mb-4'>
						{t("title")}
					</h1>
					<p className='text-lg md:text-xl text-primary-foreground/90 max-w-3xl'>
						{t("subtitle")}
					</p>
				</div>
			</section>

			<section>
				<h2 className='font-headline text-3xl font-bold text-center mb-10'>
					{t("courseModulesTitle")}
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
					{courseData.map((module) => (
						<Card
							key={module.id}
							className='flex flex-col hover:shadow-xl transition-shadow duration-300'
						>
							<CardHeader>
								<CardTitle className='font-headline text-xl flex items-start gap-3'>
									<span className='text-sm font-semibold bg-primary text-primary-foreground rounded-full flex items-center justify-center h-8 w-8 flex-shrink-0 mt-1'>
										{module.id}
									</span>
									<span>{module.title}</span>
								</CardTitle>
								<CardDescription className='line-clamp-3'>
									{module.description}
								</CardDescription>
							</CardHeader>
							<CardFooter className='mt-auto flex justify-between items-center text-sm text-muted-foreground'>
								<div className='flex gap-4'>
									<span className='flex items-center gap-1.5'>
										<Book size={14} />{" "}
										{tCourse("conferenceCount", {
											count: module.conferenceCount,
										})}
									</span>
									<span className='flex items-center gap-1.5'>
										<Clock size={14} />{" "}
										{tCourse("estimatedHours", { hours: module.hours })}
									</span>
								</div>
								<Button asChild size='sm' variant='ghost'>
									<Link href={`/modules/${module.id}`}>
										{t("viewModuleButton")}{" "}
										<ArrowRight className='ml-2 h-4 w-4' />
									</Link>
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>
			</section>
		</div>
	);
}
