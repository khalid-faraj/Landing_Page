const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  question.addEventListener("click", () => {
    const isOpen = item.classList.contains("active");

    // 🔄 Close all other items first
    faqItems.forEach((otherItem) => {
      if (otherItem !== item && otherItem.classList.contains("active")) {
        const otherAnswer = otherItem.querySelector(".faq-answer");
        otherAnswer.style.height = otherAnswer.scrollHeight + "px";
        requestAnimationFrame(() => {
          otherAnswer.style.height = "0px";
        });
        otherItem.classList.remove("active");
      }
    });

    // 🔁 Toggle current item
    if (isOpen) {
      answer.style.height = answer.scrollHeight + "px";
      requestAnimationFrame(() => {
        answer.style.height = "0px";
      });
      item.classList.remove("active");
    } else {
      item.classList.add("active");
      answer.style.height = answer.scrollHeight + "px";
    }

    // 🧠 After transition, set height to auto if active
    answer.addEventListener(
      "transitionend",
      () => {
        if (item.classList.contains("active")) {
          answer.style.height = "auto";
        }
      },
      { once: true }
    );
  });
});
