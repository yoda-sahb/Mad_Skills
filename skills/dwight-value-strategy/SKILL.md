---
name: dwight-value-strategy
description: Apply a relative-value strategy method to product, pricing, positioning, portfolio, and executive decisions. Use when the task is to determine what a specific customer or decision-maker values, compare real alternatives on weighted value drivers, identify relative premium or disadvantage, define a coherent offering, and choose what to prioritize or not prioritize.
---

# Dwight Value Strategy

## Purpose

Use this skill to reason from the customer's decision rather than from the seller's capabilities.

The method asks:

> **What does this specific customer value, what are the real alternatives, and where does this offering create enough relative advantage to change the decision?**

The skill is especially useful for:

- product strategy;
- pricing and value capture;
- positioning;
- product-line and portfolio choices;
- executive/career value positioning;
- deciding what to resource and what not to prioritize; and
- converting repeated sources of value into a coherent Product Offering.

## Attribution boundary

This is an independent operationalization of concepts attributed to Dwight Porter, including:

- Value Drivers;
- product-line ownership / Product Offering thinking;
- strategic-planning concepts attributed to Porter by clients and practitioners; and
- value-oriented pricing and value-capture concepts described in client recollections.

It is **not** an official Dwight Porter publication, is not presented as endorsed by him, and should not be used to attribute every workflow step below directly to Porter.

Some operational controls in this file are explanatory extensions designed to make the method executable by an AI agent. Treat them as implementation guidance, not Porter doctrine.

## Core principle

Absolute capability is not enough.

A feature, talent, product, or capability matters strategically only to the extent that it changes the customer's choice relative to the alternatives available to that customer.

Therefore reason in this order:

`customer segment / decision → value drivers → importance → alternatives → relative performance → relative premium → offering / value capture → priorities`

Do not reverse the process by starting with the seller's strengths and inventing customer needs that fit them.

## Workflow

### 1. Define the decision segment

Identify the specific customer, buyer, user, executive, account, or decision context.

Do not use a generic market segment when the actual decision is narrower.

State:

- who is deciding;
- what decision they are making;
- what outcome they are trying to produce;
- what constraints materially shape the decision; and
- what time horizon matters.

### 2. Identify the real alternatives

List the alternatives the decision-maker can actually choose, including when relevant:

- incumbent;
- direct competitor;
- adjacent substitute;
- internal build;
- workaround;
- multiple specialized vendors or hires;
- do nothing;
- wait; or
- reallocate the resource elsewhere.

Do not compare only against the weakest convenient competitor.

### 3. Identify value drivers

Define the dimensions that materially change willingness to choose, pay, adopt, stay, expand, fund, promote, or allocate resources.

A value driver should describe value to the customer, not merely a feature of the offering.

Good examples:

- incremental revenue;
- time to value;
- customer experience;
- reliability;
- control;
- risk reduction;
- strategic flexibility;
- operating simplicity;
- measurable business outcome;
- implementation burden;
- learning speed; or
- ability to create future options.

Bad examples are feature lists with no demonstrated decision consequence.

### 4. Weight importance

Not every value driver matters equally.

For the specific decision segment, classify each driver as high, medium, low, or assign weights when evidence supports numeric treatment.

Do not force false precision. If weighting evidence is weak, keep it qualitative and state the uncertainty.

### 5. Compare relative performance

Evaluate the offering and each plausible alternative on the important value drivers.

Ask:

- Where is the offering clearly better?
- Where is it at parity?
- Where is it worse?
- Which advantages matter enough to influence the decision?
- Which disadvantages are fatal, tolerable, or compensable?

Technical novelty is not automatically customer value.

Existing solutions should shrink the thesis when they already satisfy the important driver.

### 6. Locate relative premium

Identify the one or two areas where the offering has the strongest supported advantage on important drivers.

Distinguish:

- **high relevance + high relative advantage** — likely premium;
- **high relevance + parity** — table stakes;
- **low relevance + high capability** — impressive but strategically secondary;
- **material disadvantage** — explicit gap or reason not to compete.

Do not headline every strength.

The strategic crux is usually the smallest set of value drivers where relative advantage is both meaningful and difficult for the customer to obtain through the alternatives.

### 7. Test the bundle

When value comes from a combination of capabilities, test whether the integration itself matters.

Ask:

- Could the customer obtain equivalent value from two separate products, vendors, teams, or hires?
- Does integration materially reduce coordination cost, time, risk, or failure modes?
- Does the bundle create an outcome that the components do not create independently?

If the answer is no, do not manufacture a bundle premium.

### 8. Define the Product Offering

Translate repeated value into a coherent offering.

State:

- target decision segment;
- customer problem / desired outcome;
- lead value drivers;
- relative advantage;
- proof required;
- product or service boundary;
- delivery model;
- value-capture mechanism; and
- explicit non-priorities.

A coherent Product Offering is not a catalog of everything the organization can do.

### 9. Choose value capture

Determine how the value should be captured economically or organizationally.

Depending on context this can include:

- price premium;
- usage pricing;
- outcome-linked pricing;
- consumption model;
- share of value;
- higher resource priority;
- executive scope;
- increased budget allocation; or
- strategic control of a product line.

Do not infer a pricing model solely from product architecture. Tie value capture to the customer's value mechanism and decision behavior.

### 10. Decide what not to prioritize

A strategy is incomplete until it creates non-priorities.

Identify:

- drivers that matter but are already sufficiently served;
- features that do not change the customer decision;
- attractive opportunities with weak relative advantage;
- customer segments where the offering is structurally disadvantaged; and
- investments that dilute the lead source of value.

## Evidence discipline

For every material conclusion, distinguish:

- customer evidence;
- offering evidence;
- alternative evidence; and
- inference.

Never infer the customer's value drivers solely from the offering's strengths.

Never claim scarcity, superiority, or premium merely because a capability is relevant.

If the evidence only proves relevance, say `RELEVANT / RELATIVE PREMIUM UNPROVEN`.

## Human-incentive check

If the strategy assumes that an actor will stop spending, surrender economics, cooperate, abandon an incentive, or allow a saved resource to disappear, use the companion `elephant-check` skill before accepting the conclusion.

This behavioral overlay is not attributed to Dwight Porter.

## Output format

Return the minimum useful structure for the task. For a full diagnostic, use:

### Decision

One sentence defining the customer and decision.

### Value-driver table

`Value driver | Importance | Customer evidence | Best alternative | Offering performance | Relative advantage | Confidence`

### Strategic crux

The one or two value drivers where the decision is most likely won or lost.

### Product Offering / Positioning

A compact statement of the offering built around the strategic crux.

### Non-priorities

What should explicitly not lead or not receive resources.

### Evidence gaps

What must be verified before making a stronger claim.

## Final checks

Before finalizing, verify:

1. The customer decision was defined before the offering was evaluated.
2. Real alternatives were included, including do-nothing / internal / decomposition alternatives when relevant.
3. Value drivers describe customer value rather than seller features.
4. Importance is not assumed equal across all drivers.
5. Relative advantage is separated from simple relevance.
6. Existing alternatives were allowed to shrink the thesis.
7. A bundle premium is claimed only when integration itself creates value.
8. The strategy creates explicit non-priorities.
9. Evidence and inference are separated.
10. Human incentive assumptions were tested when they are load-bearing.
