import './DoneItem.css';

export default function Done(props) {
    const { id, text, deleteTask } = props;

    const handleDelete = () => {
        deleteTask(id);
    }

    return (
        <li>
            <p>{text}</p>
            <button id='btn-del' onClick={handleDelete}>&#10060;</button>
        </li>
    );
}