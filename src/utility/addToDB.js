import { toast } from "react-toastify";

const getStoredReadList = () => {
    const storeListStr = localStorage.getItem('read-list');
    if(storeListStr){
        const storeList = JSON.parse(storeListStr);
        return storeList;
    } else{
        return [];

    }
}

const addToStoreReadList = (id) => {
    const storeList = getStoredReadList();
    if (storeList.includes(id)){
        // already exist => don't exist
        console.log(id, 'id already exist');
    }
    else {
        storeList.push(id);
        const storeListStr = JSON.stringify(storeList);
        localStorage.setItem('read-list', storeListStr);
        toast('This book is added to your read list.')
    }

}

export { addToStoreReadList, getStoredReadList }