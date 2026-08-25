# Mad Skills

**Strategy tools that make AI harder to fool.**

Mad Skills is a public portfolio of portable reasoning skills for executives, product leaders, and builders. Each skill is designed around a specific strategic failure mode and can be used in both ChatGPT and Claude.

The portfolio is intentionally small. One skill should do one important job well.

## Flagship skill

### Relative Value Strategy

`skills/relative-value-strategy/SKILL.md`

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

The repository includes a lightweight public portfolio page that turns a real decision into a portable test prompt for ChatGPT or Claude.

Open `index.html` locally, or publish the repository root through GitHub Pages / any static host.

No API key is required. The page does not send user input anywhere; it only constructs a prompt that can be copied into the user's preferred AI tool.

## Compatibility

The skill uses plain Markdown plus YAML frontmatter following the common `SKILL.md` Agent Skills pattern. It has no vendor-specific code dependency and is intended to remain portable across ChatGPT/OpenAI and Claude/Anthropic environments that support skills or instruction files.

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
