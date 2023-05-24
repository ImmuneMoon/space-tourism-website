// try to implement what you can in the componenets before 
// using this file

document.addEventListener("DOMContentLoaded", function(event) {
    
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

    // should probably make a class to style each clicked element

    document.addEventListener('click', (event) => {
        let target = event.target;

        if (target === moonBttn) {
            moonBttn.style.color = '#FFFFFF';
            moonUL.style.borderbottom = '3px solid #FFFFFF';
            moonCtnr.style.display = 'block';
            marsCtnr.style.display = 'none';
            europaCtnr.style.display = 'none';
            titanCtnr.style.display = 'none';
        }

        if (target === marsBttn) {
            marsBttn.style.color = '#FFFFFF';
            marsUL.style.borderbottom = '3p solid #FFFFFF';
            moonCtnr.style.display = 'none';
            marsCtnr.style.display = 'block';
            europaCtnr.style.display = 'none';
            titanCtnr.style.display = 'none';
        }

        if (target === europaBttn) {
            europaBttn.style.color = '#FFFFFF';
            marsUL.style.borderbottom = '3px solid #FFFFFF';
            moonCtnr.style.display = 'none';
            marsCtnr.style.display = 'none';
            europaCtnr.style.display = 'block';
            titanCtnr.style.display = 'none';
        }

        if (target === titanBttn) {
            titanBttn.style.color = '#FFFFFF';
            titanUL.style.borderbottom = '3px solid #FFFFFF';
            moonCtnr.style.display = 'none';
            marsCtnr.style.display = 'none';
            europaCtnr.style.display = 'none';
            titanCtnr.style.display = 'block';
        }
        

        if (moonCtnr.style.display === 'block') {
            moonBttn.style.color = '#FFFFFF';
            moonUL.style.borderbottom = '3px solid #FFFFFF';
        }
        else if (marsCtnr.style.display === 'block') {
            marsBttn.style.color = '#FFFFFF';
            marsUL.style.borderbottom = '3px solid #FFFFFF';
        }
        else if (europaCtnr.style.display === 'block') {
            europaBttn.style.color = '#FFFFFF';
            europaUL.style.borderbottom = '3px solid #FFFFFF';
        }
        else if (titanCtnr.style.display === 'block') {
            titanBttn.style.color = '#FFFFFF';
            titanUL.style.borderbottom = '3px solid #FFFFFF';
        }

    });

    // Should probably make a couple classes that have stylings for each dest nav element on mouse entering and leaving

    document.addEventListener('mouseover', (event) => {
        let target = event.target;

         if (target === moonBttn) {
            if (moonCtnr.style.display !== 'block') {
                moonBttn.style.color = '#FFFFFF';
                moonUL.style.display = 'block';
                moonUL.style.borderBottom = '3px solid #ffffff86';
            }
         }

         if (target === marsBttn) {
            if (marsCtnr.style.display !== 'block') {
                marsBttn.style.color = '#FFFFFF';
                marsUL.style.display = 'block';
                marsUL.style.borderBottom = '3px solid #ffffff86';
            }
         }

         if (target === europaBttn) {
            if (europaCtnr.style.display !== 'block') {
                europaBttn.style.color = '#FFFFFF';
                europaUL.style.display = 'block';
                europaUL.style.borderBottom = '3px solid #ffffff86';
            }
         }

         if (target === titanBttn) {
            if (titanCtnr.style.display !== 'block') {
                titanBttn.style.color = '#FFFFFF';
                titanUL.style.display = 'block';
                titanUL.style.borderBottom = '3px solid #ffffff86';
            }
         }
    });

    document.addEventListener('mouseout', (event) => {
        let target = event.target;

         if (target === moonBttn) {
            if (moonCtnr.style.display !== 'block') {
                moonBttn.style.color = '#D0D6F9';
                moonUL.style.display = 'none';
            }
         }

         if (target === marsBttn) {
            if (marsCtnr.style.display !== 'block') {
                marsBttn.style.color = '#D0D6F9';
                marsUL.style.display = 'none';
            }
         }

         if (target === europaBttn) {
            if (europaCtnr.style.display !== 'block') {
                europaBttn.style.color = '#D0D6F9';
                europaUL.style.display = 'none';
            }
         }

         if (target === titanBttn) {
            if (titanCtnr.style.display !== 'block') {
                titanBttn.style.color = '#D0D6F9';
                titanUL.style.display = 'none';
            }
         }
    });
  });