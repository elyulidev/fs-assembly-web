import { google } from "@ai-sdk/google";
import { streamText, UIMessage, convertToModelMessages } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
	const { messages }: { messages: UIMessage[] } = await req.json();

	const result = streamText({
		model: google("gemini-2.5-flash"),
		system:
			"You're a helpful assistant who answers questions about Assembly Language. Your answers must be in the language you're being answered in. If you don't know the answer, just say you don't know. Do not try to make up an answer.",
		messages: convertToModelMessages(messages),
	});

	return result.toUIMessageStreamResponse();
}
