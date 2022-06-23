import { useCallback, useEffect, useRef, useState } from 'react'

import searchIcon from 'assets/search_icon.svg'
import FindResults from './FindResults'
import { SearchContainer, SearchInput } from './SearchingResults.styles'
import { searchMovieTv } from 'services/themoviedb'
import { GeneralDetails, GeneralResponse } from 'types'
import { useDebounce } from 'hooks/useDebounce'

type SearchingResultsProps = {
    type: 'tv' | 'movie' | 'bookmarked' | 'all',
    children: JSX.Element[]
}



export default function SerchingResults({ type, children }: SearchingResultsProps){
	const [show, setShow] = useState<GeneralDetails[]>()
	const [totalResults, setTotalResults] = useState<number>(0)
	const [search, setSearch] = useState<string>('')
	const [page, setPage] = useState<number>(1)

	const memoWordRef = useRef<string[]>([])
	const totalPageRef = useRef<number>(0)

	const debouncedQuery = useDebounce(search, 1000)

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value)
	}
	const handlePage = useCallback(() => {
		setPage(currentPage => currentPage+1)
	},[])


	useEffect(() => {
		if(debouncedQuery === '') return

		const totalPages = totalPageRef.current
		const memoWords = memoWordRef.current

		if(totalPages !== 0 && page > totalPages &&
            memoWords[memoWords.length-1] === debouncedQuery) {
			return
		}
		if(memoWords.length !== 0 && memoWords[memoWords.length-1] !== debouncedQuery
            && page !== 1){
			setPage(1)
			return
		}

		searchMovieTv(debouncedQuery, page, type)
			.then((res: GeneralResponse) => {
				setTotalResults(res.total_results)
				totalPageRef.current = res.total_pages
				const onlyTvMoviesResults = res.results?.filter(result =>
					(result.media_type === 'tv' || result.media_type === 'movie') || true
				)

				setShow(previousResults => {
					if(res.results?.length === 0) return []

					if(previousResults && page !== 1){
						return [...previousResults,...onlyTvMoviesResults ]
					}

					return onlyTvMoviesResults
				})
			})

	}, [debouncedQuery, page, type])

	useEffect(() => {
		memoWordRef.current = debouncedQuery !== '' ? [...memoWordRef.current, debouncedQuery] : []
	}, [debouncedQuery])

	const placeHolderContent = () => {
		switch(type){
		case 'all': return 'Movies or TV Series'
		case 'movie': return 'Movies'
		case 'tv' : return 'TV Series'
		case 'bookmarked': return 'Movies or TV Series'
		default: return ' '
		}
	}

	return (
		<>
			<SearchContainer>
				<img src={searchIcon} alt='Search icon'/>
				<SearchInput
					value={search}
					type='text'
					placeholder={'Search for ' + placeHolderContent()}
					onChange={handleSearch}
					maxLength={37}
				/>
			</SearchContainer>
			{
				search !== ''
					? <FindResults
						search={search}
						show={show}
						totalResults={totalResults}
						handlePage={handlePage}
						type={type}
					/>
					: <>{children}</>
			}
		</>
	)
}