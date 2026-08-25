# Mad Skills

**AI skills for decisions that survive reality.**

Generic AI is good at making a strategy sound coherent. Mad Skills are built for the part that usually breaks next: the buyer has alternatives, people have incentives, budgets move, and the system does not behave the way the slide says it should.

Each skill targets one recurring failure mode and gives ChatGPT, Claude, and other Agent Skills-compatible systems a repeatable way to catch it.

## Flagship skill

### Relative Value Strategy

**Find where the buyer actually has a reason to choose you.**

Use it when you need to decide what to build, how to position it, where you actually have premium, or whether the thesis collapses once you compare it with the best thing the buyer can do instead.

It forces four questions:

1. **What does this buyer actually value?**
2. **What can they do instead?**
3. **Where are you meaningfully better rather than merely relevant?**
4. **What will the people inside the system actually do once incentives, budgets, authority, and reallocation enter the model?**

That fourth question is the built-in **Elephant Check**:

> **Put the people back in the model.**

A strategy is not finished if it only works because someone stops spending, gives up economics, cooperates against their incentives, or lets a saved resource disappear.

## Try it

The repository includes a lightweight public page for testing a real decision without an API key:

- enter the decision;
- add whatever context matters;
- build the test; and
- copy it into ChatGPT or Claude.

The page is implemented in `index.html`, `styles.css`, and `app.js`.

## Install the actual skill

There is one shared skill implementation:

`skills/relative-value-strategy/SKILL.md`

For Agent Skills-compatible coding agents, the open skills CLI can install it from this repository:

```bash
npx skills add yoda-sahb/Mad_Skills --skill relative-value-strategy
```

For ChatGPT Skills or Claude environments that support Agent Skills, use the same `relative-value-strategy` skill folder. The core instructions are not forked into separate ChatGPT and Claude versions.

## Why `SKILL.md`?

Because that is the shared Agent Skills convention. It is implementation plumbing, not the product name.

The human-facing product is **Relative Value Strategy**. The `SKILL.md` file is what compatible agents load when the skill is relevant.

## What a full run returns

- the actual decision;
- the strongest alternatives;
- the value drivers that matter;
- where relative advantage is supported versus unproven;
- the Elephant Check on incentives and resource reallocation;
- the strategic crux;
- explicit non-priorities; and
- the evidence that would change the conclusion.

## Attribution

The value-strategy foundation is an independent operationalization of concepts attributed to Dwight Porter, including Value Drivers, Product Offering thinking, product-line ownership framing, and value / pricing concepts.

Mad Skills is not an official Dwight Porter publication and is not presented as endorsed by him. The relative-premium operating model, evidence handling, bundle tests, AI-execution structure, and Elephant Check are implementation extensions and should not be attributed to Porter without independent sourcing.

## Standard

**A strategy should survive the best alternative and the people inside the system.**
