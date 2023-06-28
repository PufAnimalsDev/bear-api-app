
import { Bears } from '../../types/Bears';
import { BearsListItem } from '../../components/BeersListItem';

import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './SwiperOnBeerPage.scss';

interface HeaderProps {
    beerList: Bears[];
}

export const SwiperOnBeerPage = ({ beerList }: HeaderProps) => {

    return (
        <>
            <div className="swiper-container">
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={20}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    breakpoints={{
                        640: {
                            width: 640,
                            slidesPerView: 2,
                        },
                        950: {
                            width: 950,
                            slidesPerView: 3,
                        },
                        1200: {
                            width: 1200,
                            slidesPerView: 4,
                        },
                    }}
                >

                    {beerList.map((value) => {
                        return (
                            <SwiperSlide key={value.id}>
                                <BearsListItem
                                    id={value.id}
                                    img={value.image_url}
                                    name={value.name}
                                    tagline={value.tagline}
                                    bearsList={beerList}
                                />
                            </SwiperSlide>
                        );
                    })}

                </Swiper></div>
        </>
    );
};