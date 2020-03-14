

const ThreadCell = props => {
    const mainDivStyle = {
        height: props.height,
        width: props.width,
        backgroundColor: props.threadColor,
        float: "left"
    };

    return (
        <div style={mainDivStyle}>
        </div>
    );

}

export default ThreadCell;