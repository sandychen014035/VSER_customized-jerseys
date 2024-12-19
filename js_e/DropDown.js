function DropDown(props) {
    const { titleName, title, order, content, disabled } = props
    return <>
        <div>
            <label htmlFor={titleName}>{title}</label>
            <select name={titleName} id={titleName} onClick={order} disabled={disabled}>
                {content}
            </select>
        </div>
    </>
}