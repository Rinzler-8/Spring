import React from "react";
import "./../css/Navbar.css";

function ShowProfile(props) {
  const user = false;
  return (
    <div>
      {!user ? (
        <div className="showProfile__unsignedin">
          <i className="fa-solid fa-user" />
          <span to="/login">Đăng nhập</span>
          {/* <span href={"/register"}>Đăng ký</span> */}
        </div>
      ) : (
        <div className="showProfile__signedin">
          <img src={require("../Assets/Banner/BannerIMG.png")} alt="profilePicture" />
          <span className="profile__username">Quyen Luu Van</span>
          <i class="fa-solid fa-chevron-down"></i>
        </div>
      )}
    </div>
  );
}

export default ShowProfile;
