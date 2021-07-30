function construir(muro) {
  // Resultado de funcion
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      muro.construido = true;

      if (muro.construido) {
        resolve(muro);
      } else {
        const error = new Error("No se pudo construir");
        reject(error);
      }
    }, 3000);
  });
}

const promesaDeconstruccion = construir({});

promesaDeconstruccion
  .then((muroConstruido) => {
    console.log("muroConstruido:", muroConstruido);
  })
  .catch((error) => {
    console.error("Ocurrio un error:", error);
  });
