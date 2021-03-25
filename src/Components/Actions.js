

export const delItem = "delete";
export const setItem = "set"

export const DeleteItem = (items, id) => {
    const newItems = items.filter(el => {
       return el.id != id;
    })
   return {type: delItem, data: newItems}
  }
  


  export const setPosts = (data) => {
     return {
        type: setItem, data
     }
  }

  export const fetchPosts = () => {
     return (dispatch) =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
           return response.json()
        })
        .then(data => {
           dispatch(setPosts(data));
        })
        .catch(error => {
           console.log(error)
        })
     }
  }