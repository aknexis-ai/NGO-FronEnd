document.addEventListener("DOMContentLoaded", () => {

  const amountCards = document.querySelectorAll(".amount-card");
  const amountInput = document.querySelector(".currency-input input");
  const childInput = document.querySelector(".counter input");
  const minusBtn = document.querySelector(".minus");
  const plusBtn = document.querySelector(".plus");
  const tabs = document.querySelectorAll(".tab");

  let selectedBaseAmount = 0;

  /* ================= AMOUNT CARD SELECTION ================= */

  amountCards.forEach(card => {
    card.addEventListener("click", () => {
      amountCards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");

      const amount = card.dataset.amount;

      if (amount) {
        selectedBaseAmount = parseInt(amount);
        calculateTotal();
      } else {
        selectedBaseAmount = 0;
        amountInput.focus();
      }
    });
  });

  /* ================= CHILD COUNTER ================= */

  function calculateTotal() {
    const children = parseInt(childInput.value);
    if (!selectedBaseAmount || isNaN(children)) return;

    const total = selectedBaseAmount * children;
    amountInput.value = total;
  }

  plusBtn.addEventListener("click", () => {
    childInput.value = parseInt(childInput.value) + 1;
    calculateTotal();
  });

  minusBtn.addEventListener("click", () => {
    if (childInput.value > 1) {
      childInput.value = parseInt(childInput.value) - 1;
      calculateTotal();
    }
  });

  /* ================= INPUT SYNC ================= */

  amountInput.addEventListener("input", () => {
    amountCards.forEach(c => c.classList.remove("active"));
    selectedBaseAmount = 0;
  });

  /* ================= TAB SWITCH ================= */

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      // UX: Reset form when switching modes
      amountCards.forEach(c => c.classList.remove("active"));
      amountInput.value = "";
      selectedBaseAmount = 0;
      childInput.value = 1;
    });
  });

  /* ================= EXTRA UX SAFETY ================= */

  document.querySelector(".donate-btn").addEventListener("click", e => {
    if (!amountInput.value || parseInt(amountInput.value) <= 0) {
      e.preventDefault();
      alert("Please select or enter a donation amount.");
      amountInput.focus();
    }
  });

});


const impactPreview = document.getElementById("impactPreview");
const impactCount = document.getElementById("impactCount");
const successModal = document.getElementById("successModal");

function updateImpact() {
  const children = parseInt(childInput.value);
  impactCount.textContent = children;
}

plusBtn.addEventListener("click", updateImpact);
minusBtn.addEventListener("click", updateImpact);
childInput.addEventListener("input", updateImpact);

/* Payment Gateway Hook (Demo) */
document.querySelector(".donate-btn").addEventListener("click", e => {
  e.preventDefault();

  if (!amountInput.value || amountInput.value <= 0) {
    amountInput.classList.add("shake");
    setTimeout(() => amountInput.classList.remove("shake"), 500);
    return;
  }

  // Here you would integrate Razorpay / Stripe / Paytm
  setTimeout(() => {
    successModal.style.display = "flex";
  }, 600);
});

window.closeSuccess = function () {
  successModal.style.display = "none";
};
