import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y } from "swiper/modules";

import { testimonialsData } from "database/testimonials";

import styles from "./testimonialsCards.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export function TestimonialsCards() {
  return (
    <Swiper
      // install Swiper modules
      className={styles.container}
      modules={[Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={2}
      pagination={{ clickable: true }}
      scrollbar={{ hide: true, enabled: false }}
    >
      {testimonialsData.map((testimonial) => (
        <SwiperSlide
          className={styles.testimonialContainer}
          key={testimonial.id}
        >
          <blockquote className={styles.card}>
            <p className={styles.paragraph}>
              <span className={styles.quoteMarks}>&ldquo;</span>
              {testimonial.message}
            </p>
            <cite className={styles.name}>{testimonial.name}</cite>
          </blockquote>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
