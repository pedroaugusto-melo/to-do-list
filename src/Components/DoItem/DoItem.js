import { useState } from 'react/cjs/react.development';
import PropTypes from 'prop-types';
import './DoItem.css';

export default function Do(props) {
    const [text, setText] = useState('');
    const { completeTask, deleteTask, updateText, id} = props;

    const handleChange = ({ target }) => {
        setText(target.value);
        updateText(target.value, id);
    };

    const handleClickComplete = () => {
        completeTask(id);
    };

    const handleClickDelete = () => {
        deleteTask(id);
    };

    return (
        <li>
            <input 
                value={text}
                placeholder='Write a task here'
                onChange={handleChange}/>

            <button id='btn-add' onClick={handleClickComplete}>&#9989;</button>
            <button id='btn-del' onClick={handleClickDelete}>&#10060;</button>
        </li>
    );
}

Do.propTypes = {
    completeTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
};