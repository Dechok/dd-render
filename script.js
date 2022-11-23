const stdid=document.querySelector("#id");
const stdname=document.querySelector("#name");

// validate fields
function onFormSubmit(){
   let isStudentIdValid = checkStudentId(),
      isStudentNameValid = checkStudentName();

   let isFormValid = isStudentIdValid && isStudentNameValid;
   if(isFormValid){
   }
};

// Student ID
const isStudentIdValid = (stdid) => {
   const re = /^([SOC])+([0-9])+$/;
   return re.test(stdid);
}
function checkStudentId () {
    let valid = false;
    const min=8;
    const studentid = stdid.value.trim();
    if(!isIdRequired(studentid)){
        showError(stdid, "Student ID cannot be blank.")
    } else if(studentid.length === min){
      showError(stdid, `Student ID should be equal to ${min}`)
    } else if(!isStudentIdValid(studentid)){
      showError(stdid,`Student ID should have SOC followed by 8 digit number`)
    } else{
      showSuccess(stdid);
      valid=true;
    }
    return valid;
};
let isIdRequired = (value) => (value===""? false:true);

// Student Name
const isStudentNameValid = (stdname) => {
   const no = /^(([a-z A-Z])+)$/;
   return no.test(stdname);
 };

function checkStudentName() {
    let valid=false;
    const min = 3,
    max=25;
    const studentname = stdname.value.trim();
    if (!isRequired(studentname)) {
       showError(stdname, "Username cannot be blank.");
    } else if (!isBetween(studentname.length, min, max)) {
       showError(
          stdname,
          `Username must be between ${min} and ${max} characters.`);
    } else if (!isStudentNameValid(studentname)){
          showError(stdname, "Invalid Value! Retype")
    } else {
       showSuccess(stdname);
       valid = true;
    }
    return valid;
}

let isRequired = (value) => (value===""? false:true);

const isBetween = (length,min,max) =>
length < min || length > max ? false:true;

const showError = (input, message) => {
    const formField = input.parentElement;
  
    formField.classList.remove("success");
    formField.classList.add("error");
  
    const error = formField.querySelector("small");
    error.textContent = message;
  };
  
  const showSuccess = (input) => {
    const formField = input.parentElement;
  
    formField.classList.remove("error");
    formField.classList.add("success");
  
    formField.querySelector('small').textContent = "";
  };