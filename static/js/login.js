jQuery(document).ready(function( $ ) {
    class LoginData {
        constructor() {
            this.loginbox = $(".logincontainer");
            this.maintable = $(".schedulecontainer");
            this.assignBG = $("#newassignbackground");
            this.usernameBox = $("#uname");
            this.passwordBox = $("#pwd");
            this.failText = $("#failtext");
            this.loginButton = $("#login");
            this.assignBG.hide();
            this.maintable.hide();
            this.failText.hide();
            //Remember to replace this button with a clickable div just for better appearance
            this.loginButton.on("click", () => {
                this.tryLogIn();
            });
        }

        async tryLogIn() {
            if (this.usernameBox.val() == "" || this.passwordBox.val() == "") {
                this.failText.text("Enter the correct username and password");
                this.failText.show();
            } else {
                this.ajax_call().then((data) => {
                    var success = JSON.parse(data);
                    if (success.success == "false") {
                        this.failText.text("One or more of the fields is incorrect");
                        this.failText.show();
                    } else {
                        //When correct login, simply hide the entire login div then change the background gradient
                        this.loginbox.hide();
                        //Show the schedule div, but do no javascript to it until mentioned in the scheduleTable object from schedule.js
                        this.maintable.show();
                        $("body").css("background", "linear-gradient(to right, #eeeeee, #cacaca)");
                        $("body").css("animation", "bodyBackground 5s linear infinite");
                    }
                }).catch((error) => {
                    console.log(error);
                });
            }
            this.usernameBox.val("");
            this.passwordBox.val("");
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
                });
            });
        }
    }

    // class scheduleTable {
    //     //Add function to main button and will show and hide the div for adding details
    //     constructor() {
    //         this.schedule = $(".schedulecontainer");
    //         this.newAssignButton = $("#assignbutton");
    //         this.hw_category = $("#homework");
    //         this.exam_category = $("#exam");
    //         this.other_category = $("#other");
    //         this.newAssignmentBG = $("#newassignbackground");
    //         this.assignmentAdder = $("#newassigncontainer");
    //         this.addButton = $("#addbutton");
    //         this.cancelButton = $("#cancelbutton");
    //         this.newAssignButton.on("click", () => {
    //             this.add_new_assignment();
    //         });
    //         this.cancelButton.on("click", () => {
    //             this.cancel_new_assignment();
    //         });
    //     }

    //     add_new_assignment() {
    //         this.newAssignmentBG.fadeIn();
    //         this.addButton.hide();
    //     }

    //     cancel_new_assignment() {
    //         this.newAssignmentBG.fadeOut();
    //     }
    //     //Figure out how to dim everything else on the schedule background when the add assignment div is visible
    // }

    var login = new LoginData();
});
