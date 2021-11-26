import './navbar.css'
import { Search, Person, Chat, Notifications, Settings, ExitToApp } from '@material-ui/icons'
// , LoginIcon, ExitToAppIcon, AddBoxIcon, SettingsApplicationsIcon
export default function Navbar() {
  const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER

  return (

    <div className="navbarContainer">
      <div className="navbarLogo">
        <div className="logo">Bored?</div>
      </div>

      <div className="navbarSearch">
        <input placeholder="Search people..." className="searchInput"/>
        <Search className="searchIcon"/>
      </div>

      <div className="navbarPages">
        Meow
        
      </div>


      <div className="navbarIcons">
        <div className="navbarProfile">
          <Person/>
        </div>

        <div className="navbarNotificaiton">
          <div className=" iconBadge"></div>
          <Notifications/>
        </div>

        <div className="navbarChat">
          <div className=" iconBadge"></div>
          <Chat/>
        </div>
      </div>

      <div className="navbarButtons">
        <Settings/>
        <ExitToApp/>
      </div>

    </div>
  )
}
