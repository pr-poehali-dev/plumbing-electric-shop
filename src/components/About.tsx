import Icon from '@/components/ui/icon';

export default function About() {
  return (
    <section id="about" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">О компании</h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <Icon name="Store" size={32} className="text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Наша миссия</h3>
                  <p className="text-sm text-muted-foreground">
                    Обеспечивать клиентов качественными товарами для дома и бизнеса 
                    по честным ценам с профессиональным обслуживанием.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <Icon name="Users" size={32} className="text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Наша команда</h3>
                  <p className="text-sm text-muted-foreground">
                    Опытные специалисты с глубокими знаниями в области сантехники 
                    и электрики готовы помочь в выборе оптимального решения.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="font-semibold text-xl mb-6">Почему выбирают нас</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Icon name="CheckCircle2" size={20} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Широкий ассортимент</h4>
                  <p className="text-sm text-muted-foreground">
                    Более 5000 товаров от ведущих мировых производителей
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Icon name="CheckCircle2" size={20} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Конкурентные цены</h4>
                  <p className="text-sm text-muted-foreground">
                    Прямые поставки от производителей без посредников
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Icon name="CheckCircle2" size={20} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Быстрая доставка</h4>
                  <p className="text-sm text-muted-foreground">
                    Собственная служба доставки по всей России
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Icon name="CheckCircle2" size={20} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium mb-1">Гарантия качества</h4>
                  <p className="text-sm text-muted-foreground">
                    Официальная гарантия и сертификаты на всю продукцию
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
