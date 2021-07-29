// Callback

function irACasa(avisar) {
  console.log("yendo a casa...");
  console.log("llegue a casa");

  avisar();
}

function llamarAMama() {
  console.log("Amá ya llegue");
}

irACasa(llamarAMama());
