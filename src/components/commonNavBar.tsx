const CommonNavBar = () =>{
    return(
        <nav className="nav_bar">
            <div className="nav_imgs">
                <img src='https://taiko.namco-ch.net/taiko/images/common/logo_nijiiro.png'/>
            </div>
            <div className="nav_items">
                <span className="para">遊び方</span>
            </div>
            <div className="nav_items">
                <span className="para">遊べるお店</span>
            </div>
            <div className="nav_items">
                <span className="para">楽曲リスト</span>
            </div>
        </nav>

        
    )
}
export {CommonNavBar};