//theme


//mantine components
import { Card, Grid, Text, Button } from "@mantine/core"

//components
import Navbar from "../components/Navbar"
import classes from './CardHover.module.css';


const Home = () => {



  return (
    <Navbar >
      <Grid
        gutter={{ base: 'md', sm: 'xl' }}
        justify="center"
        align="center"


      >

        {[1, 2, 3].map((i) => (
          <Grid.Col span={{ base: 12, sm: 6, md: 4 }} key={i} >
            <Card withBorder className={classes.card} padding="xl"

            >
              <Text fw={500} size="3em" mt="md" className={classes.title} >
                Cinexio!
              </Text>
              <Text fw={500} size="lg" mt="md" className={classes.description} >
                Welcome to Cinexio! Your gateway to an immersive cinematic experience. Explore our vast collection of movies, read reviews, and stay updated with the latest releases. Dive into the world of cinema with Cinexio!
              </Text>
              <Text mt="xs" c="dimmed" size="sm">
                Welcome to Cinexio! Your gateway to an immersive cinematic experience. Explore our vast collection of movies, read reviews, and stay updated with the latest releases. Dive into the world of cinema with Cinexio!
              </Text>
              <Button fullWidth mx="auto" maw={240} size="md" variant="filled" color="violet.7" mt="md" radius="xl">
                Get Started
              </Button>
            </Card>
          </Grid.Col>
        ))}


      </Grid>
    </Navbar>
  )
}

export default Home
