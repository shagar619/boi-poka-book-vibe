const getToStoreWishList = () => {
    const storeListStr = localStorage.getItem('wish-list');
    if(storeListStr){
        const storeList = JSON.parse(storeListStr);
        return storeList;
    } else {
        return [];
    }
}


const addToStoreWishList = (id) =>{
    const storeList = getToStoreWishList();
    if(storeList.includes(id)){
        console.log(id, 'id exist');
    } else {
        storeList.push(id);
        const storeListStr = JSON.stringify(storeList);
        localStorage.setItem('wish-list', storeListStr);
    }

}

export { addToStoreWishList }