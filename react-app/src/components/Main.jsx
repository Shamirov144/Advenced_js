import React from 'react';

function Main({ openModal }) {
  return (
    <main className="main">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-7 wow fadeInLeft">
            <h1><span>Остекление балконов "под ключ"<br /></span>за 12 800 рублей!</h1>
            <div className="main_features">
              <div className="row">
                <div className="col-sm-3 col-xs-6">
                  <div className="main_features_block">
                    <img src="/src/assets/img/main/icons/quality.png" alt="" />
                    <p>Высокое <br />качество</p>
                  </div>
                </div>
                <div className="col-sm-3 col-xs-6">
                  <div className="main_features_block">
                    <img src="/src/assets/img/main/icons/time.png" alt="" />
                    <p>Быстрый <br />монтаж</p>
                  </div>
                </div>
                <div className="col-sm-3 col-xs-6">
                  <div className="main_features_block">
                    <img className="small_img" src="/src/assets/img/main/icons/guaranty.png" alt="" />
                    <p>Гарантия <br />3 года</p>
                  </div>
                </div>
                <div className="col-sm-3 col-xs-6">
                  <div className="main_features_block">
                    <img className="small_img" src="/src/assets/img/main/icons/delivery.png" alt="" />
                    <p>Вывоз <br />мусора</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-lg-offset-2 col-md-5 col-md-offset-0 col-sm-8 col-sm-offset-2 col-xs-12 wow fadeInRight">
            <form className="form main_form" action="#">
              <h2>Запишитесь сегодня на <br /><span>бесплатный замер</span></h2>
              <input className="form-control form_input" name="user_name" required type="text" placeholder="Введите ваше имя" />
              <input className="form-control form_input" name="user_phone" required type="text" placeholder="Введите телефон" />
              <button className="text-uppercase btn-block button" name="submit" type="submit">Вызвать замерщика!</button>
              <p className="form_notice">Ваши данные конфиденциальны</p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;