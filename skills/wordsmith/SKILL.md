---
name: wordsmith
description: Tighten and improve wording without changing the underlying argument, facts, or level of certainty. Use when the user asks to wordsmith, sharpen, tighten, simplify, make more memorable, improve cadence, improve phrasing, name something, or make existing writing sound more natural and precise.
---

# Wordsmith

## Job

Improve sentence-level and phrase-level expression while preserving what the user actually means.

This is a wording skill, not a strategy or argument-generation skill.

Default rule:

`clear meaning → tighter, more natural, more memorable language`

not:

`clear meaning → more abstract, corporate, polished-sounding language`

## Trigger

Use this skill when the user asks for things such as:

- wordsmith this
- tighten this
- sharpen this
- make this more concise
- make this punchier
- improve the wording
- make this more memorable
- simplify this
- improve the cadence
- make this sound more natural
- give this a better name
- improve this sentence / paragraph / headline / title

If the user is asking to invent the argument, choose the strategy, or substantially restructure the content, do not silently treat that as wordsmithing. Preserve the supplied argument unless the user asks for broader rewriting.

## Method

### 1. Lock the meaning

Before editing, identify internally:

- the core claim;
- what must remain true;
- any factual qualifiers or uncertainty;
- the intended audience and genre when obvious from context;
- any unusual wording that sounds intentionally like the user.

Do not strengthen certainty or scope merely to make the sentence sound stronger.

### 2. Remove before replacing

First look for words that can disappear.

Remove:

- filler;
- repetition;
- throat-clearing;
- generic executive language;
- unnecessary adjectives and adverbs;
- clichés;
- jargon that hides a simpler idea;
- phrases that explain what a strong noun or verb can say directly.

A shorter sentence is not automatically better. Compression should increase clarity or force.

### 3. Prefer concrete language

Prefer strong nouns and verbs.

Useful verbs often include:

`turn | build | prove | scale | reuse | decide | launch | grow | reduce | connect | find | change | move | make`

Be suspicious of abstract substitutes such as:

`productization | orchestration | enablement | transformation | sophisticated | strategic | optimization engine | commercialization engine | cross-functional`

Use them only when they are genuinely more precise for the audience.

### 4. Preserve plain language

Do not make language more abstract merely because the audience is senior.

If the clearest version is easy to say aloud, preserve that advantage.

Default transformation:

`plain accurate language → tighter plain accurate language`

Avoid:

`plain accurate language → corporate abstraction`

If the revised version is harder to explain aloud than the original, move back toward the original.

### 5. Improve cadence

Use sentence length, parallel structure, repetition, and punctuation deliberately.

Look for:

- a clean stress point at the end of the sentence;
- unnecessary clauses before the main idea;
- parallel constructions that can become more memorable;
- places where two weak sentences should become one;
- places where one overloaded sentence should become two;
- rhythm that sounds spoken rather than generated.

Do not create artificial drama.

### 6. Protect distinctive language

Preserve unusual wording when it is:

- accurate;
- direct;
- memorable;
- natural to the user; and
- stronger than a polished substitute.

Do not professionalize away the voice.

If a phrase is slightly unconventional but carries the idea better, improve around it rather than replacing it.

### 7. Naming

When asked to name something:

- name the mechanism or memorable consequence, not the category;
- prefer short names;
- test whether the name is understandable without a paragraph of explanation;
- avoid generic AI, platform, engine, framework, solution, transformation, and intelligence labels unless they are essential;
- generate multiple names only when the user asks for options.

### 8. Final integrity check

Before returning the edit, verify:

- meaning did not change;
- no fact became stronger;
- no uncertainty disappeared;
- no new unsupported claim was introduced;
- no important caveat vanished;
- the language is at least as easy to say aloud;
- the result sounds like a person, not polished generic AI copy.

If any check fails, revise.

## Default output

If the user asks only to wordsmith supplied text:

- return the revised text only;
- do not add an explanation, critique, score, or change log;
- preserve the original structure unless changing it is necessary for clarity.

If the user asks for options, return a small number of meaningfully different options.

If the user asks what changed, explain the material edits after presenting the revision.

## Boundaries

Wordsmithing must not:

- invent facts;
- alter evidence or confidence;
- turn an estimate into a result;
- turn a hypothesis into a fact;
- manufacture superiority;
- rewrite the user's argument into a different thesis without permission;
- add jargon merely to sound more senior;
- erase ambiguity that is real and material.

When structural problems make sentence-level editing insufficient, say so briefly and offer the smallest structural correction needed.
