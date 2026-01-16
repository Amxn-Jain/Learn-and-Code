# Classification of Bad Comments in OrderProcessor Code

## **Redundant Comments**
Comments that simply restate what the code obviously does:

1. `// This method processes an order`
2. `// Check if order is null`
3. `// Validate the order`
4. `// Check inventory`
5. `// If no inventory, return failure`
6. `// Reserve inventory`
7. `// Process payment`
8. `// Check if payment succeeded`
9. `// Update inventory`
10. `// Send confirmation email`
11. `// Return success`
12. `// Payment failed, release inventory`
13. `// Return failure`
14. `// Get the order`
15. `// Refund the payment`
16. `// Give back the items`
17. `// Update status`
18. `// Gets order by ID`
19. `// Saves the order`

---

## **Noise Comments**
Comments that provide zero useful information:

1. `// Something went wrong`
2. `// Log the error`
3. `// Throw it`
4. `// Implementation here` (in GetOrderById method)
5. `// Implementation here` (in SaveOrder method)

---

## **Attributions/Bylines**
Author and date information that belongs in version control:

1. `// Added by John on 12/15/2023 - needed for the new feature`

---

## **Inappropriate Information**
Personal opinions or attributions without technical reasoning:

1. `// John says we need to refund here`

---

## **Bad TODO Comments**
Vague TODOs that aren't actionable:

1. `// TODO: Fix this later`

---

## **Misleading Amplification**
False emphasis without explaining why something is important:

1. `// This is important!!!`

---