interface Employee {
    id: number;
    nameInput: string;
    registrationno: string;
    qualification: string;
    cnic: string;
    experience: string;
    // gender: string;
}
let workers: Array<Employee> = [];
const addfunction = () => {
    const Employeeobject: Employee = {
        id: 0,
        nameInput: ((document.getElementById('nameInput') as HTMLInputElement).value),
        registrationno: ((document.getElementById('registrationno') as HTMLInputElement).value),
        qualification: ((document.getElementById('qualification') as HTMLInputElement).value),
        cnic: ((document.getElementById('cnic') as HTMLInputElement).value),
        experience: ((document.getElementById('experience') as HTMLInputElement).value),
        //       gender: ((document.getElementById('gender') as HTMLSelectElement).value)
    }
    //console.log(Employeeobject);

    const validationResult = validateForm();
    if (validationResult == true) {
        Employeeobject.id = Math.floor(Math.random() * 100)
        workers.unshift(Employeeobject);
        console.log(workers);
        clearField();
    }
}
const editfunction = () => {
    const editit = ((document.getElementById('edited') as HTMLInputElement).value);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const searchrecord: Employee = workers?.find((obj: Employee) => obj.registrationno == parseInt(editit));
    if (((document.getElementById('edited') as HTMLInputElement).value) == '') {
        ((document.getElementById('edit-error') as HTMLSpanElement).style.display) = 'block';
        ((document.getElementById('edit-error') as HTMLSpanElement).style.color) = 'red';
    }
    else if (searchrecord != undefined) {
        ((document.getElementById('id') as HTMLInputElement).value) = searchrecord.id.toString();
        ((document.getElementById('nameInput') as HTMLInputElement).value) = searchrecord.nameInput;
        ((document.getElementById('registrationno') as HTMLInputElement).value) = searchrecord.registrationno;
        ((document.getElementById('qualification') as HTMLInputElement).value) = searchrecord.qualification;
        ((document.getElementById('cnic') as HTMLInputElement).value) = searchrecord.cnic;
        ((document.getElementById('experience') as HTMLInputElement).value) = searchrecord.experience;
        ((document.getElementById('registrationno') as HTMLInputElement).disabled) = true;
        disableAdd();
    }
    else if ((((document.getElementById('edited') as HTMLInputElement).value) == undefined || (((document.getElementById('edited') as HTMLInputElement).value) != ''))) {
        ((document.getElementById('edit-error') as HTMLSpanElement).style.display) = 'none';

        alert('no record match');


    } ((document.getElementById('edited') as HTMLInputElement).value) = '';

}
const update = () => {
    const Employeeobject: Employee = {
        id: parseInt((document.getElementById('id') as HTMLInputElement).value),
        nameInput: ((document.getElementById('nameInput') as HTMLInputElement).value),
        registrationno: ((document.getElementById('registrationno') as HTMLInputElement).value),
        qualification: ((document.getElementById('qualification') as HTMLInputElement).value),
        cnic: ((document.getElementById('cnic') as HTMLInputElement).value),
        experience: ((document.getElementById('experience') as HTMLInputElement).value),
        //  gender: ((document.getElementById('gender') as HTMLSelectElement).value)

    }
    debugger
    const tobeupdate = ((document.getElementById('registrationno') as HTMLInputElement).value);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const index: number = workers?.findIndex((obj1: Employee) => obj1.registrationno == parseInt(tobeupdate));

    if (index > -1) {

        const validationResult1 = validateForm();
        if (validationResult1 == true) {
            workers.splice(index, 1, Employeeobject)
            console.log(workers);
            disableup();
            ((document.getElementById('registrationno') as HTMLInputElement).disabled) = false;
            clearField()

        }
    }
    else {
        console.log('the index is not found')
    }
}
const deletefunction = () => {
    const toBedeletedId = ((document.getElementById('delete') as HTMLInputElement).value);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (toBedeletedId == '') {
        ((document.getElementById('delete-error') as HTMLSpanElement).style.display) = 'block';
        ((document.getElementById('delete-error') as HTMLSpanElement).style.color) = 'red';
    }
    else {
        (document.getElementById('delete-error') as HTMLSpanElement).style.display = 'none';

        const index1: number = workers?.findIndex((obj3: Employee) => obj3.registrationno == toBedeletedId);

        if (index1 > -1) {
            const deletedId = workers.splice(index1, 1);
            console.log(deletedId)
        }
        else {

            alert('no record match');
        }
        (document.getElementById('delete') as HTMLInputElement).value = '';

    }
}

const clearField = () => {
    // ((document.getElementById('id') as HTMLInputElement).value) = '';
    ((document.getElementById('nameInput') as HTMLInputElement).value) = '';
    ((document.getElementById('registrationno') as HTMLInputElement).value) = '';
    ((document.getElementById('qualification') as HTMLInputElement).value) = '';
    ((document.getElementById('cnic') as HTMLInputElement).value) = '';
    ((document.getElementById('experience') as HTMLInputElement).value) = '';
}

