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
            customClass: 'swal-box',
            html:
                '<div class="align-left" >' +
                '<input class="form-control" id="Student_ID" placeholder="Student_ID" value="' + row.Student_ID + '"></div>' +
                '<div class="mb-3"><label for="First_Name" class="form-label">First_Name</label>' +
                '<input class="form-control" id="First_Name" placeholder="First_Name" value="' + row.First_Name + '"></div>' +

                '<div class="mb-3"><label for="Last_Name" class="form-label">Last_Name</label>' +
                '<input class="form-control" id="Last_Name" placeholder="Last_Name" value="' + row.Last_Name + '"></div>' +

                '<div class="mb-3"><label for="Username" class="form-label">Username</label>' +
                '<input class="form-control" id="Username" placeholder="Username" value="' + row.Username + '"></div>' +

                '<div class="mb-3"><label for="Major" class="form-label">Major</label>' +
                '<input class="form-control" id="Major" placeholder="Major" value="' + row.Major + '"></div>' +

                '<div class="mb-3"><label for="Ability" class="form-label">Ability</label>' +
                '<input class="form-control" id="Ability" placeholder="Ability" value="' + row.Ability + '"></div>' +

                '<div class="mb-3"><label for="Kingdom" class="form-label">Kingdom</label>' +
                '<input class="form-control" id="Kingdom" placeholder="Kingdom" value="' + row.Kingdom + '"></div>' +

                '<div class="mb-3"><label for="Phone_Number" class="form-label">Phone_Number</label>' +
                '<input class="form-control" id="Phone_Number" placeholder="Phone_Number" value="' + row.Phone_Number + '"></div>' +

                '<div class="mb-3"><label for="Grade" class="form-label">Grade</label>' +
                '<input class="form-control" id="Grade" placeholder="Grade" value="' + row.Grade + '"></div>' +
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
            customClass: 'swal-box',
            html:
                '<div class="align-left" >' +

                '<div class="mb-3"><label for="Student_ID" class="form-label">Student_ID</label>' +
                '<input class="form-control" id="Student_ID" placeholder="Student_ID"></div>' +

                '<div class="mb-3"><label for="First_Name" class="form-label">First_Name</label>' +
                '<input class="form-control" id="First_Name" placeholder="First_Name"></div>' +

                '<div class="mb-3"><label for="Last_Name" class="form-label">Last_Name</label>' +
                '<input class="form-control" id="Last_Name" placeholder="Last_Name"></div>' +

                '<div class="mb-3"><label for="Username" class="form-label">Username</label>' +
                '<input class="form-control" id="Username" placeholder="Username"></div>' +

                '<div class="mb-3"><label for="Major" class="form-label">Major</label>' +
                '<input class="form-control" id="Major" placeholder="Major"></div>' +

                '<div class="mb-3"><label for="Ability" class="form-label">Ability</label>' +
                '<input class="form-control" id="Ability" placeholder="Ability"></div>' +

                '<div class="mb-3"><label for="Kingdom" class="form-label">Kingdom</label>' +
                '<input class="form-control" id="Kingdom" placeholder="Kingdom"></div>' +

                '<div class="mb-3"><label for="Phone_Number" class="form-label">Phone_Number</label>' +
                '<input class="form-control" id="Phone_Number" placeholder="Phone_Number"></div>' +

                '<div class="mb-3"><label for="Grade" class="form-label">Grade</label>' +
                '<input class="form-control" id="Grade" placeholder="Grade"></div>' +
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
    if ($('#Student_ID').val().length == 0) {
        //alert("กรุณากรอกชื่อผู้ใช้งาน");
        $('#Student_ID').focus();
        $save = false;
    } else if ($('#First_Name').val().length == 0) {
        //alert("กรุณากรอกชื่อผู้ใช้งาน");
        $('#First_Name').focus();
        $save = false;
    } else if ($('#Last_Name').val().length == 0) {
        //alert("กรุณากรอกรหัสผ่าน");
        $('#Last_Name').focus();
        $save = false;
    } else if ($('#Username').val().length == 0) {
        //alert("กรุณากรอกชื่อ");
        $('#Username').focus();
        $save = false;
    } else if ($('#Major').val().length == 0) {
        //alert("กรุณากรอกนามสกุล");
        $('#Major').focus();
        $save = false;
    }
    else if ($('#Ability').val().length == 0) {
        //alert("กรุณากรอกนามสกุล");
        $('#Ability').focus();
        $save = false;
    } else if ($('#Kingdom').val().length == 0) {
        //alert("กรุณากรอกนามสกุล");
        $('#Kingdom').focus();
        $save = false;
    } else if ($('#Phone_Number').val().length == 0) {
        //alert("กรุณากรอกนามสกุล");
        $('#Phone_Number').focus();
        $save = false;
    } else if ($('#Grade').val().length == 0) {
        //alert("กรุณากรอกนามสกุล");
        $('#Grade').focus();
        $save = false;
    }
    if ($save) {
        let userdata = {
            "Student_ID": $("#Student_ID").val(),
            "First_Name": $("#First_Name").val(),
            "Last_Name": $("#Last_Name").val(),
            "Username": $("#Username").val(),
            "Major": $("#Major").val(),
            "Ability": $("#Ability").val(),
            "Kingdom": $("#Kingdom").val(),
            "Phone_Number": $("#Phone_Number").val(),
            "Grade": $("#Grade").val(),
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
        //getUserData();
    });
}
/*Update*/
function dataUpdate(id) {
    $save = true;
    if ($('#First_Name').val().length == 0) {
        //alert("กรุณากรอกชื่อผู้ใช้งาน");
        $('#First_Name').focus();
        $save = false;
    } else if ($('#Last_Name').val().length == 0) {
        //alert("กรุณากรอกรหัสผ่าน");
        $('#Last_Name').focus();
        $save = false;
    } else if ($('#Username').val().length == 0) {
        //alert("กรุณากรอกชื่อ");
        $('#Username').focus();
        $save = false;
    } else if ($('#Major').val().length == 0) {
        //alert("กรุณากรอกนามสกุล");
        $('#Major').focus();
        $save = false;
    }
    else if ($('#Ability').val().length == 0) {
        //alert("กรุณากรอกนามสกุล");
        $('#Ability').focus();
        $save = false;
    } else if ($('#Kingdom').val().length == 0) {
        //alert("กรุณากรอกนามสกุล");
        $('#Kingdom').focus();
        $save = false;
    } else if ($('#Phone_Number').val().length == 0) {
        //alert("กรุณากรอกนามสกุล");
        $('#Phone_Number').focus();
        $save = false;
    } else if ($('#Grade').val().length == 0) {
        //alert("กรุณากรอกนามสกุล");
        $('#Grade').focus();
        $save = false;
    }
    if ($save) {

        let userdata = {
            "Student_ID": $("#Student_ID").val(),
            "First_Name": $("#First_Name").val(),
            "Last_Name": $("#Last_Name").val(),
            "Username": $("#Username").val(),
            "Major": $("#Major").val(),
            "Ability": $("#Ability").val(),
            "Kingdom": $("#Kingdom").val(),
            "Phone_Number": $("#Phone_Number").val(),
            "Grade": $("#Grade").val(),
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
            //getUserData();
        });
    }
}