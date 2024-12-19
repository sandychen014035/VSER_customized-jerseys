function BuyItems(props) {
    const { buyItems, itemsIndex, buyDetailNum,title,formSwitch,deleteButton,
     } = props;
    const img = buyItems.map(item => item.img);
    const imgSvg = buyItems.map(item => item.imgSvg);
    const name = buyItems.map(item => item.name);
    const color = buyItems.map(item => item.color);
    const price = buyItems.map(item => item.price);
    // 訂購資訊框函式
    
    return <>
        <div className="tableCaption" >
            <div className="captionLeft">
                {/* 抓取name,img,size,color,price等陣列的對應次序 */}
                <figure className={`${img[itemsIndex]}`}>
                    <div className="imgSvg"
                        dangerouslySetInnerHTML={{
                            __html: imgSvg[itemsIndex],
                        }}
                    /></figure>
                <div className="captionLefText">
                    <p className="text">{name[itemsIndex]} - {color[itemsIndex]}</p>
                    <p className="unitPrice">單件: NT${price[itemsIndex]}</p>
                    <p className="captionRightTOP_Text">此款訂購數 : {buyDetailNum} 件</p>
                    <span className="arrow captionRightTOP_Text" onClick={formSwitch}>{title}</span>
                </div>
            </div>
            <div className="captionRight">
                <div className="captionRightTOP">
                    <p>此款訂購數 : {buyDetailNum} 件</p>
                    <span className="arrow" onClick={formSwitch}>{title}</span>
                </div>
            </div>
            
            {deleteButton}
        </div>
    </>
}