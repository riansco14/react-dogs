import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Feed } from '../../components/Feed'
import { UserHeader } from '../../components/UserHeader'
import { UserPhotoPost } from '../../components/UserPhotoPost'
import { UserStatistic } from '../../components/UserStatistic'

import {Container} from './styles'

export function User() {
    return (
        <Container className='container'>
            <UserHeader />
            <Routes>
                <Route path='/' element={<Feed />} />
                <Route path='/post' element={<UserPhotoPost />} />
                <Route path='/statistic' element={<UserStatistic />} />
            </Routes>
        </Container>
    )
}