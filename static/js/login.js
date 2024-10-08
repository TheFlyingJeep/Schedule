jQuery(document).ready(function( $ ) {
    class LoginData {
        constructor() {
            this.usernameBox = $("#uname");
            this.passwordBox = $("#pwd");
            this.failText = $("#failtext");
            this.loginButton = $("#login");
            this.failText.hide();
            this.loginButton.on("click", () => {
                this.tryLogIn();
            });
        }

        async tryLogIn() {
            if (this.usernameBox.val() == "" || this.passwordBox.val() == "") {
                alert("Enter the username and password to log in");
            } else {
                this.ajax_call().then((data) => {
                    console.log(data);
                }).catch((error) => {
                    console.log(error);
                });
            }
        }

        async ajax_call() {
            return new Promise((resolve, reject) => {
                $.ajax({
                    url: "https://flippinnublet.com/pojects/homework/checkLogin.php",
                    type: "POST",
                    data: {
                        username: this.usernameBox.val(),
                        password: this.passwordBox.val()
                    },
                    success: function (data) {
                        resolve(data);
                    },
                    failure: function (req, status, error) {
                        reject(req + " " + status + " " + error);
                    }
                })
            })
        }
    }

    var login = new LoginData()
});
