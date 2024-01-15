import React from 'react'
import { Platform } from '../../hooks/useGame'
import { HStack, Text } from '@chakra-ui/react'

interface Props {
    platforms: Platform[]
}

const PlatformIconList = ({ platforms }: Props) => {
    return (
        <>
            <HStack margin={1}>
                {platforms.map((platform) => <Text>{platform.name}</Text>)}
            </HStack>
        </>
    )
}

export default PlatformIconList
