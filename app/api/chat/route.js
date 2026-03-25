import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(request) {
  try {
    const { message, context } = await request.json();
    const { transactions, stats } = context || {};

    const systemPrompt = `You are SmartPay AI, a personal finance assistant for an African user. 
You have access to the user's transaction data and financial summary.

Current financial summary:
- Balance: ₦${stats?.balance?.toLocaleString() || "284,500"}
- Monthly income: ₦${stats?.income?.toLocaleString() || "440,820"}
- Total spent this month: ₦${stats?.spent?.toLocaleString() || "156,320"}
- Savings rate: ${stats?.savingsRate || 72}%
- Predicted end-of-month balance: ₦${stats?.predictedEndBalance?.toLocaleString() || "198,320"}

Top spending categories: Food & Dining (35%), Transport (23%), Bills (14%), Shopping (13%)

Recent transactions summary: ${transactions?.slice(0, 5).map(t => `${t.name}: ₦${Math.abs(t.amount).toLocaleString()}`).join(", ")}

Be helpful, concise, and friendly. Use Nigerian Naira (₦) for all amounts.
Give practical money-saving tips relevant to Lagos/Nigeria context.
Keep responses under 100 words. Use bold (**text**) for key numbers.`;

    const response = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      system: systemPrompt,
      messages: [{ role: "user", content: message }],
    });

    return Response.json({
      reply: response.content[0].text,
    });
  } catch (error) {
    console.error("AI chat error:", error);
    return Response.json(
      { reply: "Sorry, I'm having trouble connecting right now. Please try again in a moment." },
      { status: 500 }
    );
  }
}
