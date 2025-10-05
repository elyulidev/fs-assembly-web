"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import {
	Conversation,
	ConversationContent,
	ConversationEmptyState,
	ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { MessageSquare } from "lucide-react";
import { Message, MessageContent } from "@/components/ai-elements/message";
import {
	PromptInput,
	PromptInputActionAddAttachments,
	PromptInputActionMenu,
	PromptInputActionMenuContent,
	PromptInputActionMenuTrigger,
	PromptInputAttachment,
	PromptInputAttachments,
	PromptInputBody,
	PromptInputMessage,
	PromptInputSubmit,
	PromptInputTextarea,
	PromptInputToolbar,
	PromptInputTools,
} from "@/components/ai-elements/prompt-input";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Response } from "@/components/ai-elements/response";

export default function FaqClient() {
	const { messages, sendMessage, status, error, regenerate } = useChat({
		transport: new DefaultChatTransport({
			api: "/api/chat",
		}),
	});
	const t = useTranslations("FaqPage");
	const inputRef = useRef<HTMLTextAreaElement>(null);

	const handleSubmit = (
		message: PromptInputMessage,
		e: React.FormEvent<HTMLFormElement>
	) => {
		e.preventDefault();

		if (!message.text) return;

		sendMessage({ text: message.text?.trim() });

		if (inputRef.current) {
			inputRef.current.value = "";
		}
	};
	return (
		<div>
			<Conversation className='relative w-full' style={{ height: "400px" }}>
				<ConversationContent>
					{messages.length === 0 ? (
						<ConversationEmptyState
							icon={<MessageSquare className='size-12' />}
							title={t("aiAssistant.title")}
							description={t("aiAssistant.description")}
						/>
					) : error ? (
						<div className='flex flex-col gap-2 items-center justify-center'>
							<h2 className='text-lg'>{t("aiAssistant.errorTitle")}</h2>
							<Button onClick={() => regenerate()}>
								{t("aiAssistant.retry")}
							</Button>
						</div>
					) : (
						messages.map((message) => (
							<Message from={message.role} key={message.id}>
								<MessageContent>
									{message.parts.map((part, i) => {
										switch (part.type) {
											case "text":
												return (
													<Response key={`${message.id}-${i}`}>
														{part.text}
													</Response>
												);
											default:
												return null;
										}
									})}
								</MessageContent>
							</Message>
						))
					)}
				</ConversationContent>
				<ConversationScrollButton />
			</Conversation>

			<PromptInput onSubmit={handleSubmit} className='mt-4 relative'>
				<PromptInputBody>
					<PromptInputTextarea
						ref={inputRef}
						value={inputRef.current?.value}
						placeholder={t("aiAssistant.placeholder")}
					/>
				</PromptInputBody>
				<PromptInputToolbar className='flex items-center justify-end'>
					<PromptInputSubmit
						disabled={!inputRef.current?.value && !status}
						status={status}
					/>
				</PromptInputToolbar>
			</PromptInput>
		</div>
	);
}
