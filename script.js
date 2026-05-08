const ownerEmail = "mail@socialindkøb.dk";

const categories = [
  {
    name: "IT-løsninger",
    description: "IT-drift, support og digitale løsninger",
    partnerEmail: "partner-it@example.dk",
    color: "#004b57",
    background: "#e6f3f1",
    icon: "monitor",
  },
  {
    name: "El",
    description: "Elaftaler og erhvervsløsninger",
    partnerEmail: "partner-el@example.dk",
    color: "#5cae77",
    background: "#eaf6ee",
    icon: "bolt",
  },
  {
    name: "Internet",
    description: "Bredbånd, fiber og forbindelser",
    partnerEmail: "partner-internet@example.dk",
    color: "#0b6470",
    background: "#e4f3f1",
    icon: "wifi",
    requiresDeliveryAddress: true,
  },
  {
    name: "Omstillingsbord",
    description: "Telefonpasning og kundedialog",
    partnerEmail: "partner-telefon@example.dk",
    color: "#75bd8c",
    background: "#edf7f1",
    icon: "headset",
  },
  {
    name: "Overfaldsalarm",
    description: "Tryghedsløsninger til medarbejdere",
    partnerEmail: "partner-alarm@example.dk",
    color: "#004b57",
    background: "#e8f4f2",
    icon: "shield",
  },
  {
    name: "Forsikringer",
    description: "Erhvervsforsikringer og rådgivning",
    partnerEmail: "partner-forsikring@example.dk",
    color: "#5fae7a",
    background: "#e7f5ed",
    icon: "umbrella",
  },
  {
    name: "Gas",
    description: "Gasaftaler til erhverv",
    partnerEmail: "partner-gas@example.dk",
    color: "#336f71",
    background: "#e6f1ee",
    icon: "flame",
    requiresDeliveryAddress: true,
  },
  {
    name: "Revisor",
    description: "Regnskab, revision og økonomi",
    partnerEmail: "partner-revisor@example.dk",
    color: "#55757b",
    background: "#edf3f2",
    icon: "calculator",
  },
  {
    name: "Tryksager",
    description: "Print, profilmateriale og produktion",
    partnerEmail: "partner-tryk@example.dk",
    color: "#8aaebe",
    background: "#eef5f7",
    icon: "print",
  },
];

const icons = {
  monitor:
    '<svg aria-hidden="true" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="13" rx="2"></rect><path d="M8 21h8M12 17v4"></path></svg>',
  bolt:
    '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="m13 2-9 12h7l-1 8 10-13h-7l0-7Z"></path></svg>',
  wifi:
    '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M12 20h.01M2 8.5a15 15 0 0 1 20 0"></path></svg>',
  headset:
    '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 13v-1a8 8 0 0 1 16 0v1"></path><path d="M4 13a2 2 0 0 1 2-2h1v6H6a2 2 0 0 1-2-2v-2ZM20 13a2 2 0 0 0-2-2h-1v6h1a2 2 0 0 0 2-2v-2ZM14 20h1a5 5 0 0 0 5-5"></path></svg>',
  shield:
    '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"></path><path d="M12 8v4M12 16h.01"></path></svg>',
  umbrella:
    '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M3 12a9 9 0 0 1 18 0H3Z"></path><path d="M12 12v7a3 3 0 0 0 6 0"></path></svg>',
  flame:
    '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 22a7 7 0 0 0 7-7c0-4-3-7-5-10-.5 3-2 4-4 6-1.5 1.5-3 3-3 5a5 5 0 0 0 5 6Z"></path><path d="M12 19a3 3 0 0 0 3-3c0-1.7-1-3-2-4-.2 1.4-.9 2-1.8 2.8-.7.6-1.2 1.3-1.2 2.2a2 2 0 0 0 2 2Z"></path></svg>',
  calculator:
    '<svg aria-hidden="true" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"></rect><path d="M8 6h8M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"></path></svg>',
  print:
    '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7 8V3h10v5"></path><path d="M7 17H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"></path><path d="M7 14h10v7H7zM17 12h.01"></path></svg>',
};

const categoryGrid = document.querySelector("#categoryGrid");
const dialog = document.querySelector("#leadDialog");
const form = document.querySelector("#leadForm");
const dialogTitle = document.querySelector("#dialogTitle");
const categoryInput = document.querySelector("#categoryInput");
const emailInput = document.querySelector("#emailInput");
const phoneInput = document.querySelector("#phoneInput");
const deliveryAddressField = document.querySelector("#deliveryAddressField");
const deliveryAddressInput = document.querySelector("#deliveryAddressInput");
const privacyConsentInput = document.querySelector("#privacyConsentInput");
const formStatus = document.querySelector("#formStatus");
const closeDialog = document.querySelector("#closeDialog");
const cancelDialog = document.querySelector("#cancelDialog");

let activeCategory = categories[0];

function createCategoryCard(category) {
  const button = document.createElement("button");
  button.className = "category-card";
  button.type = "button";
  button.style.setProperty("--icon-color", category.color);
  button.style.setProperty("--icon-bg", category.background);
  button.innerHTML = `
    <span class="category-icon">${icons[category.icon]}</span>
    <span class="category-text">
      <h3>${category.name}</h3>
      <p>${category.description}</p>
    </span>
    <span class="arrow-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
    </span>
  `;
  button.addEventListener("click", () => openLeadDialog(category));
  return button;
}

function openLeadDialog(category) {
  activeCategory = category;
  dialogTitle.textContent = `${category.name}: send kontaktoplysninger`;
  formStatus.textContent = "";
  form.reset();
  categoryInput.value = category.name;
  deliveryAddressField.hidden = !category.requiresDeliveryAddress;
  deliveryAddressInput.required = Boolean(category.requiresDeliveryAddress);

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }

  emailInput.focus();
}

function closeLeadDialog() {
  if (typeof dialog.close === "function") {
    dialog.close();
  } else {
    dialog.removeAttribute("open");
  }
}

function submitLead(event) {
  event.preventDefault();

  if (!form.reportValidity()) {
    return;
  }

  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const deliveryAddress = deliveryAddressInput.value.trim();
  const recipients = [ownerEmail, activeCategory.partnerEmail].join(",");
  const subject = encodeURIComponent(`Ny forespørgsel: ${activeCategory.name}`);
  const bodyLines = [
    `Kategori: ${activeCategory.name}`,
    `Mail: ${email}`,
    `Telefon: ${phone}`,
  ];

  if (activeCategory.requiresDeliveryAddress) {
    bodyLines.push(`Leveringsadresse(r): ${deliveryAddress}`);
  }

  bodyLines.push(
    "",
    "Kunden ønsker at blive kontaktet om denne kategori.",
    privacyConsentInput.checked
      ? "Kunden har accepteret videregivelse til relevant indkøbspartner."
      : ""
  );

  const body = encodeURIComponent(bodyLines.join("\n"));

  formStatus.textContent = "Åbner mailprogrammet med forespørgslen.";
  window.location.href = `mailto:${recipients}?subject=${subject}&body=${body}`;
}

categories.forEach((category) => {
  categoryGrid.append(createCategoryCard(category));
});

form.addEventListener("submit", submitLead);
closeDialog.addEventListener("click", closeLeadDialog);
cancelDialog.addEventListener("click", closeLeadDialog);
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    closeLeadDialog();
  }
});
