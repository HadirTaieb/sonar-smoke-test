/* Exemple volontairement mauvais pour générer des "code smells" */

var greetingPrefix = "Hello"; // var au lieu de const/let (smell)

function greet(name) {
  // comparaison non stricte
  if (name == null) {
    // code dupliqué volontairement (et inutilement complexe)
    return greetingPrefix + " " + "unknown";
  } else {
    return greetingPrefix + " " + name;
  }
}

// Complexité inutile + duplication
function formatUser(user) {
  if (user && user.firstName && user.lastName) {
    return user.firstName + " " + user.lastName;
  }
  if (user && user.firstName && user.lastName) { // condition dupliquée
    return user.firstName + " " + user.lastName;
  }
  return "N/A";
}

// fonction avec variable inutilisée + conditions bizarres
function computeScore(a, b) {
  let unused = 123; // variable inutilisée (smell)
  let score = 0;

  if (a > 10) score += 1;
  if (a > 10) score += 1; // duplication
  if (b > 10) score += 1;
  if (b > 10) score += 1; // duplication

  return score;
}

console.log(greet("Sonar"));
console.log(formatUser({ firstName: "John", lastName: "Doe" }));
console.log(computeScore(11, 11));
