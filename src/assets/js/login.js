function handleLogin() {
    var inputId = $("#recipient-name").val(); // get entered user id
    var inputPwd = $("#recipient-pwd").val(); // get entered password

    // Load user data from JSON file
    $.getJSON("../assets/json/user.json", function (data) {
        var isLoginSuccess = false;

        // Compare input values with user data
        $.each(data, function (key, value) {
            if (value.id == inputId && value.password == inputPwd) {
                isLoginSuccess = true;
                return false; // break the loop
            }
        });

        if (isLoginSuccess) {
            alert("로그인 성공!!");
            console.log("Login successful");
        } else {
            alert("로그인 실패!!");
            console.log("Login failed");
        }
    });
}