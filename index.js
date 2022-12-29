var $table = $('#fresh-table')
var $alertBtn = $('#alertBtn')
var $createBtn = $('#createBtn')



window.operateEvents = {
    'click .like': function (e, value, row, index) {
        alert('You click like icon, row: ' + JSON.stringify(row))
        console.log(value, row, index)
    },
    'click .edit': function (e, value, row, index) {
        // alert('You click edit icon, row: ' + JSON.stringify(row))
        // console.log(value, row, index)
        Swal.fire({
            title: "Data Updater",
            html:
                '<div class="align-left" >' +
                '<input readonly class="form-control" id="edit_studentID" placeholder="Student_ID" value="' + row.Student_ID + '"></div>' +
                '<div class="mb-3"><label for="edit_firstname" class="form-label">First_Name</label>' +
                '<input class="form-control" id="edit_firstname" placeholder="First_Name" value="' + row.First_Name + '"></div>' +

                '<div class="mb-3"><label for="edit_lastname" class="form-label">Last_Name</label>' +
                '<input class="form-control" id="edit_lastname" placeholder="Last_Name" value="' + row.Last_Name + '"></div>' +

                '<div class="mb-3"><label for="edit_username" class="form-label">Username</label>' +
                '<input class="form-control" id="edit_username" placeholder="Username" value="' + row.Username + '"></div>' +

                '<div class="mb-3"><label for="edit_major" class="form-label">Major</label>' +
                '<input class="form-control" id="edit_major" placeholder="Major" value="' + row.Major + '"></div>' +

                '<div class="mb-3"><label for="edit_ability" class="form-label">Ability</label>' +
                '<input class="form-control" id="edit_ability" placeholder="Ability" value="' + row.Ability + '"></div>' +

                '<div class="mb-3"><label for="edit_kingdom" class="form-label">Kingdom</label>' +
                '<input class="form-control" id="edit_kingdom" placeholder="Kingdom" value="' + row.Kingdom + '"></div>' +

                '<div class="mb-3"><label for="edit_phonenumber" class="form-label">Phone_Number</label>' +
                '<input class="form-control" id="edit_phonenumber" placeholder="Phone_Number" value="' + row.Phone_Number + '"></div>' +

                '<div class="mb-3"><label for="edit_grade" class="form-label">Grade</label>' +
                '<input class="form-control" id="edit_grade" placeholder="Grade" value="' + row.Grade + '"></div>' +
                '</div>',

            focusConfirm: false,
            preConfirm: () => {
                dataUpdate(row.Student_ID);
            },
        });
    },
    'click .remove': function (e, value, row, index) {
        id = row.Student_ID
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                deleteUser(id)
                swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })
        console.log(id)

    }
}

function operateFormatter(value, row, index) {
    return [
        // '<a rel="tooltip" title="Like" class="table-action like" href="javascript:void(0)" title="Like">',
        // '<i class="fa fa-heart"></i>',
        '</a>',
        '<a rel="tooltip" title="Edit" class="table-action edit" href="javascript:void(0)" title="Edit">',
        '<i class="fa fa-edit"></i>',
        '</a>',
        '<a rel="tooltip" title="Remove" class="table-action remove" href="javascript:void(0)" title="Remove">',
        '<i class="fa fa-trash"></i>',
        '</a>'
    ].join('')
}

$(function () {
    $table.bootstrapTable({
        classes: 'table table-hover bg-dark table-striped',
        toolbar: '.toolbar',

        url: 'http://127.0.0.1:3001/getUsers',
        search: true,
        showRefresh: true,
        showToggle: true,
        showColumns: true,
        pagination: true,
        striped: true,
        sortable: true,
        pageSize: 8,
        pageList: [8, 10, 25, 50, 100],

        formatShowingRows: function (pageFrom, pageTo, totalRows) {
            return ''
        },
        formatRecordsPerPage: function (pageNumber) {
            return pageNumber + ' rows visible'
        }
    })

    $alertBtn.click(function () {
        alert('You pressed on Alert')
    })

    $createBtn.click(function () {
        Swal.fire({
            title: "Data Creator",
            html:
                '<div class="align-left" >' +

                '<div class="mb-3"><label for="new_studentID" class="form-label">Student_ID</label>' +
                '<input class="form-control" id="new_studentID" placeholder="Student_ID"></div>' +

                '<div class="mb-3"><label for="new_firstname" class="form-label">First_Name</label>' +
                '<input class="form-control" id="new_firstname" placeholder="First_Name"></div>' +

                '<div class="mb-3"><label for="new_lastname" class="form-label">Last_Name</label>' +
                '<input class="form-control" id="new_lastname" placeholder="Last_Name"></div>' +

                '<div class="mb-3"><label for="new_username" class="form-label">Username</label>' +
                '<input class="form-control" id="new_username" placeholder="Username"></div>' +

                '<div class="mb-3"><label for="new_major" class="form-label">Major</label>' +
                '<input class="form-control" id="new_major" placeholder="Major"></div>' +

                '<div class="mb-3"><label for="new_ability" class="form-label">Ability</label>' +
                '<input class="form-control" id="new_ability" placeholder="Ability"></div>' +

                '<div class="mb-3"><label for="new_kingdom" class="form-label">Kingdom</label>' +
                '<input class="form-control" id="new_kingdom" placeholder="Kingdom"></div>' +

                '<div class="mb-3"><label for="new_phonenumber" class="form-label">Phone_Number</label>' +
                '<input class="form-control" id="new_phonenumber" placeholder="Phone_Number"></div>' +

                '<div class="mb-3"><label for="new_grade" class="form-label">Grade</label>' +
                '<input class="form-control" id="new_grade" placeholder="Grade"></div>' +
                '</div>',

            focusConfirm: false,
            preConfirm: () => {
                CreateMyPrince();
            },
        });
    })
})

