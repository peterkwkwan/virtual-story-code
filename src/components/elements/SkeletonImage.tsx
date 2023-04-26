import React, { CSSProperties, useState } from 'react'
import styled from 'styled-components'

const Skeleton = styled.div<{ muted: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => (props.muted ? 'transparent' : '#ddd')};
  animation: skeletonPulse 1.5s infinite;
  @keyframes skeletonPulse {
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
  width?: number | string
  height?: number | string
  style?: CSSProperties
  muted?: boolean
}

const SkeletonImage: React.FC<Props> = ({
  src,
  alt,
  width,
  height,
  style,
  muted = false,
}) => {
  const [loaded, setLoaded] = useState(false)

  const handleLoad: React.ReactEventHandler<HTMLImageElement> = (e) => {
    setLoaded(true)
  }

  return (
    <div style={{ position: 'relative' }}>
      {!loaded && <Skeleton style={{ ...style }} muted={muted} />}
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
