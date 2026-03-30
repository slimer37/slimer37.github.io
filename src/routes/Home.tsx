import ToolLogo from '../components/ToolLogo'
import './home.css'

import unityLogo from '../assets/logos/unity_logo.svg';
import { useState } from 'react';

function Home() {
  document.title = "Home"

  const toolInfos = [
    {
      label: "Unity",
      desc: "creating numerous 48/72-hour Game Jam projects and prototypes",
      logo: unityLogo,
      link: "https://unity.com/"
    },
    {
      label: "Jetbrains Rider",
      desc: "used with Unity and other C# development",
      logo: "https://resources.jetbrains.com/storage/products/company/brand/logos/Rider_icon.svg",
      link: "https://www.jetbrains.com/rider/"
    },
    {
      label: "Blender",
      desc: "making 3D game models and character animation",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg",
      link: "https://www.blender.org/"
    },
    {
      label: "Affinity",
      desc: "designing icons, logos, and some texturing",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Affinity_%28App%29_Logo.svg",
      link: "https://www.affinity.studio/"
    },
    {
      label: "Aseprite",
      desc: "drawing and editing pixel art or retro 3D textures",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Logo_Aseprite.svg",
      link: "https://www.aseprite.org/"
    },
    {
      label: "VSCode",
      desc: "this website and others, any Python or C development, or any small-scope projects",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
      link: "https://code.visualstudio.com/"
    },
    {
      label: "Visual Studio",
      desc: "for projects using C++ or WPF",
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
        <div className="tool-section">
          <div className="tool-list">
            {toolInfos.map((tool, index) => (
              <ToolLogo logo={tool.logo} label={tool.label} link={tool.link} selected={selectedIndex == index} onHover={() => setSelectedIndex(index)} onExitHover={resetSelectedIndex} />
            ))}
          </div>

          <div className="tool-info">
            {toolInfos.map((tool, index) => (<span className={'info-line' + (selectedIndex == index ? ' selected' : '')} onMouseEnter={() => setSelectedIndex(index)} onMouseLeave={resetSelectedIndex}>
              <p>{tool.label}</p>
              <span className='info-line-sep' />
            </span>
            ))}
            <span style={{height: "30pt"}} className={'info-line' + (selectedIndex == -1 ? '' : ' selected')}>
              <p>{(selectedIndex == -1 ? '' : '> ' + toolInfos[selectedIndex].desc)}</p>
            </span>
          </div>
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