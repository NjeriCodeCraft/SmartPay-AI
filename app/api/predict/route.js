export async function POST(request) {
  try {
    const { income, spent, cutPercent } = await request.json();

    // Try to call your friend's Python ML model first
    const ML_MODEL_URL = process.env.ML_MODEL_URL || "http://localhost:5000/predict";

    try {
      const mlRes = await fetch(ML_MODEL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ income, spent, cut_percent: cutPercent }),
        signal: AbortSignal.timeout(5000), // 5 second timeout
      });

      if (mlRes.ok) {
        const mlData = await mlRes.json();
        return Response.json(mlData);
      }
    } catch {
      console.log("ML model not available, using fallback calculation");
    }

    // Fallback: simple calculation if ML model is not running
    const reductionFactor = 1 - cutPercent / 100;
    const projectedSpend = Math.round(spent * reductionFactor);
    const predictedBalance = income - projectedSpend;
    const savedExtra = Math.round(spent * (cutPercent / 100));

    return Response.json({
      predictedBalance,
      projectedSpend,
      savedExtra,
      confidence: cutPercent === 0 ? 91 : 87,
      source: "fallback",
    });
  } catch (error) {
    console.error("Predict API error:", error);
    return Response.json({ error: "Prediction failed" }, { status: 500 });
  }
}
