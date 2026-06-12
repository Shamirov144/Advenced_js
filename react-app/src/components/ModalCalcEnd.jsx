import React from 'react';

function ModalCalcEnd({ isOpen, closeModal, modalState }) {
  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    // Append modal state data
    Object.entries(modalState).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const res = await fetch('assets/server.php', {
        method: 'POST',
        body: formData
      });
      const text = await res.text();
      console.log(text);
      // Show success
      const status = document.createElement('div');
      status.classList.add('status');
      status.textContent = 'Успех';
      form.appendChild(status);
      setTimeout(() => status.remove(), 5000);

      // Clear inputs
      form.querySelectorAll('input').forEach(inp => inp.value = '');
      closeModal();
    } catch (err) {
      console.error(err);
      const status = document.createElement('div');
      status.classList.add('status');
      status.textContent = 'Что-то пошло не так...';
      form.appendChild(status);
      setTimeout(() => status.remove(), 5000);
    }
  };

  return (
    <div className="popup_calc_end" data-modal style={{ display: 'block' }} onClick={closeModal}>
      <div className="popup_dialog">
        <div className="popup_content text-center" onClick={(e) => e.stopPropagation()}>
          <button type="button" className="popup_calc_end_close" onClick={closeModal}><strong>&times;</strong></button>
          <div className="popup_form">
            <form className="form" action="#" data-calc="end" onSubmit={handleSubmit}>
              <h2>Спасибо за обращение! <br />Оставьте свои данные</h2>
              <input className="form-control form_input" name="user_name" required type="text" placeholder="Введите ваше имя" />
              <input className="form-control form_input" name="user_phone" required type="text" placeholder="Введите телефон" />
              <button className="text-uppercase btn-block button" name="submit" type="submit">Рассчитать стоимость</button>
              <p className="form_notice">Перезвоним в течение 10 минут</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalCalcEnd;