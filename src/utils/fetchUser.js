export const fetchUser = () =>{
    const userInfo = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
    // set the item when we logged in , checking if item is undefined. if not undefined get the item from localstorage. if no user, clear local storage/ token can expire
    return userInfo;
}
