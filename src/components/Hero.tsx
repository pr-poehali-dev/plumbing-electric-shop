import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Hero() {
  const scrollToCatalog = () => {
    const element = document.getElementById('catalog');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-br from-white to-secondary py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Все для вашего дома и бизнеса
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Качественная сантехника и электрика от проверенных производителей. 
            Быстрая доставка по всей России.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={scrollToCatalog} className="text-base">
              Перейти в каталог
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-base">
              <Icon name="Phone" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="p-6 bg-white rounded-lg shadow-sm animate-scale-in">
              <Icon name="Truck" size={40} className="text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Быстрая доставка</h3>
              <p className="text-sm text-muted-foreground">
                Доставим заказ в течение 1-3 дней
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <Icon name="ShieldCheck" size={40} className="text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Гарантия качества</h3>
              <p className="text-sm text-muted-foreground">
                Официальная гарантия на всю продукцию
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <Icon name="Wrench" size={40} className="text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Помощь в выборе</h3>
              <p className="text-sm text-muted-foreground">
                Профессиональная консультация специалистов
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
