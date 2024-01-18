import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Text = styled.p`
  font-size: 0.8rem;
`

export const Title = styled.h1`
  font-size: 3rem;
`

export const Cards = styled.div`
  display: flex;
  gap: 5rem;
  justify-content: center;
`

export const Card = styled.div`
  display: flex;
  width: 27.9375rem;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid var(--g-colorGray500);
`

export const CardImageContainer = styled.div`
  width: 100%;
  height: 15rem;
  background: linear-gradient(
    120deg,
    var(--color-g-aquamarine),
    var(--color-g-apricot)
  );
`

export const CardImage = styled.img`
  width: 100%;
  height: 15rem;
  object-fit: cover;
`

export const CardTitle = styled.h3``

export const CardDescription = styled.p``

export const CardStars = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const Stars = styled.img``
