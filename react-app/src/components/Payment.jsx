import React from 'react';

function Payment() {
  return (
    <section className="payment">
      <div className="container">
        <div className="section_header payment_header">
          <h2>Вы можете оплатить наши услуги:</h2>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-4">
            <div className="payment_item">
              <div className="payment_img">
                <img src="/src/assets/img/payment/wallet.png" alt="" />
              </div>
              <h3>Наличными</h3>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="payment_item">
              <div className="payment_img">
                <img src="/src/assets/img/payment/credit-card.png" alt="" />
              </div>
              <h3>Банковской картой</h3>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="payment_item">
              <div className="payment_img">
                <img src="/src/assets/img/payment/museum.png" alt="" />
              </div>
              <h3>Безналичный расчет</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Payment;