import { notFound } from "next/navigation";
import Link from "next/link";
import { getCourseData, type Module } from "@/lib/course-data";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronRight, Clock, Book } from "lucide-react";
import { getTranslations } from "next-intl/server";

type ModulePageProps = {
	params: Promise<{
		moduleId: string;
		locale: string;
	}>;
};

export default async function ModulePage({ params }: ModulePageProps) {
	const { moduleId, locale } = await params;
	const t = await getTranslations({
		locale: locale,
		namespace: "Course",
	});
	const courseData = getCourseData(t);
	const module: Module | undefined = courseData.find((m) => m.id === moduleId);

	if (!module) {
		notFound();
	}

	return (
		<div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
			<div className='mb-8'>
				<Button asChild variant='ghost' className='mb-4'>
					<Link href='/'>
						<ArrowLeft className='mr-2 h-4 w-4' />
						{t("backToModules")}
					</Link>
				</Button>
				<div className='p-6 rounded-lg bg-card border'>
					<h1 className='font-headline text-3xl md:text-4xl font-bold mb-3'>
						{module.title}
					</h1>
					<div className='flex items-center gap-6 mb-4 text-muted-foreground'>
						<span className='flex items-center gap-2'>
							<Book size={16} />{" "}
							{t("conferenceCount", { count: module.conferenceCount })}
						</span>
						<span className='flex items-center gap-2'>
							<Clock size={16} /> {t("estimatedHours", { hours: module.hours })}
						</span>
					</div>
					<p className='text-lg text-muted-foreground'>{module.description}</p>
				</div>
			</div>

			<h2 className='font-headline text-2xl font-bold mb-6'>
				{t("conferences")}
			</h2>
			<div className='space-y-4'>
				{module.conferences.map((conference, index) => (
					<Card
						key={conference.id}
						className='hover:bg-accent/50 transition-colors'
					>
						<Link
							href={`/modules/${module.id}/conferences/${conference.id}`}
							className='block'
						>
							<div className='p-4 sm:p-6 flex items-center justify-between'>
								<div className='flex items-start gap-4'>
									<div className='bg-muted text-muted-foreground rounded-full flex-shrink-0 w-8 h-8 flex items-center justify-center font-bold text-sm'>
										{index + 1}
									</div>
									<div>
										<h3 className='font-semibold text-lg'>
											{conference.title}
										</h3>
										<p className='text-muted-foreground text-sm line-clamp-2'>
											{conference.description}
										</p>
									</div>
								</div>
								<ChevronRight className='h-5 w-5 text-muted-foreground flex-shrink-0 ml-4' />
							</div>
						</Link>
					</Card>
				))}
			</div>
		</div>
	);
}
