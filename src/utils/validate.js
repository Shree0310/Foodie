//Form validation logic inside utils

export const checkValidData = (phone, email, name) =>{

    const isPhoneValid = /^(\+\d{1,3}[- ]?)?\d{10}$/.test(phone);
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

    if(!isNameValid) return "Name is not valid!";
    if(!isPhoneValid) return "Phone number is not valid!";
    if(!isEmailValid) return "Email is not valid!";

    return null; 


}