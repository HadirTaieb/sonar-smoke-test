/* Autres smells */

export function add(a, b) {
  // Conversion implicite volontairement dangereuse
  return a + b;
}

export function parseNumber(value) {
  // Non strict + logique confuse
  if (value == "") {
    return 0;
  }
  // parseInt sans radix (souvent signalé)
  return parseInt(value);
}

export function buildQuery(params) {
  // Mutation + boucle pas claire
  var q = ""; // var (smell)
  for (var k in params) { // for..in sur objet sans hasOwnProperty (souvent smell)
    q = q + k + "=" + params[k] + "&";
  }
  return q;
}
