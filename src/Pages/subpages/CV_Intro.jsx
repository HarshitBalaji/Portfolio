// Intro section for the about page.
import ProfilePicture from '../../assets/profilepic.jpg';
import { usePortfolio } from '../../context/usePortfolio';

function CV_Intro() {
  const { content } = usePortfolio();
  const { introTags, profile } = content;

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
          {introTags.map((tag) => (
            <span className="tag" key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CV_Intro;
