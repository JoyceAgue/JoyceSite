/* ═══════════════════════════════════════════
   NEXSTORE — Data Layer (localStorage)
═══════════════════════════════════════════ */

const DB = {

  /* ── Users ── */
  getUsers() {
    const raw = localStorage.getItem('nx_users');
    if (raw) return JSON.parse(raw);
    // Seed default data
    const seed = [
      { id:1, nom:'Joyce',   prenom:'AGUE',    email:'joyce.k@nexstore.com',   password:'admin123',  role:'admin',    statut:'actif',    created:'2024-11-10' },
      { id:2, nom:'Zinsou',    prenom:'Faridath',   email:'faridath.z@nexstore.com', password:'pass123',   role:'vendeur',  statut:'actif',    created:'2024-11-15' },
      { id:3, nom:'Adjovi',    prenom:'Romuald',    email:'romuald.a@nexstore.com',  password:'pass123',   role:'gestionnaire', statut:'actif', created:'2024-11-20' },
      { id:4, nom:'Hounsou',   prenom:'Christelle', email:'christelle.h@nexstore.com',password:'pass123',  role:'vendeur',  statut:'inactif',  created:'2024-12-01' },
      { id:5, nom:'Dossou',    prenom:'Wilfried',   email:'wilfried.d@nexstore.com', password:'pass123',   role:'vendeur',  statut:'actif',    created:'2024-12-10' },
      { id:6, nom:'Allognon',  prenom:'Béatrice',   email:'beatrice.a@nexstore.com', password:'pass123',   role:'gestionnaire', statut:'actif', created:'2025-01-05' },
      { id:7, nom:'Kpade',     prenom:'Gilles',     email:'gilles.k@nexstore.com',   password:'pass123',   role:'vendeur',  statut:'actif',    created:'2025-01-12' },
      { id:8, nom:'Hounton',   prenom:'Nadège',     email:'nadege.h@nexstore.com',   password:'pass123',   role:'vendeur',  statut:'inactif',  created:'2025-02-03' },
    ];
    this.setUsers(seed);
    return seed;
  },
  setUsers(u) { localStorage.setItem('nx_users', JSON.stringify(u)); },
  addUser(u) {
    const users = this.getUsers();
    u.id = Date.now();
    u.created = new Date().toISOString().split('T')[0];
    users.push(u);
    this.setUsers(users);
    return u;
  },
  updateUser(id, data) {
    const users = this.getUsers().map(u => u.id === id ? { ...u, ...data } : u);
    this.setUsers(users);
  },
  deleteUser(id) { this.setUsers(this.getUsers().filter(u => u.id !== id)); },
  getUserByEmail(email) { return this.getUsers().find(u => u.email === email); },

  /* ── Products ── */
  getProducts() {
    const raw = localStorage.getItem('nx_products');
    if (raw) return JSON.parse(raw);
    const seed = [
      { id:1, nom:'Riz parfumé 25kg',    categorie:'Alimentaire', prix:14500, stock:120, fournisseur:'AgroNord',  image:'🌾', created:'2024-11-01' },
      { id:2, nom:'Huile végétale 5L',   categorie:'Alimentaire', prix:4800,  stock:85,  fournisseur:'OléaBénin', image:'🫙', created:'2024-11-05' },
      { id:3, nom:'Savon de ménage x10', categorie:'Hygiène',     prix:2200,  stock:200, fournisseur:'CleanCo',   image:'🧼', created:'2024-11-10' },
      { id:4, nom:'Sucre en poudre 5kg', categorie:'Alimentaire', prix:3500,  stock:60,  fournisseur:'SucreBénin',image:'🍬', created:'2024-11-15' },
      { id:5, nom:'Lait concentré x24',  categorie:'Alimentaire', prix:8900,  stock:40,  fournisseur:'DairyPro',  image:'🥛', created:'2024-12-01' },
      { id:6, nom:'Détergent liquide 2L',categorie:'Hygiène',     prix:1900,  stock:150, fournisseur:'CleanCo',   image:'🧴', created:'2024-12-10' },
      { id:7, nom:'Sardines boîte x12',  categorie:'Alimentaire', prix:5400,  stock:70,  fournisseur:'MarineCo',  image:'🐟', created:'2025-01-05' },
      { id:8, nom:'Ciment 50kg',         categorie:'Construction',prix:7800,  stock:30,  fournisseur:'BuildBénin',image:'🪨', created:'2025-01-12' },
      { id:9, nom:'Bougie x100',         categorie:'Divers',      prix:3200,  stock:95,  fournisseur:'LightCo',   image:'🕯️', created:'2025-02-01' },
      { id:10,nom:'Pâtes alimentaires 5kg',categorie:'Alimentaire',prix:2800, stock:110, fournisseur:'PastaBénin',image:'🍝', created:'2025-02-10' },
    ];
    this.setProducts(seed);
    return seed;
  },
  setProducts(p) { localStorage.setItem('nx_products', JSON.stringify(p)); },
  addProduct(p) {
    const products = this.getProducts();
    p.id = Date.now();
    p.created = new Date().toISOString().split('T')[0];
    products.push(p);
    this.setProducts(products);
    return p;
  },
  updateProduct(id, data) {
    const p = this.getProducts().map(p => p.id === id ? { ...p, ...data } : p);
    this.setProducts(p);
  },
  deleteProduct(id) { this.setProducts(this.getProducts().filter(p => p.id !== id)); },

  /* ── Sales ── */
  getSales() {
    const raw = localStorage.getItem('nx_sales');
    if (raw) return JSON.parse(raw);
    const users = this.getUsers();
    const products = this.getProducts();
    const seed = [
      { id:1, produitId:1, produitNom:'Riz parfumé 25kg',     vendeurId:2, vendeurNom:'Zinsou Faridath',   qte:5, prixUnit:14500, total:72500,  date:'2025-05-10', statut:'payé' },
      { id:2, produitId:3, produitNom:'Savon de ménage x10',  vendeurId:5, vendeurNom:'Dossou Wilfried',   qte:20,prixUnit:2200,  total:44000,  date:'2025-05-12', statut:'payé' },
      { id:3, produitId:2, produitNom:'Huile végétale 5L',    vendeurId:2, vendeurNom:'Zinsou Faridath',   qte:8, prixUnit:4800,  total:38400,  date:'2025-05-14', statut:'payé' },
      { id:4, produitId:7, produitNom:'Sardines boîte x12',   vendeurId:7, vendeurNom:'Kpade Gilles',      qte:3, prixUnit:5400,  total:16200,  date:'2025-05-15', statut:'en attente' },
      { id:5, produitId:4, produitNom:'Sucre en poudre 5kg',  vendeurId:5, vendeurNom:'Dossou Wilfried',   qte:10,prixUnit:3500,  total:35000,  date:'2025-05-17', statut:'payé' },
      { id:6, produitId:5, produitNom:'Lait concentré x24',   vendeurId:7, vendeurNom:'Kpade Gilles',      qte:2, prixUnit:8900,  total:17800,  date:'2025-05-18', statut:'annulé' },
      { id:7, produitId:6, produitNom:'Détergent liquide 2L', vendeurId:2, vendeurNom:'Zinsou Faridath',   qte:15,prixUnit:1900,  total:28500,  date:'2025-05-20', statut:'payé' },
      { id:8, produitId:10,produitNom:'Pâtes alimentaires 5kg',vendeurId:5,vendeurNom:'Dossou Wilfried',   qte:12,prixUnit:2800,  total:33600,  date:'2025-05-22', statut:'payé' },
      { id:9, produitId:8, produitNom:'Ciment 50kg',          vendeurId:7, vendeurNom:'Kpade Gilles',      qte:4, prixUnit:7800,  total:31200,  date:'2025-05-24', statut:'en attente' },
      { id:10,produitId:9, produitNom:'Bougie x100',          vendeurId:2, vendeurNom:'Zinsou Faridath',   qte:6, prixUnit:3200,  total:19200,  date:'2025-05-28', statut:'payé' },
    ];
    this.setSales(seed);
    return seed;
  },
  setSales(s) { localStorage.setItem('nx_sales', JSON.stringify(s)); },
  addSale(s) {
    const sales = this.getSales();
    s.id = Date.now();
    s.date = new Date().toISOString().split('T')[0];
    sales.push(s);
    this.setSales(sales);
    // Decrease stock
    const prod = this.getProducts().find(p => p.id === s.produitId);
    if (prod) this.updateProduct(prod.id, { stock: Math.max(0, prod.stock - s.qte) });
    return s;
  },
  updateSale(id, data) {
    const s = this.getSales().map(s => s.id === id ? { ...s, ...data } : s);
    this.setSales(s);
  },
  deleteSale(id) { this.setSales(this.getSales().filter(s => s.id !== id)); },

  /* ── Auth ── */
  login(email, password) {
    const u = this.getUserByEmail(email);
    if (!u) return null;
    if (u.password !== password) return null;
    if (u.statut !== 'actif') return null;
    sessionStorage.setItem('nx_session', JSON.stringify({ id: u.id, email: u.email, nom: u.nom, prenom: u.prenom, role: u.role }));
    return u;
  },
  logout() { sessionStorage.removeItem('nx_session'); window.location.href = 'index.html'; },
  session() {
    const s = sessionStorage.getItem('nx_session');
    return s ? JSON.parse(s) : null;
  },
  requireAuth() {
    if (!this.session()) window.location.href = 'index.html';
  },
  requireAdmin() {
    const s = this.session();
    if (!s || s.role !== 'admin') window.location.href = 'dashboard.html';
  }
};

