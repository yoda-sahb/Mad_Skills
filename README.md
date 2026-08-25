# Mad Skills

**AI skills for decisions, stories, and writing that survive reality.**

Generic AI is good at making an answer sound coherent. Mad Skills are built for what usually breaks next: the buyer has alternatives, people have incentives, budgets move, stories drift away from their thesis, and polished language can quietly change the thought underneath it.

Each skill targets one recurring failure mode and gives ChatGPT, Claude, and other Agent Skills-compatible systems a repeatable way to catch it.

## Skills

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

[Explore Relative Value Strategy](./skills/relative-value-strategy/README.md)

### Storytelling

**Make the audience understand the idea before you name it.**

Use it when the idea is strong but the narrative feels flat, over-explained, framework-first, or hijacked by a good anecdote.

Storytelling:

- locks the governing thesis before shaping the narrative;
- creates a live question, tension, or puzzle;
- reveals the mechanism progressively;
- uses examples only when they do explanatory work;
- applies the **show-before-name** rule to specialized concepts and frameworks; and
- earns the ending by changing how the opening is understood.

> **A strong story does not announce the insight. It makes the audience see why the insight has to be true.**

[Explore Storytelling](./skills/storytelling/README.md)

### Wordsmith

**Make the sentence better without changing the thought.**

Use it when the idea is already there but the wording is loose, generic, over-polished, corporate, or simply not memorable enough.

Wordsmith:

- locks the meaning before editing;
- cuts filler before inventing new language;
- prefers concrete nouns and verbs;
- protects plain language and distinctive voice;
- improves cadence, compression, naming, headlines, and titles; and
- refuses to quietly strengthen facts, certainty, or claims just to make the prose sound better.

> **Better wording should make the thought clearer, not turn it into a different thought.**

[Explore Wordsmith](./skills/wordsmith/README.md)

## How the writing skills compose

Storytelling and Wordsmith solve different problems:

`Storytelling → narrative structure and reveal`

`Wordsmith → sentence and phrase quality`

A useful sequence is:

`Storytelling → Wordsmith`

## Try it

The repository includes a lightweight public page for testing Relative Value Strategy without an API key.

Storytelling can be tried directly with:

```text
Use Storytelling on these notes. Keep the thesis intact, but make the idea unfold naturally:

[PASTE NOTES]
```

Wordsmith can be tried directly with:

```text
Wordsmith this without changing the argument:

[PASTE TEXT]
```

## Install

There is one shared implementation per skill:

```text
skills/relative-value-strategy/SKILL.md
skills/storytelling/SKILL.md
skills/wordsmith/SKILL.md
```

For Agent Skills-compatible coding agents:

```bash
npx skills add yoda-sahb/Mad_Skills --skill relative-value-strategy
npx skills add yoda-sahb/Mad_Skills --skill storytelling
npx skills add yoda-sahb/Mad_Skills --skill wordsmith
```

For ChatGPT Skills or Claude environments that support Agent Skills, use the same skill folders. The core instructions are not forked into separate ChatGPT and Claude versions.

## Why `SKILL.md`?

Because that is the shared Agent Skills convention. It is implementation plumbing, not the product name.

The human-facing products are **Relative Value Strategy**, **Storytelling**, and **Wordsmith**. `SKILL.md` is what compatible agents load when a skill is relevant.

## Attribution

The value-strategy foundation in Relative Value Strategy is an independent operationalization of concepts attributed to Dwight Porter, including Value Drivers, Product Offering thinking, product-line ownership framing, and value / pricing concepts.

Mad Skills is not an official Dwight Porter publication and is not presented as endorsed by him. The relative-premium operating model, evidence handling, bundle tests, AI-execution structure, and Elephant Check are implementation extensions and should not be attributed to Porter without independent sourcing.

Storytelling and Wordsmith are independent writing skills derived from the public-safe operating methods used in the author's broader strategy and writing systems.
