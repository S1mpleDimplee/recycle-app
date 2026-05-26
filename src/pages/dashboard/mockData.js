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

export const adminNavItems = [
  { id: 'stats',    label: 'Dashboard',    icon: '📊' },
  { id: 'users',    label: 'Gebruikers',   icon: '👥' },
  { id: 'articles', label: 'Artikelen',    icon: '📦' },
  { id: 'reports',  label: 'Meldingen',    icon: '🚨' },
  { id: 'settings', label: 'Instellingen', icon: '⚙️' },
]
