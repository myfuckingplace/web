import React, {useState} from "react";

export const EmailWithCopyOverlay = () => {

    const [showOverlay, setShowOverlay] = useState(false);
    const emailAddress = 'festivaly@myfuckingplace.cz';

    const handleEmailClick = async () => {
        try {
            await navigator.clipboard.writeText(emailAddress);
            setShowOverlay(true);
            setTimeout(() => setShowOverlay(false), 2000); // Hide the overlay after 2 seconds
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    return (
        <>
            {showOverlay && (
                <div style={{
                    position: 'fixed', /* Or 'absolute' */
                    top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    color: 'white',
                    padding: '20px',
                    borderRadius: '10px',
                    zIndex: 1000, /* Ensure it's above other elements */
                }}>
                    Email Copied!
                </div>
            )}
            <span style={{color: 'white', marginBottom: '30px', cursor: 'pointer'}} onClick={handleEmailClick}>
                {emailAddress}
            </span>
        </>
    )
}