/* ── Helpers ── */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => [...document.querySelectorAll(sel)];

function fmtDate(d) {
  if (!d) return '—';
  return new Date(d).toLocaleDateString('fr-FR', { day:'2-digit', month:'short', year:'numeric' });
}
function fmtMoney(n) {
  return Number(n).toLocaleString('fr-FR') + ' FCFA';
}

function roleBadge(role) {
  const map = {
    admin:        ['badge-gold',  'Admin'],
    gestionnaire: ['badge-blue',  'Gestionnaire'],
    vendeur:      ['badge-teal',  'Vendeur'],
  };
  const [cls, label] = map[role] || ['badge-muted', role];
  return `<span class="badge ${cls}">${label}</span>`;
}

function statusBadge(s) {
  const map = {
    actif:       ['badge-teal',  '● Actif'],
    inactif:     ['badge-muted', '○ Inactif'],
    payé:        ['badge-teal',  '✓ Payé'],
    'en attente':['badge-gold',  '⏳ En attente'],
    annulé:      ['badge-red',   '✕ Annulé'],
  };
  const [cls, label] = map[s] || ['badge-muted', s];
  return `<span class="badge ${cls}">${label}</span>`;
}

function avatarColor(str) {
  const colors = [
    ['#00D4AA','#0E1520'],['#F5B400','#0E1520'],['#3B82F6','#0E1520'],
    ['#A855F7','#0E1520'],['#F97316','#0E1520'],['#EC4899','#0E1520'],
  ];
  let h = 0;
  for (let c of (str||'?')) h = (h * 31 + c.charCodeAt(0)) & 0xFFFF;
  return colors[h % colors.length];
}

