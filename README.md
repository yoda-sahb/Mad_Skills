# Mad Skills

Public, portable Agent Skills for strategy, product, innovation, and decision work.

Each skill is packaged as a standalone folder with a required `SKILL.md` and optional supporting Markdown resources. The format is intentionally compatible with the Agent Skills pattern used by ChatGPT/OpenAI and Claude/Anthropic.

## Skills

### Dwight Value Strategy

`skills/dwight-value-strategy/`

A value-strategy workflow for identifying what a specific customer or decision-maker values, comparing real alternatives on weighted value drivers, locating relative premium, and turning repeated value into a coherent offering and value-capture strategy.

This is an independent operationalization of concepts attributed to Dwight Porter. It is not an official Dwight Porter publication and is not presented as endorsed by him.

### Elephant Check

`skills/elephant-check/`

A behavioral and economic reality check for strategies that assume people or institutions will stop spending, surrender economics, abandon incentives, cooperate, or let saved resources disappear merely because the total system becomes more efficient.

Core question: **What will the human or institution actually do with the freed resource?**

## Compatibility

The skills use plain Markdown plus YAML frontmatter and do not require vendor-specific code. Supporting resources are also Markdown. This keeps the repository portable across AI systems that support Agent Skills / `SKILL.md` workflows.

## Design principles

- One job per skill.
- Explicit triggers and stopping conditions.
- Separate observed evidence from inference.
- Prefer relative value over generic capability claims.
- Model human incentives before accepting system-level efficiency claims.
- Keep supporting files optional so the core skill remains portable.

## Repository status

Working public library. Skills may evolve as they are tested against real cases.
