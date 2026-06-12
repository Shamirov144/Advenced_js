import React from 'react';

function Contacts() {
  return (
    <section className="contacts">
      <div className="container">
        <div className="section_header">
          <h2>Как нас найти</h2>
          <div className="section_header_sub"></div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2235.2618174047184!2d37.602909316080805!3d55.92749898597191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b53a0ac32d875f%3A0xe1064c1e68c2b74a!2z0JLRi9GB0YLQsNCy0L7Rh9C90LDRjywgNTMsINCS0LXRiNC60LgsINCc0L7RgdC60LLQstGB0LrQsNGPINC-0LHQuy4sIDEyNzU0Mw!5e0!3m2!1sru!2sru!4v1510535523155"
              width="550"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              title="map"
            />
          </div>
          <div className="col-lg-5 col-lg-offset-1 col-md-6 col-md-offset-0">
            <div className="contacts_info">
              <h3>Юридический адрес:</h3>
              <p>ООО «ИРВАС», 127411, г.Москва, Дмитровское шоссе, д.125, корпус 1</p>
              <h3>Фактический адрес:</h3>
              <p>ООО «ИРВАС», 141031, МО, Мытищинский р-он, п.Вешки,Выставочная,д.53</p>
              <h3>Телефон:</h3>
              <p>+7 (495) 646-61- 71 <span>(многоканальный)</span></p>
              <h3>E-mail:</h3>
              <a href="#">info@irvasokna.ru</a>
              <h3>Режим работы:</h3>
              <p>9:00 - 18:00 без выходных</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;