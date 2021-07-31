// DRY
// Dont Repeat Yourself

const tiempoDeEspera = 5000;

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
    }, tiempoDeEspera);
  });
}

function aplanar(muro) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      muro.aplanado = true;

      if (muro.aplanado) {
        resolve(muro);
      } else {
        const error = new Error("No se pudo aplanar");
        reject(error);
      }
    }, tiempoDeEspera);
  });
}

function pintar(muro) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      muro.pintado = true;

      if (muro.pintado) {
        resolve(muro);
      } else {
        const error = new Error("No se pudo pintado");
        reject(error);
      }
    }, tiempoDeEspera);
  });
}

async function crearMuro() {
  const muro = await construir({});
  console.log("muroConstruido:", muro);

  const muroAplanado = await aplanar(muro);
  console.log("muroAplanado:", muroAplanado);

  const muroPintado = await pintar(muroAplanado);

  console.log("muroPintado: ", muroPintado);
}

crearMuro();
console.log("Esto es despues de crear muro");

// const promesaDeconstruccion = construir({});

// console.log("promesaDeconsttruccion:", promesaDeconstruccion);

// promesaDeconstruccion
//   .then((muroConstruido) => {
//     let promesaDeAplanado = aplanar(muroConstruido);
//     console.log("muroConstruido:", muroConstruido);

//     promesaDeAplanado
//       .then((muroAplanado) => {
//         console.log("muroAplanado:", muroAplanado);

//         let promesaDePintado = pintar(muroAplanado);

//         promesaDePintado
//           .then((muroPintado) => {
//             console.log("muroPintado:", muroPintado);
//           })
//           .catch((error) => {
//             console.error(error);
//           });
//       })
//       .catch((error) => {
//         console.log("Ocurrio un error", error);
//       });
//   })
//   .catch((error) => {
//     console.error("Ocurrio un error:", error);
//   });

// completarMuro();

// const promesaDeConstruir = construir({});
// promesaDeConstruir
//   .then((muro) => {
//     console.log("muro construido: ", muro);
//     return aplanar(muro);
//   })
//   .then((muro) => {
//     console.log("muro aplanado: ", muro);
//     return pintar(muro);
//   })
//   .then((muro) => {
//     console.log("muro pintado: ", muro);
//   })
//   .catch((error) => {
//     console.log("ocurrio el error: ", error);
//   });
