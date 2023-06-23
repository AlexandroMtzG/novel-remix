import type { ActionArgs } from "@remix-run/node";
import OpenAIService from "~/modules/novel/lib/ai/openai/OpenAIStream";

export const action = async ({ request }: ActionArgs) => {
  let { prompt } = (await request.json()) as {
    prompt?: string;
  };

  if (!prompt) {
    return new Response("No prompt in the request", { status: 400 });
  }

  prompt = prompt.replace(/\n/g, " ").replace(/\/$/, "").slice(0, 5000);
  const stream = await OpenAIService.chatCompletionStream({
    model: "gpt-3.5-turbo",
    messages: [{ role: "assistant", content: prompt }],
    stream: true,
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    n: 1,
  });
  return new Response(stream);
};
