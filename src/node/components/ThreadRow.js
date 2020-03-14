import ThreadCell from "./ThreadCell";


const ThreadRow = props => {
    const mainDivStyle = {
        float: "left",
        clear: "left"
    };

    const threadCells = [];
    for(var i=0; i< props.numColumns; i++){
        const curColor = (i == props.vOffset) ? props.vColor : props.hColor;
        threadCells.push(<ThreadCell height={props.cellHeight} width={props.cellWidth} threadColor={curColor} />);
    }

    return (
        <div style={mainDivStyle}>
            { threadCells }
        </div>
    );
}

export default ThreadRow;