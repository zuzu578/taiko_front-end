const isMediaFileCheck = (params : string) => {
    
    if(params === null || params === undefined) {
        return ;
    }else{
        const arr :Array<string>= params.split(".");
        const result = arr.find((item)=>{
        return item === 'mp4'
    })
    return result;
}
}

export {isMediaFileCheck}