jQuery(document).ready(function( $ ) {
    class scheduleTable {
        //Add function to main button and will show and hide the div for adding details
        constructor() {
            this.schedule = $(".schedulecontainer");
            this.newAssignButton = $("#assignbutton");
            this.hw_category = $("#homework");
            this.exam_category = $("#exam");
            this.other_category = $("#other");
            this.newAssignmentBG = $("#newassignbackground");
            this.assignmentAdder = $("#newassigncontainer");
            this.adding_assignment = false;
            this.category = $("#category")
            this.date = $("#date");
            this.assignment = $("#assignment");
            this.description = $("#description");
            this.addButton = $("#addbutton");
            this.cancelButton = $("#cancelbutton");
            this.inputs_ready = [false, false, false];
            this.newAssignButton.on("click", () => {
                this.add_new_assignment();
            });
            this.cancelButton.on("click", () => {
                this.cancel_new_assignment();
            });
            this.addButton.on("click", () => {
                this.add_assignment();
            });
            this.date.on("input", () => {
                this.inputs_ready[0] = this.date.val() != "";
                this.update_input_status();
            });
            this.assignment.on("input", () => {
                this.inputs_ready[1] = this.assignment.val() != "";
                this.update_input_status();
            });
            this.description.on("input", () => {
                this.inputs_ready[2] = this.description.val() != "";
                this.update_input_status();
            });
        }

        add_new_assignment() {
            this.newAssignmentBG.fadeIn();
            this.addButton.hide();
            this.adding_assignment = true;
        }

        cancel_new_assignment() {
            this.newAssignmentBG.fadeOut();
            this.date.val("");
            this.assignment.val("");
            this.description.val("");
            this.inputs_ready = [false,false,false];
            this.adding_assignment = false;
        }

        update_input_status() {
            if (!this.inputs_ready.includes(false)) {
                this.addButton.show();
            } else {
                this.addButton.hide();
            }
        }

        add_assignment() {

        }

        async add_assignment_ajax() {
            return new Promise((resolve, reject) => {
                $.ajax({
                    url: "",
                    type: "POST",
                    data: {
                        category: this.category.val(),
                        date: this.date.val(),
                        assignment: this.assignment.val(),
                        description: this.description.val()
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
        //Figure out how to dim everything else on the schedule background when the add assignment div is visible
    }

    var schedule = new scheduleTable();
});