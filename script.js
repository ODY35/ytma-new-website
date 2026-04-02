const products = [
  { id: 1, name: "Ensemble Lingerie 01", price: 89000, currency: "XAF", category: "sets", badge: "Nouveau", image: "./assets/lingerie_01.png" },
  { id: 2, name: "Ensemble Lingerie 02", price: 42000, currency: "XAF", category: "sets", badge: "Best Seller", image: "./assets/lingerie_02.png" },
  { id: 3, name: "Ensemble Lingerie 03", price: 26000, currency: "XAF", category: "sets", badge: "Limitée", image: "./assets/lingerie_03.png" }
];

let activeFilter = "all";
let currentLang = "fr";

const HERO_MEDIA = { type: "image", src: "./assets/new_hero.png" };

const PLACEHOLDER_IMG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='640' height='480'%3E%3Crect width='100%25' height='100%25' fill='%23111111'/%3E%3Ctext x='50%25' y='50%25' fill='%23aaaaaa' font-size='22' dominant-baseline='middle' text-anchor='middle'%3EImage unavailable%3C/text%3E%3C/svg%3E";

const i18n = {
  fr: {
    "page.title": "YTMA Lingerie – Libreville, Gabon",
    "header.tagline": "Luxury Lingerie – Libreville, Gabon",
    "hero.title": "Ytma",
    "hero.subtitle": "Le rayonnement de votre intimité",
    "nav.about": "À propos",
    "about.title": "À propos",
    "about.text": "Née de la passion de sublimer l'intimité féminine, la marque 'YTMA' se spécialise dans la création et la vente de pièces uniques de sous-vêtements féminins. Animée par l’ambition de créer des pièces dans lesquelles chacune peut se reconnaître, \"YTMA\" célèbre toutes les femmes, convaincue que chacune mérite de se sentir belle, libre et confiante, sans compromis. Sa vision principale est de valoriser toutes les morphologies, d’honorer la diversité et de privilégier des matières responsables. À long terme, \"YTMA\" aspire à faire de la lingerie un véritable vecteur d’expression personnelle, en devenant une référence internationale engagée en faveur de l’innovation textile, de la durabilité et de l’affirmation de soi.",
    "about.toggle": "Voir l'histoire",
    "hero.upload": "Ajouter image ou vidéo",
    "controls.sort": "Trier",
    "controls.categories": "Catégories",
    "sort.featured": "Mise en avant",
    "sort.priceAsc": "Prix: bas → haut",
    "sort.priceDesc": "Prix: haut → bas",
    "sort.nameAsc": "Nom: A → Z",
    "sort.nameDesc": "Nom: Z → A",
    "cat.all": "Toutes",
    "cat.bras": "Soutiens-gorge",
    "cat.briefs": "Culottes",
    "cat.sets": "Ensembles",
    "cat.bodysuits": "Body",
    "footer.brandDesc": "Créations de lingerie avec couturières spécialisées.",
    "footer.paymentsTitle": "Paiements acceptés",
    "footer.copyright": "© 2026 YTMA • Tous droits réservés",
    "modal.title": "Paiement",
    "tabs.mobile": "Mobile Money",
    "tabs.visa": "Visa",
    "tabs.paypal": "PayPal",
    "modal.operatorLabel": "Opérateur",
    "modal.phoneLabel": "Numéro de téléphone",
    "modal.mmConfirm": "Confirmer Mobile Money",
    "modal.nameOnCard": "Nom sur la carte",
    "modal.cardNumber": "Numéro de carte",
    "modal.exp": "Expiration",
    "modal.cvv": "CVV",
    "modal.visaPay": "Payer par Visa",
    "modal.paypalText": "Vous serez redirigé vers PayPal pour terminer le paiement.",
    "modal.paypalContinue": "Continuer vers PayPal",
    "buttons.buy": "Acheter",
    "buttons.details": "Détails",
    "alerts.mm": "Mobile Money confirmé.",
    "alerts.visa": "Paiement Visa simulé.",
    "alerts.paypal": "Redirection vers PayPal simulée."
  },
  en: {
    "page.title": "YTMA Lingerie – Libreville, Gabon",
    "header.tagline": "Luxury Lingerie – Libreville, Gabon",
    "hero.title": "Ytma",
    "hero.subtitle": "For the Radiance of Your Intimacy",
    "nav.about": "About",
    "about.title": "About Us",
    "about.text": "Born from a passion for enhancing feminine intimacy, the ‘YTMA’ brand specializes in designing and selling unique pieces of women’s underwear. Driven by the ambition to create pieces in which every woman can recognize herself, YTMA celebrates all women, convinced that each one deserves to feel beautiful, free, and confident—without compromise. Its core vision is to value all body types, honor diversity, and prioritize responsible materials. In the long term, YTMA aspires to make lingerie a true vehicle of personal expression, becoming an international reference committed to textile innovation, sustainability, and self-affirmation.",
    "about.toggle": "Show Story",
    "hero.upload": "Add image or video",
    "controls.sort": "Sort",
    "controls.categories": "Categories",
    "sort.featured": "Featured",
    "sort.priceAsc": "Price: low → high",
    "sort.priceDesc": "Price: high → low",
    "sort.nameAsc": "Name: A → Z",
    "sort.nameDesc": "Name: Z → A",
    "cat.all": "All",
    "cat.bras": "Bras",
    "cat.briefs": "Briefs",
    "cat.sets": "Sets",
    "cat.bodysuits": "Bodysuits",
    "footer.brandDesc": "Lingerie creations with specialized couturiers.",
    "footer.paymentsTitle": "Accepted Payments",
    "footer.copyright": "© 2026 YTMA • All rights reserved",
    "modal.title": "Payment",
    "tabs.mobile": "Mobile Money",
    "tabs.visa": "Visa",
    "tabs.paypal": "PayPal",
    "modal.operatorLabel": "Operator",
    "modal.phoneLabel": "Phone number",
    "modal.mmConfirm": "Confirm Mobile Money",
    "modal.nameOnCard": "Name on card",
    "modal.cardNumber": "Card number",
    "modal.exp": "Expiration",
    "modal.cvv": "CVV",
    "modal.visaPay": "Pay with Visa",
    "modal.paypalText": "You will be redirected to PayPal to complete the payment.",
    "modal.paypalContinue": "Continue to PayPal",
    "buttons.buy": "Buy",
    "buttons.details": "Details",
    "alerts.mm": "Mobile Money confirmed.",
    "alerts.visa": "Visa payment simulated.",
    "alerts.paypal": "Redirect to PayPal simulated."
  }
};

