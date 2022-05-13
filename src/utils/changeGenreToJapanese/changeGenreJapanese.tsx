const changeGenre = (genre:String) :String =>{
    let result : String = '';

    console.log('genre', genre);
    if(genre === 'pops'){
        result = 'ポップス';
    }
    if(genre === 'kids'){
        result = 'キッズ';
    }
    if(genre === 'anime'){
        result = 'アニメ';
    }
    if(genre === 'vocaloid'){
        result = 'ボーカロイド™曲';
    }
    if(genre === 'game'){
        result = 'ゲームミュージック';
    }
    if(genre === 'variety'){
        result = 'バラエティ';
    }
    if(genre === 'classic'){
        result = 'クラシック';
    }
    if(genre === 'namco'){
        result = 'ナムコオリジナル';
    }
    
    return result;
}

export {changeGenre};