import { useEffect } from 'react';

function useForms(modalState) {
  useEffect(() => {
    const forms = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');

    const message = {
      loading: 'Загрузка...',
      success: 'Успех',
      failure: 'Что-то пошло не так...'
    };

    const postData = async (url, data) => {
      const statusEl = document.querySelector('.status');
      if (statusEl) statusEl.textContent = message.loading;
      const res = await fetch(url, { method: 'POST', body: data });
      return await res.text();
    };

    const clearInputs = () => {
      inputs.forEach(item => { item.value = ''; });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      const item = e.target;
      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.appendChild(statusMessage);

      const formData = new FormData(item);

      if (item.getAttribute('data-calc') === 'end') {
        Object.entries(modalState).forEach(([key, value]) => {
          formData.append(key, value);
        });
      }

      try {
        const res = await postData('assets/server.php', formData);
        console.log(res);
        statusMessage.textContent = message.success;
      } catch (err) {
        statusMessage.textContent = message.failure;
      } finally {
        clearInputs();
        setTimeout(() => { statusMessage.remove(); }, 5000);
      }
    };

    forms.forEach(form => {
      form.addEventListener('submit', handleSubmit);
    });

    // Phone input validation
    const phoneInputs = document.querySelectorAll('input[name="user_phone"]');
    phoneInputs.forEach(input => {
      input.addEventListener('input', () => {
        input.value = input.value.replace(/\D/g, '');
      });
    });

    return () => {
      forms.forEach(form => {
        form.removeEventListener('submit', handleSubmit);
      });
    };
  }, [modalState]);
}

export default useForms;