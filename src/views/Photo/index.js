import { useQuery } from '@tanstack/react-query'
import { PhotoContent } from 'components/FeedModal/PhotoContent'
import { Error } from 'components/Helpers/Error'
import { Loading } from 'components/Helpers/Loading'
import React from 'react'
import { useParams } from 'react-router-dom'
import { getPhoto } from 'services/request/remote'


export function Photo() {
    const { id } = useParams()
    const { isFetching, error, data } = useQuery(['getPhoto'], () => getPhoto(id),{refetchOnWindowFocus: false,})

    if (error) return <Error error={error} />
    if (isFetching) return <Loading />
    if (data)
        return (<div className='container'>
            <PhotoContent single data={data} />
        </div>
        )
    else return null
}