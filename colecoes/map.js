function getAdmins(map) {
    let admins = [];
    for([key, valeu] of map) {
        if(valeu === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Durval', 'Admin');
usuarios.set('Amanda', 'Admin');
usuarios.set('Pedro', 'Admin');
usuarios.set('Luiz', 'User');
usuarios.set('Natalia', 'User');
usuarios.set('Renata', 'Admin');

console.log(getAdmins(usuarios));