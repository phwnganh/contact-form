
const ContactUsForm = ({messRes, onChange, values}) => {
    return (
        <section className={"flex flex-col gap-6"}>
            <div className={"flex flex-col sm:flex-row gap-6 sm:gap-4"}>
                <div className={"flex flex-col gap-2 w-full"}>
                    <label htmlFor={"firstName"} className={"text-grey-900 text-body-sm leading-body"}>First Name <span className={"text-green-600"}>*</span></label>
                    <input id={"firstName"} onChange={onChange} value={values.firstName} type={"text"} required autoComplete={"given-name"} name={"firstName"} aria-invalid={!!messRes.firstName} aria-describedby={"firstName-error"} className={`text-grey-900 rounded-lg border ${messRes.firstName ? 'border-red-errors': 'border-grey-500'} px-6 py-3 hover:outline-green-600 hover:outline-1 focus:outline-green-600 focus:outline-1`}/>
                    <span id={"firstName-error"} role={"alert"} className={"text-red-errors"}>{messRes.firstName}</span>
                </div>
                <div className={"flex flex-col gap-2 w-full"}>
                    <label htmlFor={"lastName"} className={"text-grey-900 text-body-sm leading-body"}>Last Name <span className={"text-green-600"}>*</span></label>
                    <input onChange={onChange} value={values.lastName} type={"text"} required autoComplete={"family-name"} name={"lastName"} aria-invalid={!!messRes.lastName} aria-describedby={"lastName-error"} className={`text-grey-900 rounded-lg border ${messRes.lastName ? 'border-red-errors': 'border-grey-500'} px-6 py-3 hover:outline-green-600 hover:outline-1 focus:outline-green-600 focus:outline-1`}/>
                    <span id={"lastName-error"} role={"alert"} className={"text-red-errors"}>{messRes.lastName}</span>
                </div>
            </div>

            <div className={"flex flex-col gap-2 w-full"}>
                <label htmlFor={"email"} className={"text-grey-900 text-body-sm leading-body"}>Email Address <span className={"text-green-600"}>*</span></label>
                <input onChange={onChange} value={values.email} type={"email"} required autoComplete={"email"} name={"email"} aria-invalid={!!messRes.email} aria-describedby={"email-error"} className={`text-grey-900 rounded-lg border px-6 py-3 hover:outline-green-600 hover:outline-1 focus:outline-green-600 focus:outline-1 ${messRes.email ? 'border-red-errors': 'border-grey-500'}`}/>
                <span id={"email-error"} role={"alert"} className={"text-red-errors"}>{messRes.email}</span>
            </div>

            <div className={"flex flex-col gap-2"}>
                <fieldset>
                    <legend className={"text-grey-900 text-body-sm leading-body"}>Query Type <span className={"text-green-600"}>*</span></legend>
                    <div className={"flex flex-col sm:flex-row gap-4"}>
                        <div className={"w-full flex gap-3 items-center rounded-lg border border-grey-500 px-6 py-3 hover:outline-green-600 hover:outline-1 has-checked:bg-green-200"}>
                            <input onChange={onChange} checked={values.queryType === "general-inquiry"} value={"general-inquiry"} type={"radio"} className={"accent-green-600 w-6 h-6"} required id={"generalEnquiry"} name={"queryType"}/>
                            <label htmlFor={"generalEnquiry"} className={"text-grey-900 text-body-md leading-body"}>General Enquiry</label>
                        </div>

                        <div className={"w-full flex gap-3 items-center rounded-lg border border-grey-500 px-6 py-3 hover:outline-green-600 hover:outline-1 has-checked:bg-green-200"}>
                            <input onChange={onChange} checked={values.queryType === "support-request"} value={"support-request"} type={"radio"} className={"accent-green-600 w-6 h-6"} required id={"supportRequest"} name={"queryType"}/>
                            <label htmlFor={"supportRequest"} className={"text-grey-900 text-body-md leading-body"}>Support Request</label>
                        </div>
                    </div>
                    <span id={"queryType error"} role={"alert"} className={"text-red-errors"}>{messRes.queryType}</span>
                </fieldset>


            </div>
            <div className={"flex flex-col gap-2"}>
                <label htmlFor={"message"} className={"text-grey-900 text-body-sm leading-body"}>Message <span className={"text-green-600"}>*</span></label>
                <textarea value={values.message} onChange={onChange} required autoComplete={"message"} name={"message"} aria-invalid={!!messRes.message} aria-describedby={"message-error"} rows={3} className={`text-grey-900 rounded-lg border ${messRes.message ? 'border-red-errors': 'border-grey-500'} px-6 py-3 hover:outline-green-600 hover:outline-1 focus:outline-green-600 focus:outline-1`}/>
                <span id={"message-error"} role={"alert"} className={"text-red-errors"}>{messRes.message}</span>
            </div>
        </section>
    );
};

export default ContactUsForm;