import CodeLine from '../components/CodeLine';

const CodeLines = props => (
    <div>
        {props.CodeLines.map(codeLine => <CodeLine />)}
    </div>
);

export default CodeLines;