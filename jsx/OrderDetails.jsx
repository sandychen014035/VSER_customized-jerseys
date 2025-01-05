function OrderDetails(props) {
    const { contentFreight,title, contentOne, contentTwo, pagenum, contentOneClass, } = props
    // 側邊金額框
    // 是否點擊金額框
    const [orderForm, setOrderForm] = useState(false);
    // 抓取金額框
    const orderDetailsRef = useRef(null);
    const contentItemRef = useRef(null);
    // 滑動
    const orderDetails = function (page) {
        let topOne;
        let topTwo;
        if (page == "pageOne") {
            topOne = "72.5vh";
            topTwo = "50%";
        } else if (page == "pageTwo") {
            topOne = "30vh";
            topTwo = "40vh";
        }
        // 筆電與桌機不做任何指令,只有手機平板執行
        if (window.innerWidth <= 1024 && window.innerWidth > 650) {
            setOrderForm(!orderForm);
            // 抓取最新結果
            if (!orderForm === true) {
                orderDetailsRef.current.style.top = topOne;
                orderDetailsRef.current.style.padding = "20px 16px";
                contentItemRef.current.style.display = "block";
            }
            else {
                orderDetailsRef.current.style.top = "94vh";
                orderDetailsRef.current.style.padding = "15px 16px";
                contentItemRef.current.style.display = "none";
            }
        } else if (window.innerWidth <= 640) {
            setOrderForm(!orderForm);
            // 抓取最新結果
            if (!orderForm === true) {
                orderDetailsRef.current.style.top = topTwo;
                orderDetailsRef.current.style.padding = "20px 16px";
                contentItemRef.current.style.display = "block";
            }
            else {
                orderDetailsRef.current.style.top = "91vh";
                orderDetailsRef.current.style.padding = "15px 16px";
                contentItemRef.current.style.display = "none";
            }
        }
    }
    return <>
        <div id="projectInfo" onClick={() => orderDetails(pagenum)} ref={orderDetailsRef}>
            <div className='projectItem'>
                <div className='projectImg'>
                    <img src="./images/icon-amount.svg" alt="" />
                    <p>{title}</p>
                </div>
            </div>
            <div ref={contentItemRef} className={contentOneClass} 
                >{contentOne}</div>
            {contentFreight}
            <hr />
            <div className='projectItem'>
                {contentTwo}
            </div>
        </div>
    </>
}