
export const chatHistory = [
    {
    id: '1',
    title: '30-Day Forecast for TSLA and NVDA',
    timestamp: '2024-01-04T16:45:00Z',
    messages: [
      {
        id: '8',
        role: 'user',
        content: 'Can you give me a direct TSLA stock prediction?',
        timestamp: '2024-01-04T16:46:00Z',
      },
      {
        id: '9',
        role: 'assistant',
        content: `
         \n# Stock Predictions Summary\n\n## TSLA (Tesla, Inc.)\n\n### Trend Analysis\nThe predictions for TSLA reflect a downward trend over the given period. Starting with a closing price of approximately $412.90 on Day 1, the price decreases consistently, reaching a low of around $373.47 by Day 27. There are minor fluctuations observed in the middle of the days, but overall, the trend indicates a bearish outlook given the consistent decrease.\n\n### Prediction Display\n\n| Day     | Date       | Predicted Close Price |\n|---------|------------|-----------------------|\n| Day 1   | 2025-01-08 | $412.90               |\n| Day 2   | 2025-01-09 | $402.19               |\n| Day 3   | 2025-01-10 | $400.01               |\n| Day 4   | 2025-01-11 | $399.00               |\n| Day 5   | 2025-01-12 | $398.01               |\n| Day 6   | 2025-01-13 | $392.47               |\n| Day 7   | 2025-01-14 | $384.68               |\n| Day 8   | 2025-01-15 | $385.66               |\n| Day 9   | 2025-01-16 | $395.54               |\n| Day 10  | 2025-01-17 | $392.48               |\n| Day 11  | 2025-01-18 | $393.70               |\n| Day 12  | 2025-01-19 | $394.66               |\n| Day 13  | 2025-01-20 | $389.78               |\n| Day 14  | 2025-01-21 | $385.28               |\n| Day 15  | 2025-01-22 | $384.62               |\n| Day 16  | 2025-01-23 | $380.42               |\n| Day 17  | 2025-01-24 | $377.49               |\n| Day 18  | 2025-01-25 | $376.32               |\n| Day 19  | 2025-01-26 | $391.05               |\n| Day 20  | 2025-01-27 | $386.15               |\n| Day 21  | 2025-01-28 | $391.35               |\n| Day 22  | 2025-01-29 | $391.26               |\n| Day 23  | 2025-01-30 | $382.43               |\n| Day 24  | 2025-01-31 | $380.92               |\n| Day 25  | 2025-02-01 | $379.26               |\n| Day 26  | 2025-02-02 | $373.75               |\n| Day 27  | 2025-02-03 | $373.47               |\n| Day 28  | 2025-02-04 | $370.39               |\n| Day 29  | 2025-02-05 | $393.93               |\n| Day 30  | 2025-02-06 | $388.21               |\n\n---\n\n## NVDA (NVIDIA Corporation)\n\n### Trend Analysis\nThe predictions for NVDA illustrate a predominantly upward trend over the observed period. Starting with an approximate price of $147.69 on Day 1, the price experiences some fluctuations but largely trends upward, peaking at about $159.55 on Day 30. Overall, this indicates a bullish outlook for NVDA.\n\n### Prediction Display\n\n| Day     | Date       | Predicted Close Price |\n|---------|------------|-----------------------|\n| Day 1   | 2025-01-08 | $147.69               |\n| Day 2   | 2025-01-09 | $149.00               |\n| Day 3   | 2025-01-10 | $148.74               |\n| Day 4   | 2025-01-11 | $151.58               |\n| Day 5   | 2025-01-12 | $153.42               |\n| Day 6   | 2025-01-13 | $150.94               |\n| Day 7   | 2025-01-14 | $151.79               |\n| Day 8   | 2025-01-15 | $151.22               |\n| Day 9   | 2025-01-16 | $153.15               |\n| Day 10  | 2025-01-17 | $151.02               |\n| Day 11  | 2025-01-18 | $150.94               |\n| Day 12  | 2025-01-19 | $152.22               |\n| Day 13  | 2025-01-20 | $149.86               |\n| Day 14  | 2025-01-21 | $152.09               |\n| Day 15  | 2025-01-22 | $152.52               |\n| Day 16  | 2025-01-23 | $151.65               |\n| Day 17  | 2025-01-24 | $152.47               |\n| Day 18  | 2025-01-25 | $150.84               |\n| Day 19  | 2025-01-26 | $152.27               |\n| Day 20  | 2025-01-27 | $151.24               |\n| Day 21  | 2025-01-28 | $152.89               |\n| Day 22  | 2025-01-29 | $153.90               |\n| Day 23  | 2025-01-30 | $155.58               |\n| Day 24  | 2025-01-31 | $158.08               |\n| Day 25  | 2025-02-01 | $159.52               |\n| Day 26  | 2025-02-02 | $158.67               |\n| Day 27  | 2025-02-03 | $157.76               |\n| Day 28  | 2025-02-04 | $156.08               |\n| Day 29  | 2025-02-05 | $159.29               |\n| Day 30  | 2025-02-06 | $159.55               |
        `,
        timestamp: '2024-01-04T16:46:30Z',
      },
    ],
  },
  
 

  // Add other entries similarly...
];



