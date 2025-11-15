import HeroBanner from "./HeroBanner";
import "./MainContent.css";
import ProductList from "./ProductList";
import PromoBanner from "./PromoBanner.jsx";
import QuickCategories from "./QuickCategories.jsx";

export default function MainContent() {
  return (
    <main className="main-container">
      <HeroBanner />
      <QuickCategories />
      <ProductList title="Топ Електроніки" category="electronics" />
      <PromoBanner />
      <ProductList title="Стильні Прикраси" category="jewelery" />
    </main>
  );
}
