import "./sidebar.css";

export default function Sidebar() {
  const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER

  return (
    <div className="sidebarContainer">
      <ul className="sidebarFriendList">
        {/* {Users.map((following) => (
          <CloseFriend key={following.id} user={following} />
        ))} */}
      </ul>
    </div>
  );
}