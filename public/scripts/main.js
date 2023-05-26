// try to implement what you can in the componenets before 
// using this file

// Immediately Invoked Function Expression (IIFE) creates a new scope to prevent conflicts with other scripts
(function() {
    // Class for destination styling
    class DestNavStyler {
        constructor(ctnr, bttn, ul) {
            this.ctnr = ctnr;
            this.bttn = bttn;
            this.ul = ul;
        }
    
        // Method to set the active styles when the element is clicked
        setDestActiveStyles() {
            this.bttn.style.color = '#FFFFFF';
            this.ul.style.display = 'block';
            this.ul.style.borderBottom = '3px solid #FFFFFF';
            this.ctnr.style.display = 'block';
        }
    
        // Method to set the inactive styles when the element is not clicked
        setDestInactiveStyles() {
            this.bttn.style.color = '#D0D6F9';
            this.ul.style.display = 'none';
            this.ctnr.style.display = 'none';
        }

        // Method to set the hover styles when the mouse enters the element
        setDestNavHoverStyles() {
            if (this.ctnr.style.display !== 'block') {
                this.bttn.style.color = '#FFFFFF';
                this.ul.style.display = 'block';
                this.ul.style.borderBottom = '3px solid #ffffff86';
            }
        }

        // Method to remove the hover styles when the mouse leaves the element
        removeDestNavHoverStyles() {
            if (this.ctnr.style.display !== 'block') {
                this.bttn.style.color = '#D0D6F9';
                this.ul.style.display = 'none';
            }
        }
    }

    // Waits for DOM load
    document.addEventListener("DOMContentLoaded", () => {
        
        // Grabs destination planets , relevant buttons and button underlines
        const moonCtnr = document.getElementById('moon-ctnr');
        const moonBttn = document.getElementById('moon');
        const moonUL = document.getElementById('moon-ul');

        const marsCtnr = document.getElementById('mars-ctnr');
        const marsBttn = document.getElementById('mars');
        const marsUL = document.getElementById('mars-ul');

        const europaCtnr = document.getElementById('europa-ctnr');
        const europaBttn = document.getElementById('europa');
        const europaUL = document.getElementById('europa-ul');

        const titanCtnr = document.getElementById('titan-ctnr');
        const titanBttn = document.getElementById('titan');
        const titanUL = document.getElementById('titan-ul');

    // Create instances for each dest nav related element
        const moonStyler = new DestNavStyler(moonCtnr, moonBttn, moonUL);
        const marsStyler = new DestNavStyler(marsCtnr, marsBttn, marsUL);
        const europaStyler = new DestNavStyler(europaCtnr, europaBttn, europaUL);
        const titanStyler = new DestNavStyler(titanCtnr, titanBttn, titanUL);

        // Sets active styles for the current planet with a display of 'block' on load
        if (moonCtnr.style.display !== 'none') {
            moonStyler.setDestActiveStyles();
        }
        else if (marsCtnr.style.display !== 'none') {
            marsStyler.setDestActiveStyles();
        }
        else if (europaCtnr.style.display !== 'none') {
            europaStyler.setDestActiveStyles();
        }
        else if (titanCtnr.style.display !== 'none') {
            titanStyler.setDestActiveStyles();
        }

        // Event listeners
        document.addEventListener('click', (event) => {
            let target = event.target;

            // Displays the relevant planet component when its button is clicked
            if (target === moonBttn) {
                moonStyler.setDestActiveStyles();
                marsStyler.setDestInactiveStyles();
                europaStyler.setDestInactiveStyles();
                titanStyler.setDestInactiveStyles();
            } 
            else if (target === marsBttn) {
                marsStyler.setDestActiveStyles();
                moonStyler.setDestInactiveStyles();
                europaStyler.setDestInactiveStyles();
                titanStyler.setDestInactiveStyles();
            } 
            else if (target === europaBttn) {
                europaStyler.setDestActiveStyles();
                moonStyler.setDestInactiveStyles();
                marsStyler.setDestInactiveStyles();
                titanStyler.setDestInactiveStyles();
            } 
            else if (target === titanBttn) {
                titanStyler.setDestActiveStyles();
                moonStyler.setDestInactiveStyles();
                marsStyler.setDestInactiveStyles();
                europaStyler.setDestInactiveStyles();
            }
        });

        document.addEventListener('mouseover', (event) => {
            let target = event.target;

            // For hovering over the dest nav buttons
            if (target === moonBttn) {
                moonStyler.setDestNavHoverStyles();
            } 
            else if (target === marsBttn) {
                marsStyler.setDestNavHoverStyles();
            } 
            else if (target === europaBttn) {
                europaStyler.setDestNavHoverStyles();
            } 
            else if (target === titanBttn) {
                titanStyler.setDestNavHoverStyles();
            }
        });

        document.addEventListener('mouseout', (event) => {
            let target = event.target;

            // For then no longer hovering a dest nav button
            if (target === moonBttn) {
                moonStyler.removeDestNavHoverStyles();
            } 
            else if (target === marsBttn) {
                marsStyler.removeDestNavHoverStyles();
            } 
            else if (target === europaBttn) {
                europaStyler.removeDestNavHoverStyles();
            }
            else if (target === titanBttn) {
                titanStyler.removeDestNavHoverStyles();
            }

        });

    });

})();