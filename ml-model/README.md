# SmartPay AI ML Model

This is a FastAPI-based service that predicts a user's end-of-month balance based on their income and spending habits.

## How to Setup
1. Open your terminal in this folder.
2. Install requirements: `pip install -r requirements.txt`
3. Run the app: `python app.py`

## Endpoint
- **POST /predict**: Receives income, spent, and cut_percent to return financial projections.