import './home.css'

function Home() {
  document.title = "Home"

  return (
    <>
      <div className="front-page">
        <h1>Hello!</h1>

        <p>Welcome to my website.</p>

        <p>Here I try to chronicle progress on my projects plus some informal things.</p>

        <p>I started coding with Unity and have been sticking with it for nearly 5 years. I've dabbled in a lot of programming languages since then: C++, Python, JavaScript (the website you're on), and Java. SQL was a short stint.</p>

        <p>You can visit my <a href="https://github.com/slimer37/">GitHub</a>, where I host basically all my game code, any tech demos, or miscellaneous projects.</p>

        <h3>My tools:</h3>

        <ul>
          <li><a href="https://unity.com/">Unity</a></li>
          <li><a href="https://www.jetbrains.com/rider/">Rider</a> for Unity and other C# development</li>
          <li><a href="https://www.blender.org/">Blender</a> to make 3D models</li>
          <li><a href="https://affinity.serif.com/en-us/">Affinity Designer</a> for icons, logos, and some texturing</li>
          <li><a href="https://www.aseprite.org/">Aseprite</a> for pixel-art</li>
          <li><a href="https://code.visualstudio.com/">VSCode</a> to edit blog posts, websites, Python, or for simpler projects.</li>
          <li><a href="https://visualstudio.microsoft.com/">Visual Studio</a> for C++
          (currently, my <a href="https://github.com/slimer37/OpenGLGame">OpenGL learning project</a>)</li>
          </ul>
      </div >
      <br />
      <br />
      <br />
      <div style={{textAlign: 'center'}}>
        <a href='https://github.com/slimer37/slimer37.github.io' style={{ textDecoration: "none" }}><code>this is a react site<br />hosted on GitHub</code></a>
      </div>
    </>
  )
}

export default Home;