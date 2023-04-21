import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`

const StarIcon = styled.img`
  width: 16px;
  height: 16px;
  padding: 2px;
`

const OrangeStar = styled(StarIcon)`
  filter: invert(59%) sepia(99%) saturate(911%) hue-rotate(349deg)
    brightness(104%) contrast(93%);
`

const GreyStar = styled(StarIcon)`
  filter: invert(67%) sepia(0%) saturate(35%) hue-rotate(196deg) brightness(92%)
    contrast(84%);
`

const FULL_STAR = '/assets/icons/extensions/star-full.png'
const HALF_STAR = '/assets/icons/extensions/star-half.png'
const EMPTY_STAR = '/assets/icons/extensions/star-empty.png'

export const StarRating = ({ rating }: { rating: number }) => {
  const maxStars = 5

  const fullStars = Math.floor(rating) // Get the integer value of the rating
  const halfStars = Math.ceil(rating - fullStars) // Get the number of half stars
  const emptyStars = maxStars - fullStars - halfStars // Calculate the number of empty stars

  const starList = []

  // Render full stars
  for (let i = 0; i < fullStars; i++) {
    starList.push(<OrangeStar key={i} src={FULL_STAR} alt="full-star" />)
  }

  // Render half stars
  for (let i = 0; i < halfStars; i++) {
    starList.push(
      <OrangeStar key={fullStars + i} src={HALF_STAR} alt="half-star" />
    )
  }

  // Render empty stars
  for (let i = 0; i < emptyStars; i++) {
    starList.push(
      <GreyStar
        key={fullStars + halfStars + i}
        src={EMPTY_STAR}
        alt="empty-star"
      />
    )
  }

  return <Container className="StarRating">{starList}</Container>
}
