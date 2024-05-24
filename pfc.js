function jeuPierreFeuilleCiseaux() {
    let scoreJoueur = 0;
    let scoreRobot = 0; // Correction du nom de variable

    function choixAleatoireOrdinateur() {
        const choix = ["Pierre", "Feuille", "Ciseaux"];
        return choix[Math.floor(Math.random() * 3)];
    }

    function determinerVainqueur(joueur, robot) { // Correction du nom de variable
        if (joueur === robot) {
            return "égalité";
        } else if (
            (joueur === "Pierre" && robot === "Ciseaux") ||
            (joueur === "Feuille" && robot === "Pierre") ||
            (joueur === "Ciseaux" && robot === "Feuille")
        ) {
            return "joueur";
        } else {
            return "robot"; // Correction du nom de variable
        }
    }

    function jouerManche() {
        const choixJoueur = prompt("Choisissez Pierre, Feuille ou Ciseaux :");
        const choixRobot = choixAleatoireOrdinateur(); // Correction de la fonction appelée
        alert("Joueur : " + choixJoueur + "\nRobot : " + choixRobot);

        const resultat = determinerVainqueur(choixJoueur, choixRobot);
        if (resultat === "joueur") {
            scoreJoueur++;
            alert("Résultat : Le joueur gagne la manche !");
        } else if (resultat === "robot") {
            scoreRobot++;
            alert("Le robot t'a battu !");
        } else {
            alert("Égalité !");
        }

        alert("Score actuel :\nJoueur : " + scoreJoueur + "\nRobot : " + scoreRobot);
        return resultat;
    }

    alert("Début du jeu Pierre, Feuille, Ciseaux (best of three) !");

    while (scoreJoueur < 2 && scoreRobot < 2) {
        jouerManche();
    }

    if (scoreJoueur > scoreRobot) {
        alert("Le joueur remporte la série avec un score de " + scoreJoueur + "-" + scoreRobot + " !");
    } else {
        alert("Le robot l'emporte avec un score de " + scoreRobot + "-" + scoreJoueur + " !");
    }
}

jeuPierreFeuilleCiseaux();
