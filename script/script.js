let inputEmail = document.querySelector("#username")

let inputPassword = document.querySelector("#password")

let modal = document.querySelector(".modal")


function DataValidation(){
    let enterEmailValue = inputEmail.value
    let enterPasswordValue = inputPassword.value

    if(enterEmailValue.length < 12 || enterPasswordValue.length < 8 ){
      modal.innerHTML = "لطفا اظلاعات را به درستی وارد نمایید"
        modal.style.backgroundColor = "grey"
        modal.style.display = "inline"

    } else{
        modal.style.backgroundColor = "green"
        modal.innerHTML = "لاگین با موفقیت انجام شد"
        modal.style.display = "inline"
   }
   
   setTimeout(function(){
    modal.style.display = "none"
},3000)

}