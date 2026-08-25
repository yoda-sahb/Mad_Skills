# Relative Value Strategy

A portable strategy skill for finding where a product, company, offering, or leader actually has leverage relative to the strongest real alternatives.

> **What does this specific decision-maker value, what are the strongest real alternatives, and where do we create enough relative advantage to change the decision?**

## Works with

- ChatGPT / OpenAI environments that support `SKILL.md`-style Agent Skills
- Claude / Anthropic environments that support `SKILL.md`-style skills
- Any other instruction-based agent that can load Markdown system guidance

The same `SKILL.md` is used across supported environments. There is no separate ChatGPT or Claude fork.

## What it does

Relative Value Strategy forces a decision through four hard tests:

1. **Buyer value** — what actually changes the decision?
2. **Real alternatives** — what can the buyer do instead, including internal build, current-team capability, decomposition, waiting, or reallocating the resource?
3. **Relative premium** — where are you meaningfully better versus merely relevant or at parity?
4. **Elephant Check** — what will the humans and institutions actually do once incentives, budgets, authority, and saved resources are put back into the model?

## The Elephant Anti-Pattern

> **A strategy assumes an actor will stop spending, surrender economics, abandon an incentive, cooperate, or behave “rationally” merely because the proposed system makes that behavior globally efficient.**

Required question:

> **What will the human or institution actually do with the freed resource?**

For advertising, the skill uses a defeasible prior that committed marketing budget is generally intended to be deployed within an approved planning horizon. A poor action therefore usually implies **reallocation**, not magically unspent budget.

## Example uses

- Pressure-test a product strategy before funding it
- Decide whether a capability is true differentiation or table stakes
- Compare a proposed product against internal build and incumbent alternatives
- Find the one or two value drivers that should lead positioning
- Test whether a capability bundle is genuinely scarce or easily assembled
- Identify where saved budget, time, inventory, attention, or authority really goes
- Build explicit non-priorities into a strategy

## Use

Load [`SKILL.md`](./SKILL.md) as the skill instructions, then give the model a real decision and relevant evidence.

Example:

```text
Use Relative Value Strategy on this decision:

We are considering launching a premium AI analytics product for enterprise customers. The technology is differentiated, but customers may be able to assemble similar value from their existing data warehouse, BI stack, and internal team.

Should we launch, what should lead the positioning, and what should we deliberately not build?
```

## Output

A full run returns:

- Decision
- Relative Value Map
- Strategic Crux
- Elephant Check
- Offering
- Non-priorities
- Evidence gaps
- Verdict

## Attribution

The value-strategy foundation is an independent operationalization of concepts attributed to Dwight Porter, including Value Drivers, Product Offering thinking, product-line ownership framing, and client-described value / pricing concepts.

This repository is not an official Dwight Porter publication and is not presented as endorsed by him. The relative-premium operating model, evidence handling, bundle tests, AI-execution structure, and Elephant Check are implementation extensions and should not be attributed to Dwight Porter unless independently sourced.
