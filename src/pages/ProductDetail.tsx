import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { products } from '@/data/products';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface ProductDetailProps {
  cartItemsCount: number;
  onCartClick: () => void;
  onAddToCart: (product: any) => void;
}

export default function ProductDetail({ cartItemsCount, onCartClick, onAddToCart }: ProductDetailProps) {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header cartItemsCount={cartItemsCount} onCartClick={onCartClick} />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <Icon name="PackageX" size={64} className="mx-auto text-muted-foreground mb-4" />
            <h2 className="text-2xl font-bold mb-2">Товар не найден</h2>
            <Button onClick={() => navigate('/')}>Вернуться на главную</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemsCount={cartItemsCount} onCartClick={onCartClick} />
      
      <main className="flex-1 bg-secondary py-8">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-6"
          >
            <Icon name="ArrowLeft" size={18} className="mr-2" />
            Назад к каталогу
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-12 flex items-center justify-center bg-white">
                <div className="text-9xl animate-scale-in">{product.image}</div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="outline">{product.category}</Badge>
                  <Badge variant="secondary">{product.brand}</Badge>
                  {!product.inStock && (
                    <Badge variant="destructive">Нет в наличии</Badge>
                  )}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
                <p className="text-muted-foreground text-lg">{product.description}</p>
              </div>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-bold text-primary">
                      {product.price.toLocaleString()} ₽
                    </span>
                  </div>
                  
                  <Button
                    size="lg"
                    className="w-full"
                    onClick={() => onAddToCart(product)}
                    disabled={!product.inStock}
                  >
                    <Icon name="ShoppingCart" size={20} className="mr-2" />
                    {product.inStock ? 'Добавить в корзину' : 'Товар отсутствует'}
                  </Button>

                  <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t">
                    <div className="text-center">
                      <Icon name="ShieldCheck" size={24} className="mx-auto text-primary mb-2" />
                      <p className="text-xs text-muted-foreground">Гарантия качества</p>
                    </div>
                    <div className="text-center">
                      <Icon name="RefreshCw" size={24} className="mx-auto text-primary mb-2" />
                      <p className="text-xs text-muted-foreground">Возврат 14 дней</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mt-8">
            {product.specifications && product.specifications.length > 0 && (
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Icon name="FileText" size={24} />
                    Характеристики
                  </h2>
                  <div className="space-y-3">
                    {product.specifications.map((spec, index) => (
                      <div key={index} className="flex justify-between py-2 border-b last:border-0">
                        <span className="text-muted-foreground">{spec.label}</span>
                        <span className="font-medium">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {product.features && product.features.length > 0 && (
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Icon name="Star" size={24} />
                    Особенности
                  </h2>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Icon name="CheckCircle2" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}