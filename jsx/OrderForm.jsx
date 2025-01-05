// 訂購表單
function OrderForm(props) {
    const { content,title,formName } = props
    return <> <div className="form">
        <article className="personal">
            <p>{title}</p>
            <form action="" method="post" name={formName} id={formName} title={title}>
                {content}
            </form>
        </article>
    </div>
    </>
}