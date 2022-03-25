import { useState, useRef, useEffect } from 'react'

function useNearScreen( once=true ){
    const [show, setShow] = useState<boolean>(false)
    const refContainer = useRef(null)
    
    useEffect(() => {
        const onChange = (entries: IntersectionObserverEntry[]) => {
            if(entries[0].isIntersecting) {
                setShow(true)

                once && observer.disconnect()
            } else {
                !once && setShow(false)
            }
        }

        const observer = new IntersectionObserver(onChange, {
            rootMargin: '0px',
            threshold: 1
        })
        
        if(refContainer.current !== null){
            observer.observe(refContainer.current)
        }

        return () => observer.disconnect()
    })


    return { isNearScreen: show, refTarget: refContainer }
}

export default useNearScreen