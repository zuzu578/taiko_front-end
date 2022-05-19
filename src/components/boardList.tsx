import { BoardWrite } from "./boardWrite";

const BoardList = (userObject: any) => { 

    return (
        <div>
            <div className="image_005">
                <img src='https://taiko-ch.net/images/top/slide/slide_ac.jpg'/>
            </div>
            <BoardWrite userObject = {userObject}/>
        </div>
    )

}

export {BoardList};