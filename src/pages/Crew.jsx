import React from 'react';
import './Crew.css'


function Crew() {
    document.body.style.backgroundImage = "url('./assets/crew/background-crew-desktop.jpg')";
    return (
        <>
            <div className="crew_container">
                <main>
                    <h1>this is the crew page</h1>
                </main>
            </div>
        </>
    );
}

export default Crew;