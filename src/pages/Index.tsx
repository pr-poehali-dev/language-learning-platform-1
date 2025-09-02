import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-coral to-mint rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">语</span>
              </div>
              <span className="text-xl font-montserrat font-bold text-gray-900">LinguaLearn</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#courses" className="text-gray-600 hover:text-coral transition-colors">Курсы</a>
              <a href="#pricing" className="text-gray-600 hover:text-coral transition-colors">Цены</a>
              <a href="#reviews" className="text-gray-600 hover:text-coral transition-colors">Отзывы</a>
              <a href="#faq" className="text-gray-600 hover:text-coral transition-colors">FAQ</a>
              <a href="#contacts" className="text-gray-600 hover:text-coral transition-colors">Контакты</a>
            </div>
            <Button className="bg-gradient-to-r from-coral to-mint hover:scale-105 transform transition-all duration-200">
              Начать обучение
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-8">
            <Badge className="mb-4 bg-gradient-to-r from-coral/20 to-mint/20 text-coral border-coral/30">
              Онлайн обучение языкам
            </Badge>
            <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-gray-900 mb-6 leading-tight">
              Изучайте <span className="bg-gradient-to-r from-coral to-mint bg-clip-text text-transparent">китайский</span> и{' '}
              <span className="bg-gradient-to-r from-mint to-purple bg-clip-text text-transparent">английский</span> с удовольствием
            </h1>
            <p className="text-xl text-gray-600 font-open-sans mb-8 max-w-3xl mx-auto">
              Современная методика обучения, интерактивные уроки и персональный подход. 
              Достигайте своих языковых целей вместе с профессиональными преподавателями.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-coral to-mint hover:scale-105 transform transition-all duration-200 px-8">
                <Icon name="Play" size={20} className="mr-2" />
                Попробовать бесплатно
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-mint text-mint hover:bg-mint hover:text-white transition-all duration-200">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Консультация
              </Button>
            </div>
          </div>
          
          {/* Language symbols */}
          <div className="flex justify-center items-center space-x-12 text-6xl opacity-20 mt-16">
            <span>中</span>
            <span>文</span>
            <span>A</span>
            <span>B</span>
            <span>语</span>
            <span>言</span>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">Наши курсы</h2>
            <p className="text-gray-600 font-open-sans text-lg max-w-2xl mx-auto">
              Выберите язык и уровень, который подходит именно вам
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-coral/20">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-coral to-red-400 rounded-2xl flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">中</span>
                </div>
                <CardTitle className="text-2xl font-montserrat text-gray-900">Китайский язык</CardTitle>
                <CardDescription className="font-open-sans">
                  От начального до продвинутого уровня
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 font-open-sans text-gray-600">
                  <li className="flex items-center"><Icon name="Check" size={16} className="mr-3 text-coral" />Изучение иероглифов</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="mr-3 text-coral" />Разговорная практика</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="mr-3 text-coral" />Грамматика и письмо</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="mr-3 text-coral" />Культурные особенности</li>
                </ul>
                <Button className="w-full mt-6 bg-coral hover:bg-coral/90">
                  Узнать подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-mint/20">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-mint to-blue-400 rounded-2xl flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">EN</span>
                </div>
                <CardTitle className="text-2xl font-montserrat text-gray-900">Английский язык</CardTitle>
                <CardDescription className="font-open-sans">
                  Практический английский для жизни и работы
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 font-open-sans text-gray-600">
                  <li className="flex items-center"><Icon name="Check" size={16} className="mr-3 text-mint" />Деловой английский</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="mr-3 text-mint" />Подготовка к экзаменам</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="mr-3 text-mint" />Разговорные клубы</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="mr-3 text-mint" />Индивидуальные занятия</li>
                </ul>
                <Button className="w-full mt-6 bg-mint hover:bg-mint/90">
                  Узнать подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">Тарифные планы</h2>
            <p className="text-gray-600 font-open-sans text-lg">
              Выберите подходящий план обучения
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-xl font-montserrat text-gray-900">Базовый</CardTitle>
                <div className="text-3xl font-bold text-coral mt-4">₽2,990<span className="text-sm text-gray-500">/мес</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 font-open-sans text-gray-600">
                  <li className="flex items-center"><Icon name="Check" size={16} className="mr-3 text-coral" />4 урока в месяц</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="mr-3 text-coral" />Доступ к материалам</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="mr-3 text-coral" />Домашние задания</li>
                </ul>
                <Button className="w-full mt-6" variant="outline">Выбрать план</Button>
              </CardContent>
            </Card>

            <Card className="relative border-2 border-coral shadow-xl scale-105">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-coral to-mint text-white">Популярный</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-xl font-montserrat text-gray-900">Стандарт</CardTitle>
                <div className="text-3xl font-bold text-coral mt-4">₽4,990<span className="text-sm text-gray-500">/мес</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 font-open-sans text-gray-600">
                  <li className="flex items-center"><Icon name="Check" size={16} className="mr-3 text-coral" />8 уроков в месяц</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="mr-3 text-coral" />Персональный куратор</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="mr-3 text-coral" />Разговорные клубы</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="mr-3 text-coral" />Тестирование прогресса</li>
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-r from-coral to-mint">Выбрать план</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-xl font-montserrat text-gray-900">Премиум</CardTitle>
                <div className="text-3xl font-bold text-purple mt-4">₽7,990<span className="text-sm text-gray-500">/мес</span></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 font-open-sans text-gray-600">
                  <li className="flex items-center"><Icon name="Check" size={16} className="mr-3 text-purple" />Безлимитные уроки</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="mr-3 text-purple" />Индивидуальная программа</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="mr-3 text-purple" />24/7 поддержка</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="mr-3 text-purple" />Сертификат</li>
                </ul>
                <Button className="w-full mt-6 bg-purple hover:bg-purple/90">Выбрать план</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">Отзывы студентов</h2>
            <p className="text-gray-600 font-open-sans text-lg">
              Что говорят наши ученики о курсах
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-coral to-pink-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">АМ</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-montserrat font-semibold text-gray-900">Анна Морозова</h4>
                    <p className="text-sm text-gray-600">Изучает китайский</p>
                  </div>
                </div>
                <p className="font-open-sans text-gray-700">
                  "Отличные преподаватели и современная методика! За полгода изучения китайского языка достигла уровня HSK 3. Очень довольна результатом."
                </p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-mint to-blue-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">ДК</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-montserrat font-semibold text-gray-900">Дмитрий Козлов</h4>
                    <p className="text-sm text-gray-600">Изучает английский</p>
                  </div>
                </div>
                <p className="font-open-sans text-gray-700">
                  "Благодаря курсам английского получил повышение на работе. Теперь свободно общаюсь с зарубежными партнерами. Рекомендую!"
                </p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple to-pink-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">МП</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-montserrat font-semibold text-gray-900">Мария Петрова</h4>
                    <p className="text-sm text-gray-600">Изучает оба языка</p>
                  </div>
                </div>
                <p className="font-open-sans text-gray-700">
                  "Изучаю одновременно китайский и английский. Очень удобная платформа и гибкое расписание. За год существенно продвинулась в обоих языках."
                </p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">Часто задаваемые вопросы</h2>
            <p className="text-gray-600 font-open-sans text-lg">
              Ответы на популярные вопросы о наших курсах
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white border border-gray-200 rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left font-montserrat font-semibold text-gray-900">
                Как проходят онлайн-уроки?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 font-open-sans text-gray-700">
                Уроки проходят в формате видеоконференций с преподавателем. Мы используем интерактивную платформу с доской, материалами и упражнениями. Все занятия записываются для повторения.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white border border-gray-200 rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left font-montserrat font-semibold text-gray-900">
                Можно ли изучать два языка одновременно?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 font-open-sans text-gray-700">
                Да, многие студенты успешно изучают китайский и английский параллельно. Мы поможем составить оптимальное расписание и программу обучения.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white border border-gray-200 rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left font-montserrat font-semibold text-gray-900">
                Есть ли бесплатный пробный урок?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 font-open-sans text-gray-700">
                Конечно! Мы предлагаем бесплатный пробный урок длительностью 30 минут, где вы познакомитесь с преподавателем, оцените методику и определите свой уровень.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white border border-gray-200 rounded-lg">
              <AccordionTrigger className="px-6 py-4 text-left font-montserrat font-semibold text-gray-900">
                Какие документы выдаются по окончании курса?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 font-open-sans text-gray-700">
                По завершении курса вы получите сертификат о прохождении обучения с указанием уровня и количества часов. Сертификат признается многими работодателями.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-gray-600 font-open-sans text-lg">
              Свяжитесь с нами для консультации или записи на пробный урок
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-4">Информация о преподавателе</h3>
              <div className="space-y-4 font-open-sans">
                <div className="flex items-center">
                  <Icon name="User" size={20} className="mr-3 text-coral" />
                  <span className="text-gray-700">ИП Пегарева Екатерина</span>
                </div>
                <div className="flex items-center">
                  <Icon name="GraduationCap" size={20} className="mr-3 text-mint" />
                  <span className="text-gray-700">Сертифицированный преподаватель</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Award" size={20} className="mr-3 text-purple" />
                  <span className="text-gray-700">5+ лет опыта преподавания</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-montserrat font-semibold text-gray-900 mb-4">Способы связи</h3>
              <div className="space-y-4 font-open-sans">
                <div className="flex items-center">
                  <Icon name="Mail" size={20} className="mr-3 text-coral" />
                  <a href="mailto:info@linguallearn.ru" className="text-gray-700 hover:text-coral transition-colors">
                    info@linguallearn.ru
                  </a>
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" size={20} className="mr-3 text-mint" />
                  <a href="tel:+79001234567" className="text-gray-700 hover:text-mint transition-colors">
                    +7 (900) 123-45-67
                  </a>
                </div>
                <div className="flex items-center">
                  <Icon name="MessageCircle" size={20} className="mr-3 text-purple" />
                  <span className="text-gray-700">Telegram: @linguallearn</span>
                </div>
              </div>
              
              <Button className="w-full mt-6 bg-gradient-to-r from-coral to-mint hover:scale-105 transform transition-all duration-200">
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на урок
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-coral to-mint rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">语</span>
            </div>
            <span className="text-xl font-montserrat font-bold">LinguaLearn</span>
          </div>
          <p className="text-gray-400 font-open-sans mb-4">
            Онлайн школа изучения китайского и английского языков
          </p>
          <p className="text-sm text-gray-500 font-open-sans">
            © 2024 ИП Пегарева Екатерина. Все права защищены.
          </p>
          <div className="flex justify-center space-x-6 mt-6">
            <a href="#" className="text-gray-400 hover:text-coral transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-mint transition-colors">
              <Icon name="MessageCircle" size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple transition-colors">
              <Icon name="Mail" size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}