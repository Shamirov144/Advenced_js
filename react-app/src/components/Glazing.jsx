import React, { useState, useEffect } from 'react';
import GlazingSlider from './GlazingSlider';

const glazingTypes = [
  {
    name: 'tree',
    title: 'Деревянное',
    coldImg: '/src/assets/img/glazing/img_cold.png',
    coldSpecs: ['Конструктивная толщина 42-58 мм', 'Остекление: полированное стекло (толщиной 4 - 5 мм)', 'Теплоизоляция: 0,07 м2 * С/Вт', 'Звукоизоляция: 20-27 дб'],
    coldPrice: '2600 руб.кв.м.',
    warmImg: '/src/assets/img/glazing/img_warm.png',
    warmSpecs: ['Конструктивная толщина профиля: 58-78 м', 'Остекление: однокамерные и двухкамерные стеклопакеты', 'Теплоизоляция: 0,63 - 1,05 м2 * С/Вт', 'Звукоизоляция: до 5 класса'],
    warmPrice: '4000 руб.кв.м.'
  },
  {
    name: 'aluminum',
    title: 'Алюминиевое',
    coldImg: '/src/assets/img/glazing/aluminum/cold.jpg',
    coldSpecs: ['Конструктивная толщина 40-50 мм', 'Остекление: полированное стекло (толщиной 4 - 5 мм)', 'Теплоизоляция: 0,07 м2 * С/Вт', 'Звукоизоляция: 20-27 дб'],
    coldPrice: '4000 руб.кв.м.',
    warmImg: '/src/assets/img/glazing/aluminum/warm.jpg',
    warmSpecs: ['Конструктивная толщина профиля: 60-68 м', 'Остекление: однокамерные и двухкамерные стеклопакеты', 'Теплоизоляция: 0,63 - 1,05 м2 * С/Вт', 'Звукоизоляция: до 5 класса'],
    warmPrice: '8000 руб.кв.м.'
  },
  {
    name: 'plastic',
    title: 'Пластиковое',
    coldImg: null,
    coldSpecs: null,
    coldPrice: null,
    warmImg: '/src/assets/img/glazing/plastic/warm.jpg',
    warmSpecs: ['Конструктивная толщина профиля: 58-70 м', 'Остекление: однокамерные и двухкамерные стеклопакеты', 'Теплоизоляция: 0,63 - 1,05 м2 * С/Вт', 'Звукоизоляция: до 5 класса'],
    warmPrice: '5500 руб.кв.м.'
  },
  {
    name: 'french',
    title: 'Французское',
    coldImg: '/src/assets/img/glazing/french/plastic.jpg',
    coldSpecs: ['Конструктивная толщина 58-70 мм', 'Остекление: однокамерные и двухкамерные стеклопакеты', 'Теплоизоляция: 0,63 - 1,05 м2 * С/Вт', 'Звукоизоляция: до 5 класса'],
    coldPrice: '5500 руб.кв.м.',
    coldSubtitle: 'Пластик',
    warmImg: '/src/assets/img/glazing/french/aluminum.jpg',
    warmSpecs: ['Конструктивная толщина профиля: 60-68 мм', 'Остекление: однокамерные и двухкамерные стеклопакеты', 'Теплоизоляция: 0,63 - 1,05 м2 * С/Вт', 'Звукоизоляция: до 5 класса'],
    warmPrice: '8000 руб.кв.м.',
    warmSubtitle: 'Алюминий'
  },
  {
    name: 'rise',
    title: 'С выносом',
    coldImg: '/src/assets/img/glazing/rise/aluminum.jpg',
    coldSpecs: ['Конструктивная толщина 40-50 мм', 'Остекление: полированное стекло (толщиной 4 - 5 мм)', 'Теплоизоляция: 0,07 м2 * С/Вт', 'Звукоизоляция: 20-27 дб'],
    coldPrice: '4000 руб.кв.м.',
    coldSubtitle: 'Алюминий',
    warmImg: '/src/assets/img/glazing/rise/tree.jpg',
    warmSpecs: ['Конструктивная толщина профиля: 40-42 мм', 'Остекление: полированное стекло (толщиной 4 мм)', 'Теплоизоляция: 0,07 м2 * С/Вт', 'Звукоизоляция: 20-27 дб'],
    warmPrice: '8000 руб.кв.м.',
    warmSubtitle: 'Дерево'
  }
];

