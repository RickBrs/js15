localStorage.setItem('userList',[]);
if (!localStorage.userList) {
    localStorage.userList = JSON.stringify([]) 
};
let user = document.getElementById("User");
let Name = document.getElementById("Name");
let UserName = document.getElementById("Username");
let password = document.getElementById("password");
let SignUp = document.getElementById("SignUp");
SignUp.addEventListener("click", () => {
  
  let userList = JSON.parse(localStorage.userList);   
  
  for (i=0; i < userList.length; i++) {
    
    if(userList[i].UserName == UserName.value){
      
      alert('Tài khoản đã tồn tại');
      return
    }
    
  }

  userList.push({
    
    user : user.value,
    
    Name : Name.value,
    
    UserName : UserName.value,
    
    password : password.value,
    
  })
  
  localStorage.userList = JSON.stringify(userList)
  
})