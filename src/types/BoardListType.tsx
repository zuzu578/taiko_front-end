import {BoardFileType} from '../types/BoardFileType';

interface BoardListType extends BoardFileType{
    boardNo? : number;
    contents : string;
    createdTime : string;
    userName : string;
    userProfile : string;
}

export type {BoardListType};