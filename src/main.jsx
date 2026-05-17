import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowRight, Building2, Crown, MapPin, Phone, ShieldCheck, Sparkles, Home, Camera, TrendingUp, Menu, X } from "lucide-react";
import "./styles.css";

const listings = [
  { title: "Meram Premium Villa", district: "Meram / Yaka", price: "₺18.750.000", meta: "6+1 • 420 m² • Bahçeli", tag: "Prestijli Yaşam" },
  { title: "Selçuklu Lüks Rezidans", district: "Selçuklu / Yazır", price: "₺7.950.000", meta: "4+1 • 210 m² • Site içi", tag: "Yeni Portföy" },
  { title: "Karatay Yatırımlık Arsa", district: "Karatay / Fevzi Çakmak", price: "₺12.500.000", meta: "2.450 m² • İmarlı", tag: "Yatırım" },
];

function App() {
  const [open, setOpen] = useState(false);
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <main>
      <nav className="nav">
        <div className="brand"><span>KM</span><strong>Konya Mülk</strong></div>
        <button className="menuBtn" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
        <div className={open ? "links open" : "links"}>
          <a href="#portfoy">Portföy</a><a href="#hizmet">Hizmetler</a><a href="#neden">Neden Biz?</a><a href="#iletisim" className="navCta">Randevu Al</a>
        </div>
      </nav>

      <section className="hero">
        <div className="heroText">
          <p className="eyebrow"><Crown size={16}/> Konya’da premium gayrimenkul danışmanlığı</p>
          <h1>Konya’da mülkünüzü daha prestijli, daha hızlı ve daha doğru pazarlayın.</h1>
          <p className="lead">Konya Mülk; lüks konut, arsa ve yatırım portföyleri için profesyonel sunum, dijital pazarlama ve alıcı odaklı satış stratejisi sunar.</p>
          <div className="heroActions">
            <a className="btn primary" href="tel:+905000000000">Hemen Ara <Phone size={18}/></a>
            <a className="btn ghost" href="#portfoy">Portföyleri İncele <ArrowRight size={18}/></a>
          </div>
        </div>
        <div className="heroCard">
          <div className="glass">
            <Sparkles/>
            <h3>Öne Çıkan Portföy</h3>
            <p>Meram’da bahçeli, özel mimarili villa portföyü.</p>
            <div className="price">₺18.750.000</div>
          </div>
        </div>
      </section>

      <footer>© {year} Konya Mülk — konyamulk.com</footer>
    </main>
  );
}
createRoot(document.getElementById("root")).render(<App />);