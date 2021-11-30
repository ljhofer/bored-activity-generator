
import './sidebar.css'

export default function ProfileHeroView(props) {

  return (
    <>
      <div className="banner">
        <img className="bannerImg" src={"../../../public/images/default-profile"} alt="Banner"/>
      </div>
      <div className="profilePicture">
        <img className="profilePictureImg" src={"../../../public/images/default-profile"} alt="Profile"/>
      </div>
      <div className="profileInfo">
        <div className="profileName"></div>
      </div>
      <div className="profileFeed">
        <FeedProfile/>
      </div>
    </>
  )
}
