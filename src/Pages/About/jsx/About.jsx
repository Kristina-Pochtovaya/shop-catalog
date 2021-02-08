import React from 'react';
import {Header} from '../../Main/Header/jsx/Header';
import {Footer} from '../../Main/Footer/jsx/Footer';

export const About= () => (
  <>
  <Header linkItem={<button type="button" className="buttonBack">Назад</button>} link="/main-page" />

  <div className="about-wrap">
    <h1 className="aboutHeaderH1">
      ВСЕ ДЛЯ ДОМА – строительный гипермаркет
    </h1>
    <p className="aboutParagraph"><i>ВСЕ ДЛЯ ДОМА</i> — первый в Минске <i>строительный гипермаркет</i> формата DIY, соответствующий высоким стандартам обслуживания европейского уровня.</p>
     
     <p className="aboutParagraph">
     DIY (Do It Yourself) - английское название <i>строительных магазинов</i> для дома и ремонта, дословный перевод — «Сделай сам». Формат DIY подразумевает как возможность самому подобрать 
     необходимый товар, так и приобрести все необходимое в одном месте для реализации собственного проекта. Качественный мерчандайзинг и удобная навигация отделов упрощают поиск товара, 
     а профессиональные продавцы магазина предоставляют необходимую консультацию.</p>

     <ul className="aboutList">
       <p className="aboutParagraph">
         <b className="-block">Магазин стройматериалов имеет торговую площадь 7500 кв.м., покупателям предлагается более 45 000 различных товаров, которые представлены в девяти отделах:</b>
         <li className="aboutListItem">строительные материалы,</li>
         <li className="aboutListItem">товары для дома,</li>
         <li className="aboutListItem">инструмент и электрика,</li>
         <li className="aboutListItem">изделия из дерева,</li>
         <li className="aboutListItem">сантехника,</li>
         <li className="aboutListItem">краски,</li>
         <li className="aboutListItem">декоративные материалы,</li>
         <li className="aboutListItem">садовый мир.</li>
      </p>
     </ul>

     <p className="aboutParagraph">Качество предлагаемых товаров гарантировано и сертифицировано.</p>
      
     <h2 className="aboutHeaderH2">Отличительными особенностями строительного гипермаркета "ВСЕ ДЛЯ ДОМА" являются:</h2>

    <ul className="aboutList">
      <p className="aboutParagraph">
        <li className="aboutListItem">широкий ассортимент продукции,</li>
        <li className="aboutListItem">доступные цены,</li>
        <li className="aboutListItem">грамотная навигация и наглядность экспозиций,</li>
        <li className="aboutListItem">доставка товара,</li>
        <li className="aboutListItem">профессиональная помощь продавцов-консультантов,</li>
        <li className="aboutListItem">удобное месторасположение и транспортное сообщение,</li>
        <li className="aboutListItem">большая и вместительная парковка на 300 мест,</li>
        <li className="aboutListItem">удобное время работы – ежедневно с 9 до 22 часов.</li>
      </p>
    </ul>

    <p className="aboutParagraph">
     <i>Магазин стройматериалов "ВСЕ ДЛЯ ДОМА"</i> предоставляет лучший выбор и оптимальные цены, благодаря чему вне зависимости от своего образа жизни, доходов, возраста, семейного положения, 
     вкусов, желаний, каждый может повысить комфорт в своем жилище, осуществить свои большие и маленькие проекты. Здесь все необходимые покупки можно сделать в одном месте, что существенно
      облегчает планирование и проведение ремонта на любых стадиях. "ВСЕ ДЛЯ ДОМА" - доступен каждому, это комфортабельный строительный гипермаркет, который уважает своих покупателей.
     </p>

     <h3 className="aboutHeaderH3">Добро пожаловать в строительную цивилизацию «ВСЕ ДЛЯ ДОМА»</h3>
  </div>
  <Footer />
  </>
);