const disableAdd = () => {
    ((document.getElementById('btnup') as HTMLButtonElement).disabled) = false;
    ((document.getElementById('btnadd') as HTMLButtonElement).disabled) = true

}

const disableup = () => {

    ((document.getElementById('btnup') as HTMLButtonElement).disabled) = true;
    ((document.getElementById('btnadd') as HTMLButtonElement).disabled) = false

}

const validateForm = (): boolean => {

    if (((document.getElementById('nameInput') as HTMLInputElement).value) == '' || ((document.getElementById('nameInput') as HTMLInputElement).value) == null ||
        ((document.getElementById('cnic') as HTMLInputElement).value) == null || ((document.getElementById('cnic') as HTMLInputElement).value) == '' ||
        ((document.getElementById('registrationno') as HTMLInputElement).value) == '' || ((document.getElementById('registrationno') as HTMLInputElement).value) == null ||
        ((document.getElementById('experience') as HTMLInputElement).value) == '' || ((document.getElementById('experience') as HTMLInputElement).value) == null ||
        ((document.getElementById('qualification') as HTMLInputElement).value) == null || ((document.getElementById('qualification') as HTMLInputElement).value) == '') {
        // if (((document.getElementById('id') as HTMLInputElement).value) == null || ((document.getElementById('id') as HTMLInputElement).value) == "") {
        //     ((document.getElementById('id-error') as HTMLSpanElement).style.display) = 'block';
        //     ((document.getElementById('id-error') as HTMLSpanElement).style.color) = 'red';

        // } else {
        //     ((document.getElementById('id-error') as HTMLSpanElement).style.display) = 'none';
        // }
        if (((document.getElementById('nameInput') as HTMLInputElement).value) == null || ((document.getElementById('nameInput') as HTMLInputElement).value) == '') {
            ((document.getElementById('nameinput-error') as HTMLSpanElement).style.display) = 'block';
            ((document.getElementById('nameinput-error') as HTMLSpanElement).style.color) = 'red';

        }
        else {
            ((document.getElementById('nameinput-error') as HTMLSpanElement).style.display) = 'none';
        }
        if (((document.getElementById('registrationno') as HTMLInputElement).value) == null || ((document.getElementById('registrationno') as HTMLInputElement).value) == '') {
            ((document.getElementById('registrationno-error') as HTMLSpanElement).style.display) = 'block';
            ((document.getElementById('registrationno-error') as HTMLSpanElement).style.color) = 'red';
        }
        else {
            ((document.getElementById('registrationno-error') as HTMLSpanElement).style.display) = 'none';
        }
        if (((document.getElementById('qualification') as HTMLInputElement).value) == null || ((document.getElementById('qualification') as HTMLInputElement).value) == '') {
            ((document.getElementById('qualification-error') as HTMLSpanElement).style.display) = 'block';
            ((document.getElementById('qualification-error') as HTMLSpanElement).style.color) = 'red';

        }

        else {
            ((document.getElementById('qualification-error') as HTMLSpanElement).style.display) = 'none';
        }
        if (((document.getElementById('cnic') as HTMLInputElement).value) == null || ((document.getElementById('cnic') as HTMLInputElement).value) == '') {
            ((document.getElementById('cnic-error') as HTMLSpanElement).style.display) = 'block';
            ((document.getElementById('cnic-error') as HTMLSpanElement).style.color) = 'red';

        }
        else {
            ((document.getElementById('cnic-error') as HTMLSpanElement).style.display) = 'none';
        }

        if (((document.getElementById('experience') as HTMLInputElement).value) == null || ((document.getElementById('experience') as HTMLInputElement).value) == '') {
            ((document.getElementById('experience-error') as HTMLSpanElement).style.display) = 'block';
            ((document.getElementById('experience-error') as HTMLSpanElement).style.color) = 'red';

        }
        else {
            ((document.getElementById('experience-error') as HTMLSpanElement).style.display) = 'none';

        }
        return false;
    }
    else {
        ((document.getElementById('experience-error') as HTMLSpanElement).style.display) = 'none';
        ((document.getElementById('registrationno-error') as HTMLSpanElement).style.display) = 'none';
        // ((document.getElementById('id-error') as HTMLSpanElement).style.display) = 'none';
        ((document.getElementById('nameinput-error') as HTMLSpanElement).style.display) = 'none';
        ((document.getElementById('cnic-error') as HTMLSpanElement).style.display) = 'none';
        ((document.getElementById('qualification-error') as HTMLSpanElement).style.display) = 'none';
    }
    return true;
}