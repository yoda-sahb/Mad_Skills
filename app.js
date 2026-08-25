const decision = document.getElementById('decision');
const context = document.getElementById('context');
const buildButton = document.getElementById('buildPrompt');
const copyButton = document.getElementById('copyPrompt');
const output = document.getElementById('promptOutput');

function buildPrompt() {
  const decisionText = decision.value.trim();
  const contextText = context.value.trim();

  if (!decisionText) {
    output.textContent = 'Add a real decision first.';
    copyButton.disabled = true;
    return;
  }

  const prompt = `Use the Relative Value Strategy skill on the decision below.

DECISION
${decisionText}

${contextText ? `CONTEXT\n${contextText}\n\n` : ''}METHOD
1. Define the actual decision-maker, desired outcome, constraints, time horizon, and resource being allocated.
2. Identify the strongest real alternatives, including incumbent, internal build, workarounds, decomposition into multiple vendors/teams/hires, delay, do nothing, or reallocation when relevant.
3. Identify the buyer-specific value drivers. Do not substitute seller capabilities for customer value.
4. Weight each driver by importance to this specific decision.
5. Compare the proposed option against the strongest alternatives. Separate ADVANTAGE, PARITY, DISADVANTAGE, and UNKNOWN.
6. Identify the one or two drivers where relative premium is actually supported. If evidence proves relevance but not scarcity or superiority, say RELEVANT / RELATIVE PREMIUM UNPROVEN.
7. Test any capability bundle by asking whether the buyer could obtain essentially the same outcome by assembling the components separately.
8. Run the Elephant Check. Identify each material actor's actual incentive, baseline behavior, what resource is saved/displaced, where that resource will really go, second-order adaptation, and elasticity. Do not let saved resources disappear by assumption.
9. Translate the surviving advantage into a coherent offering and explicit non-priorities.
10. Separate evidence from inference and identify what would falsify the strategy.

OUTPUT
Return:
- Decision
- Relative Value Map: Value driver | Importance | Best alternative | Proposed option | Relative advantage | Evidence | Confidence
- Strategic Crux
- Elephant Check: Actor | Actual incentive | Baseline behavior | Freed/displaced resource | Likely disposition | Adaptation | Elasticity
- Offering / Positioning
- Non-priorities
- Evidence gaps
- Verdict: RELATIVE_PREMIUM_SUPPORTED | RELEVANT_BUT_PREMIUM_UNPROVEN | PARITY / TABLE_STAKES | STRUCTURAL_DISADVANTAGE | STRATEGY_FAILS_ELEPHANT

Challenge the thesis. Do not reward it for sounding ambitious.`;

  output.textContent = prompt;
  copyButton.disabled = false;
}

async function copyPrompt() {
  if (copyButton.disabled) return;
  try {
    await navigator.clipboard.writeText(output.textContent);
    const previous = copyButton.textContent;
    copyButton.textContent = 'Copied';
    setTimeout(() => { copyButton.textContent = previous; }, 1400);
  } catch {
    const range = document.createRange();
    range.selectNodeContents(output);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    copyButton.textContent = 'Select + copy';
  }
}

buildButton.addEventListener('click', buildPrompt);
copyButton.addEventListener('click', copyPrompt);
