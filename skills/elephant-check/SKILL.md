---
name: elephant-check
description: Stress-test strategies, products, market designs, business cases, and organizational recommendations against actual human and institutional incentives. Use when a proposal assumes actors will stop spending, surrender economics or authority, cooperate, abandon incentives, or allow saved resources to disappear because the system is globally more efficient.
---

# Elephant Check

## Purpose

Strategy often fails because the model optimizes the system while the people inside the system optimize their own objectives.

Use this skill to expose recommendations that require a customer, buyer, seller, executive, agency, regulator, partner, team, or other institution to behave differently merely because the proposed design is globally efficient.

Core anti-pattern:

> **ELEPHANT ANTI-PATTERN:** A strategy assumes an actor will stop spending, surrender economics, abandon an incentive, cooperate, or behave "rationally" merely because the proposed system makes that behavior globally efficient.

Required question:

> **What will the human or institution actually do with the freed resource?**

## Trigger

Run this skill when a recommendation assumes or implies that an actor will:

- stop spending or leave approved budget unused;
- surrender revenue, margin, territory, authority, credit, data, inventory, or another advantage;
- cooperate because cooperation improves total-system efficiency;
- abandon a KPI, incentive, workflow, or organizational behavior because a better mechanism exists;
- allow saved money, time, headcount, inventory, attention, capital, or authority to disappear rather than be reallocated; or
- optimize the system designer's objective instead of the actor's actual objective.

Do not assume bad faith. The problem is usually not irrationality. The problem is that the actor is rational against a different objective function.

## Workflow

### 1. Identify actor reality

For every material actor, state:

- who controls the decision;
- what principal they represent;
- what they are measured or rewarded on;
- what they gain or lose;
- what authority they control; and
- which constraints are binding.

Never substitute the system's objective for the actor's objective.

### 2. Establish the behavioral baseline

State what the actor will probably do if the proposed mechanism does not exist.

Separate:

- documented or observed behavior;
- evidence-backed inference; and
- unsupported behavioral assumption.

If a load-bearing behavior claim is unsupported, stop and mark it as unresolved.

### 3. Trace resource disposition

For every resource the proposal appears to save, suppress, or make unnecessary, classify what happens next:

`eliminated | reallocated | delayed | accelerated | expanded | contracted | defended/withheld | unresolved`

Budget, time, headcount, inventory, attention, capital, authority, and political credit do not disappear by default.

### 4. Model second-order adaptation

Ask how participants behave after they understand the new system.

Test for:

- gaming;
- budget migration;
- KPI substitution;
- channel shifting;
- strategic withholding;
- new arbitrage;
- organizational defense; and
- competitive response.

A strategy that works only before participants adapt is not durable.

### 5. Test elasticity and horizon

Identify which resources are truly fixed in the relevant time horizon and which can expand or contract.

Do not confuse:

- a committed quarterly budget with next year's total budget;
- available employee hours with removable headcount;
- physical capacity with internal budget allocation;
- current authority with permanently fixed governance.

### 6. Revise or kill the strategy

Restate the mechanism using actor-realistic behavior.

If the economics disappear once realistic reallocation or adaptation is included, kill or narrow the thesis.

If the mechanism survives, carry the behavioral assumptions explicitly into the product design, experiment, architecture, and value-capture model.

## Advertising prior

For committed marketing budgets, use this defeasible prior unless evidence says otherwise:

> **MARKETER BUDGET DEPLOYMENT PRIOR:** Within an approved planning horizon, assume committed marketing budget is intended to be deployed. The primary economic decision is therefore allocation among alternatives, not spend versus no-spend, unless evidence establishes meaningful budget elasticity.

Operationally:

`poor action ≠ unspent budget`

Default model:

`poor action → budget reallocated to another audience / channel / format / platform / period`

Always distinguish:

- spend reduction;
- spend reallocation; and
- budget expansion or contraction.

## Required output

Return a compact table or equivalent structure:

`Actor | Actual objective/incentive | Baseline behavior | Freed resource | Likely disposition | Second-order response | Elasticity | Revised mechanism`

End with exactly one execution state:

- `STRATEGY_SURVIVES_ELEPHANT`
- `REALLOCATION_REQUIRED`
- `ELASTICITY_UNRESOLVED`
- `BEHAVIOR_ASSUMPTION_UNSUPPORTED`
- `STRATEGY_FAILS_ELEPHANT`

## Supporting harness

For a stricter gate-by-gate implementation, read `HARNESS.md` in this skill folder.

## Boundary

This skill does not prove selfishness, irrationality, or bad faith. It models incentives and institutional behavior.

It does not override legal, ethical, fiduciary, safety, privacy, policy, or contractual constraints.
