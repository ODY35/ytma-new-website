const products = [
  { id: 1, name: "Ensemble Satin Doré", price: 89000, currency: "XAF", category: "sets", badge: "Nouveau", image: "https://images.unsplash.com/photo-1608219959301-fff314f0b1f2?q=80&w=1000&auto=format&fit=crop" },
  { id: 2, name: "Soutien-gorge Rouge Luxe", price: 42000, currency: "XAF", category: "bras", badge: "Best Seller", image: "https://images.unsplash.com/photo-1581803118522-7b72b36a1d5f?q=80&w=1000&auto=format&fit=crop" },
  { id: 3, name: "Culotte Velours Noir", price: 26000, currency: "XAF", category: "briefs", badge: "Limitée", image: "https://images.unsplash.com/photo-1515876305429-0d3b09de5ca4?q=80&w=1000&auto=format&fit=crop" },
  { id: 4, name: "Body Ébène", price: 68000, currency: "XAF", category: "bodysuits", badge: "Élite", image: "https://images.unsplash.com/photo-1520975954732-35dd22299623?q=80&w=1000&auto=format&fit=crop" },
  { id: 5, name: "Ensemble Rubis", price: 91000, currency: "XAF", category: "sets", badge: "Nouveau", image: "https://images.unsplash.com/photo-1595433707802-3b1ae0f707b6?q=80&w=1000&auto=format&fit=crop" },
  { id: 6, name: "Soutien-gorge Doré", price: 49000, currency: "XAF", category: "bras", badge: "Édition", image: "https://images.unsplash.com/photo-1540999972307-345fda9f5d1f?q=80&w=1000&auto=format&fit=crop" }
];

let activeFilter = "all";
let currentLang = "fr";

const HERO_MEDIA = { type: "video", src: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4" };

const i18n = {
  fr: {
    "page.title": "YTMA Lingerie – Libreville, Gabon",
    "header.tagline": "Luxury Lingerie – Libreville, Gabon",
    "hero.title": "YTMA",
    "hero.subtitle": "Pour le Rayonnement de Votre Intimité",
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
    "hero.title": "YTMA",
    "hero.subtitle": "For the Radiance of Your Intimacy",
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

function renderHeroMedia() {
  const display = document.getElementById("heroMediaDisplay");
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
  grid.innerHTML = "";
  list.forEach(p => {
    const el = document.createElement("article");
    el.className = "card";
    el.innerHTML = `
      <div class="card-media">
        <span class="card-badge">${p.badge}</span>
        <img src="${p.image}" alt="${p.name}" />
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
  document.getElementById("paymentClose").addEventListener("click", closeModal);
  document.getElementById("mmPayBtn").addEventListener("click", ()=>{
    const operator = document.getElementById("mmOperator").value;
    const phone = document.getElementById("mmPhone").value;
    alert(i18n[currentLang]["alerts.mm"]);
    closeModal();
  });
  document.getElementById("visaPayBtn").addEventListener("click", ()=>{
    alert(i18n[currentLang]["alerts.visa"]);
    closeModal();
  });
  document.getElementById("paypalPayBtn").addEventListener("click", ()=>{
    alert(i18n[currentLang]["alerts.paypal"]);
    closeModal();
  });
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
  document.getElementById("productGrid").addEventListener("click", (e)=>{
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

function init() {
  renderProducts(products);
  wireControls();
  wireModal();
  wireBuyButtons();
  wireLangSwitch();
  translateStatic();
  renderHeroMedia();
}

document.addEventListener("DOMContentLoaded", init);
