import { anthropic } from "@ai-sdk/anthropic";
import {
  streamText,
  convertToModelMessages,
  UIMessage,
  createUIMessageStreamResponse,
} from "ai";
import { buildSystemPrompt } from "@/lib/profile-context";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response("Invalid request body", { status: 400 });
    }

    const systemPrompt = await buildSystemPrompt();

    // Convert UIMessage format (parts array) to ModelMessage format (content)
    const modelMessages = await convertToModelMessages(messages as UIMessage[]);

    const result = streamText({
      model: anthropic("claude-sonnet-4-20250514"),
      system: systemPrompt,
      messages: modelMessages,
      maxOutputTokens: 1024,
      temperature: 0.7,
    });

    // Return in UIMessage stream format for DefaultChatTransport
    return createUIMessageStreamResponse({
      stream: result.toUIMessageStream(),
    });
  } catch (error) {
    console.error("Chat API error:", error);

    if (error instanceof Error && error.message.includes("rate limit")) {
      return new Response("Rate limit exceeded. Please try again later.", {
        status: 429,
      });
    }

    return new Response("Internal server error", { status: 500 });
  }
}
