import DeclareVariableForm from '../components/DeclareVariableForm';

const rightAlignStyle = {
    float: "right"
}

const CodeLine = props => (
    <div className="row">
        <div className="col">
            <DeclareVariableForm />
        </div>
        <div className="col">
            <textarea />
        </div>
        <div className="w-100"></div>
    </div>
);

export default CodeLine;