/* ฟังก์ชันสร้าง */
function CreateMyPrince() {
    $save = true;
    if ($('#new_studentID').val().length == 0) {
        $save = false;
    } else if ($('#new_firstname').val().length == 0) {
        $save = false;
    } else if ($('#new_lastname').val().length == 0) {
        $save = false;
    } else if ($('#new_username').val().length == 0) {
        $save = false;
    } else if ($('#new_major').val().length == 0) {
        $save = false;
    } else if ($('#new_ability').val().length == 0) {
        $save = false;
    } else if ($('#new_kingdom').val().length == 0) {
        $save = false;
    } else if ($('#new_phonenumber').val().length == 0) {
        $save = false;
    } else if ($('#new_grade').val().length == 0) {
        $save = false;
    }
    if ($save) {
        let userdata = {
            "Student_ID": $("#new_studentID").val(),
            "First_Name": $("#new_firstname").val(),
            "Last_Name": $("#new_lastname").val(),
            "Username": $("#new_username").val(),
            "Major": $("#new_major").val(),
            "Ability": $("#new_ability").val(),
            "Kingdom": $("#new_kingdom").val(),
            "Phone_Number": $("#new_phonenumber").val(),
            "Grade": $("#new_grade").val(),
        }
        $.ajax({
            method: "POST",
            url: "http://localhost:3001/addNew",
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            data: userdata
        }).done(function (datas) {
            if (datas.msg == "inserted") {
                Swal.fire({
                    icon: 'success',
                    title: 'Create Success',
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!'
                })
            }
            $('#table').bootstrapTable()
        });
        location.reload();
    }
    else {
        alertMSG()
    }
}

function deleteUser(id) {
    let userdata = {
        "Student_ID": id,
    }
    $.ajax({
        method: "DELETE",
        url: "http://localhost:3001/deleteuser",
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        data: userdata
    }).done(function (datas) {
        if (datas.msg == "Deleted") {
            //alert("ลบข้อมูลเรียบร้อย");
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
            })
        }
        location.reload()
    });
}
/*Update*/
function dataUpdate(id) {
    $save = true;
    if ($('#edit_studentID').val().length == 0) {
        $save = false;
    } else if ($('#edit_firstname').val().length == 0) {
        $save = false;
    } else if ($('#edit_lastname').val().length == 0) {
        $save = false;
    } else if ($('#edit_major').val().length == 0) {
        $save = false;
    } else if ($('#edit_ability').val().length == 0) {
        $save = false;
    } else if ($('#edit_kingdom').val().length == 0) {
        $save = false;
    } else if ($('#edit_phonenumber').val().length == 0) {
        $save = false;
    } else if ($('#edit_grade').val().length == 0) {
        $save = false;
    }
    if ($save) {
        let userdata = {
            "Student_ID": $("#edit_studentID").val(),
            "First_Name": $("#edit_firstname").val(),
            "Last_Name": $("#edit_lastname").val(),
            "Username": $("#edit_username").val(),
            "Major": $("#edit_major").val(),
            "Ability": $("#edit_ability").val(),
            "Kingdom": $("#edit_kingdom").val(),
            "Phone_Number": $("#edit_phonenumber").val(),
            "Grade": $("#edit_grade").val(),
        }
        $.ajax({
            method: "PUT",
            url: "http://localhost:3001/updateuser",
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            data: userdata
        }).done(function (datas) {
            if (datas.msg == "updated") {
                Swal.fire({
                    icon: 'success',
                    title: 'Update Success',
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!'
                })
            }
        });
        location.reload()
    } else {
        alertMSG()
    }
}

function showProfile() {
    Swal.fire({
        confirmButton: false,
        customClass: 'swal-box',
        showConfirmButton: false,
        html: '<div class="card user-card-full">' +
            '<div class="row m-l-0 m-r-0">' +
            '<div class="col-sm-4 bg-c-lite-green user-profile">' +
            '<div class="card-block text-center text-white">' +
            '<div class="m-b-25">' +
            '<img class="img-radius" src="/assets/img/propic.jpg">' +
            '</div>' +
            '<h6 class="f-w-600" style="color:white;">Dechnarong Matham</h6>' +
            '<p style="color:white;">Guitar</p>' +
            ' <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>' +
            '</div>' +
            ' </div>' +
            ' <div class="col-sm-8">' +
            '<div class="card-block">' +
            '<h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>' +
            '<div class="row"  style="text-align:left;">' +
            '<div style="form-control">' +

            '<h6 class="m-b-10 f-w-600">Student ID</h6>' +
            '<h6 class="text-muted f-w-400">64105075</h6>' +

            '<h6 class="m-b-10 f-w-600">Email</h6>' +
            '<h6 class="text-muted f-w-400">dechnarong.ma@mail.wu.ac.th</h6>' +

            '<h6 class="m-b-10 f-w-600">Phone Number</h6>' +
            '<h6 class="text-muted f-w-400">0986745429</h6>' +
            '</div>' +
            '</div>' +
            '</div></div></div></div>'
    })
}

function alertMSG() {
    Swal.fire({
        icon:'error',
        title:'กรุณากรอกข้อมูลให้ครบและลองใหม่อีกครั้ง'
    }
      )
}