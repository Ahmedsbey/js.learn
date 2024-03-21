(function IIFE(im){
    console.log(`Hello ${im}`)
})('im');

( (name) => {
    console.log(`IiFEJ ${name}`);
} )('Ahhmmad');
