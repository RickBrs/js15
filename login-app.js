let login = document.getElementById("login");
let UserName = document.getElementById("Username");
let password = document.getElementById("password");
login.addEventListener("click", () => {
  
    let userList = JSON.parse(localStorage.userList);
  
    for (let i = 0; i < userList.length; i++) {
      if (
        userList[i].UserName == UserName.value && userList[i].password == password.value
        ) {
          
        window.location.href = "https://www.facebook.com/";
        return;
      }
    }
    alert("Sai tài khoản hoặc mật khẩu!")
  });