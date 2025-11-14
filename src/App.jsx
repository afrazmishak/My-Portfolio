import './App.css'

function WelcomeBanner() {
  return (
    <div className="WelcomeBannerContainer">
      <input type="image" src="./src/assets/images/Assalamu Alaikum Banner.png" alt="Assalamu Alaikum Banner" />
    </div>
  )
}

function MenuBar() {
  return (
    <>
      <ul className="HomeMenuBar">
        <li className="HomeMenuBarListItems"><a href="#" className="HomeMenuBarListItemsARef">Home</a></li>
        <li className="HomeMenuBarListItems"><a href="#" className="HomeMenuBarListItemsARef">Learn Islam</a></li>
        <li className="HomeMenuBarListItems"><a href="#" className="HomeMenuBarListItemsARef">Home</a></li>
        <li className="HomeMenuBarListItems"><a href="#" className="HomeMenuBarListItemsARef">Home</a></li>
        <li className="HomeMenuBarListItems"><a href="#" className="HomeMenuBarListItemsARef">Home</a></li>
      </ul>
    </>
  )
}

function AboutIslam() {
  return (
    <>
      <section className="AboutIslam">
        <div className="AboutIslamContainer">
          <div className="LeftSideAboutIslamContainer">
            <img src="./src/assets/images/WhatIsIslam.jpg" alt="" className="AboutIslamContainerImages" />
          </div>

          <div className="RightSideAboutIslamContainer">
            <h1 className="Heading">What Is Islam? </h1>
            <p className="Paragraph Paragraph1">Islam is a way of life that teaches peace, kindness, and purpose.</p>
            <p className="Paragraph Paragraph2">It guides a person to worship only one God, Allah, and to live with honesty, patience, and good manners.</p>
            <p className="Paragraph Paragraph3">Islam is not just a religion you practice in the mosque. It is something you carry in your heart and show through your actions.</p>
            <p className="Paragraph Paragraph4">It teaches us how to speak, how to treat others, how to control our anger, how to stay humble, and how to find peace within ourselves.</p>
            <p className="Paragraph Paragraph5">At its core, Islam means:</p>
            <ul>
              <li>Peace</li>
              <li>Submission to Allah</li>
              <li>Living with purpose</li>
            </ul>
            <p>Islam invites everyone to learn, think, ask questions, and grow.</p>
          </div>
        </div>
      </section>
    </>
  )
}

function Astagfirullah() {
  return (
    <button className="button-counter">
      <p className="line-one-arabic">أستغفر الله</p>
      <span className="line-one-english">"I ask God for forgiveness"</span>
    </button>
  )
}

function Count() {
  return (
    <p>Count</p>
  )
}

function App() {
  return (
    <>
      <WelcomeBanner />
      <AboutIslam />
    </>
  )
}

export default App
