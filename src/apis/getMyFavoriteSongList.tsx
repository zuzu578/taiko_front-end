import axios from 'axios';
const getMyFavoriteSongList = () => {
    return new Promise((resolve,reject)=>{
        resolve(axios.get('http://localhost:8080/myFavoriteSongList'));
    })
}

export {getMyFavoriteSongList};