function formatPrice(p) {
  return new Intl.NumberFormat("fr-FR").format(p) + " " + "XAF";
}

function sanitizeImageUrl(url) {
  if (!url) return PLACEHOLDER_IMG;
  if (url.startsWith("./") || url.startsWith("data:") || url.startsWith("http://") || url.startsWith("https://")) return url;
  return PLACEHOLDER_IMG;
}

function renderHeroMedia() {
  const display = document.getElementById("heroMediaDisplay");
  if (!display) return;
  display.innerHTML = "";
  if (!HERO_MEDIA || !HERO_MEDIA.src) return;
  if ((HERO_MEDIA.type || "").toLowerCase() === "video") {
    const v = document.createElement("video");
    v.src = HERO_MEDIA.src;
    v.autoplay = true; v.loop = true; v.muted = true; v.controls = false;
    display.appendChild(v);
  } else {
    const img = document.createElement("img");
    img.src = HERO_MEDIA.src;
    display.appendChild(img);
  }
}

function renderProducts(list) {
  const grid = document.getElementById("productGrid");
  if (!grid) return;
  grid.innerHTML = "";
  list.forEach(p => {
    const el = document.createElement("article");
    el.className = "card";
    el.innerHTML = `
      <div class="card-media">
        <span class="card-badge">${p.badge}</span>
        <img src="${sanitizeImageUrl(p.image)}" alt="${p.name}" referrerpolicy="no-referrer" />
      </div>
      <div class="card-body">
        <div class="card-title">${p.name}</div>
        <div class="card-price">${formatPrice(p.price)}</div>
        <div class="card-actions">
          <button class="btn btn-buy" data-id="${p.id}">${i18n[currentLang]["buttons.buy"]}</button>
          <button class="btn-outline" data-id="${p.id}">${i18n[currentLang]["buttons.details"]}</button>
        </div>
      </div>
    `;
    grid.appendChild(el);
  });
}

function applyFilter() {
  const filtered = activeFilter === "all" ? products : products.filter(p => p.category === activeFilter);
  renderProducts(filtered);
}

