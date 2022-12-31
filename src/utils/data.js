// the following code is placed in the utility folder so it can be used accross the platforms
//fetchnig sanity data

//sanity query that accepts userId
export const userQuery = (userId) =>{
    const query = `*[_type == 'user' && _id == '${userId}']`;
    //userId can change from a document type
    return query;

}
