import React from 'react'
import { GameObject } from '../../hooks/useGame'
import { Card, CardBody, Heading, Image } from '@chakra-ui/react'

interface Props {
    game: GameObject
}
const GameCard = ({game}:Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
    <Image src={game.background_image}/>
    <CardBody>
        <Heading>{game.name}</Heading>
    </CardBody>
    </Card>

  )
}

export default GameCard
