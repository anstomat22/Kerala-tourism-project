function check()
{
    let email=document.getElementById("email");
    let regex=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    if(regex.test(email.value))
    {
        return true;
    }
    else
    {
        email.style.borderColor="red";
        email.setAttribute("placeholder","Invalid Email");
        alert("Invalid Email");
        return false;
    }
}


function validate()
{
    let email=document.getElementById("email");
    let pwd=document.getElementById("password");
    let pwdcon=document.getElementById("password_confirmation");
    let phone=document.getElementById("phone");
    let regexem=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    let regexph1=/^([0-9]{3})([-' '\.]{1})([0-9]{3})([- ' '\.]{1})([0-9]{4})$/;
    let regexph2=/^([0-9]{10})$/;
    let regexpass=/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Za-z])[a-zA-Z0-9!@#$%^&*]{8,30}$/;
    if(regexem.test(email.value))
        {
            if(regexph1.test(phone.value)||regexph2.test(phone.value))
                {
                    if(regexpass.test(pwd.value))
                        {
                        if(pwd.value==pwdcon.value)
                            {return true;}
                        else
                            {
                                pwdcon.style.borderColor="red";
                                alert("Password doesn't match");
                                return false;
                            }
                        }
                    else
                        {
                            pwd.style.borderColor="red";
                            pwd.setAttribute("placeholder","Invalid");
                            alert("Password must be atleast 8 characters long with atleast 1 uppercase ,1 lowercase and 1 digit");
                            return false;
                        }
                }
            else
                {
                    phone.style.borderColor="red";
                    phone.setAttribute("placeholder","Invalid format");
                    alert("Invalid Number");
                    return false;
                }
            
        }
    else
    {
        email.style.borderColor="red";
        email.setAttribute("placeholder","Invalid Email");
        alert("Invalid Email");
        return false; 
    }
}
  
function strength()
{   
    let pwd=document.getElementById("password");
    stren=document.getElementById("strength");
    var strongRegex = /^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$/;
    var mediumRegex = /^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$/;
    var enoughRegex = /^(?=.{8,}).*$/;
    
    if (pwd.value.length>=8 && pwd.value.length<14)


        {
            stren.innerText="medium";
            stren.style.color="orange";
            pwd.style.borderColor="orange";
            
        } 
    else if (pwd.value.length>=14) 
        {
            stren.innerText="strong";
            stren.style.color="green";
            pwd.style.borderColor="green";
            
        } 
    else 
        {
            stren.innerText ="weak";
            stren.style.color="red";
            pwd.style.borderColor="red";
            
        }
}