import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";
import FaqClient from "./faq-client";

export default function FaqPage() {
	const t = useTranslations("FaqPage");

	const faqs = [
		{
			question: t("faqs.q1"),
			answer: t("faqs.a1"),
		},
		{
			question: t("faqs.q2"),
			answer: t("faqs.a2"),
		},
		{
			question: t("faqs.q3"),
			answer: t("faqs.a3"),
		},
		{
			question: t("faqs.q4"),
			answer: t("faqs.a4"),
		},
	];

	return (
		<div className='container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12'>
			<div className='text-center mb-12'>
				<h1 className='font-headline text-4xl md:text-5xl font-bold'>
					{t("title")}
				</h1>
				<p className='mt-4 text-lg text-muted-foreground'>{t("subtitle")}</p>
			</div>

			<div className='mb-16'>
				<h2 className='font-headline text-2xl font-bold mb-6'>
					{t("generalQuestionsTitle")}
				</h2>
				<Accordion type='single' collapsible className='w-full'>
					{faqs.map((faq, index) => (
						<AccordionItem value={`item-${index}`} key={index}>
							<AccordionTrigger className='text-left font-semibold'>
								{faq.question}
							</AccordionTrigger>
							<AccordionContent className='text-base text-muted-foreground'>
								{faq.answer}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>

			<FaqClient />
		</div>
	);
}
