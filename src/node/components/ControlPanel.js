const controlPanelStyle = {
    padding: 5
}

const ControlPanel = props => (
    <div className="row">
        <div className="border border-primary rounded" style={controlPanelStyle}>
            <button type="button" className="btn btn-primary" onClick={props.onClick}>
                delcare variable
            </button>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    </div>
);

export default ControlPanel;

