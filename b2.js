let numb1 = Number(prompt("nhap mot so bat kỳ "));
let numb2 = Number(prompt("nhap mot so bat kỳ "));
let numb3 = Number(prompt("nhap mot so bat kỳ "));
let tb = (numb1 + numb2 + numb3) / 3;
if (tb < 5) {
    console.log("hoc sinh yeu ");
} else if (tb >= 5 && tb <= 6.4) {
    console.log("hoc sinh trung binh ");
} else if (tb >= 6.5 && tb <= 7.9) {
    console.log("hoc sinh khá ");
} else if (tb >= 8.0) {
    console.log("hoc sinh gioi ");
}