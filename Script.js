
type="text/javascript">
$(".textbox").keypress(function (e) {
    let myArray = [];
    for (i = 1; i < 10; i++) myArray.push(i);
    if (!(myArray.indexOf(e.which) >= 0)) e.preventDefault();
});
$("form").submit(function (e) {
    if ($(".textbox").val().length === 10) {
        alert("Submitted successfully!");
    } else {
        e.preventDefault();
        alert("Enter ten numbers");
    }
});