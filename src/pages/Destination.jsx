import React from 'react';
import './Destination.css'


function Destination() {
    document.body.style.backgroundImage = "url('./assets/destination/background-destination-desktop.jpg')";
    return (
        <>
            <div className="destination_container">
                <main>
                    <h1>this is the destination page</h1>
                </main>
            </div>
        </>
    );
}

export default Destination;