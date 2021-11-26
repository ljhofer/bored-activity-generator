import './profile-hero-view.css'

export default function ProfileHeroView() {
  const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER

  return (
    <>
      <div className="banner">
        <img className="bannerImg" src={user.banner || PublicFolder+"./default-profile"} alt="Banner"/>
      </div>
      <div className="profilePicture">
        <img className="profilePictureImg" src={user.profilePicture || PublicFolder+"./default-profile"} alt="Profile Picture"/>
      </div>
      <div className="profileInfo">
        <div className="profileName">
          <span>{user.firstName}</span>
          <span>{user.lastName}</span>
        </div>
        <div className="profileBio">{user.bio}</div>
      </div>  
    </>
  )
}