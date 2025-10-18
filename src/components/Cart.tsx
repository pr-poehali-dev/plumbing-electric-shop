import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, delta: number) => void;
  onRemoveItem: (id: number) => void;
}

export default function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Icon name="ShoppingCart" size={24} />
            Корзина ({itemsCount})
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <Icon name="ShoppingCart" size={64} className="text-muted-foreground mb-4" />
              <p className="text-lg text-muted-foreground">Корзина пуста</p>
              <p className="text-sm text-muted-foreground mt-2">
                Добавьте товары из каталога
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <Card key={item.id}>
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="text-4xl">{item.image}</div>
                      <div className="flex-1">
                        <h4 className="font-medium mb-2">{item.name}</h4>
                        <p className="text-sm text-primary font-semibold mb-3">
                          {item.price.toLocaleString()} ₽
                        </p>
                        <div className="flex items-center gap-3">
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-8 w-8"
                            onClick={() => onUpdateQuantity(item.id, -1)}
                          >
                            <Icon name="Minus" size={16} />
                          </Button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-8 w-8"
                            onClick={() => onUpdateQuantity(item.id, 1)}
                          >
                            <Icon name="Plus" size={16} />
                          </Button>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-8 w-8 ml-auto text-destructive"
                            onClick={() => onRemoveItem(item.id)}
                          >
                            <Icon name="Trash2" size={16} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <SheetFooter className="flex flex-col gap-4">
            <div className="flex justify-between items-center text-lg font-semibold pt-4 border-t">
              <span>Итого:</span>
              <span className="text-2xl text-primary">{total.toLocaleString()} ₽</span>
            </div>
            <Button size="lg" className="w-full">
              <Icon name="CreditCard" size={20} className="mr-2" />
              Оформить заказ
            </Button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
