import React, { useState, useEffect, useRef } from 'react';
import $ from 'jquery';
import 'slick-carousel';

const decorationSlides = [
  { name: 'internal', title: 'Внутренняя отделка', className: 'internal_link' },
  { name: 'external', title: 'Внешняя отделка', className: 'external_link' },
  { name: 'rising', title: 'Выносное остекление', className: 'rising_link' },
  { name: 'roof', title: 'Крыша на балкон', className: 'roof_link' }
];

const decorationData = {
  internal: {
    img: '/src/assets/img/decoration/decoration_img.png',
    materials: [
      { img: '/src/assets/img/decoration/material/lining.png', title: 'Вагонка', price: '600 руб. кв.м.' },
      { img: '/src/assets/img/decoration/material/plastic.png', title: 'Пластиковая вагонка', price: '750 руб. кв.м.' },
      { img: '/src/assets/img/decoration/material/pvh.png', title: 'ПВХ-панели', price: '800 руб. кв.м.' },
      { img: '/src/assets/img/decoration/material/laminate.png', title: 'Настил пола из ламината', price: '1250 руб. кв.м.' },
      { img: '/src/assets/img/decoration/material/tree.png', title: 'Настил пола из дерева', price: '1650 руб. кв.м.' }
    ]
  },
  external: {
    img: '/src/assets/img/decoration/2/decoration2_img.png',
    materials: [
      { img: '/src/assets/img/decoration/2/metal.png', title: 'Металлический сайдинг', price: '600 руб. кв.м.' },
      { img: '/src/assets/img/decoration/2/plastic.png', title: 'Пластиковая вагонка', price: '750 руб. кв.м.' },
      { img: '/src/assets/img/decoration/2/profnastil.png', title: 'Профнастил', price: '800 руб. кв.м.' },
      { img: '/src/assets/img/decoration/2/tree.png', title: 'Деревянная вагонка', price: '1250 руб. кв.м.' },
      { img: '/src/assets/img/decoration/2/vinil.png', title: 'Виниловый сайдинг', price: '1650 руб. кв.м.' }
    ]
  },
  rising: {
    img: '/src/assets/img/decoration/3/decoration3_img.jpg',
    materials: [
      { img: '/src/assets/img/decoration/3/aluminum.png', title: 'Алюминиевый профиль', price: '600 руб. кв.м.' },
      { img: '/src/assets/img/decoration/3/bezram.png', title: 'Безрамное остекление', price: '750 руб. кв.м.' },
      { img: '/src/assets/img/decoration/3/pvh.png', title: 'ПВХ профиль', price: '800 руб. кв.м.' },
      { img: '/src/assets/img/decoration/3/tree.png', title: 'Деревянный профиль', price: '1250 руб. кв.м.' }
    ]
  },
  roof: {
    img: '/src/assets/img/decoration/4/decoration4_img.png',
    materials: [
      { img: '/src/assets/img/decoration/4/gofrolist.png', title: 'Гофролист', price: '600 руб. кв.м.' },
      { img: '/src/assets/img/decoration/4/metallocherepitsa.png', title: 'Металлочерепица', price: '750 руб. кв.м.' },
      { img: '/src/assets/img/decoration/4/ondulin.png', title: 'Ондулин', price: '800 руб. кв.м.' },
      { img: '/src/assets/img/decoration/4/polikarbonat.png', title: 'Поликарбонат', price: '1250 руб. кв.м.' },
      { img: '/src/assets/img/decoration/4/steklopaket.png', title: 'Стеклопакет', price: '1650 руб. кв.м.' }
    ]
  }
};

function DecorationSlider({ activeTab, setActiveTab }) {
  const sliderRef = useRef(null);

  useEffect(() => {
    const $slider = $(sliderRef.current);
    if ($slider.length && $.fn.slick) {
      $slider.on('init afterChange', (event, slick, currentSlide) => {
        if (currentSlide !== undefined) setActiveTab(currentSlide);
      });
      $slider.slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          { breakpoint: 1200, settings: { slidesToShow: 3, prevArrow: '<button class="prev arrow"></button>', nextArrow: '<button class="next arrow"></button>', slidesToScroll: 1 } },
          { breakpoint: 992, settings: { slidesToShow: 2, prevArrow: '<button class="prev arrow"></button>', nextArrow: '<button class="next arrow"></button>', slidesToScroll: 2 } },
          { breakpoint: 768, settings: { slidesToShow: 1, prevArrow: '<button class="prev arrow"></button>', nextArrow: '<button class="next arrow"></button>', slidesToScroll: 1 } }
        ]
      });
    }
    return () => {
      if ($slider.length && $.fn.slick) $slider.slick('unslick');
    };
  }, []);

  return (
    <div className="decoration_slider" ref={sliderRef}>
      {decorationSlides.map((slide, i) => (
        <div key={i} className="decoration_item">
          <div className={`${slide.className} no_click ${i === activeTab ? 'after_click' : ''}`}>
            <a onClick={() => setActiveTab(i)}>{slide.title}</a>
          </div>
        </div>
      ))}
    </div>
  );
}

function Decoration({ openModal }) {
  const [activeTab, setActiveTab] = useState(0);
  const activeKey = decorationSlides[activeTab]?.name;
  const data = decorationData[activeKey];

  return (
    <section className="decoration">
      <div className="container">
        <div className="section_header">
          <h2>ЗАКАЖИТЕ ОТДЕЛКУ БАЛКОНА СО СКИДКОЙ 60%!</h2>
          <div className="section_header_sub"></div>
        </div>
        <DecorationSlider activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="decoration_content">
          <div className="row">
            <div className={activeKey}>
              <div className="col-lg-3 col-md-4 col-md-offset-0 col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2 no-padding">
                <div className="decoration_img">
                  <img src={data?.img} alt="" style={{ marginTop: '3rem' }} />
                </div>
              </div>
              <div className="col-lg-5 col-md-8 col-xs-12">
                <div className="row">
                  {data?.materials.map((mat, i) => (
                    <div key={i} className="col-lg-4 col-md-4 col-sm-4 col-xs-6">
                      <div className="decoration_content_material text-center">
                        <img src={mat.img} alt="#" />
                        {mat.title.includes(' ') ? (
                          <>
                            <h3>{mat.title.split(' ').slice(0, -1).join(' ')}</h3>
                            <p>{mat.price}<span>с материалом</span></p>
                          </>
                        ) : (
                          <>
                            <h3>{mat.title}</h3>
                            <p>{mat.price}<span>с материалом</span></p>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-4 col-lg-offset-0 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12">
                <form className="form main_form decoration_form" action="#">
                  <h2>Запишитесь сегодня на <br /><span>бесплатный замер</span></h2>
                  <input className="form-control form_input" name="user_name" required type="text" placeholder="Введите ваше имя" />
                  <input className="form-control form_input" name="user_phone" required type="text" placeholder="Введите телефон" />
                  <button className="text-uppercase btn-block button" name="submit" type="submit">Вызвать замерщика!</button>
                  <p className="form_notice">Ваши данные конфиденциальны</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Decoration;