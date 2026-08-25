const decision = document.getElementById('decision');
const context = document.getElementById('context');
const buildButton = document.getElementById('buildPrompt');
const copyButton = document.getElementById('copyPrompt');
const openChatGPT = document.getElementById('openChatGPT');
const openClaude = document.getElementById('openClaude');
const output = document.getElementById('promptOutput');

function setProviderState(enabled) {
  copyButton.disabled = !enabled;
  openChatGPT.disabled = !enabled;
  openClaude.disabled = !enabled;
}

function buildPrompt() {
  const decisionText = decision.value.trim();
  const contextText = context.value.trim();

  if (!decisionText) {
    output.textContent = 'Add a real decision first.';
    setProviderState(false);
    return false;
  }

  const prompt = `Use Relative Value Strategy on the decision below.

DECISION
${decisionText}

${contextText ? `CONTEXT\n${contextText}\n\n` : ''}PRESSURE-TEST IT IN FOUR PASSES

1. WHAT MATTERS?
Define the actual decision-maker, the outcome they care about, the constraints, time horizon, and resource being allocated. Identify the value drivers that truly change this decision. Do not substitute our capabilities for customer value.

2. WHAT CAN THEY DO INSTEAD?
Compare against the strongest plausible alternatives: incumbent, internal build, current team, another vendor, multiple specialists, workaround, delay, do nothing, or reallocation when relevant. Let strong alternatives shrink the thesis.

3. WHERE ARE WE ACTUALLY BETTER?
Separate mandate relevance, alternative supply, evidence strength, and relative advantage. Distinguish ADVANTAGE, PARITY, DISADVANTAGE, and UNKNOWN. If the option is relevant but not scarce or superior, say so. Test any bundle by asking whether the buyer could assemble essentially the same outcome another way.

4. WHAT WILL PEOPLE ACTUALLY DO?
Run the Elephant Check. Identify each material actor's real incentive, baseline behavior, what resource is saved or displaced, where that resource will actually go, likely second-order adaptation, and elasticity over the relevant horizon. Do not let money, time, inventory, authority, or attention disappear by assumption.

Then identify the strategic crux: the one or two things most likely to decide the outcome. State what should lead, what should not be prioritized, and what evidence would change the conclusion.

OUTPUT
- Decision
- Relative Value Map: Value driver | Importance | Best alternative | Alternative supply | Proposed option | Evidence strength | Relative advantage | Confidence
- Strategic Crux
- Elephant Check: Actor | Actual incentive | Baseline behavior | Freed/displaced resource | Likely disposition | Adaptation | Elasticity
- What should lead
- Non-priorities
- Evidence gaps
- Verdict: RELATIVE_PREMIUM_SUPPORTED | RELEVANT_BUT_PREMIUM_UNPROVEN | PARITY / TABLE_STAKES | STRUCTURAL_DISADVANTAGE | STRATEGY_FAILS_ELEPHANT

Challenge the thesis. Do not reward it for sounding ambitious.`;

  output.textContent = prompt;
  setProviderState(true);
  return true;
}

async function copyCurrentPrompt(button = copyButton) {
  if (!buildPrompt()) return false;

  try {
    await navigator.clipboard.writeText(output.textContent);
    const previous = button.textContent;
    button.textContent = 'Copied';
    setTimeout(() => { button.textContent = previous; }, 1400);
    return true;
  } catch {
    const range = document.createRange();
    range.selectNodeContents(output);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    copyButton.textContent = 'Select + copy';
    return false;
  }
}

function copyAndOpen(url, button) {
  if (!buildPrompt()) return;

  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  navigator.clipboard.writeText(output.textContent).then(() => {
    const previous = button.textContent;
    button.textContent = 'Copied — paste there';
    setTimeout(() => { button.textContent = previous; }, 1800);
  }).catch(() => {
    copyButton.textContent = 'Copy prompt manually';
  });

  if (!newWindow) {
    window.location.href = url;
  }
}

buildButton.addEventListener('click', buildPrompt);
copyButton.addEventListener('click', () => copyCurrentPrompt(copyButton));
openChatGPT.addEventListener('click', () => copyAndOpen('https://chatgpt.com/', openChatGPT));
openClaude.addEventListener('click', () => copyAndOpen('https://claude.ai/new', openClaude));
