const userControllers = require('./users.controllers')



const getAll = (req, res) => {
    const data = userControllers.getAllUsers()
    res.status(200).json({
        items: data.length,
        users: data
    })
}

const getById = (req, res) => {
    const id= req.params.id
    const data = userControllers.getUserById(id)
    if (data) {
        res.status(200).json(data)
    }
    else {
        res.status(404).json({message:`El usuario con el id: ${id} no esta en la existencia de este humilde DB, chab0n`})
    }
}

const register = (req ,res) => {
    const data = req.body
    if(
        !data.first_name || 
        !data.email ||
        !data.password
    ){
        return res.status(400).json({
            message: 'All fields must be completed',
            fields: {
                first_name: 'string',email: 'example@example.com', password: 'string'
            }
        })
    } else {
        const response = userControllers.createUser(data)
        return res.status(201).json({
            message: `User created succesfully with id: ${response.id}`,
            user: response
        })
    }
}
const remove = (req, res) => {
    const id= req.params.id
    const data = userControllers.deleteUser(id)
    if (data) {
        return res.status(204).json({message:'user successfully removed', fields:{id: id}})
    }
    else {
        return res.status(400).json({message: 'user not found' })
    }
}

const edit = (req, res) => {
    const id= req.params.id
    const data = req.body
    if (!Object.keys(data).length) {
        res.status(400).json({message: 'missing data, dude'})
    }
    else if ( 
        !data.first_name || 
        !data.last_name ||
        !data.email ||
        !data.password ||
        !data.phone ||
        !data.rol||
        !data.profile_image||
        !data.birthday_date ||
        !data.country||
        !data.is_active||
        !verified
        ) {
    return res.status(400).json({
        message: "All fields must be completed",
        fields: {
        first_name: "string",
        last_name: "string",
        email: "examle@examle.com",
        password: "string",
        phone: "+521231231230",
        rol: "normal",
        profile_image: "example.com/img/example.png",
        birthday_date: "DD/MM/YYYY",
        country: "string",
        is_active: true
      },
    });
  } else {
    const response = userControllers.editUser(id, data)
    return res.status(200).json({
      message: 'User edited succesfully',
      user: response
    })
  }
};

module.exports = {
  getAll,
  getById,
  register,
  remove,
  edit
};    