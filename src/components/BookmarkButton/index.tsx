import { memo } from 'react'

import { useBookmark } from 'context/BookmarkContext'
import { BookmarkButtonStyled } from './BookmarkButton.styles'
import bookmarkOutline from 'assets/bookmark_outline.svg'
import bookmarkSolid from 'assets/bookmark_solid.svg'

type BookmarkButtonProps = {
    id?: number,
    media_type:'tv' | 'movie',
    toggleMovieTv: () => void
}

function BookmarkButton({ id, media_type, toggleMovieTv }: BookmarkButtonProps){
	const { bookmarksDetails } = useBookmark()

	const handleMark = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.stopPropagation()
		toggleMovieTv()
	}

	const isMarked = bookmarksDetails.some(
		bookmark => bookmark.id === id && bookmark.media_type === media_type
	)

	return(
		<BookmarkButtonStyled onClick={handleMark}>
			{
				isMarked
					? <img src={bookmarkSolid} alt='Bookmarked'/>
					: <img src={bookmarkOutline} alt='Bookmark'  />
			}
		</BookmarkButtonStyled>
	)
}

export default memo(BookmarkButton)