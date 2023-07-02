import TableView from './TableView';

const DATA  = [
    {
        name: 'Prince',
        age: 27,
        occupation: 'SE',
        address: 'chd'
    },
    {
        name: 'Rahul',
        age: 27,
        occupation: 'SE',
        address: 'chd'
    },
    {
        name: 'Pankaj',
        age: 27,
        occupation: 'SE',
        address: 'chd'
    },
    {
        name: 'Naveen',
        age: 27,
        occupation: 'SE',
        address: 'chd'
    }
];

const Index = ()=>{

    return <TableView data={DATA}/>
}

export default Index;