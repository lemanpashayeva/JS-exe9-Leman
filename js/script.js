//exe-1

function myFunction(mail){
    let index = mail.indexOf("@");
    let length = mail.slice(1, index);
    let new_mail = mail.replace(length, );
    console.log(new_mail);
}

myFunction(prompt("mail'inizi daxil edin:"))