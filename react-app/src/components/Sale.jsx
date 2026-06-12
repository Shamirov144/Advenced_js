import React from 'react';
import useTimer from '../hooks/useTimer';

const deadline = '2026-10-15';

function Sale({ openModal }) {
  const time = useTimer(deadline);

  return (
    <section className="sale">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6">
            <h2 className="sale_title">Акция - 60%</h2>
            <p className="sale_subtitle">Успей сэкономить на остеклении! Только до 18 декабря!</p>
            <div className="timer1" id="timer">
              <p><h4>ДО ЗАВЕРШЕНИЯ АКЦИИ:</h4></p>
              <div className="container1">
                <div className="numbers1">
                  <div><span id="days">{time.days}</span></div>
                  <div className="description1">Дней</div>
                </div>
                <div className="numbers1">
                  <div><span id="hours">{time.hours}</span></div>
                  <div className="description1">Часов</div>
                </div>
                <div className="numbers1">
                  <div><span id="minutes">{time.minutes}</span></div>
                  <div className="description1">Минут</div>
                </div>
                <div className="numbers1">
                  <div><span id="seconds">{time.seconds}</span></div>
                  <div className="description1">Секунд</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-lg-offset-3 col-md-5 col-md-offset-1 col-sm-8 col-sm-offset-2">
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
    </section>
  );
}

export default Sale;