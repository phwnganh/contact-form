import React from 'react';
import SuccessIcon from '../../assets/icon-success-check.svg'
const NotificationMessage = () => {
    return (
        <div className={"p-6 bg-grey-900 rounded-xl max-w-112.5 w-full mx-auto flex flex-col gap-2 absolute z-10 top-0.5 left-1/2 -translate-1/2"}>
            <div className={"flex items-center gap-px"}>
                <div className={"flex justify-center items-center w-6 h-6 shrink-0"}>
                    <img src={SuccessIcon} alt={"success-icon"}/>
                </div>
                <p className={"text-white text-body-md font-body leading-body"}>Message Sent!</p>
            </div>
            <p className={"text-green-200 text-body-sm leading-body"}>Thanks for completing the form. We’ll be in touch soon!</p>
        </div>
    );
};

export default NotificationMessage;