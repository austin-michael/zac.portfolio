
const About = () => {
  return (
    <div className="about-container">

      <div className="about-description">
        <div className="about-blurb">
          <h1>Hey, I'm</h1>
          <h1>Zac.</h1>
          <p className="bold-text">As a trained architect and designer, I’ve been able to explore various scales including buildings, products, wearables, and objects.</p>
          <p>I lived in the Mountain West before it was cool, and while everyone started moving there — I did the opposite and moved to Los Angeles.</p>
        </div>
      </div>

      <div className="img-container">
        <img src="../imgs/me.jpg" alt="ME" />
      </div>

      <div className="education-header">
        <h1>Where I was</h1>
        <h1>educated.</h1>
      </div>

      <div className="education-container">
        <div className="school">
          <ul>
            <li className="bold-text">SCI-Arc (Southern California Institute of Architecture)</li>
            <li>Master of Architecture (M.Arch1) ‘21</li>
          </ul>
        </div>
        <div className="school">
          <ul>
            <li className="bold-text">University of Utah</li>
            <li>Honors Bachelor of Science, Architectural Studies ‘18</li>
          </ul>
        </div>
      </div>

      <div className="work-header">
        <h1>...and where</h1>
        <h1>I’ve worked.</h1>
      </div>

      <div className="work-container">
        <div className="job">
          <ul>
            <li className="bold-text">SCI-Arc (Southern California Institute of Architecture)</li>
            <li>Assistant Teacher</li>
            <li className="italic-text">Jan. 2022 - Present </li>
          </ul>
        </div>
        <div className="job">
          <ul>
            <li className="bold-text">Office-DFK </li>
            <li>Freelance</li>
            <li className="italic-text">Dec. 2021 - Present</li>
            <li>Architecture + Design, Intern</li>
            <li className="italic-text">Jun. 2020 - Oct. 2021</li>
          </ul>
        </div>
        <div className="job">
          <ul>
            <li className="bold-text">Gensler</li>
            <li>Architectural Intern</li>
            <li className="italic-text">Jun. 2019 - Aug. 2019</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About;