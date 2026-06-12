import React from 'react';

function Header({ openModal }) {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-3 col-xs-12">
            <div className="logo">
              <div className="logo_img">
                <img src="/src/assets/img/header/logo.png" alt="#" />
              </div>
              <p>Остекление балконов и лоджий в Москве и Московской области</p>
            </div>
          </div>
          <div className="col-md-2 col-sm-3 col-xs-12">
            <div className="header_btn_wrap">
              <div className="header_btn_wrap_block">
                <button 
                  className="header_btn text-uppercase text-left popup_engineer_btn"
                  onClick={() => openModal('engineer')}
                >
                  Вызвать <br />замерщика
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-3 col-xs-6 text-left">
            <div className="working_hours">
              <div className="working_hours_img">
                <img src="/src/assets/img/header/clock.png" alt="#" />
              </div>
              <p>без выходных <span>9:00 - 18:00</span></p>
            </div>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-6">
            <div className="contact_us">
              <div className="contact_us_wrap">
                <a href="#"><img src="/src/assets/img/header/phone.png" alt="#" />+7 (495) 646-61-71</a>
                <a className="phone_link" href="#" onClick={(e) => { e.preventDefault(); openModal('popup'); }}>Заказать обратный звонок</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;