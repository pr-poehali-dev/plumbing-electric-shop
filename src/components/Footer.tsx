import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Zap" size={28} />
              <h3 className="text-xl font-bold">СантехЭлектро</h3>
            </div>
            <p className="text-sm text-gray-300">
              Качественная сантехника и электрика для вашего дома и бизнеса
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Разделы</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#home" className="hover:text-white transition-colors">Главная</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Каталог</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">О компании</a></li>
              <li><a href="#contacts" className="hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                +7 (495) 123-45-67
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                info@santehelektro.ru
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                г. Москва, ул. Строительная, д. 25
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Мы в соцсетях</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Icon name="Send" size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Icon name="MessageCircle" size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Icon name="Instagram" size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
          © 2025 СантехЭлектро. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
