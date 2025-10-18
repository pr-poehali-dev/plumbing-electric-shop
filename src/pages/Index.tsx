import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Catalog from '@/components/Catalog';
import About from '@/components/About';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import { Product } from '@/types/product';

const Index = () => {
  const handleAddToCart = (product: Product) => {
    console.log('Add to cart:', product);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        cartItemsCount={0}
        onCartClick={() => {}}
      />
      
      <main className="flex-1">
        <Hero />
        <Catalog onAddToCart={handleAddToCart} />
        <About />
        <Contacts />
      </main>

      <Footer />
    </div>
  );
};

export default Index;