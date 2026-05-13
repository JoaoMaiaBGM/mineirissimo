import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { A11y, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import ornamentalDivider from './_assets/ornamental-divider.png';
import { NumberCards, WhoWeAre } from './_components';

import 'swiper/css';
import 'swiper/css/pagination';

import styles from './about.module.scss';

export function About() {
  const swiperRef = useRef(null);
  const [navDisabled, setNavDisabled] = useState({ prev: true, next: true });

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
  }, [syncNav]);

  return (
    <section className="section-p container flex flex-col items-center justify-center" id="sobre">
      <div className="w-full md:w-2/3 lg:w-2/6 mb-12 lg:mb-6">
        <h2 className="h1 text-primary text-center">Sobre nós</h2>
        <Image
          src={ornamentalDivider}
          alt="Divisor ornamental"
          className="w-full h-20 object-cover"
          width={2000}
          height={2000}
        />
      </div>

      <div className={`container max-w-xl ${styles.carousel}`}>
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
            slidesPerView={1}
            spaceBetween={20}
            watchOverflow
            onSlideChange={syncNav}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              syncNav(swiper);
            }}
          >
            <SwiperSlide>
              <div className="w-full flex flex-col items-center justify-start gap-4 lg:justify-center">
                <h2 className="h2 text-primary text-center mb-3">
                  Entenda quem somos e porque existimos
                </h2>

                <WhoWeAre />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-full grid grid-cols-1 items-center justify-start gap-4 lg:grid-cols-2 lg:justify-center">
                <h2 className="h2 text-primary col-span-1 text-center mb-3 lg:col-span-2">
                  Números que contam nossa história
                </h2>
                <NumberCards />
              </div>
            </SwiperSlide>
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
    </section>
  );
}
