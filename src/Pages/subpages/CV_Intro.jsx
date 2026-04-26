// Intro section for the about page.
import ProfilePicture from '../../assets/profilepic.jpg';
import { profile } from '../../data/portfolio';

function CV_Intro() {
  return (
    <section id="cv-content" className="intro-layout">
      <div className="intro-image-wrap">
        <img src={ProfilePicture} alt="Profile" className="profile-image" />
      </div>

      <div className="intro-copy">
        <span className="eyebrow">Profile</span>
        <h1>{profile.fullName}</h1>
        {/* Main intro text is sourced from the shared profile object. */}
        <p>{profile.intro}</p>
        <p>{profile.currentFocus}</p>
        <div className="tag-row">
          <span className="tag">React</span>
          <span className="tag">FastAPI</span>
          <span className="tag">Automation</span>
          <span className="tag">Robotics</span>
          <span className="tag">Azure</span>
        </div>
      </div>
    </section>
  )
}

export default CV_Intro;
