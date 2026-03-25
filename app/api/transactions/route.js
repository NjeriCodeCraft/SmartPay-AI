import { transactions } from "@/data/transactions";

// Helper to get Interswitch auth token
async function getInterswitchToken() {
  const credentials = Buffer.from(
    `${process.env.INTERSWITCH_CLIENT_ID}:${process.env.INTERSWITCH_SECRET_KEY}`
  ).toString("base64");

  const res = await fetch(`${process.env.INTERSWITCH_BASE_URL}/passport/oauth/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials&scope=profile",
  });

  if (!res.ok) throw new Error("Interswitch auth failed");
  const data = await res.json();
  return data.access_token;
}

export async function GET() {
  try {
    // Try to fetch from Interswitch — fall back to mock data if keys not set
    if (process.env.INTERSWITCH_CLIENT_ID && process.env.INTERSWITCH_SECRET_KEY) {
      const token = await getInterswitchToken();
      // You can extend this to call Interswitch's transaction history endpoint
      // const res = await fetch(`${process.env.INTERSWITCH_BASE_URL}/api/v2/transactions`, {
      //   headers: { Authorization: `Bearer ${token}` }
      // });
      // const data = await res.json();
      // return Response.json({ transactions: data, source: "interswitch" });
      console.log("Interswitch token obtained:", token ? "✓" : "✗");
    }

    // Return mock data (used during development / sandbox)
    return Response.json({
      transactions,
      source: "mock",
      count: transactions.length,
    });
  } catch (error) {
    console.error("Transactions API error:", error);
    return Response.json({ transactions, source: "mock", count: transactions.length });
  }
}
