import React from "react";

import { Modal } from "../ui";

import styles from "./shorts.module.scss";

import { SwiperRef, Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

import { FaArrowDown } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";
import { ShortItem } from "./item";
import { IoMdShareAlt } from "react-icons/io";

export const Shorts: React.FC<{ trigger: React.ReactElement }> = ({
  trigger,
}) => {
  const sliderRef = React.useRef<SwiperRef | null>(null);

  const handlePrev = React.useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = React.useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  const [open, setOpen] = React.useState(false);

  const TriggerComponent = React.cloneElement(trigger, {
    onClick: () => setOpen(true),
  });
  return (
    <React.Fragment>
      {TriggerComponent}
      <Modal open={open} onChange={setOpen} className={styles.modal}>
        <Swiper
          ref={sliderRef}
          direction="vertical"
          mousewheel
          slidesPerView={1.1}
          spaceBetween={30}
          centeredSlides={true}
          loop
          pagination={{
            clickable: true,
            bulletClass: styles.pagination,
          }}
          modules={[Mousewheel, Pagination]}
          className={styles.swiper}
        >
          <SwiperSlide className={styles.slide}>
            <ShortItem />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <ShortItem />
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <ShortItem />
          </SwiperSlide>
        </Swiper>

        <div className={styles.actions}>
          <button onClick={handlePrev}>
            <FaArrowDown />
          </button>
          <button onClick={handleNext}>
            <FaArrowDown />
          </button>
          <button>
            <AiOutlineLike fontSize={24} />
          </button>
          <button>
            <IoMdShareAlt fontSize={24} />
          </button>
        </div>
      </Modal>
    </React.Fragment>
  );
};
