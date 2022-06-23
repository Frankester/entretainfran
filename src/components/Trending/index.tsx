import { memo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'

import useImage from 'hooks/useImage'
import MovieCard from 'components/MovieCard'
import { TrendingContentStyles } from './Trending.styles'
import { useGlobal } from 'context/GlobalContext'

function Trending({  type }: { type: 'tv'|'movie'|'all' }){
	const { trending } = useGlobal()
	const { handleGetImage } = useImage()

	const trendingTitle = type === 'tv' ? 'TV Series' :
		type === 'movie' ? 'Movies': 'Movies and TV Series'

	return(
		<section>
			<h3>
                Trending {trendingTitle}</h3>
			<TrendingContentStyles>
				<Swiper
					spaceBetween={10}
					slidesPerView='auto'
				>
					{
						trending?.map(trending => (
							<SwiperSlide  key={trending.id} style={{ flexShrink:'1' }}>
								<MovieCard
									src={handleGetImage(trending)}
									movieTv={trending}
									media_type={trending.media_type}
								/>
							</SwiperSlide>
						))
					}
				</Swiper>
			</TrendingContentStyles>
		</section>
	)
}

export default memo(Trending)