import React from "react";
import loginBtn from "../../Images/kakao_login_medium_narrow.png";
import "./index.scss";

export default function index() {
  const KAKAO_LOGIN_API_URL = "http://19ba-222-238-146-32.ngrok.io/users";
  
  const onClickLogin = () => {
    window.Kakao.Auth.login({
      success: function (authObj) {
        fetch(`${KAKAO_LOGIN_API_URL}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "authorization": authObj.access_token
          }
        })
          .then(res => res.json())
          .then(res => {
            console.log(444, res.access_token);
            localStorage.setItem("kakao_token", res.access_token);
            if (res.access_token) {
              alert("로그인 성공");
            }
          })
        },
        fail: function (err) {
          alert(JSON.stringify(err));
        }
    })
  }
  
  return (
    <div className="Login">
      <img
        onClick={onClickLogin}
        src={loginBtn} 
        alt="kakao login" 
      />
    </div>
  )
}
