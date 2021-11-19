const someHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("HEY!")
        } else {
            reject("Upsss!");
        }
    });
}

someHappen()
    .then(response => console.log(response))
    .catch(error => console.error(error));

const someHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('SI TE HAS EJECUTADO!')
            }, 2000)
        } else {
            reject('Upsss valiste madres!');
        }
    });
}

someHappen2()
    .then(response => console.log(response))
    .then(() => console.log('Soy otra ejecucion correcta'))
    .catch(error => console.log(error))
    .finally(() => console.log('TERMINE'));

Promise.all([someHappen(), someHappen2()])
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log("FINALIZADO TODO EL PROCESO"));