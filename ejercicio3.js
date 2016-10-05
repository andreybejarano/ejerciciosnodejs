var os = require('os');

console.log('Sistema operativo: '+os.platform());
console.log('Verision del Sistema operativo: '+os.release());
console.log('Memoria total: '+os.totalmem()+' bytes');
console.log('Memoria libre: '+os.freemem()+' bytes');