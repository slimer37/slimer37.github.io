import { ReactNode } from 'react'
import './gallery.css'

type ArtTileProps = {
  url: string,
  inner: ReactNode
}

function ArtTile(props: ArtTileProps) {
  let url = "gallery/" + props.url

  return <a href={url} className="art-tile" style={{ backgroundImage: `url(${url})` }}>
    {props.inner}
  </a>
}

type VideoTileProps = {
  url: string,
  inner: ReactNode,
  controls?: boolean
}

function VideoTile(props: VideoTileProps) {
  let url = "gallery/" + props.url

  return <a href={url} className="art-tile">
    {
      props.controls ?
        <video controls loop muted>
          <source src={url} type="video/mp4" />
        </video>
        :
        <video autoPlay loop muted>
          <source src={url} type="video/mp4" />
        </video>
    }

    <div className="over-video">{props.inner}</div>
  </a>
}

function Gallery() {
  document.title = "Gallery"

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>3D Art Gallery</h1>
      <h3 style={{ textAlign: 'center' }}>Click on any square to view the original image.</h3>
      <div className="gallery-grid">
        <VideoTile url="mobboss.mp4" inner={<>Pokémon Mafia</>} />
        <ArtTile url="boxcutter.jpg" inner={<><q>Boxcutter</q>&nbsp;Boss</>} />
        <ArtTile url="gramophone.png" inner={<>Gramophone</>} />
        <VideoTile url="spacerotate.mp4" inner={<>Personality Cores</>} />
        <ArtTile url="venom.png" inner={<>Venom</>} />
        <ArtTile url="room.jpg" inner={<>Bedroom Replica</>} />
        <VideoTile url="burgerlooped.mp4" inner={<>Burger Place</>} />
        <ArtTile url="skullresult.jpg" inner={<>Low-Poly T-Rex Skull</>} />
        <ArtTile url="gladosdone.jpg" inner={<>GLaDOS</>} />
        <ArtTile url="bigdipper.jpg" inner={<>Big Dipper</>} />
        <ArtTile url="opensign.png" inner={<>Open Sign</>} />
        <VideoTile url="motiontrack.mp4" inner={<>VFX Test</>} />
        <VideoTile url="factorio.mp4" inner={<>Factorio Inserters</>} />
        <VideoTile url="firelegwalk.mp4" inner={<>Fireleg (Click to play)</>} controls />
        <ArtTile url="buildingnight.png" inner={<>City Corner Building</>} />
        <ArtTile url="funky.jpg" inner={<q>Funky Abstract</q>} />
        <VideoTile url="ship.mp4" inner={<>Ship</>} />
        <ArtTile url="lemon.png" inner={<q>Combustible Lemon</q>} />
      </div>
    </>
  )
}

export default Gallery
