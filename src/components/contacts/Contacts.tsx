import React from 'react';
import {EmailWithCopyOverlay} from "./EmailWithCopyOverlay";
import {InstagramLogo} from "./InstagramLogo";

export const Contacts = () => {

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: '30px'}}>
            <EmailWithCopyOverlay/>
            <InstagramLogo/>
        </div>
    );
};
