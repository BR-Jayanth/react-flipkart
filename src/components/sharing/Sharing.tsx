import React from "react";
import { WhatsappIcon, WhatsappShareButton ,EmailShareButton, EmailIcon} from "react-share";

export const Sharing:React.FC<{}>=()=>{
    return <>
    <WhatsappShareButton 
    url="https://www.wikipedia.org/"
    about="something"
    >
        <WhatsappIcon/>
    </WhatsappShareButton>
    <EmailShareButton 
    title="example mail"
    url="https://www.wikipedia.org/"
    about="something"
    >
        <EmailIcon/>

    </EmailShareButton>
    </>
}