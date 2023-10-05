export const checkData = (email, password) => {
    const isEmailValidate = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValidate) return "Email id is not Valid";
    if(!isPasswordValidation) return "password id is not Valid";

    return null;

}