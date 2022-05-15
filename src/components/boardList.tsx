import { BoardWrite } from "./boardWrite";

const BoardList = (userObject: any) => { 

    return (
        <div>
            <BoardWrite userObject = {userObject}/>
        </div>
    )

}

export {BoardList};