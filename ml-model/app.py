from fastapi import FastAPI
from pydantic import BaseModel
import uvicorn

app = FastAPI(title="SmartPay AI Balance Predictor")

#represent the data from transactions.js
CATEGORIES = {
    "Food & Dining": 0.35,
    "Transport": 0.23,
    "Bills": 0.14,
    "Shopping": 0.13,
    "Telecom": 0.05,
    "Others": 0.10
}

class PredictRequest(BaseModel):
    income: float
    spent: float
    cut_percent: float

@app.post("/predict")
async def predict_balance(data: PredictRequest):
    # Rule-Based Model Logic:
    #Calculate how much we are saving based on the user's cut_percent
    reduction_decimal = data.cut_percent / 100
    saved_extra = data.spent * reduction_decimal
    
    #Calculate projected spend
    projected_spend = data.spent - saved_extra
    
    #Predict End Balance
    # We use a buffer of 86,180 
    # to account for fixed costs not included in the spent variable.
    fixed_costs_buffer = 86180 
    predicted_balance = data.income - projected_spend - fixed_costs_buffer
    
    #Confidence Score Logic 
    # Higher cut percentages are harder to maintain, so confidence drops slightly.
    confidence = 90 - (data.cut_percent / 2)

    return {
        "predictedBalance": round(predicted_balance, 2),
        "projectedSpend": round(projected_spend, 2),
        "savedExtra": round(saved_extra, 2),
        "confidence": round(max(confidence, 50), 0) # Don't go below 50%
    }

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=5000)