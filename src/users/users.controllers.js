const uuid = require('uuid');
const{hashPassword, comparePassword} = require('../utils/crypt')

const userDB =  [{
  "id": "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
  "first_name": "Sahid",
  "last_name": "Kick",
  "email": "sahid.kick@academlo.com",
  "password": "$2b$10$TNGcRFonQH98rVqFaBVfpOEEv2Xcu5ej14tWqKim3z3L6Tr.ZIaqC",
  "phone": "1234567890",
  "birthday_date": "22/10/2000",
  "rol": "normal",
  "profile_image": "",
  "country": "mexico",
  "is_active": true,
  "verified": false
}] 



const getAllUsers = () => {
    return userDB;
  };
  
  const getUserById = (id) => {
    const data = userDB.filter((user) => user.id === id);
    return data? data[0] : null; 
    
  };

  
  
  const createUser = (data) => {
    const newUser= {
        id: uuid.v4(), //obligation y unico 
        first_name: data.first_name, //obligation
        last_name: data.last_name, //obligation
        email: data.email, //obligation y unico
        password: hashPassword(data.password) , //obligation
        phone: data.phone ? data.phone :'' , //unico
        birthday_date: data.birthday_date, //obligation
        rol:'normal', //obligation y por defecto pd: siempre debe ser normal
        profile_image: data.profile_image? data.profile_image: '' ,
        country: data.country, //obligation 
        is_active: true, //obligation y por defecto true 
        verified: false //obligation y por defecto false
    }
    userDB.push(newUser);
    return newUser;
}


const editUser = (id, data) => {
  const index = userDB.findIndex((user) => user.id === id);
  if (index !== -1) {
    userDB[index] = {
      id: id,
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: userDB[index].password,
      phone: data.phone, //unico
      birthday_date: data.birthday_date,
      rol: 'normal',
      profile_image: data.profile_image,
      country: data.country,
      is_active: data.is_active,
      verified: false,
    };
    return userDB[index];
  } else {
    return createUser(data);
  }
};

const deleteUser = (id) => {
  const index = userDB.findIndex(user => user.id === id)
  if (index !== -1) {
    userDB.splice(index, 1)
    return true
  } 
  {
    return false
  } 
}
const getUserByEmail = (email) => {
    const data = userDB.filter((user) => user.email === email);
    return data? data[0] : null; 
    
  };

const idFinder = (email) => {
  const data = userDB.filter((user) => user.email === email)
  return data? data[0].id : null;
}  
module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  editUser,
  deleteUser,
  getUserByEmail,
  idFinder
}