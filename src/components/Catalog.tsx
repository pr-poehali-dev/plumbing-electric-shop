import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

interface Product {
  id: number;
  name: string;
  category: string;
  brand: string;
  price: number;
  image: string;
  inStock: boolean;
}

interface CatalogProps {
  onAddToCart: (product: Product) => void;
}

export default function Catalog({ onAddToCart }: CatalogProps) {
  const categories = ['Сантехника', 'Электрика'];
  const brands = ['Grohe', 'Hansgrohe', 'Schneider', 'Legrand', 'ABB'];

  const products: Product[] = [
    { id: 1, name: 'Смеситель для ванны Grohe', category: 'Сантехника', brand: 'Grohe', price: 12500, image: '🚿', inStock: true },
    { id: 2, name: 'Душевая стойка Hansgrohe', category: 'Сантехника', brand: 'Hansgrohe', price: 25000, image: '🚿', inStock: true },
    { id: 3, name: 'Унитаз напольный', category: 'Сантехника', brand: 'Grohe', price: 18000, image: '🚽', inStock: true },
    { id: 4, name: 'Раковина подвесная', category: 'Сантехника', brand: 'Hansgrohe', price: 8500, image: '🚰', inStock: false },
    { id: 5, name: 'Автоматический выключатель Schneider', category: 'Электрика', brand: 'Schneider', price: 450, image: '⚡', inStock: true },
    { id: 6, name: 'Розетка Legrand с заземлением', category: 'Электрика', brand: 'Legrand', price: 280, image: '🔌', inStock: true },
    { id: 7, name: 'Выключатель одноклавишный ABB', category: 'Электрика', brand: 'ABB', price: 320, image: '💡', inStock: true },
    { id: 8, name: 'Щиток электрический Schneider', category: 'Электрика', brand: 'Schneider', price: 3200, image: '📦', inStock: true }
  ];

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([0, 30000]);

  const maxPrice = Math.max(...products.map(p => p.price));

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    return categoryMatch && brandMatch && priceMatch;
  });

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setPriceRange([0, maxPrice]);
  };

  return (
    <section id="catalog" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Каталог товаров</h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Фильтры</span>
                  <Button variant="ghost" size="sm" onClick={resetFilters}>
                    Сбросить
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Категория</h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <div key={category} className="flex items-center">
                        <Checkbox
                          id={`category-${category}`}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={() => toggleCategory(category)}
                        />
                        <Label htmlFor={`category-${category}`} className="ml-2 cursor-pointer">
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Бренд</h3>
                  <div className="space-y-2">
                    {brands.map(brand => (
                      <div key={brand} className="flex items-center">
                        <Checkbox
                          id={`brand-${brand}`}
                          checked={selectedBrands.includes(brand)}
                          onCheckedChange={() => toggleBrand(brand)}
                        />
                        <Label htmlFor={`brand-${brand}`} className="ml-2 cursor-pointer">
                          {brand}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Цена</h3>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={maxPrice}
                    step={100}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{priceRange[0].toLocaleString()} ₽</span>
                    <span>{priceRange[1].toLocaleString()} ₽</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          <div className="lg:col-span-3">
            <div className="mb-4 text-sm text-muted-foreground">
              Найдено товаров: {filteredProducts.length}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <Card key={product.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-6xl text-center mb-4">{product.image}</div>
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Tag" size={16} />
                        <span>{product.category}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Award" size={16} />
                        <span>{product.brand}</span>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-2xl font-bold text-primary">
                          {product.price.toLocaleString()} ₽
                        </span>
                        {!product.inStock && (
                          <Badge variant="destructive">Нет в наличии</Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full"
                      onClick={() => onAddToCart(product)}
                      disabled={!product.inStock}
                    >
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      В корзину
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <Icon name="SearchX" size={64} className="mx-auto text-muted-foreground mb-4" />
                <p className="text-lg text-muted-foreground">
                  Товары не найдены. Попробуйте изменить фильтры.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
