let dangNhap = prompt("nhap ten tai khoan ");
let passWord;
if (dangNhap == "ADMIN") {
    passWord = prompt("nhap password");
    if (passWord == "TheMaster") {
        console.log("Welcome to the hell bitch !");
    } else if (passWord == "") {
        console.log("Cancelled")
    } else {
        console.log("Wrong password");
    }



} else if (dangNhap == "") {
    console.log("Cancelled")
} else {
    console.log("i don't know you");
}