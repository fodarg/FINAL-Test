jQuery.validator.setDefaults({
debug: true,
success: "valid"
});
$( "#freetrial" ).validate({
rules: {
password: "required",
password_again: {
equalTo: "#tand"
}
}
});