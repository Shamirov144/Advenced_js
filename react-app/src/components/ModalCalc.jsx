import React, { useState } from 'react';

const balconTypes = [
  { img: '/src/assets/img/modal_calc/balkon/ba_01.png', big: '/src/assets/img/modal_calc/balkon/type1.png', alt: 'Тип1' },
  { img: '/src/assets/img/modal_calc/balkon/ba_02.png', big: '/src/assets/img/modal_calc/balkon/type2.png', alt: 'Тип2' },
  { img: '/src/assets/img/modal_calc/balkon/ba_03.png', big: '/src/assets/img/modal_calc/balkon/type3.png', alt: 'Тип3' },
  { img: '/src/assets/img/modal_calc/balkon/ba_04.png', big: '/src/assets/img/modal_calc/balkon/type4.png', alt: 'Тип4' }
];

function ModalCalc({ isOpen, closeModal, openModal, modalState, setModalState }) {
  const [selectedType, setSelectedType] = useState(0);
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');

  if (!isOpen) return null;

  const handleWidthChange = (e) => {
    const val = e.target.value.replace(/\D/g, '');
    setWidth(val);
    setModalState(prev => ({ ...prev, width: val }));
  };

  const handleHeightChange = (e) => {
    const val = e.target.value.replace(/\D/g, '');
    setHeight(val);
    setModalState(prev => ({ ...prev, height: val }));
  };

  const handleNext = () => {
    setModalState(prev => ({ ...prev, form: selectedType }));
    openModal('calcProfile');
  };

  return (
    <div className="popup_calc" data-modal style={{ display: 'block' }} onClick={closeModal}>
      <div className="popup_dialog">
        <div className="popup_calc_content text-center" onClick={(e) => e.stopPropagation()}>
          <button type="button" className="popup_calc_close" onClick={closeModal}><strong>&times;</strong></button>
          <h2>Калькулятор</h2>
          <h3>Выберите форму балкона <br />и укажите размеры</h3>
          <div className="balcon_icons">
            {balconTypes.map((type, i) => (
              <span
                key={i}
                className={`balcon_icons_img ${i === selectedType ? 'do_image_more' : ''}`}
                onClick={() => {
                  setSelectedType(i);
                  setModalState(prev => ({ ...prev, form: i }));
                }}
              >
                <img src={type.img} alt={type.alt} />
              </span>
            ))}
          </div>
          <div className="big_img text-center">
            {balconTypes.map((type, i) => (
              <img
                key={i}
                src={type.big}
                alt={type.alt}
                style={{ display: i === selectedType ? 'inline' : 'none' }}
              />
            ))}
          </div>
          <input
            className="form-control"
            id="width"
            type="text"
            placeholder="Ширина"
            required
            value={width}
            onChange={handleWidthChange}
          />
          <label htmlFor="width">мм</label>
          <div className="multiplication"><strong>&times;</strong></div>
          <input
            className="form-control"
            id="height"
            type="text"
            placeholder="Высота"
            required
            value={height}
            onChange={handleHeightChange}
          />
          <label htmlFor="height">мм</label>
          <button className="button popup_calc_button" onClick={handleNext}>Далее</button>
        </div>
      </div>
    </div>
  );
}

export default ModalCalc;