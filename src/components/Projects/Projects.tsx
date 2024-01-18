import {
  Card,
  CardDescription,
  CardImage,
  CardImageContainer,
  CardStars,
  CardTitle,
  Cards,
  Container,
  Stars,
  Text,
  Title,
} from "./style"

const cardsContent = [
  {
    image: "./3d-rendering-house-model (1) 1.png",
    title: "Sobha Hearland II Villas",
    description:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum. ",
    stars: 4.83,
  },
  {
    image: "./3d-rendering-house-model (3) 1.png",
    title: "Sobha Hearland II Villas",
    description:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum. ",
    stars: 4.83,
  },
  {
    image: "./3d-view-house-model 1.png",
    title: "Sobha Hearland II Villas",
    description:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum. ",
    stars: 4.83,
  },
]

const Projects = () => {
  return (
    <Container>
      <Text>Best Project of the Years</Text>
      <Title>Our recent projects</Title>

      <Cards>
        {cardsContent.map((card, index) => (
          <Card key={index}>
            <CardImageContainer />
            <CardImage src={card.image} />
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
            <CardStars>
              <Stars src="./Stars.svg" />
              <Text>{card.stars}</Text>
            </CardStars>
          </Card>
        ))}
      </Cards>
    </Container>
  )
}

export default Projects
