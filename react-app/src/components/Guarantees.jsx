import React from 'react';

const guarantees = [
  { img: '/src/assets/img/guarantees/1.png', title: 'Высокое качество' },
  { img: '/src/assets/img/guarantees/2.png', title: 'Выполнение работ под ключ' },
  { img: '/src/assets/img/guarantees/3.png', title: 'Монтаж в короткие сроки' },
  { img: '/src/assets/img/guarantees/4.png', title: 'Цены от производителя' },
  { img: '/src/assets/img/guarantees/5.png', title: 'Бесплатный замер и консультацию' },
  { img: '/src/assets/img/guarantees/6.png', title: 'Тепло и уют на балконе' }
];

function Guarantees() {
  return (
    <section className="guarantees">
      <div className="container">
        <div className="section_header guarantees_header">
          <h2>мы гарантируем вам</h2>
          <div className="section_header_sub guarantees_header_sub"></div>
        </div>
        <div className="row">
          {guarantees.map((g, i) => (
            <div key={i} className="col-md-4 col-sm-6 col-xs-6 text-center">
              <div className="guarantees_block">
                <img src={g.img} alt="#" />
                <h3 dangerouslySetInnerHTML={{ __html: g.title.replace(' ', '<br>') }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Guarantees;