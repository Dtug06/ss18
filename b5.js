let year = Number(prompt("nhap nam"));
if (year % 4 == 0 && year % 100 == 0 || year % 400 == 0) {
    console.log("Là một nhuận");
} else {
    console.log("không phải là một năm nhuận");
}