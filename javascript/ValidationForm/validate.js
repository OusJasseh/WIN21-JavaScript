const firstName = document.getElementById("firstName")
const errorfirstName = document.getElementById("errorfirstName")
const lastName = document.getElementById("lastName")
const email = document.getElementById("eMail")
const Password = document.getElementById("Pword")
const confirmPassword = document.getElementById("confirmPword")
const DateOfBirth = document.getElementById("D_O_B")
const Address = document.getElementById("address")

function validateLength(event, name){
    const error = document.getElementById(`error-${event.target.id}`)
    
    if(event.target.value === "")
        error.innerText = `Fill in your ${name}.`
    else{
            if (event.target.value.length < 2)
                error.innerText = `${name} must be atleast 2 letters!`
            else
                 error.innerText = ""

            }
    }

    firstName.addEventListener("keyup", function(event) {
        const name = "First Name"
        validateLength(event, name)
    })

    lastName.addEventListener("keyup", function (event) {
      const name = "Last Name";
      validateLength(event, name);
    });