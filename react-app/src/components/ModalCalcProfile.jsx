import React, { useState } from 'react';

function ModalCalcProfile({ isOpen, closeModal, openModal, modalState, setModalState }) {
  const [glazingType, setGlazingType] = useState('tree');
  const [profile, setProfile] = useState(null);

  if (!isOpen) return null;

  const handleNext = () => {
    openModal('calcEnd');
  };

  const handleProfileSelect = (type) => {
    setProfile(type);
    setModalState(prev => ({ ...prev, profile: type === 0 ? 'Cold' : 'Warm' }));
  };

  const handleTypeChange = (e) => {
    const val = e.target.value;
    setGlazingType(val);
    setModalState(prev => ({ ...prev, type: val }));
  };

  return (
    <div className="popup_calc_profile" data-modal style={{ display: 'block' }} onClick={closeModal}>
      <div className="popup_dialog">
        <div className="popup_calc_profile_content text-center" onClick={(e) => e.stopPropagation()}>
          <button type="button" className="popup_calc_profile_close" onClick={closeModal}><strong>&times;</strong></button>
          <h2>Калькулятор</h2>
          <h3>Выберите тип остекления <br />и его профиль</h3>
          <select className="form-control" name="view" id="view_type" value={glazingType} onChange={handleTypeChange}>
            <option value="tree">Деревянное остекление</option>
            <option value="aluminum">Алюминиевое остекление</option>
            <option value="plastic">Остекление пластиковыми рамами</option>
            <option value="french">Панорамное остекление</option>
            <option value="overhang">Остекление с выносом</option>
          </select>
          <img src="/src/assets/img/modal_calc/icon_cold.png" alt="" />
          <label>
            <input
              className="checkbox"
              type="checkbox"
              name="checkbox-test"
              checked={profile === 0}
              onChange={() => handleProfileSelect(0)}
            />
            <span className="checkbox-custom" id="cold"></span>
            <span className="label">Холодное</span>
          </label>
          <img src="/src/assets/img/modal_calc/icon_warm.png" alt="" />
          <label>
            <input
              className="checkbox"
              type="checkbox"
              name="checkbox-test"
              checked={profile === 1}
              onChange={() => handleProfileSelect(1)}
            />
            <span className="checkbox-custom" id="warm"></span>
            <span className="label">Теплое</span>
          </label>
          <button className="button popup_calc_profile_button" onClick={handleNext}>Далее</button>
        </div>
      </div>
    </div>
  );
}

export default ModalCalcProfile;