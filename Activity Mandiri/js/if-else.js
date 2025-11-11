function fn_ValForm() {
    var sMsg = "";
    var sEmail = document.getElementById("email").value;
    var regexEmail = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/i;

    if(sEmail == ""){
        sMsg += "\n Anda belum mengisikan email";
    }else if(!regexEmail.test(sEmail)){
        sMsg += "\n Format email tidak valid";
    }
}