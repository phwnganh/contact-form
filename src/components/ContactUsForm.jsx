
const ContactUsForm = () => {
    return (
        <section className={"flex flex-col gap-6"}>
            <div className={"flex flex-col sm:flex-row gap-6 sm:gap-4"}>
                <div className={"flex flex-col gap-2 w-full"}>
                    <label htmlFor={"firstName"} className={"text-grey-900 text-body-sm leading-body"}>First Name <span className={"text-green-600"}>*</span></label>
                    <input type={"text"} required autoComplete={"true"} name={"firstName"} aria-describedby={"firstName-instructions"} className={"rounded-lg border border-grey-500 px-6 py-3 hover:outline-green-600 hover:outline-1 focus:outline-green-600 focus:outline-1"}/>
                </div>
                <div className={"flex flex-col gap-2 w-full"}>
                    <label htmlFor={"firstName"} className={"text-grey-900 text-body-sm leading-body"}>Last Name <span className={"text-green-600"}>*</span></label>
                    <input type={"text"} required autoComplete={"true"} name={"lastName"} aria-describedby={"lastName-instructions"} className={"rounded-lg border border-grey-500 px-6 py-3 hover:outline-green-600 hover:outline-1 focus:outline-green-600 focus:outline-1"}/>
                </div>
            </div>

            <div className={"flex flex-col gap-2 w-full"}>
                <label htmlFor={"email"} className={"text-grey-900 text-body-sm leading-body"}>Email Address <span className={"text-green-600"}>*</span></label>
                <input type={"email"} required autoComplete={"true"} name={"email"} aria-describedby={"email-instructions"} className={"rounded-lg border border-grey-500 px-6 py-3 hover:outline-green-600 hover:outline-1 focus:outline-green-600 focus:outline-1"}/>
            </div>

            <div className={"flex flex-col gap-2"}>
                    <legend className={"text-grey-900 text-body-sm leading-body"}>Query Type <span className={"text-green-600"}>*</span></legend>
                    <div className={"flex flex-col sm:flex-row gap-4"}>
                        <div className={"w-full flex gap-3 items-center rounded-lg border border-grey-500 px-6 py-3 hover:outline-green-600 hover:outline-1"}>
                            <input type={"radio"} className={""} required id={"generalEnquiry"} name={"generalEnquiry"} aria-describedby={"Tick the general enquiry"}/>
                            <label htmlFor={"generalEnquiry"} className={"text-grey-900 text-body-md leading-body"}>General Enquiry</label>
                        </div>

                        <div className={"w-full flex gap-3 items-center rounded-lg border border-grey-500 px-6 py-3 hover:outline-green-600 hover:outline-1"}>
                            <input type={"radio"} className={""} required id={"supportRequest"} name={"supportRequest"} aria-describedby={"Tick for you supporting request"}/>
                            <label htmlFor={"supportRequest"} className={"text-grey-900 text-body-md leading-body"}>Support Request</label>
                        </div>
                    </div>
            </div>
            <div className={"flex flex-col gap-2"}>
                <label htmlFor={"message"} className={"text-grey-900 text-body-sm leading-body"}>Message <span className={"text-green-600"}>*</span></label>
                <textarea required autoComplete={"true"} name={"message"} aria-describedby={"message-instructions"} rows={3} className={"rounded-lg border border-grey-500 px-6 py-3 hover:outline-green-600 hover:outline-1 focus:outline-green-600 focus:outline-1"}/>
            </div>
        </section>
    );
};

export default ContactUsForm;