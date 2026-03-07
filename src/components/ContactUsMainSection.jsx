import ContactUsForm from "./ContactUsForm.jsx";

const ContactUsMainSection = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <form method={"post"} onSubmit={handleSubmit} className={"flex flex-col gap-10"}>
            <ContactUsForm/>
            <div className={"flex items-center gap-4"}>
                <input type={"checkbox"} required/>
                <label htmlFor={"confirmation-info"} className={"text-body-sm leading-body text-grey-900"}>I consent to being contacted by the team <span className={"text-green-600"}>*</span></label>
            </div>
            <button type={"submit"} aria-labelledby={"submit-button"} className={"text-white text-body-md font-body leading-body px-10 py-4 rounded-lg bg-green-600"}>Submit</button>
        </form>
    );
};

export default ContactUsMainSection;