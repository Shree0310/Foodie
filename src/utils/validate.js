//Form validation logic inside utils

export const checkValidData = (phone, email, name) =>{

    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!phone) return "Phone number is required";
    if (!phoneRegex.test(phone)) return "Please enter a valid phone number";

    if (!email) return "Email is required";
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    
    if (!name) return "Name is required";
    if (name.length < 2) return "Name should be at least 2 characters long";

    
    return null;


}