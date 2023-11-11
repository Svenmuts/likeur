function verifyAge() {
    // Haal de ingevoerde geboortedatum op
    var birthdateInput = document.getElementById('birthdate').value;
  
    // Maak een Date-object van de geboortedatum
    var birthdate = new Date(birthdateInput);
  
    // Maak een Date-object voor 18 jaar geleden
    var eighteenYearsAgo = new Date();
    eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
  
    // Vergelijk de geboortedatum met 18 jaar geleden
    if (birthdate <= eighteenYearsAgo) {
      // Leeftijdsverificatie geslaagd. Doorverwijzen naar gelukt.html
      window.location.href = '../page/home.html';
    } else {
      document.getElementById('verificationResult').innerText = 'Sorry, je moet ouder zijn dan 18 jaar om toegang te krijgen.';
    }
  }
  