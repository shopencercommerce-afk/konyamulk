import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Camera,
  Crown,
  Eye,
  Heart,
  Home,
  KeyRound,
  MapPin,
  Menu,
  Phone,
  Play,
  Plus,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Video,
  WalletCards,
  X,
} from "lucide-react";
import "./styles.css";

const starterListings = [
  { id: 1, title: "Meram Premium Villa", type: "Villa", district: "Meram", area: 420, rooms: "6+1", price: 18750000, tag: "Prestijli Yaşam", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80", text: "Bahçeli, özel mimarili, aile yaşamına uygun premium villa." },
  { id: 2, title: "Selçuklu Lüks Rezidans", type: "Daire", district: "Selçuklu", area: 210, rooms: "4+1", price: 7950000, tag: "Yeni Portföy", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80", text: "Site içinde, sosyal alanlı, modern rezidans daire." },
  { id: 3, title: "Karatay Yatırımlık Arsa", type: "Arsa", district: "Karatay", area: 2450, rooms: "İmarlı", price: 12500000, tag: "Yatırım", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80", text: "Gelişim aksında, yatırım potansiyeli yüksek imarlı arsa." },
  { id: 4, title: "Meram Manzaralı Daire", type: "Daire", district: "Meram", area: 185, rooms: "4+1", price: 6250000, tag: "Manzara", image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80", text: "Geniş salon, ferah kullanım, şehir manzaralı özel portföy." },
];

const services = [
  { icon: <Camera />, title: "Profesyonel Çekim", text: "İlan fotoğrafı, drone, 360° tur ve sosyal medya için yüksek kalite sunum." },
  { icon: <Video />, title: "Video Pazarlama", text: "Portföyleri reels, kısa tanıtım ve premium video formatında öne çıkarma." },
  { icon: <TrendingUp />, title: "Doğru Fiyatlama", text: "Bölge, emsal, talep ve yatırım potansiyeline göre net satış stratejisi." },
  { icon: <ShieldCheck />, title: "Güvenli Süreç", text: "Tapu, ekspertiz, alıcı yönetimi ve pazarlık sürecinde profesyonel takip." },
];

const blogs = [
  "Konya’da villa satın alırken dikkat edilmesi gerekenler",
  "Meram, Selçuklu ve Karatay yatırım karşılaştırması",
  "Emlak ilanında profesyonel video neden daha hızlı satış getirir?",
];

const money = (value) => new Intl.NumberFormat("tr-TR", { style: "currency", currency: "TRY", maximumFractionDigits: 0 }).format(value);

function App() {
  const [open, setOpen] = useState(false);
  const [listings, setListings] = useState(starterListings);
  const [filters, setFilters] = useState({ q: "", district: "Tümü", type: "Tümü" });
  const [selected, setSelected] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [form, setForm] = useState({ title: "", type: "Daire", district: "Meram", area: "", rooms: "3+1", price: "", tag: "Yeni", image: "", text: "" });
  const year = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    const saved = localStorage.getItem("km_listings");
    const fav = localStorage.getItem("km_favorites");
    if (saved) setListings(JSON.parse(saved));
    if (fav) setFavorites(JSON.parse(fav));
  }, []);

  useEffect(() => { localStorage.setItem("km_listings", JSON.stringify(listings)); }, [listings]);
  useEffect(() => { localStorage.setItem("km_favorites", JSON.stringify(favorites)); }, [favorites]);

  const filtered = listings.filter((item) => {
    const search = `${item.title} ${item.district} ${item.type} ${item.rooms}`.toLowerCase();
    return search.includes(filters.q.toLowerCase()) && (filters.district === "Tümü" || item.district === filters.district) && (filters.type === "Tümü" || item.type === filters.type);
  });

  const addListing = (e) => {
    e.preventDefault();
    const item = { ...form, id: Date.now(), area: Number(form.area || 0), price: Number(form.price || 0), image: form.image || "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=1200&q=80" };
    setListings([item, ...listings]);
    setForm({ title: "", type: "Daire", district: "Meram", area: "", rooms: "3+1", price: "", tag: "Yeni", image: "", text: "" });
  };

  const toggleFavorite = (id) => setFavorites((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);

  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top"><span>KM</span><strong>Konya Mülk</strong></a>
        <button className="menuBtn" onClick={() => setOpen(!open)} aria-label="Menü">{open ? <X /> : <Menu />}</button>
        <div className={open ? "links open" : "links"}>
          <a href="#portfoy">Portföy</a><a href="#admin">Admin</a><a href="#blog">SEO Blog</a><a href="#iletisim" className="navCta">Randevu Al</a>
        </div>
      </nav>

      <section id="top" className="hero">
        <div className="heroText">
          <p className="eyebrow"><Crown size={16} /> Konya’da premium gayrimenkul platformu</p>
          <h1>Konya’da mülkünüzü daha prestijli, daha hızlı ve daha doğru pazarlayın.</h1>
          <p className="lead">Konya Mülk; lüks konut, arsa ve yatırım portföyleri için profesyonel sunum, dijital pazarlama, alıcı portföyü ve güvenli satış stratejisi sunar.</p>
          <div className="heroActions"><a className="btn primary" href="tel:+905000000000">Hemen Ara <Phone size={18} /></a><a className="btn ghost" href="#portfoy">Portföyleri İncele <ArrowRight size={18} /></a></div>
          <div className="stats"><div><strong>{listings.length}</strong><span>Aktif Portföy</span></div><div><strong>{favorites.length}</strong><span>Favori İlan</span></div><div><strong>Konya</strong><span>Bölge Uzmanlığı</span></div></div>
        </div>
        <div className="heroCard"><div className="glass"><Sparkles /><h3>Öne Çıkan Portföy</h3><p>{listings[0]?.title}</p><div className="price">{money(listings[0]?.price || 0)}</div></div></div>
      </section>

      <section className="searchPanel" aria-label="İlan arama">
        <label><Search /><input placeholder="Konum, ilan veya oda ara" value={filters.q} onChange={(e) => setFilters({ ...filters, q: e.target.value })} /></label>
        <select value={filters.district} onChange={(e) => setFilters({ ...filters, district: e.target.value })}><option>Tümü</option><option>Meram</option><option>Selçuklu</option><option>Karatay</option></select>
        <select value={filters.type} onChange={(e) => setFilters({ ...filters, type: e.target.value })}><option>Tümü</option><option>Daire</option><option>Villa</option><option>Arsa</option><option>İşyeri</option></select>
        <button>{filtered.length} İlan Göster</button>
      </section>

      <section id="portfoy" className="section">
        <div className="sectionHead"><p className="eyebrow"><Building2 size={16} /> Seçili portföyler</p><h2>Sahibinden tarzı filtrelenebilir premium portföy vitrini.</h2></div>
        <div className="listingGrid">
          {filtered.map((item) => (
            <article className="listing" key={item.id}>
              <div className="listingImage" style={{ backgroundImage: `url(${item.image})` }}><span>{item.tag}</span><button className="fav" onClick={() => toggleFavorite(item.id)}><Heart fill={favorites.includes(item.id) ? "currentColor" : "none"} /></button></div>
              <div className="listingBody"><p><MapPin size={16} /> {item.district} / Konya</p><h3>{item.title}</h3><span>{item.rooms} • {item.area} m² • {item.type}</span><strong>{money(item.price)}</strong><button className="detailBtn" onClick={() => setSelected(item)}><Eye size={17} /> Detay Gör</button></div>
            </article>
          ))}
        </div>
      </section>

      <section id="admin" className="section adminSection">
        <div className="sectionHead"><p className="eyebrow"><Plus size={16} /> Admin panel prototipi</p><h2>Backend gelene kadar tarayıcıda çalışan ilan ekleme paneli.</h2></div>
        <form className="adminForm" onSubmit={addListing}>
          <input required placeholder="İlan başlığı" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
          <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}><option>Daire</option><option>Villa</option><option>Arsa</option><option>İşyeri</option></select>
          <select value={form.district} onChange={(e) => setForm({ ...form, district: e.target.value })}><option>Meram</option><option>Selçuklu</option><option>Karatay</option></select>
          <input placeholder="Oda sayısı" value={form.rooms} onChange={(e) => setForm({ ...form, rooms: e.target.value })} />
          <input required type="number" placeholder="m²" value={form.area} onChange={(e) => setForm({ ...form, area: e.target.value })} />
          <input required type="number" placeholder="Fiyat" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
          <input placeholder="Etiket" value={form.tag} onChange={(e) => setForm({ ...form, tag: e.target.value })} />
          <input placeholder="Fotoğraf URL" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} />
          <textarea placeholder="İlan açıklaması" value={form.text} onChange={(e) => setForm({ ...form, text: e.target.value })} />
          <button className="btn primary">İlanı Ekle</button>
        </form>
      </section>

      <section id="hizmet" className="section services"><div className="sectionHead center"><p className="eyebrow"><KeyRound size={16} /> Sadece ilan değil, satış sistemi</p><h2>Portföyünüzü klasik ilan mantığından çıkarıp premium pazarlama sürecine alıyoruz.</h2></div><div className="serviceGrid">{services.map((service) => <div className="service" key={service.title}>{service.icon}<h3>{service.title}</h3><p>{service.text}</p></div>)}</div></section>

      <section id="blog" className="section blogSection"><div className="sectionHead"><p className="eyebrow"><TrendingUp size={16} /> SEO içerik yapısı</p><h2>Google için bölgesel emlak içerik sayfaları.</h2></div><div className="blogGrid">{blogs.map((blog) => <article key={blog}><h3>{blog}</h3><p>Konya Mülk blog altyapısında bu konu için SEO uyumlu detay sayfası hazırlanabilir.</p><a>Yazıyı İncele <ArrowRight size={15} /></a></article>)}</div></section>

      <section id="neden" className="split"><div><p className="eyebrow"><BadgeCheck size={16} /> Konya Mülk farkı</p><h2>Satıcı için güçlü sunum, alıcı için güven veren deneyim.</h2><p>Her portföy; fiyat, lokasyon, hedef alıcı, sosyal medya dili ve sunum kalitesiyle ayrı ele alınır.</p><div className="checkList"><span><ShieldCheck /> Satıcıdan komisyon beklentisi olmadan çalışma modeli</span><span><Home /> Lüks konut, arsa ve yatırım portföylerinde uzmanlık</span><span><WalletCards /> Alıcı portföyü ve sosyal medya pazarlama desteği</span></div></div><div className="videoBox"><Play /><span>Premium Tanıtım Videosu Alanı</span></div></section>

      <section id="iletisim" className="cta"><p className="eyebrow"><Phone size={16} /> Ücretsiz ön değerlendirme</p><h2>Mülkünüz için premium satış stratejisi oluşturalım.</h2><p>WhatsApp üzerinden portföy bilgilerinizi gönderin; fiyat, sunum ve pazarlama açısından ilk değerlendirmeyi birlikte yapalım.</p><div className="heroActions centered"><a className="btn primary" href="https://wa.me/905000000000">WhatsApp’tan Yaz</a><a className="btn ghost" href="tel:+905000000000">Telefon Et</a></div></section>

      {selected && <div className="modal" onClick={() => setSelected(null)}><div className="modalCard" onClick={(e) => e.stopPropagation()}><button className="close" onClick={() => setSelected(null)}><X /></button><img src={selected.image} alt={selected.title} /><p className="eyebrow"><MapPin size={16} /> {selected.district} / Konya</p><h2>{selected.title}</h2><strong>{money(selected.price)}</strong><p>{selected.rooms} • {selected.area} m² • {selected.type}</p><p>{selected.text}</p><a className="btn primary" href={`https://wa.me/905000000000?text=${encodeURIComponent(selected.title + ' ilanı hakkında bilgi almak istiyorum.')}`}>WhatsApp ile Bilgi Al</a></div></div>}

      <footer>© {year} Konya Mülk — konyamulk.com • Premium Gayrimenkul Danışmanlığı</footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);