import { useState } from 'react';
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import user from '../../assets/user.jpg';
import SwipeableTemporaryDrawer from '../Sidebar/Sidebar'; // Update the path as per your folder structure
import './Navbar.css';
import User from '../User/User';
function Navbar() {
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [userState, setUserState] = useState(false);

  const toggleRightSidebar = () => {
    setIsRightSidebarOpen(!isRightSidebarOpen);
  };

  const userClick =  ()=>{
     setUserState(!userState);
  }
  return (
    <>
      <nav className="navbar justify-content-between px-5 py-1">
        <a className="navbar-brand">
          <h1 style={{ color: "wheat" }}>ThynkCaffe</h1>
        </a>
        <form className="form-inline d-flex col-lg-3">
          <input
            className="form-control input col-4"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          &nbsp;
          <button
            className="btn btn-outline-light"
            style={{ width: "70px", borderColor: "white" }}
            type="submit"
          >
            Search
          </button>
        </form>
        <Stack direction="r" className="icons">
          <Avatar alt="Remy Sharp" src={user} style={{ height: "40px", width: "40px" }} onClick={userClick}  />
          <i className="fa-solid fa-bars fa-lg" onClick={toggleRightSidebar}></i>
        </Stack>
      </nav>
       {/* {useState ? <> <User Open = {userState} toogleUser={setUserState} /> </> : ''} */}
       <User Open={userState} toggleUserModal={setUserState}/>
      <SwipeableTemporaryDrawer Open={isRightSidebarOpen} toggleSidebar={toggleRightSidebar} />
    </>
  );
}

export default Navbar;
