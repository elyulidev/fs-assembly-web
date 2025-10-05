import { notFound } from "next/navigation";
import Link from "next/link";
import { getCourseData } from "@/lib/course-data";
import { SlideDeck } from "@/components/slide-deck";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { getTranslations } from "next-intl/server";

type ConferencePageProps = {
	params: Promise<{
		moduleId: string;
		conferenceId: string;
		locale: string;
	}>;
};

/* export async function generateStaticParams({
	params: { locale },
}: {
	params: { locale: string };
}) {
	const t = await getTranslations({ locale, namespace: "Course" });
	const courseData = getCourseData(t);
	const params: { moduleId: string; conferenceId: string }[] = [];
	courseData.forEach((module) => {
		module.conferences.forEach((conference) => {
			params.push({
				moduleId: module.id,
				conferenceId: conference.id,
			});
		});
	});
	return params;
} */

export default async function ConferencePage({ params }: ConferencePageProps) {
	const { moduleId, locale, conferenceId } = await params;
	const t = await getTranslations({
		locale: locale,
		namespace: "Course",
	});
	const courseData = getCourseData(t);
	const module = courseData.find((m) => m.id === moduleId);
	const conference = module?.conferences.find(
		(c) => Number(c.id) === Number(conferenceId)
	);

	if (!conference || !module) {
		notFound();
	}

	return (
		<div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
			<div className='no-print mb-4'>
				<Button asChild variant='ghost'>
					<Link href={`/modules/${moduleId}`}>
						<ArrowLeft className='mr-2 h-4 w-4' />
						{t("backToModule", { moduleTitle: module?.title })}
					</Link>
				</Button>
			</div>
			<SlideDeck conference={conference} />
		</div>
	);
}