function mkAvatar(name, size=32) {
  const init = (name||'?').split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2);
  const [bg, fg] = avatarColor(name);
  return `<div class="av-sm" style="width:${size}px;height:${size}px;background:${bg}22;color:${bg};border:1px solid ${bg}44;border-radius:${size>40?12:8}px">${init}</div>`;
}

function showToast(msg, type='success') {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    document.body.appendChild(t);
  }
  const icon = type==='success' ? '✅' : type==='error' ? '❌' : 'ℹ️';
  t.className = `t-${type}`;
  t.innerHTML = `<span>${icon}</span><span>${msg}</span>`;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 3000);
}

function toggleSidebar() {
  const sb = document.getElementById('sidebar');
  sb?.classList.toggle('open');
}

// Render sidebar user + logout button
function renderSidebarUser() {
  const s = DB.session();
  const el = document.getElementById('sidebarUser');
  if (!s || !el) return;
  el.innerHTML = `
    ${mkAvatar(s.prenom+' '+s.nom, 36)}
    <div class="user-info">
      <div class="user-name">${s.prenom} ${s.nom}</div>
      <div class="user-role">${s.role}</div>
    </div>
    <button class="logout-btn" onclick="showLogoutConfirm()" title="Se déconnecter">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/>
        <polyline points="16 17 21 12 16 7"/>
        <line x1="21" y1="12" x2="9" y2="12"/>
      </svg>
    </button>
  `;
}

// Logout confirmation modal
function showLogoutConfirm() {
  // Remove existing if any
  const old = document.getElementById('logoutConfirm');
  if (old) old.remove();

  const s = DB.session();
  const div = document.createElement('div');
  div.id = 'logoutConfirm';
  div.className = 'logout-confirm';
  div.innerHTML = `
    <div class="logout-box">
      <div class="icon">👋</div>
      <h3>Se déconnecter ?</h3>
      <p>Vous allez quitter votre session.<br>
         <strong style="color:var(--text)">${s ? s.prenom+' '+s.nom : ''}</strong> devra se reconnecter.</p>
      <div class="btns">
        <button class="btn btn-ghost" onclick="document.getElementById('logoutConfirm').remove()">Annuler</button>
        <button class="btn btn-danger" onclick="DB.logout()">Déconnexion</button>
      </div>
    </div>
  `;
  // Close on background click
  div.addEventListener('click', e => { if (e.target === div) div.remove(); });
  document.body.appendChild(div);
}
