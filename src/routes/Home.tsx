import ToolLogo from '../components/ToolLogo'
import './home.css'

import unity_logo from '../assets/logos/unity_logo.svg';

function Home() {
  document.title = "Home"

  return (
    <>
      <div className="front-page">
        <h1>Hello!</h1>

        <p>Visit my <a href="https://slimer37.itch.io/">Itch Page</a> for all my Game Jam submissions.</p>

        <h3>Tools I use:</h3>

        <ul className="tool-list">
          <ToolLogo logo={unity_logo} label="Unity (since 2019)" link="https://unity.com/" />
          <ToolLogo logo="https://resources.jetbrains.com/storage/products/company/brand/logos/Rider_icon.svg" label="Jetbrains Rider for Unity and other C# development" link="https://www.jetbrains.com/rider/" />
          <ToolLogo logo="https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg" label="Blender for 3D models" link="https://www.blender.org/" />
          <ToolLogo logo="https://upload.wikimedia.org/wikipedia/commons/c/cf/Affinity_%28App%29_Logo.svg" label="Affinity for icons, logos, and some texturing" link="https://www.affinity.studio/" />
          <ToolLogo logo="https://upload.wikimedia.org/wikipedia/commons/6/69/Logo_Aseprite.svg" label="Aseprite for pixel art" link="https://www.aseprite.org/" />
          <ToolLogo logo="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" label="VSCode to edit blog posts, websites, Python, or for simpler projects" link="https://code.visualstudio.com/" />
          <ToolLogo logo="https://upload.wikimedia.org/wikipedia/commons/2/20/Visual_Studio_Icon_2026.svg" label="Visual Studio for C++" link="https://visualstudio.microsoft.com/" />
        </ul>
      </div >
      <br />
      <br />
      <br />
      <div style={{ textAlign: 'center' }}>
        <a href='https://github.com/slimer37/slimer37.github.io' style={{ textDecoration: "none" }}><code>this is a react site<br />hosted on GitHub</code></a>
      </div>
    </>
  )
}

export default Home;