
//todo: make this a global style
const codeLineFormStyle = {
    padding: 5
}

//todo: use Bootstrap InputGroups in form
const DeclareVariableForm = props => (
    <div className="border border-primary rounded text-primary" style={codeLineFormStyle}>
        variable name 
        <br/>
        <input type="text"></input>
        <br/>
        data type (inferred) 
        <br/>
        <input type="text"></input>
        <br/>
        value 
        <br/>
        <input type="text"></input>
        <br/>
        <br/>
        {/* todo: get button to right-align */}
        <button type="button" className="btn btn-primary">generate code</button>
    </div>
);

export default DeclareVariableForm;

