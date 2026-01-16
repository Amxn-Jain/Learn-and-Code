# Learning Reflection on Clean Code Comments

## What I Learned

Going through this exercise was honestly eye-opening. Before reading Clean Code, I used to think comments were always helpful and that "more documentation is better." But now I realize I was just adding noise to my code most of the time.

The biggest revelation for me was understanding that **comments are often a crutch for poorly written code**. When I looked at all those redundant comments like `// Check if order is null` followed by `if (order == null)`, I felt a bit embarrassed because I've written exactly this kind of stuff in my own projects!

## Key Takeaways

1. **Self-documenting code is the goal** - Instead of writing `// Get the order`, I should just make sure my method name like `GetOrderById()` is clear enough that no comment is needed.

2. **I've been writing noise comments** - Comments like `// Something went wrong` in a catch block are completely useless. The catch block itself tells us something went wrong!

3. **TODOs need to be specific** - My habit of writing `// TODO: Fix this later` is lazy. I need to explain WHAT needs fixing and WHY it's incomplete.

4. **Version control exists for a reason** - I don't need to write `// Added by John on 12/15/2023` when Git tracks all of this automatically.

## What I'll Change in My Code

Moving forward, I'm going to:
- **Think twice before writing any comment** - Ask myself: "Can I make the code itself clearer instead?"
- **Extract methods with meaningful names** - Instead of commenting what a block does, I'll extract it into a well-named method
- **Only comment the "why," not the "what"** - If I must comment, explain WHY a decision was made, not WHAT the code is doing
- **Keep TODO comments actionable** - Include what needs to be done, why, and ideally a ticket reference

## Final Thought

The most important lesson: **Good code tells you what it does. Good comments tell you why it does it.** Most of the time, we don't even need the second part if we write expressive code.

I'm actually excited to go back and refactor some of my old codes now. I bet I'll find hundreds of these bad comments that I can eliminate by simply improving the code structure!