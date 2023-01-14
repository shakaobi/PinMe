// the following code is placed in the utility folder so it can be used accross the platforms
//fetchnig sanity data

//sanity query that accepts userId
export const userQuery = (userId) =>{
    const query = `*[_type == 'user' && _id == '${userId}']`;
    //userId can change from a document type
    return query;

}
export const searchQuery = (searchTerm) => {
    const query =`*[_type == 'pin' && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*' ]{
        image {
            asset ->{
                url
            }
        },
        _id,
        destination,
        postedBy ->{
            _id,
            userName,
            image
        },
        save[]{
           _key,
           postedBy ->{
            _id,
            userName,
            image
           },
        },
    }`
    return query;
   
    //this query will be searching for title, category, and about using sanity's query language
}

export const feedQuery = `*[_type == 'pin'] | order(_createdAt desc){
    image {
        asset ->{
            url
        }
    },
    _id,
    destination,
    postedBy ->{
        _id,
        userName,
        image
    },
    save[]{
       _key,
       postedBy ->{
        _id,
        userName,
        image
       },
    },
}`