import React from 'react';

const Table = (props) => {

    const setId = () => {
        props.onSort('id')
    };
    const setFirstName = () => {
        props.onSort('firstName')
    };
    const setLastName = () => {
        props.onSort('lastName')
    };
    const setEmail = () => {
        props.onSort('email')
    };
    const setPhone = () => {
        props.onSort('phone')
    };

    return (
        <table className="table table-bordered">
            <thead className="thead-dark">
            <tr>
                <th onClick={setId}>ID {props.sortField === 'id' ? <small>{props.sort}</small> : null}</th>
                <th onClick={setFirstName}>First Name {props.sortField === 'firstName' ?
                    <small>{props.sort}</small> : null}</th>
                <th onClick={setLastName}>Last Name {props.sortField === 'lastName' ?
                    <small>{props.sort}</small> : null}</th>
                <th onClick={setEmail}>E-mail {props.sortField === 'email' ? <small>{props.sort}</small> : null}</th>
                <th onClick={setPhone}>Phone {props.sortField === 'phone' ? <small>{props.sort}</small> : null}</th>
            </tr>
            </thead>
            <tbody>
            {props.data.map(item => (
                <tr key={item.id + item.phone} onClick={props.onRowSelect.bind(null, item)}>
                    <td>{item.id}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
};
export default Table;
