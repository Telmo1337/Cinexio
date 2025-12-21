import { Box, SimpleGrid, Image } from "@mantine/core"

import movie1 from "../../../assets/media/movie1.jpg"
import movie2 from "../../../assets/media/movie2.jpg"
import movie3 from "../../../assets/media/movie3.jpg"
import tvshow1 from "../../../assets/media/tvshow1.jpg"
import tvshow2 from "../../../assets/media/tvshow2.jpg"
import tvshow3 from "../../../assets/media/tvshow3.jpg"


const ShowMovies = () => {
    return (
        <Box w="100%" px={{ base: 20, sm: 50 }}>
            <SimpleGrid
                cols={{ base: 1, sm: 3, lg: 6 }}
                spacing={{ base: 10, sm: "md" }}
                verticalSpacing={{ base: "md", sm: "xl" }}
            >
                {[movie1, tvshow1, movie2, movie3, tvshow2, tvshow3].map(
                    (img, index) => (
                        <Box
                            key={index}
                            style={{
                                aspectRatio: "2 / 3",
                                width: "100%",
                            }}
                        >
                            <Image
                                src={img}
                                alt="movies/tvshows"
                                radius="lg"
                                h="100%"
                                w="100%"
                                fit="cover"
                            />
                        </Box>
                    )
                )}
            </SimpleGrid>
        </Box>
    )
}

export default ShowMovies