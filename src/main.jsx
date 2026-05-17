import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Camera,
  Crown,
  Home,
  KeyRound,
  MapPin,
  Menu,
  Phone,
  Play,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Video,
  WalletCards,
  X,
} from "lucide-react";
import "./styles.css";

const listings = [
  {
    title: "Meram Premium Villa",
    district: "Meram / Yaka",
    price: "₺18.750.000",
    meta: "6+1 • 420 m² • Bahçeli",
    tag: "Prestijli Yaşam",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Selçuklu Lüks Rezidans",
    district: "Selçuklu / Yazır",
    price: "₺7.950.000",
    meta: "4+1 • 210 m² • Site içi",
    tag: "Yeni Portföy",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Karatay Yatırımlık Arsa",
    district: "Karatay / Fevzi Çakmak",
    price: "₺12.500.000",
    meta: "2.450 m² • İmarlı",
    tag: "Yatırım",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
  },
];

const services = [
  { icon: <Camera />, title: "Profesyonel Çekim", text: "İlan fotoğrafı, drone, 360° tur ve sosyal medya için yüksek kalite sunum." },
  { icon: <Video />, title: "Video Pazarlama", text: "Portföyleri reels, kısa tanıtım ve premium video formatında öne çıkarma." },
  { icon: <TrendingUp />, title: "Doğru Fiyatlama", text: "Bölge, emsal, talep ve yatırım potansiyeline göre net satış stratejisi." },
  { icon: <ShieldCheck />, title: "Güvenli Süreç", text: "Tapu, ekspertiz, alıcı yönetimi ve pazarlık sürecinde profesyonel takip." },
];

function App() {
  const [open, setOpen] = useState(false);
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top"><span>KM</span><strong>Konya Mülk</strong></a>
        <button className="menuBtn" onClick={() => setOpen(!open)} aria-label="Menü">{open ? <X /> : <Menu />}</button>
        <div className={open ? "links open" : "links"}>
          <a href="#portfoy">Portföy</a>
          <a href="#hizmet">Hizmetler</a>
          <a href="#neden">Neden Biz?</a>
          <a href="#iletisim" className="navCta">Randevu Al</a>
        </div>
      </nav>

      <section id="top" className="hero">
        <div className="heroText">
          <p className="eyebrow"><Crown size={16} /> Konya’da premium gayrimenkul danışmanlığı</p>
          <h1>Konya’da mülkünüzü daha prestijli, daha hızlı ve daha doğru pazarlayın.</h1>
          <p className="lead">Konya Mülk; lüks konut, arsa ve yatırım portföyleri için profesyonel sunum, dijital pazarlama, alıcı portföyü ve güvenli satış stratejisi sunar.</p>
          <div className="heroActions">
            <a className="btn primary" href="tel:+905000000000">Hemen Ara <Phone size={18} /></a>
            <a className="btn ghost" href="#portfoy">Portföyleri İncele <ArrowRight size={18} /></a>
          </div>
          <div className="stats">
            <div><strong>360°</strong><span>Sanal Tur</span></div>
            <div><strong>Drone</strong><span>Premium Çekim</span></div>
            <div><strong>Konya</strong><span>Bölge Uzmanlığı</span></div>
          </div>
        </div>
        <div className="heroCard">
          <div className="glass">
            <Sparkles />
            <h3>Öne Çıkan Portföy</h3>
            <p>Meram’da bahçeli, özel mimarili villa portföyü.</p>
            <div className="price">₺18.750.000</div>
          </div>
        </div>
      </section>

      <section className="searchPanel" aria-label="İlan arama">
        <div><Search /><span>Konum, ilçe veya portföy tipi ara</span></div>
        <button>Premium Portföyleri Göster</button>
      </section>

      <section id="portfoy" className="section">
        <div className="sectionHead">
          <p className="eyebrow"><Building2 size={16} /> Seçili portföyler</p>
          <h2>Konya’nın değerli lokasyonlarında güçlü portföy vitrini.</h2>
        </div>
        <div className="listingGrid">
          {listings.map((item) => (
            <article className="listing" key={item.title}>
              <div className="listingImage" style={{ backgroundImage: `url(${item.image})` }}><span>{item.tag}</span></div>
              <div className="listingBody">
                <p><MapPin size={16} /> {item.district}</p>
                <h3>{item.title}</h3>
                <span>{item.meta}</span>
                <strong>{item.price}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="hizmet" className="section services">
        <div className="sectionHead center">
          <p className="eyebrow"><KeyRound size={16} /> Sadece ilan değil, satış sistemi</p>
          <h2>Portföyünüzü klasik ilan mantığından çıkarıp premium pazarlama sürecine alıyoruz.</h2>
        </div>
        <div className="serviceGrid">
          {services.map((service) => <div className="service" key={service.title}>{service.icon}<h3>{service.title}</h3><p>{service.text}</p></div>)}
        </div>
      </section>

      <section id="neden" className="split">
        <div>
          <p className="eyebrow"><BadgeCheck size={16} /> Konya Mülk farkı</p>
          <h2>Satıcı için güçlü sunum, alıcı için güven veren deneyim.</h2>
          <p>Her portföy; fiyat, lokasyon, hedef alıcı, sosyal medya dili ve sunum kalitesiyle ayrı ele alınır. Amaç yalnızca ilan yayınlamak değil; doğru alıcıyla doğru zamanda buluşturmaktır.</p>
          <div className="checkList">
            <span><ShieldCheck /> Satıcıdan komisyon beklentisi olmadan çalışma modeli</span>
            <span><Home /> Lüks konut, arsa ve yatırım portföylerinde uzmanlık</span>
            <span><WalletCards /> Alıcı portföyü ve sosyal medya pazarlama desteği</span>
          </div>
        </div>
        <div className="videoBox"><Play /><span>Premium Tanıtım Videosu Alanı</span></div>
      </section>

      <section id="iletisim" className="cta">
        <p className="eyebrow"><Phone size={16} /> Ücretsiz ön değerlendirme</p>
        <h2>Mülkünüz için premium satış stratejisi oluşturalım.</h2>
        <p>WhatsApp üzerinden portföy bilgilerinizi gönderin; fiyat, sunum ve pazarlama açısından ilk değerlendirmeyi birlikte yapalım.</p>
        <div className="heroActions centered">
          <a className="btn primary" href="https://wa.me/905000000000">WhatsApp’tan Yaz</a>
          <a className="btn ghost" href="tel:+905000000000">Telefon Et</a>
        </div>
      </section>

      <footer>© {year} Konya Mülk — konyamulk.com • Premium Gayrimenkul Danışmanlığı</footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);