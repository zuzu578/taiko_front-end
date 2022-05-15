import {BoardFileType} from '../types/BoardFileType';

interface BoardListType extends BoardFileType{
    file: any;
    boardNo? : number;
    contents : string;
    createdTime : string;
    userName : string;
    userProfile : string;
}

export type {BoardListType};