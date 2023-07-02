import React from 'react';
import {TableStyle} from './style';

const TableView = ({data})=>{

    const [state, setState] = React.useState(data);
    const [selectedKey, setSelected]=React.useState({});

    const getHeader = ()=>{
        return Object.keys(state?.[0]).filter(val=>!val.includes('bg')).map((val)=>{
            return <th>{val}</th>
        })
    }

    const handleChange = (index, val)=>{
        const newState = JSON.parse(JSON.stringify(state));
        newState[index] = {
            ...newState[index],
            ...val
        }
        setState(newState);
    }

    const handleSelect = (index, attr)=>{
        console.log("select");
        setSelected({
            index,
            key: attr
        })
    }

    const handleColor = (e)=>{
        handleChange(selectedKey.index, {[`${selectedKey.key}-bg`]: e.target.value });
        setSelected({});
    }
    
    return <>
        <table>
            <thead>
                <tr>
                    {
                        getHeader()
                    }
                </tr>
            </thead>
            <tbody>
                {
                    state.map((Val, key)=>{
                        return <tr key={key}>
                            {

                                Object.entries(Val).map((attr, key1)=>{
                                    const colorKey = attr[0]+'-bg';
                                    const color = Val[colorKey];
                                    console.log({colorKey, color})
                                    if(attr[0].includes('bg')) return null;
                                    return <td key={key1} className={TableStyle({bg: color?color:'#FFF'})}>
                                        <input type="text" value={attr[1]} onChange={(e)=>handleChange(key, {[attr[0]]: e.target.value})} onSelect={()=>handleSelect(key, attr[0])}/>
                                        </td>
                                })
                            }
                        </tr>
                    })
                    
                }
                {
                    selectedKey?.key?<input type="color" onChange={handleColor}/>:null
                }
            </tbody>
        </table>
    </>
}

export default TableView;