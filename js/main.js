// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("site-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("is-open", !open);
  });
}

// Forms: posts to the form's action (e.g. Formspree) with fetch.
// TODO: set each form's action to your real endpoint, e.g.
//   https://formspree.io/f/abcdwxyz
// Until then, submissions are not sent and the visitor is told so.
document.querySelectorAll("form[data-stub-form]").forEach((form) => {
  const status = form.querySelector(".form-status");

  const show = (msg) => {
    status.textContent = msg;
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (form.action.includes("TODO")) {
      show("This form isn't connected yet, so nothing was sent. Please email us instead.");
      return;
    }

    const button = form.querySelector("button[type=submit]");
    button.disabled = true;

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(res.statusText);
      form.reset();
      show(form.dataset.success || "Sent. We'll get back to you soon.");
    } catch {
      show("That didn't go through. Check your connection and try again, or email us.");
    } finally {
      button.disabled = false;
    }
  });
});

// Footer year
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});