function sortProducts(mode) {
  const base = activeFilter === "all" ? [...products] : products.filter(p => p.category === activeFilter);
  if (mode === "price-asc") base.sort((a,b)=>a.price-b.price);
  else if (mode === "price-desc") base.sort((a,b)=>b.price-a.price);
  else if (mode === "name-asc") base.sort((a,b)=>a.name.localeCompare(b.name));
  else if (mode === "name-desc") base.sort((a,b)=>b.name.localeCompare(a.name));
  renderProducts(base);
}

function wireControls() {
  document.querySelectorAll(".chip").forEach(chip=>{
    chip.addEventListener("click", ()=>{
      document.querySelectorAll(".chip").forEach(c=>c.classList.remove("active"));
      chip.classList.add("active");
      activeFilter = chip.dataset.filter || "all";
      applyFilter();
    });
  });
  const sortSelect = document.getElementById("sortSelect");
  sortSelect.addEventListener("change", (e)=> sortProducts(e.target.value));
}

function openModal(product) {
  const backdrop = document.getElementById("paymentModal");
  document.getElementById("modalProductTitle").textContent = product.name + " — " + formatPrice(product.price);
  backdrop.classList.add("show");
}
function closeModal() {
  document.getElementById("paymentModal").classList.remove("show");
}
function wireModal() {
  const backdrop = document.getElementById("paymentModal");
  if (!backdrop) return;
  const closeBtn = document.getElementById("paymentClose");
  const mmBtn = document.getElementById("mmPayBtn");
  const visaBtn = document.getElementById("visaPayBtn");
  const paypalBtn = document.getElementById("paypalPayBtn");
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (mmBtn) mmBtn.addEventListener("click", ()=>{
    const operator = document.getElementById("mmOperator").value;
    const phone = document.getElementById("mmPhone").value;
    alert(i18n[currentLang]["alerts.mm"]);
    closeModal();
  });
  if (visaBtn) visaBtn.addEventListener("click", ()=>{ alert(i18n[currentLang]["alerts.visa"]); closeModal(); });
  if (paypalBtn) paypalBtn.addEventListener("click", ()=>{ alert(i18n[currentLang]["alerts.paypal"]); closeModal(); });
  document.querySelectorAll(".tab").forEach(tab=>{
    tab.addEventListener("click", ()=>{
      document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
      document.querySelectorAll(".tab-pane").forEach(p=>p.classList.remove("active"));
      tab.classList.add("active");
      const target = tab.dataset.tab;
      document.getElementById("tab-"+target).classList.add("active");
    });
  });
}

function wireBuyButtons() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;
  grid.addEventListener("click", (e)=>{
    const btn = e.target.closest(".btn-buy");
    if (!btn) return;
    const id = Number(btn.dataset.id);
    const product = products.find(p=>p.id===id);
    if (product) openModal(product);
  });
}

function translateStatic() {
  document.title = i18n[currentLang]["page.title"];
  document.documentElement.lang = currentLang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    const value = i18n[currentLang][key];
    if (value !== undefined) el.textContent = value;
  });
  const cardName = document.getElementById("cardName");
  const cardExp = document.getElementById("cardExp");
  const cardCvv = document.getElementById("cardCvv");
  if (currentLang === "en") {
    if (cardName) cardName.placeholder = "Full name";
    if (cardExp) cardExp.placeholder = "MM/YY";
    if (cardCvv) cardCvv.placeholder = "***";
  } else {
    if (cardName) cardName.placeholder = "Nom complet";
    if (cardExp) cardExp.placeholder = "MM/AA";
    if (cardCvv) cardCvv.placeholder = "***";
  }
}

function wireLangSwitch() {
  document.querySelectorAll(".lang").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      document.querySelectorAll(".lang").forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      currentLang = btn.getAttribute("data-lang") || "fr";
      translateStatic();
      applyFilter();
    });
  });
}

function wireAboutToggle() {
  const toggle = document.getElementById("aboutToggle");
  const text = document.getElementById("aboutText");
  if (toggle && text) {
    toggle.addEventListener("click", ()=>{
      text.classList.toggle("show");
    });
  }
}

function init() {
  renderProducts(products);
  wireControls();
  wireModal();
  wireBuyButtons();
  wireLangSwitch();
  translateStatic();
  renderHeroMedia();
  wireAboutToggle();
}

document.addEventListener("DOMContentLoaded", init);
