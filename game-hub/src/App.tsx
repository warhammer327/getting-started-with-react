import { Grid, GridItem, Show } from "@chakra-ui/react"
import Navbar from "./assets/components/Navbar"

function App() {
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}>
      <GridItem area='nav'>
        <Navbar></Navbar>
      </GridItem>
      <Show above="lg">
        <GridItem area='aside' bg='red'>aside</GridItem>
      </Show>

      <GridItem area='main' bg='green'>main</GridItem>
    </Grid>
  )
}

export default App
