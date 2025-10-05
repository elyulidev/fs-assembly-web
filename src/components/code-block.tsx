"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

interface CodeBlockProps {
	code: string;
	className?: string;
}

export function CodeBlock({ code, className }: CodeBlockProps) {
	const [hasCopied, setHasCopied] = useState(false);

	const copyToClipboard = () => {
		navigator.clipboard.writeText(code).then(() => {
			setHasCopied(true);
			setTimeout(() => setHasCopied(false), 2000);
		});
	};

	return (
		<div className={cn("relative my-4", className)}>
			<div className='bg-[#1e1e1e] text-[#d4d4d4] p-4 rounded-md font-code text-sm overflow-x-auto'>
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								size='icon'
								variant='ghost'
								className='absolute top-2 right-2 h-7 w-7 text-white hover:bg-white/10 hover:text-white'
								onClick={copyToClipboard}
							>
								{hasCopied ? (
									<Check className='h-4 w-4' />
								) : (
									<Copy className='h-4 w-4' />
								)}
							</Button>
						</TooltipTrigger>
						<TooltipContent>
							<p>Copiar código</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
				<pre>
					<code>{code}</code>
				</pre>
			</div>
		</div>
	);
}
