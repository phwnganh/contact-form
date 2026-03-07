import ContactUsForm from "./ContactUsForm.jsx";
import {useState} from "react";
import NotificationMessage from "./uis/NotificationMessage.jsx";

const ContactUsMainSection = () => {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        queryType: "",
        message: "",
        checked: false,
    })
    const [messRes, setMessRes] = useState({})
    const [openMessageNotification, setOpenMessageNotification] = useState(false)

    const handleValidateFields = () => {
        const errors = {}
        if(values.firstName.trim().length === 0) {
            errors.firstName = "This field is required"
        }
        if(values.lastName.trim().length === 0){
            errors.lastName = "This field is required"
        }
        if(values.message.trim().length === 0){
            errors.message = "This field is required"
        }
        if(values.email.trim().length === 0){
            errors.email = "This field is required"
        }
        if(!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))){
            errors.email = "Please enter a valid email address"
        }
        if(values.queryType.length === 0){
            errors.queryType = "Please select a query type"
        }
        if(!values.checked){
            errors.checked = "To submit this form, please consent to being contacted"
        }
        setMessRes(errors)
        return Object.keys(errors).length === 0;
    }

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target
        setValues(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(handleValidateFields()){
            setValues({
                firstName: "",
                lastName: "",
                email: "",
                queryType: "",
                message: "",
                checked: false,
            })
            setOpenMessageNotification(true)
        }
    }
    return (
        <>
            <form method={"post"} noValidate onSubmit={handleSubmit} className={"flex flex-col gap-10 relative"}>
                {openMessageNotification && <NotificationMessage/>}
                <ContactUsForm messRes={messRes} onChange={handleChange} values={values}/>
                <div className={"flex flex-col gap-2"}>
                    <div className={"flex items-center gap-4"}>
                        <input onChange={handleChange} checked={values.checked} type={"checkbox"} name={"checked"} required className={"accent-green-600 w-6 h-6"}/>
                        <label htmlFor={"confirmation-info"} className={"text-body-sm leading-body text-grey-900"}>I consent to being contacted by the team <span className={"text-green-600"}>*</span></label>
                    </div>
                    <span className={"text-red-errors"}>{messRes.checked}</span>
                </div>

                <button type={"submit"} aria-labelledby={"submit-button"} className={"text-white text-body-md font-body leading-body px-10 py-4 rounded-lg bg-green-600 hover:bg-[linear-gradient(#00000080,#00000080)]"}>Submit</button>
            </form>
        </>
    );
};

export default ContactUsMainSection;