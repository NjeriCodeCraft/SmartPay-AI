# SmartPay AI - ML Prediction Model

This module handles the predictive financial modeling for SmartPay AI. It uses Machine Learning to project a user's end-of-month balance.

##  The Model: Linear Regression
Unlike a standard calculator, this API uses **Scikit-Learn's Linear Regression** model. 
- **Training:** The model is trained on historical transaction data to find the "Line of Best Fit" between spending and final liquidity.
- **Adaptive:** It automatically accounts for fixed costs (like rent/bills) by calculating the statistical intercept of the spending data.

## 🚀 How to Run Locally
1. Navigate to the folder:
   ```bash
   cd ml-model