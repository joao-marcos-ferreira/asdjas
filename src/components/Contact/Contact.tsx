import {
  Card,
  CardDescription,
  CardImage,
  CardTitle,
  Cards,
  Container,
  Text,
  Title,
} from "./style"

const cardsContent = [
  {
    image: "./messages.svg",
    title: "Answer questions",
    description:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum. ",
  },
  {
    image: "./sms-tracking.svg",
    title: "Select a quote",
    description:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum. ",
  },
  {
    image: "./edit-2.svg",
    title: "Get registered",
    description:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum. ",
  },
]

const Contact = () => {
  return (
    <Container>
      <Text>Three steps. Three minutes.</Text>
      <Title>Everything should be this easy.</Title>
      <Cards>
        {cardsContent.map((card, index) => (
          <Card key={index}>
            <CardImage src={card.image} />
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
          </Card>
        ))}
      </Cards>
    </Container>
  )
}

export default Contact
