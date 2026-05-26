// ── Customer ──
export const mockUser = { name: 'Jayla', recys: 230, role: 0 }

export const mockListings = [
  { id: 1, title: 'Nike Air Max 90', category: 'Schoenen',   price: 45,  status: 'actief',   emoji: '👟' },
  { id: 2, title: 'IKEA Bureaulamp', category: 'Wonen',      price: 20,  status: 'actief',   emoji: '💡' },
  { id: 3, title: 'Canon Camera',   category: 'Elektronica', price: 120, status: 'verkocht', emoji: '📷' },
  { id: 4, title: 'Vintage Jas',    category: 'Kleding',     price: 35,  status: 'actief',   emoji: '🧥' },
]

export const mockPurchases = [
  { id: 1, title: 'Sony Koptelefoon', price: 60, from: 'Robin', emoji: '🎧', date: '12 mei 2026' },
  { id: 2, title: 'Boekenset',        price: 15, from: 'Sanne', emoji: '📚', date: '8 mei 2026'  },
  { id: 3, title: 'Stoel',            price: 30, from: 'Daan',  emoji: '🪑', date: '3 mei 2026'  },
]

export const categories = ['Kleding', 'Schoenen', 'Elektronica', 'Wonen', 'Sport', 'Boeken', 'Speelgoed', 'Overig']

export const customerNavItems = [
  { id: 'overview',  label: 'Overzicht',      icon: '📊' },
  { id: 'listings',  label: 'Mijn artikelen', icon: '📦' },
  { id: 'add',       label: 'Nieuw plaatsen', icon: '➕' },
  { id: 'purchases', label: 'Aankopen',       icon: '🛍️' },
  { id: 'profile',   label: 'Profiel',        icon: '👤' },
]

// ── Admin ──
export const mockAdmin = { name: 'Admin', role: 1 }

export const mockAdminStats = {
  totalUsers: 128,
  totalArticles: 347,
  totalTrades: 89,
  totalRecys: 24650,
}

export const mockAllUsers = [
  { id: 1, name: 'Jayla', email: 'jayla@tradr.nl', recys: 230, articles: 4, joined: 'mei 2026' },
  { id: 2, name: 'Robin', email: 'robin@tradr.nl', recys: 145, articles: 2, joined: 'april 2026' },
  { id: 3, name: 'Sanne', email: 'sanne@tradr.nl', recys: 310, articles: 6, joined: 'maart 2026' },
  { id: 4, name: 'Daan',  email: 'daan@tradr.nl',  recys: 80,  articles: 1, joined: 'mei 2026' },
]

export const mockAllArticles = [
  { id: 1, title: 'Nike Air Max 90',   user: 'Jayla', category: 'Schoenen',   price: 45,  status: 'actief',   emoji: '👟' },
  { id: 2, title: 'Canon Camera',      user: 'Robin', category: 'Elektronica', price: 120, status: 'verkocht', emoji: '📷' },
  { id: 3, title: 'Boekenset',         user: 'Sanne', category: 'Boeken',      price: 15,  status: 'actief',   emoji: '📚' },
  { id: 4, title: 'Vintage Jas',       user: 'Jayla', category: 'Kleding',     price: 35,  status: 'actief',   emoji: '🧥' },
  { id: 5, title: 'Sony Koptelefoon',  user: 'Daan',  category: 'Elektronica', price: 60,  status: 'verkocht', emoji: '🎧' },
]

export const mockReports = [
  { id: 1, article: 'Defecte Laptop',   reporter: 'Robin', reason: 'Onjuiste beschrijving', date: '24 mei 2026', status: 'open'      },
  { id: 2, article: 'iPhone 12',        reporter: 'Sanne', reason: 'Verdachte verkoper',    date: '22 mei 2026', status: 'open'      },
  { id: 3, article: 'Vintage Camera',   reporter: 'Daan',  reason: "Foto klopt niet",       date: '20 mei 2026', status: 'opgelost'  },
]

export const adminNavItems = [
  { id: 'stats',    label: 'Dashboard',    icon: '📊' },
  { id: 'users',    label: 'Gebruikers',   icon: '👥' },
  { id: 'articles', label: 'Artikelen',    icon: '📦' },
  { id: 'reports',  label: 'Meldingen',    icon: '🚨' },
  { id: 'settings', label: 'Instellingen', icon: '⚙️' },
]
