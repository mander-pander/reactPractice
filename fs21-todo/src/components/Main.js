import React, {useState} from 'react'
import ListDisplay from './ListDisplay';

const Main = () => {
    //variable you want to state, then the setter
    const [task, setTask] = useState('');
    const [category, setCategory] = useState('');
    const [list, setList] = useState([]);

    const handleChange = (e) => {
        setTask(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setList([...list, {task: task, category: category}]);
        setTask('');
    }

    // console.log(list);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='task' onChange={handleChange} value={task}></input>
                <select onChange={(e) => setCategory(e.target.value)}>
                    <option defaultValue disabled selected>Categories</option>
                    <option value='chores'>Chores</option>
                    <option value='errands'>Errands</option>
                    <option value='studies'>Studies</option>
                </select>
                <button type='submit'>Add</button>
            </form>
            <ListDisplay list={list} setList={setList}/>
        </div>
    )
}

export default Main
