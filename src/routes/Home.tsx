import ToolLogo from '../components/ToolLogo'
import './home.css'

import unityLogo from '../assets/logos/unity_logo.svg';
import { useState } from 'react';

function Home() {
  document.title = "Home"

  const toolInfos = [
    {
      label: "Unity",
      logo: unityLogo,
      link: "https://unity.com/"
    },
    {
      label: "Jetbrains Rider for Unity and other C# development",
      logo: "https://resources.jetbrains.com/storage/products/company/brand/logos/Rider_icon.svg",
      link: "https://www.jetbrains.com/rider/"
    },
    {
      label: "Blender for 3D models",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg",
      link: "https://www.blender.org/"
    },
    {
      label: "Affinity for icons, logos, and some texturing",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Affinity_%28App%29_Logo.svg",
      link: "https://www.affinity.studio/"
    },
    {
      label: "Aseprite for pixel art",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Logo_Aseprite.svg",
      link: "https://www.aseprite.org/"
    },
    {
      label: "VSCode to edit blog posts, websites, Python, or for simpler projects",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
      link: "https://code.visualstudio.com/"
    },
    {
      label: "Visual Studio for C++",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Visual_Studio_Icon_2026.svg",
      link: "https://visualstudio.microsoft.com/"
    }
  ];

  const defaultIndex = -1;
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);
  const resetSelectedIndex = () => setSelectedIndex(defaultIndex);

  return (
    <>
      <div className="front-page">
        <h1>Hello!</h1>

        <p>Visit my <a href="https://slimer37.itch.io/">Itch Page</a> for all my Game Jam submissions.</p>

        <h3>Tools I use:</h3>

        <ul className="tool-list">
          {toolInfos.map((tool, index) => (
            <ToolLogo logo={tool.logo} label={tool.label} link={tool.link} selected={selectedIndex == index} onHover={() => setSelectedIndex(index)} onExitHover={resetSelectedIndex} />
          ))}
        </ul>

        <div className="tool-info">
          {toolInfos.map((tool, index) => (<span className={'info-line' + (selectedIndex == index ? ' selected' : '')} onMouseEnter={() => setSelectedIndex(index)} onMouseLeave={resetSelectedIndex}>
            <p>{tool.label}</p>
            <span className='info-line-sep' />
          </span>
          ))}
        </div>
      </div>

      <div style={{ height: '500px' }} />

      <div style={{ textAlign: 'center' }}>
        <a href='https://github.com/slimer37/slimer37.github.io' style={{ textDecoration: "none" }}><code>this is a react site<br />hosted on GitHub</code></a>
      </div>
    </>
  )
}

export default Home;