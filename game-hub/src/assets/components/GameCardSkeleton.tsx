import { Card, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const GameCardSkeleton = () => {
  return (
    <Card width="250px">
        <Skeleton height="200px">
            <SkeletonText></SkeletonText>
        </Skeleton>
    </Card>
  )
}

export default GameCardSkeleton
