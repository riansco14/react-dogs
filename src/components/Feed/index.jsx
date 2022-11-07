import { useQuery } from '@tanstack/react-query'
import { FeedModal } from 'components/FeedModal'
import { FeedPhotos } from 'components/FeedPhotos'
import React, { useEffect, useRef, useState } from 'react'

import { Container } from './styles'

export function Feed({ userId }) {
    const [modalPhoto, setModalPhoto] = useState(null)
    const [pages, setPages] = useState([1])
    const infinite = useRef(true)
    const handleInfiniteEnd = () => {infinite.current = false}

    const closeModal = () => setModalPhoto(null)

    const waitChange = useRef(false)

    const changeWaitChangeToTrue = (page) => {
        if(pages[pages.length-1] === page)
            waitChange.current = false
    }

    useEffect(() => {
        function infiniteScroll() {
            if (infinite.current) {
                const scroll = window.scrollY
                const height = document.body.offsetHeight - window.innerHeight
    
                if ((scroll > height * 0.7) && !waitChange.current) {
                    waitChange.current = true
                    setPages(oldState => [...oldState, oldState.length + 1])
                }  
            }
        }

        window.addEventListener('wheel', infiniteScroll)
        window.addEventListener('scroll', infiniteScroll)

        return () => {
            window.removeEventListener('wheel', infiniteScroll)
            window.removeEventListener('scroll', infiniteScroll)
        }
    }, [])


    return (
        <Container>
            {modalPhoto && <FeedModal photo={modalPhoto} closeModal={closeModal} ></FeedModal>}
            {pages.map(page=><FeedPhotos key={page} page={page} userId={userId} setModalPhoto={setModalPhoto} handleInfiniteEnd={handleInfiniteEnd} changeWaitChangeToTrue={changeWaitChangeToTrue} />)}
            
        </Container>
    )
}