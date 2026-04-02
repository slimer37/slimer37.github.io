import ToolLogo from '../components/ToolLogo'
import './home.css'

import unityLogo from '../assets/logos/unity_logo.svg';
import { useState } from 'react';
import Wave from 'react-wavify';

import paintStreak from '../assets/images/paint-streak.png'
import paintStreak2 from '../assets/images/paint-streak-2.png'

function MakeWaves() {
  return <>
    <Wave fill='url(#gradient)'
      paused={false}
      style={{ position: 'absolute', left: 0, bottom: 0, height: '60%' }}
      options={{
        height: 20,
        amplitude: 100,
        speed: 0.025,
        points: 4
      }}
    >
      <defs>
        <linearGradient id="gradient" gradientTransform="rotate(90)">
          <stop offset="10%" stopColor="#3c3c3c62" />
          <stop offset="50%" stopColor="#0000" />
        </linearGradient>
      </defs>
    </Wave>
    <Wave fill='url(#gradient2)'
      paused={false}
      style={{ position: 'absolute', left: 0, bottom: 0, height: '40%' }}
      options={{
        height: 20,
        amplitude: 50,
        speed: 0.05,
        points: 4
      }}
    >
      <defs>
        <linearGradient id="gradient2" gradientTransform="rotate(90)">
          <stop offset="10%" stopColor="#3c3c3c19" />
          <stop offset="50%" stopColor="#0000" />
        </linearGradient>
      </defs>
    </Wave>
  </>
}

function Home() {
  document.title = "Home"

  const toolInfos = [
    {
      label: "Unity",
      startYear: 2019,
      desc: "creating numerous 48/72-hour Game Jam projects and prototypes",
      logo: unityLogo,
      link: "https://unity.com/"
    },
    {
      label: "Jetbrains Rider",
      startYear: 2021,
      desc: "used with Unity and other C# development",
      logo: "https://resources.jetbrains.com/storage/products/company/brand/logos/Rider_icon.svg",
      link: "https://www.jetbrains.com/rider/"
    },
    {
      label: "Blender",
      startYear: 2019,
      desc: "making 3D game models and character animation",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg",
      link: "https://www.blender.org/"
    },
    {
      label: "Affinity",
      startYear: 2021,
      desc: "designing icons, logos, and some texturing",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Affinity_%28App%29_Logo.svg",
      link: "https://www.affinity.studio/"
    },
    {
      label: "Aseprite",
      startYear: 2020,
      desc: "drawing and editing pixel art or retro 3D textures",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Logo_Aseprite.svg",
      link: "https://www.aseprite.org/"
    },
    {
      label: "VSCode",
      startYear: 2019,
      desc: "this website and others, any Python or C development, or any small-scope projects",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
      link: "https://code.visualstudio.com/"
    },
    {
      label: "Visual Studio",
      startYear: 2019,
      desc: "for projects using C++ or WPF",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Visual_Studio_Icon_2026.svg",
      link: "https://visualstudio.microsoft.com/"
    }
  ];

  const currYear = new Date().getFullYear();
  toolInfos.sort((a, b) => a.startYear - b.startYear);

  const defaultIndex = -1;
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);
  const resetSelectedIndex = () => setSelectedIndex(defaultIndex);

  return (
    <>
      <div className="front-page">
        <h1>Hello,</h1>
        <h3>I make software that's mostly games.</h3>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p>Currently working on a Unity game set for a 2026 Steam release:</p>
          <iframe src="https://store.steampowered.com/widget/4048370/" frameBorder="0" width="646" height="190" style={{ alignSelf: 'center' }} />
        </div>
        <h2 style={{ marginBottom: 0 }}>Tools</h2>
        <hr />
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
              <p>{(currYear - tool.startYear) + ' years'}</p>
            </span>
            ))}
            <span className={'info-line desc-line' + (selectedIndex == -1 ? '' : ' selected')}>
              <p>{(selectedIndex == -1 ? '' : '> ' + toolInfos[selectedIndex].desc)}</p>
            </span>
          </div>
        </div>
      </div>

      <div style={{ height: '300px' }} />

      <img src={paintStreak} className="paint-streak" style={{ bottom: -240, right: -150 }} />
      <img src={paintStreak2} className="paint-streak" style={{ top: 0, left: -100 }} />

      <div style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, zIndex: -500, overflow: 'hidden', pointerEvents: 'none' }}>
        {MakeWaves()}
      </div>

      <p style={{ fontSize: '9pt', opacity: '50%', margin: 0, textAlign: 'right' }}>
        Paint streaks by <a href="https://unsplash.com/@luca_nicoletti?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Luca Nicoletti</a> on <a href="https://unsplash.com/photos/white-and-black-abstract-painting-O8CHmj0zgAg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </p>
    </>
  )
}

export default Home;