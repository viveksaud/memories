 export default (posts = [], action) => {
   switch (action.type) {
     case "FETCH_ALL":
       return action.payload;
     case "CREATE":
       return [...posts, action.payload];
      case "DELETE":{
        // const arraykkkk = posts.filter((post) => post._id !== action.payload);
        // console.log('level4............');
        // console.log(arraykkkk);
        return posts.filter(post => post._id !== action.payload); 
      }
     default:
       return posts;
   }
 }

