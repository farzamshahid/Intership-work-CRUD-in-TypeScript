var workers = [];
function addfunction() {
    var Employeeobject = {
        id: 0,
        nameInput: (document.getElementById('nameInput').value),
        registrationno: (document.getElementById('registrationno').value),
        qualification: (document.getElementById('qualification').value),
        cnic: (document.getElementById('cnic').value),
        experience: (document.getElementById('experience').value)
    };
    //console.log(Employeeobject);
    var validationResult = validateForm();
    if (validationResult == true) {
        Employeeobject.id = Math.floor(Math.random() * 100);
        workers.unshift(Employeeobject);
        console.log(workers);
        clearField();
    }
}
function editfunction() {
    var editit = (document.getElementById('edited').value);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    var searchrecord = workers === null || workers === void 0 ? void 0 : workers.find(function (obj) { return obj.registrationno == parseInt(editit); });
    if ((document.getElementById('edited').value) == '') {
        (document.getElementById('edit-error').style.display) = 'block';
        (document.getElementById('edit-error').style.color) = 'red';
    }
    else if (searchrecord != undefined) {
        (document.getElementById('id').value) = searchrecord.id.toString();
        (document.getElementById('nameInput').value) = searchrecord.nameInput;
        (document.getElementById('nameInput').value) = searchrecord.nameInput;
        (document.getElementById('registrationno').value) = searchrecord.registrationno;
        (document.getElementById('qualification').value) = searchrecord.qualification;
        (document.getElementById('cnic').value) = searchrecord.cnic;
        (document.getElementById('experience').value) = searchrecord.experience;
        (document.getElementById('registrationno').disabled) = true;
        disableAdd();
    }
    else if (((document.getElementById('edited').value) == undefined || ((document.getElementById('edited').value) != ''))) {
        (document.getElementById('edit-error').style.display) = 'none';
        alert('no record match');
    }
    (document.getElementById('edited').value) = '';
}
function update() {
    var Employeeobject = {
        id: parseInt(document.getElementById('id').value),
        nameInput: (document.getElementById('nameInput').value),
        registrationno: (document.getElementById('registrationno').value),
        qualification: (document.getElementById('qualification').value),
        cnic: (document.getElementById('cnic').value),
        experience: (document.getElementById('experience').value)
    };
    debugger;
    var tobeupdate = (document.getElementById('registrationno').value);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    var index = workers === null || workers === void 0 ? void 0 : workers.findIndex(function (obj1) { return obj1.registrationno == parseInt(tobeupdate); });
    if (index > -1) {
        var validationResult1 = validateForm();
        if (validationResult1 == true) {
            workers.splice(index, 1, Employeeobject);
            console.log(workers);
            disableup();
            (document.getElementById('registrationno').disabled) = false;
            clearField();
        }
    }
    else {
        console.log('the index is not found');
    }
}
function deletefunction() {
    var toBedeletedId = (document.getElementById('delete').value);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    var index1 = workers === null || workers === void 0 ? void 0 : workers.findIndex(function (obj3) { return obj3.registrationno == parseInt(toBedeletedId); });
    if ((document.getElementById('delete').value) == '') {
        (document.getElementById('delete-error').style.display) = 'block';
        (document.getElementById('delete-error').style.color) = 'red';
    }
    else if (index1 > -1) {
        var deletedId = workers.splice(index1, 1);
        console.log(deletedId);
    }
    else if ((document.getElementById('delete').value == undefined || (document.getElementById('delete').value) != '')) {
        document.getElementById('delete-error').style.display = 'none';
        alert('no record match');
    }
    document.getElementById('delete').value = '';
}
function clearField() {
    // ((document.getElementById('id') as HTMLInputElement).value) = '';
    (document.getElementById('nameInput').value) = '';
    (document.getElementById('registrationno').value) = '';
    (document.getElementById('qualification').value) = '';
    (document.getElementById('cnic').value) = '';
    (document.getElementById('experience').value) = '';
}
function disableAdd() {
    (document.getElementById('btnup').disabled) = false;
    (document.getElementById('btnadd').disabled) = true;
}
function disableup() {
    (document.getElementById('btnup').disabled) = true;
    (document.getElementById('btnadd').disabled) = false;
}
function validateForm() {
    if ((document.getElementById('nameInput').value) == '' || (document.getElementById('nameInput').value) == null ||
        (document.getElementById('cnic').value) == null || (document.getElementById('cnic').value) == '' ||
        (document.getElementById('registrationno').value) == '' || (document.getElementById('registrationno').value) == null ||
        (document.getElementById('experience').value) == '' || (document.getElementById('experience').value) == null ||
        (document.getElementById('qualification').value) == null || (document.getElementById('qualification').value) == '') {
        // if (((document.getElementById('id') as HTMLInputElement).value) == null || ((document.getElementById('id') as HTMLInputElement).value) == "") {
        //     ((document.getElementById('id-error') as HTMLSpanElement).style.display) = 'block';
        //     ((document.getElementById('id-error') as HTMLSpanElement).style.color) = 'red';
        // } else {
        //     ((document.getElementById('id-error') as HTMLSpanElement).style.display) = 'none';
        // }
        if ((document.getElementById('nameInput').value) == null || (document.getElementById('nameInput').value) == '') {
            (document.getElementById('nameinput-error').style.display) = 'block';
            (document.getElementById('nameinput-error').style.color) = 'red';
        }
        else {
            (document.getElementById('nameinput-error').style.display) = 'none';
        }
        if ((document.getElementById('registrationno').value) == null || (document.getElementById('registrationno').value) == '') {
            (document.getElementById('registrationno-error').style.display) = 'block';
            (document.getElementById('registrationno-error').style.color) = 'red';
        }
        else {
            (document.getElementById('registrationno-error').style.display) = 'none';
        }
        if ((document.getElementById('qualification').value) == null || (document.getElementById('qualification').value) == '') {
            (document.getElementById('qualification-error').style.display) = 'block';
            (document.getElementById('qualification-error').style.color) = 'red';
        }
        else {
            (document.getElementById('qualification-error').style.display) = 'none';
        }
        if ((document.getElementById('cnic').value) == null || (document.getElementById('cnic').value) == '') {
            (document.getElementById('cnic-error').style.display) = 'block';
            (document.getElementById('cnic-error').style.color) = 'red';
        }
        else {
            (document.getElementById('cnic-error').style.display) = 'none';
        }
        if ((document.getElementById('experience').value) == null || (document.getElementById('experience').value) == '') {
            (document.getElementById('experience-error').style.display) = 'block';
            (document.getElementById('experience-error').style.color) = 'red';
        }
        else {
            (document.getElementById('experience-error').style.display) = 'none';
        }
        return false;
    }
    else {
        (document.getElementById('experience-error').style.display) = 'none';
        (document.getElementById('registrationno-error').style.display) = 'none';
        // ((document.getElementById('id-error') as HTMLSpanElement).style.display) = 'none';
        (document.getElementById('nameinput-error').style.display) = 'none';
        (document.getElementById('cnic-error').style.display) = 'none';
        (document.getElementById('qualification-error').style.display) = 'none';
    }
    return true;
}
