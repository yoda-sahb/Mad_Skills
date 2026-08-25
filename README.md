# Mad Skills

**Strategy tools that make AI harder to fool.**

Mad Skills is a public portfolio of portable reasoning tools for executives, product leaders, and builders. The public experience is designed around trying the method on a real decision, not browsing instruction files.

## Flagship tool

### Relative Value Strategy

A buyer-specific strategy engine for answering:

> **What does this specific decision-maker value, what are the real alternatives, and where do we create enough relative advantage to change the decision?**

It combines:

- value-driver analysis;
- real-alternative comparison;
- relative-premium testing;
- bundle / decomposition testing;
- explicit non-priorities; and
- the **Elephant Check**, which forces human incentives, resource reallocation, and second-order behavior back into the economic model.

The Elephant Check is not a separate skill. It is a mandatory stress test inside Relative Value Strategy.

## Try it

The repository root contains the public portfolio experience:

- `index.html`
- `styles.css`
- `app.js`

A visitor enters a real decision, builds the strategy test locally, and can then **Copy + open ChatGPT** or **Copy + open Claude**. No API key is required and the page does not send the visitor's decision to a backend.

## ChatGPT + Claude compatibility

There is one implementation, not separate ChatGPT and Claude forks.

The underlying installable instruction file lives at:

`skills/relative-value-strategy/SKILL.md`

The filename is intentionally `SKILL.md` because both OpenAI/ChatGPT and Anthropic/Claude use the Agent Skills folder convention. The folder name provides the skill identity; the website provides the human-facing product name.

For a CEO or other visitor, `SKILL.md` is implementation plumbing. The portfolio page should lead with **Relative Value Strategy**, explain what it does, and make it immediately usable. The source file remains available for builders who want to inspect or install the full skill.

## Attribution

The value-strategy foundation is an independent operationalization of concepts attributed to Dwight Porter, including Value Drivers, Product Offering thinking, and relative customer-value / value-capture logic.

Mad Skills is not an official Dwight Porter publication and is not presented as endorsed by him. AI-operational extensions, including the Elephant Check, are original implementation layers and should not be attributed to Porter without independent sourcing.

## Repository principles

- Start from the decision-maker, not the seller's capabilities.
- Compare against the strongest plausible alternatives.
- Relevance is not relative premium.
- Existing solutions are allowed to shrink the thesis.
- Human incentives belong inside the model.
- Saved resources do not disappear by default.
- A strategy is incomplete until it creates non-priorities.
