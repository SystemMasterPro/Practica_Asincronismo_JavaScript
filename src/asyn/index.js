const doSomeAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Se haejecutado con exito'), 2000)
            : reject(new Error('Test Error'))
    });
}

const doSome = async () => {
    const something = await doSomeAsync();
    console.log(something);
}

console.log('Before: ');
doSome();
console.log('After');

