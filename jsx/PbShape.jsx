function PbShape(props) {
    // 滑鼠滑入pbShape才會顯示pbTBtn
    const { setWindowLove } = props;
    const [isHovered, setIsHovered] = useState(false);
    // 點選"詳細介紹"時,將商品資訊存在localStorage
    const productContent = function () {
        localStorage.setItem("shape", props.shape);
        localStorage.setItem("price", props.price);
        localStorage.setItem("introduce", props.introduce);
        localStorage.setItem("selectedProduct", props.dataNum);
        window.location.href = './commodity.html'; // 跳轉到內頁
    }
    const openWindowLove = function () {
        setWindowLove(true);
        setTimeout(() => setWindowLove(false), 2000);;
    }
    const [collect, setCollect] = useState(false);
    return <>
        <li
            className="pbShape"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <div className="frame"></div>
            <div className="smallBox">
                <div className="smallBoxIcon collection" onClick={openWindowLove}></div>
            </div>
            <div className="pbshapeimg">
                <div className={props.svcA}></div>
                <div className={props.svcB}></div>
            </div>
            <div className="pbBescribe">
                <div className="pbText">
                    <h4>{props.shape}</h4>
                    <h5>NT${props.price}</h5>
                </div>
                <div className="pbText">
                    <p>{props.introduce}</p>
                    <h5>{props.star}</h5>
                </div>
                <div id={props.pbNum} className="pbTBtn" data-product={props.dataNum} style={{ display: isHovered ? 'flex' : 'none' }}
                    // 為按鈕增加點擊事件 
                    onClick={productContent}>
                    詳細介紹
                </div>
            </div>
        </li>
    </>
}