const glazingIcons = [
  { img: '/src/assets/img/glazing/icons/1.png', text: 'Деревянное <br>остекление', className: 'tree_link' },
  { img: '/src/assets/img/glazing/icons/2.png', text: 'Алюминиевое <br>остекление', className: 'aluminum_link' },
  { img: '/src/assets/img/glazing/icons/3.png', text: 'Остекление <br>пластиковыми <br>рамами', className: 'plastic_link' },
  { img: '/src/assets/img/glazing/icons/4.png', text: 'Французское <br>остекление <br>(панорамное)', className: 'french_link' },
  { img: '/src/assets/img/glazing/icons/5.png', text: 'Остекление <br>с выносом', className: 'rise_link' }
];

function Glazing({ openModal }) {
  const [activeTab, setActiveTab] = useState(0);
  const current = glazingTypes[activeTab];

  return (
    <section className="glazing">
      <div className="container">
        <div className="section_header">
          <h2>Остекление балконов и лоджий</h2>
          <div className="section_header_sub"></div>
        </div>
        <GlazingSlider icons={glazingIcons} activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className={`row ${current.name} glazing_content`} style={{ display: 'block' }}>
          {(current.coldImg || (current.warmImg && current.name === 'plastic')) ? (
            <>
              {current.coldImg && (
                <div className={`col-md-${current.name === 'plastic' ? '6 col-md-offset-3' : '6'} no-padding`}>
                  <div className="glazing_cold">
                    <h3>{current.coldSubtitle || 'Холодное'}</h3>
                    <img src={current.coldImg} alt="#" />
                    <ul>
                      {current.coldSpecs?.map((spec, i) => (
                        <li key={i} dangerouslySetInnerHTML={{ __html: spec.replace('м2', 'м<sup>2</sup>') }} />
                      ))}
                    </ul>
                  </div>
                  <div className="glazing_price">
                    <p>{current.coldPrice}<br /><span>под ключ с установкой</span></p>
                    <button className="button glazing_price_btn text-uppercase popup_calc_btn" onClick={() => openModal('calc')}>Рассчитать стоимость</button>
                  </div>
                </div>
              )}
              <div className={`col-md-${current.name === 'plastic' || !current.coldImg ? '6 col-md-offset-3' : '6'} no-padding`}>
                <div className="glazing_warm">
                  <h3>{current.warmSubtitle || 'теплое'}</h3>
                  <img src={current.warmImg} alt="#" />
                  <ul>
                    {current.warmSpecs?.map((spec, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: spec.replace('м2', 'м<sup>2</sup>') }} />
                    ))}
                  </ul>
                </div>
                <div className="glazing_price">
                  <p>{current.warmPrice}<br /><span>под ключ с установкой</span></p>
                  <button className="button glazing_price_btn text-uppercase popup_calc_btn" onClick={() => openModal('calc')}>Рассчитать стоимость</button>
                </div>
              </div>
            </>
          ) : (
            <div className="col-md-6 col-md-offset-3 no-padding">
              <div className="glazing_warm">
                <h3>теплое</h3>
                <img src={current.warmImg} alt="#" />
                <ul>
                  {current.warmSpecs?.map((spec, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: spec.replace('м2', 'м<sup>2</sup>') }} />
                  ))}
                </ul>
              </div>
              <div className="glazing_price">
                <p>{current.warmPrice}<br /><span>под ключ с установкой</span></p>
                <button className="button glazing_price_btn text-uppercase popup_calc_btn" onClick={() => openModal('calc')}>Рассчитать стоимость</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Glazing;