import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Алексей Смирнов',
      role: 'Владелец квартиры',
      text: 'Отличный магазин! Заказывал сантехнику для ремонта ванной. Товар качественный, доставили быстро, консультанты помогли с выбором. Рекомендую!',
      rating: 5
    },
    {
      id: 2,
      name: 'Марина Иванова',
      role: 'Дизайнер интерьеров',
      text: 'Постоянно закупаюсь здесь для своих проектов. Широкий ассортимент, адекватные цены, всегда есть в наличии. Профессиональный подход к клиентам.',
      rating: 5
    },
    {
      id: 3,
      name: 'Дмитрий Петров',
      role: 'Электрик',
      text: 'Работаю с этим магазином уже второй год. Надежные поставки электрики, официальные гарантии. Очень доволен сотрудничеством!',
      rating: 5
    },
    {
      id: 4,
      name: 'Елена Козлова',
      role: 'Частный клиент',
      text: 'Купила смеситель и раковину. Качество отличное, цены приемлемые. Менеджер подробно все объяснил и помог с выбором. Спасибо!',
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы наших клиентов</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Более 2000 довольных клиентов уже выбрали нас
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="bg-white hover:shadow-lg transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-8 bg-white rounded-lg p-6 shadow-sm">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-1">2000+</p>
              <p className="text-sm text-muted-foreground">Довольных клиентов</p>
            </div>
            <div className="h-12 w-px bg-border"></div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-1">5000+</p>
              <p className="text-sm text-muted-foreground">Товаров в каталоге</p>
            </div>
            <div className="h-12 w-px bg-border"></div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-1">99%</p>
              <p className="text-sm text-muted-foreground">Положительных отзывов</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
