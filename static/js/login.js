jQuery(document).ready(function( $ ) {
    class LoginData {
        constructor() {
            this.loginbox = $(".logincontainer");
            this.maintable = $(".schedulecontainer");
            this.usernameBox = $("#uname");
            this.passwordBox = $("#pwd");
            this.failText = $("#failtext");
            this.loginButton = $("#login");
            this.maintable.hide();
            this.failText.hide();
            //Remember to replace this button with a clickable div just for better appearance
            this.loginButton.on("click", () => {
                this.tryLogIn();
            });
        }

        async tryLogIn() {
            if (this.usernameBox.val() == "" || this.passwordBox.val() == "") {
                alert("Enter the username and password to log in");
            } else {
                this.ajax_call().then((data) => {
                    var success = JSON.parse(data)
                    if (success.success == "false") {
                        this.failText.show();
                    } else {
                        //When correct login, simply hide the entire login div then change the background gradient
                        this.loginbox.hide();
                        //Show the schedule div, but do no javascript to it until mentioned in the scheduleTable object from schedule.js
                        this.maintable.show();
                        $("body").css("background", "linear-gradient(to right, #eeeeee, #cacaca)");
                        $("body").css("animation", "bodyBackground 5s linear infinite");
                        var schedule = new scheduleTable();
                    }
                }).catch((error) => {
                    console.log(error);
                });
            }
            this.usernameBox.val("")
            this.passwordBox.val("")
        }

        async ajax_call() {
            return new Promise((resolve, reject) => {
                $.ajax({
                    url: "https://flippinnublet.com/projects/homework/checkLogin.php",
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
