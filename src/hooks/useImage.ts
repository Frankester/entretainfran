import { getImageResource } from 'services/themoviedb'
import { GeneralDetails } from 'types'

type HandleImageHookProps = {
    trending?: GeneralDetails,
    poster_path?:string | null,
    backdrop_path?:string|null,
    weigth?: number,
    original?: boolean
}

function useImage(){

	const handleGetImage = (props: HandleImageHookProps) => {
		const { trending, backdrop_path, weigth, original=false } = props

		const bannerPath = trending?.backdrop_path ?? trending?.poster_path ?? backdrop_path ?? ''
		const weigthImage = weigth ?? 300

		if(bannerPath === '') return ''

		return  getImageResource(bannerPath, weigthImage, original)
	}

	return {
		handleGetImage
	}
}

export default useImage