export const stockTickers = [
  { value: 'AAPL', label: 'AAPL' },
  { value: 'AMZN', label: 'AMZN' },
  { value: 'AVGO', label: 'AVGO' },
  { value: 'GOOG', label: 'GOOG' },
  { value: 'JPM', label: 'JPM' },
  { value: 'META', label: 'META' },
  { value: 'MSFT', label: 'MSFT' },
  { value: 'NVDA', label: 'NVDA' },
  { value: 'TSLA', label: 'TSLA' },
  { value: 'UNH', label: 'UNH' },
  { value: 'V', label: 'V' }
]

export const dummyMessages = [
  {
    id: '1',
    role: 'assistant',
    content: 'Hello! I\'m your personal AI Assistant',
    timestamp: '2024-01-05T10:25:00Z',
  },
  {
    id: '2',
    role: 'user',
    content: 'Hey, Give me TSLA & NVDA stocks prediction for the next 15 days',
    timestamp: '2024-01-05T10:26:00Z',
  },
  {
    id: '3',
    role: 'assistant',
    content: `Summary of Stock Predictions

TSLA:
The predictions for Tesla (TSLA) display a series of fluctuations throughout the period.

As of January 5, 2024, TSLA is trading at $379.28.
Tesla Inc (TSLA)
$379.28
+$2.40 (+0.60%) today
$382.00 +$3.21 (+0.85%) Pre-Market

NVIDIA (NVDA):
The predictions for Tesla (TSLA) display a series of fluctuations throughout the period.

As of January 5, 2024, NVDA is trading at $538.31.
NVIDIA Corp (NVDA)
$379.28
+$19.98 (+8.0%) today
$19.98 (+8.0%) +0.85% Pre-Market
TSLA:
The predictions for Tesla (TSLA) display a series of fluctuations throughout the period.

As of January 5, 2024, TSLA is trading at $379.28.
Tesla Inc (TSLA)
$379.28
+$2.40 (+0.60%) today
$382.00 +$3.21 (+0.85%) Pre-Market

NVIDIA (NVDA):
The predictions for Tesla (TSLA) display a series of fluctuations throughout the period.

As of January 5, 2024, NVDA is trading at $538.31.
NVIDIA Corp (NVDA)
$379.28
+$19.98 (+8.0%) today
$19.98 (+8.0%) +0.85% Pre-Market
TSLA:
The predictions for Tesla (TSLA) display a series of fluctuations throughout the period.

As of January 5, 2024, TSLA is trading at $379.28.
Tesla Inc (TSLA)
$379.28
+$2.40 (+0.60%) today
$382.00 +$3.21 (+0.85%) Pre-Market

NVIDIA (NVDA):
The predictions for Tesla (TSLA) display a series of fluctuations throughout the period.

As of January 5, 2024, NVDA is trading at $538.31.
NVIDIA Corp (NVDA)
$379.28
+$19.98 (+8.0%) today
$19.98 (+8.0%) +0.85% Pre-Market
TSLA:
The predictions for Tesla (TSLA) display a series of fluctuations throughout the period.

As of January 5, 2024, TSLA is trading at $379.28.
Tesla Inc (TSLA)
$379.28
+$2.40 (+0.60%) today
$382.00 +$3.21 (+0.85%) Pre-Market

NVIDIA (NVDA):
The predictions for Tesla (TSLA) display a series of fluctuations throughout the period.

As of January 5, 2024, NVDA is trading at $538.31.
NVIDIA Corp (NVDA)
$379.28
+$19.98 (+8.0%) today
$19.98 (+8.0%) +0.85% Pre-Market`,

    timestamp: '2024-01-05T10:26:30Z',
  },
]

