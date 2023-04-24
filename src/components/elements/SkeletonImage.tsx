import React, { CSSProperties, useState } from 'react'
import styled from 'styled-components'

const Skeleton = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ddd;
  animation: pulse 1.5s infinite;
  @keyframes pulse {
    0% {
      opacity: 0.5;
    }

    50% {
      opacity: 0.2;
    }

    100% {
      opacity: 0.5;
    }
  }
`

type Props = {
  src: string
  alt: string
  width?: number
  height?: number
  style?: CSSProperties
}

const SkeletonImage: React.FC<Props> = ({ src, alt, width, height, style }) => {
  const [loaded, setLoaded] = useState(false)

  const handleLoad: React.ReactEventHandler<HTMLImageElement> = (e) => {
    setLoaded(true)
  }

  return (
    <div style={{ position: 'relative' }}>
      {!loaded && <Skeleton style={{ ...style }} />}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{ opacity: loaded ? 1 : 0, ...style }}
        onLoad={handleLoad}
      />
    </div>
  )
}

export default SkeletonImage
