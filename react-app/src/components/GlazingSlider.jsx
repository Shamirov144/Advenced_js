import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'slick-carousel';

function GlazingSlider({ icons, activeTab, setActiveTab }) {
  const sliderRef = useRef(null);

  useEffect(() => {
    const $slider = $(sliderRef.current);
    if ($slider.length && $.fn.slick) {
      $slider.on('init afterChange', (event, slick, currentSlide) => {
        if (currentSlide !== undefined) {
          setActiveTab(currentSlide);
        }
      });
      $slider.slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          { breakpoint: 1201, settings: { slidesToShow: 4, prevArrow: '<button class="prev arrow"></button>', nextArrow: '<button class="next arrow"></button>', slidesToScroll: 1 } },
          { breakpoint: 992, settings: { slidesToShow: 3, prevArrow: '<button class="prev arrow"></button>', nextArrow: '<button class="next arrow"></button>', slidesToScroll: 2 } },
          { breakpoint: 768, settings: { slidesToShow: 2, prevArrow: '<button class="prev arrow"></button>', nextArrow: '<button class="next arrow"></button>', slidesToScroll: 2 } },
          { breakpoint: 530, settings: { slidesToShow: 1, prevArrow: '<button class="prev arrow"></button>', nextArrow: '<button class="next arrow"></button>', slidesToScroll: 1 } }
        ]
      });
    }

    return () => {
      if ($slider.length && $.fn.slick) {
        $slider.slick('unslick');
      }
    };
  }, []);

  return (
    <div className="glazing_slider" ref={sliderRef}>
      {icons.map((icon, i) => (
        <div
          key={i}
          className={`glazing_block text-center ${i === activeTab ? 'active' : ''}`}
          onClick={() => setActiveTab(i)}
        >
          <img src={icon.img} alt="#" />
          <a className={icon.className} dangerouslySetInnerHTML={{ __html: icon.text }} />
        </div>
      ))}
    </div>
  );
}

export default GlazingSlider;