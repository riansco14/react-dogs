import React from 'react'
import { useState } from 'react';

import {Container, ImageTag, Skeleton} from './styles'

export function Image({ alt, ...props }) {
    const [skeleton, setSkeleton] = useState(true)

    function handleLoad({ target }) {
        setSkeleton(false)
        target.style.opacity = 1;
    }

    return (
        <Container>
            {skeleton && <Skeleton></Skeleton>}
            <ImageTag onLoad={handleLoad} alt={alt} {...props} />
        </Container>
    )
}