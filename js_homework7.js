//1.
var regex = /^[^Aa]{6,}$/;

// //2.
var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru"
    },
];
var emailRegex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@(gmail\.com|yahoo\.com)$/;
var goodEmails = arr.filter(function (obj) {
    return emailRegex.test(obj.email);
});
console.log(goodEmails)