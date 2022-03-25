import { createContext, useCallback, useContext, useEffect, useState } from "react";

import { BookmarkGeneral, GeneralDetails } from "types";

type BookmarkContextProps = {
    bookmarksDetails: GeneralDetails[],
    toggleBookmark:  (bookmark :BookmarkGeneral| null) => void
}

const defaultValue = {
    bookmarksDetails:[], 
    toggleBookmark: (bookmark :BookmarkGeneral| null)=>{}
}
const BookmarkContext = createContext<BookmarkContextProps>(defaultValue)

function BookmarkProvider({ children }: { children: JSX.Element }){
    const [bookmarked, setBookMarked] =useState<BookmarkGeneral[]>([])

    const toggleBookmark = useCallback((bookmark :BookmarkGeneral | null) => {
        if(bookmark !== null){
            setBookMarked(currentBookmarks => {
                
                const bookmarkOfProps = currentBookmarks.find(
                    currentBookmarks => 
                        currentBookmarks.id === bookmark.id && 
                        currentBookmarks.media_type === bookmark.media_type
                )
                if(bookmarkOfProps !== undefined){
                    const newsBookmarks = currentBookmarks.filter(
                        prevBookmark => {
                            return prevBookmark.idUniq !== bookmarkOfProps?.idUniq
                        } 
                    )
    
                    return newsBookmarks
                }
                return [...currentBookmarks, {...bookmark}]
            })
        }
    },[])
    
    useEffect(() => {
        if(bookmarked.length !== 0){
            localStorage.setItem('bookmarks', JSON.stringify(bookmarked))
        }
    }, [bookmarked])

    useEffect(() => {
        const bookmarksSaved = localStorage.getItem('bookmarks')
        if(bookmarksSaved){
            setBookMarked(JSON.parse(bookmarksSaved))
        }
    },[])

    return(
        <BookmarkContext.Provider value={{bookmarksDetails: bookmarked, toggleBookmark}}>
            {children}
        </BookmarkContext.Provider>
    )
}

export default BookmarkProvider

function useBookmark(){
    const bookmarks = useContext(BookmarkContext)
    return bookmarks
}

export {
    useBookmark
}
