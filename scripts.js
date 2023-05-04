window.addEventListener("load", load => {
    const form = document.getElementById('sign-up-form');

    //validate form on submition
    form.addEventListener("submit", (event) =>{
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();

            //set email error messsage accordingly
            const email = document.forms["sign-up-form"]["email"];
            const emailError = document.getElementById("email-error-message");

            if (email.value <= 0){
                emailError.innerText = "Email Address can not be empty";
                document.getElementById('email').classList.add('invalid-form')
            }
            else if (!validEmail(email.value)) {
                emailError.innerText = "Looks like this is not an email";
                emailError.classList.add('d-block')
                document.getElementById('email').classList.add('invalid-form')
            }
            //Hide/edit error message on input change
            document.getElementById('email').addEventListener('input', () => {
                if (email.value <= 0) {
                    emailError.innerText = "Email Address can not be empty";
                }
                else {
                    emailError.innerText = "Looks like this is not an email";
                }
                document.getElementById('email').classList.remove('invalid-form')
                emailError.classList.remove('d-block')
            })

            const filedLst = ['first-name', 'last-name', 'email', 'password']
            //Check validity of the other elemnents
            filedLst.forEach( (field) => {
                fieldObj = document.getElementById(field)
                if (document.forms['sign-up-form'][field].value <= 0) {
                    fieldObj.classList.add('invalid-form')
                    //list to change to remove error highlight
                    document.getElementById(field).addEventListener('input', () => {
                        document.getElementById(field).classList.remove('invalid-form')
                    })
                }
            })
        }
        //show errors, if any
        form.classList.add("was-validated");
    })
})


/**
 * Function from the web.
 * True if the email is valid, false otherwise.
 * @param {*} str 
 * @returns bool
 */
function validEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
        return (true)
    }
    return (false)
}