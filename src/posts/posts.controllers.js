const uuid = require('uuid');

/* const{hashPassword, comparePassword} = require('../utils/crypt') */


const posts = [{
	"id": "",
	"title": "string",
	"content":"string",
	"header_image": "url_to_img",
	"user_id": "uuid",//Aqui hara referencia al usuario de tu userDB
	"published": true
}]

const getAllPosts = () => {
    return posts;
  }

  const getPostById = (id) => {
    const data = posts.filter((post) => post.id === id);
    return data? data[0] : null;  
  }



  const getLoggedPost = (user_id) => {
    const data = posts.filter((item) =>  item.user_id === user_id);
    return data.length ? data[0] : false
  }
  


const getPostByIdLogged = (id, user_id) => {
  const data = posts.filter((item) => item.id === id && item.user_id === user_id);
  return data.length ? data[0] : false
}






  const createPost = (data, userId) => {
    
    const newPost= {
        id: uuid.v4(), //o y u
        title: data.title, //obligatory
	    content:data.content, //obligatory 
	    header_image: data.header_image ? data.header_image: "" ,
	    user_id: userId ,  //o y u
        published: true
    } 
    posts.push(newPost);
    return newPost; 
}

const editPost = ( id , data) => { 
    const index = posts.findIndex((post) => post.id === id);
        if (index !== -1) {
        posts[index] = {
            id: id, //o y u
            title: data.title, //obligatory
            content:data.content, //obligatory 
            header_image: data.header_image?data.header_image: "" ,
            user_id: posts[index].user_id ,  //o y u
            published: true
        };
        return posts[index] 
    }
    else {
        return false
    }
}

const deletePost = (id) => {
    const index = posts.findIndex(post => post.id === id)
    if (index !== -1) {
      posts.splice(index, 1)
      return true
    } 
    {
      return false
    } 
  }
/*   const getLoggedUsersPosts = ()=> {
        return 
    }

    const getMyPosts = () => {

    }

    const editMyPost = () => {}
    const deleteMyPost = () => {}
*/

module.exports ={
    getAllPosts,
    getPostById,
    createPost,
    editPost,
    deletePost, 
    getPostByIdLogged,
    getLoggedPost
}