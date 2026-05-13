import { useCallback, useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import { A11y, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { testimonialsData } from 'database/testimonials';

import 'swiper/css';
import 'swiper/css/pagination';

import styles from './testimonialsCards.module.scss';

export function TestimonialsCards() {
  const swiperRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(null);
  const [navDisabled, setNavDisabled] = useState({ prev: true, next: true });

  const slidesPerViewConfig = (width) => {
    if (width > 1024) {
      return 3;
    }
    if (width > 480) {
      return 2;
    }
    return 1;
  };

  useEffect(() => {
    const updateWindowWidth = () => setWindowWidth(window.innerWidth);
    updateWindowWidth();
    window.addEventListener('resize', updateWindowWidth);
    return () => window.removeEventListener('resize', updateWindowWidth);
  }, []);

  const slidesPerView =
    windowWidth == null ? slidesPerViewConfig(0) : slidesPerViewConfig(windowWidth);

  const syncNav = useCallback((swiper) => {
    if (!swiper) {
      return;
    }
    setNavDisabled({
      prev: swiper.isBeginning,
      next: swiper.isEnd,
    });
  }, []);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (swiper) {
      swiper.update();
      syncNav(swiper);
    }
  }, [slidesPerView, syncNav]);

  return (
    <div className={`container ${styles.carousel}`}>
      <button
        aria-label="Previous testimonial"
        className={styles.control}
        disabled={navDisabled.prev}
        type="button"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <FaChevronLeft aria-hidden className="size-6" />
      </button>

      <div className={styles.swiperCol}>
        <Swiper
          a11y={{ enabled: true }}
          className={styles.swiper}
          modules={[Pagination, A11y]}
          pagination={{ clickable: true }}
          slidesPerView={slidesPerView}
          spaceBetween={20}
          watchOverflow
          onSlideChange={syncNav}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            syncNav(swiper);
          }}
        >
          {testimonialsData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <blockquote className="flex h-full min-h-[280px] flex-col rounded-[18px] bg-mine-white p-8 shadow-[0px_0px_12px_var(--mine-shadow)] sm:min-h-[300px] sm:p-9 md:p-10">
                <FaQuoteLeft
                  aria-hidden
                  className="mb-5 shrink-0 text-3xl text-primary sm:text-4xl"
                />
                <p className="p-medium mb-8 flex-1 leading-relaxed text-mine-gray1-150">
                  {testimonial.message}
                </p>
                <footer className="shrink-0">
                  <cite className="p-small-bold block not-italic text-primary">
                    {testimonial.name}
                  </cite>
                </footer>
              </blockquote>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button
        aria-label="Next testimonial"
        className={styles.control}
        disabled={navDisabled.next}
        type="button"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <FaChevronRight aria-hidden className="size-6" />
      </button>
    </div>
  );
}
