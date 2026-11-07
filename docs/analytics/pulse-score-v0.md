## Task 2 - Simple Pulse Score formula

# 1. Introduction:

The Pulse Score - A Wellness Scoring System provides a simple daily score similar to a school percentage.
It ranges from 0 to 100 which combines three daily health metrics: steps, sleep duration, and water intake. Each metric contributes a different percentage to the final score based on its importance in this proposed formula where a higher score represents a better day.

# 2. Selected Metrics and Weights:

| Metric | Daily Goal | Weight |
|---|---:|---:|
| Steps | 10000 steps | 0.40 (40%) |
| Sleep Duration | 8 hours | 0.35 (35%) |
| Water Intake | 3 litres | 0.25 (25%) |
| Total | | 1.00 (100%) |

# 3. Individual Metric Score (IMS) Formula:

IMS = min(Actual Value / Daily Goal, 1) × 100

# 4. Pulse Score Formula:

Pulse Score = (Steps Score × 0.40) + (Sleep Score × 0.35) + (Water Score × 0.25)

The final result is a score out of 100.

# 5. Example 1 - Good Day:
Let us assume a user achieves the following score:

| Metric | Actual Value | Daily Goal | IMS |
|---|---:|---:|---:|
| Steps | 9,000 | 10000 | 90 |
| Sleep | 8 hours | 8 hours | 100 |
| Water | 2.7 litres | 3 litres | 90 |

Calculation:
Pulse Score = (90 × 0.40) + (100 × 0.35) + (90 × 0.25)
            = 36 + 35 + 22.5
            = 93.5
So, the Final Pulse Score = 94/100 (round off)

# 6. Example 2 - Bad Day:
Let us assume a user achieves the following score:

| Metric | Actual Value | Daily Goal | IMS |
|---|---:|---:|---:|
| Steps | 3,000 | 10,000 | 30 |
| Sleep | 5 hours | 8 hours | 62.5 |
| Water | 1.2 litres | 3 litres | 40 |

Calculation:
Pulse Score = (30 × 0.40) + (62.5 × 0.35) + (40 × 0.25)
            = 12 + 21.875 + 10
            = 43.875
So, the Final Pulse Score = 44/100 (round off)

# 7. Assumptions and Limitations:

1) Daily goals are assumed to be 10000 steps, 8 hours of sleep, and 3 litres of water, based on the example goals displayed in the application.
2) The weights are proposed values and may be adjusted by the development team.
3) Individual Metric Scores (IMS) must be strictly between 0 and 100.
4) This formula uses simple calculations no machine learning model is used.
