let unlockTime = null;

function lockTokens() {
  const amount = document.getElementById("amount").value;
  const duration = document.getElementById("duration").value;

  if (!amount || !duration) {
    alert("⚠️ Please enter both amount and duration.");
    return;
  }

  unlockTime = Date.now() + duration * 1000;

  document.getElementById("status").innerText =
    `✅ Locked ${amount} tokens for ${duration} seconds.`;

  startCountdown();
}

function startCountdown() {
  const interval = setInterval(() => {
    const now = Date.now();
    if (unlockTime && now < unlockTime) {
      const secondsLeft = Math.ceil((unlockTime - now) / 1000);
      document.getElementById("status").innerText =
        `⏳ Locked. Unlock available in ${secondsLeft} seconds.`;
    } else {
      clearInterval(interval);
      document.getElementById("status").innerText =
        "🎉 Tokens are now available for withdrawal!";
    }
  }, 1000);
}
