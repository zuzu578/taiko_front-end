const Main = () =>{
    return(
        <div>   
            <div className="banner_image">
                <img src={`https://taiko-ch.net/images/top/slide/bnr_drum_master.jpg`}/>
            </div>
            <div className="image2">
                <img src={`https://taiko.namco-ch.net/taiko/images/top/img_catch_01.png`}/>
                <h5>
                太鼓の達人は、“楽曲のリズムにあわせて和太鼓を叩くだけ”<br/>
                というシンプルなあそびで、こどもから大人まで<br/>
                みんなで楽しめる和太鼓リズムゲーム！<br/>
                </h5>
                <div className="image_003">
                    <img src={`https://taiko.namco-ch.net/taiko/images/top/pic_catch_01.png`}/>
                    <img src={`https://taiko.namco-ch.net/taiko/images/top/img_catch_02.png`}/>
                    <a href={`/`}><img src={`https://taiko.namco-ch.net/taiko/images/top/btn_songlist.png`}/></a>
                    <img src={`https://taiko.namco-ch.net/taiko/images/common/bg_main_sp.png`}/>
                </div>
            </div>
        </div>
    )
}

export {Main};