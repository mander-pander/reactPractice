import React, {useState} from 'react'
import Item from './Item';

const ListDisplay = (props) => {
    // console.log(props)
    const {list, setList} = props;
    const [selected, setSelected] = useState('');

    const listMapped = list.filter((item) => {
        if(selected) return item.category === selected
        return item}).map((item, index) => {
        return (
            <Item key={index} item={item} index={index} setList={setList} list={list} />
        )
    })

    return (
        <div>
            <select onChange={(e) => setSelected(e.target.value)}>
                <option defaultValue selected></option>
                <option value="chores">Chores</option>
                <option value="errands">Errands</option>
                <option value="studies">Studies</option>
            </select>
            {listMapped}
        </div>
  )
}

export default ListDisplay
