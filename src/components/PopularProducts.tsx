import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { products } from '@/data/products';
import { Product } from '@/types/product';

interface PopularProductsProps {
  onAddToCart: (product: Product) => void;
}

export default function PopularProducts({ onAddToCart }: PopularProductsProps) {
  const navigate = useNavigate();
  
  const popularProducts = products.filter(p => p.inStock).slice(0, 4);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Популярные товары</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Самые востребованные товары в нашем магазине
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularProducts.map((product, index) => (
            <Card 
              key={product.id} 
              className="hover:shadow-lg transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader 
                className="cursor-pointer"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <div className="text-6xl text-center mb-4">{product.image}</div>
                <CardTitle className="text-lg hover:text-primary transition-colors">
                  {product.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {product.category}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {product.brand}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-bold text-primary">
                      {product.price.toLocaleString()} ₽
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button
                  className="flex-1"
                  onClick={() => onAddToCart(product)}
                >
                  <Icon name="ShoppingCart" size={18} className="mr-2" />
                  В корзину
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <Icon name="Eye" size={18} />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => {
              const catalogElement = document.getElementById('catalog');
              if (catalogElement) {
                catalogElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Смотреть весь каталог
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
