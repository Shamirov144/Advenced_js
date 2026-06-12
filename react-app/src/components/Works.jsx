import React, { useEffect } from 'react';

const workImages = [
  { src: '/src/assets/img/our_works/1.png', big: '/src/assets/img/our_works/big_img/1.png', delay: '0s' },
  { src: '/src/assets/img/our_works/2.png', big: '/src/assets/img/our_works/big_img/2.png', delay: '0.1s' },
  { src: '/src/assets/img/our_works/3.png', big: '/src/assets/img/our_works/big_img/3.png', delay: '0.2s' },
  { src: '/src/assets/img/our_works/4.png', big: '/src/assets/img/our_works/big_img/4.png', delay: '0.3s' },
  { src: '/src/assets/img/our_works/5.png', big: '/src/assets/img/our_works/big_img/5.png', delay: '0.4s' },
  { src: '/src/assets/img/our_works/6.png', big: '/src/assets/img/our_works/big_img/6.png', delay: '0.5s' },
  { src: '/src/assets/img/our_works/7.png', big: '/src/assets/img/our_works/big_img/7.png', delay: '0.6s' },
  { src: '/src/assets/img/our_works/8.png', big: '/src/assets/img/our_works/big_img/8.png', delay: '0.7s' }
];

function Works() {
  useEffect(() => {
    const imgPopup = document.createElement('div');
    const workSection = document.getElementById('popup_images');
    const bigImage = document.createElement('img');

    if (!workSection) return;

    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);
    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';
    imgPopup.appendChild(bigImage);

    const handleClick = (e) => {
      e.preventDefault();
      const target = e.target;
      if (target && target.classList.contains('preview')) {
        imgPopup.style.display = 'flex';
        const path = target.parentNode.getAttribute('href');
        bigImage.setAttribute('src', path);
      }
      if (target && target.matches('div.popup')) {
        imgPopup.style.display = 'none';
      }
    };

    workSection.addEventListener('click', handleClick);
    return () => {
      workSection.removeEventListener('click', handleClick);
      imgPopup.remove();
    };
  }, []);

  return (
    <section className="works">
      <div className="container">
        <div className="section_header">
          <h2>Наши работы</h2>
          <div className="section_header_sub"></div>
        </div>
        <div className="row" id="popup_images">
          {workImages.map((img, i) => (
            <div key={i} className="col-lg-3 col-md-4 col-sm-6 col-xs-12 text-center">
              <a href={img.big}>
                <img className="preview" src={img.src} alt="window" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Works;