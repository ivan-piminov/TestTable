import React from "react";

const ItemUser = ({person}) => {
    return (
        <>
            <div><b>Имя:</b> {person.firstName}</div>
            <div><b>Фамилия:</b> {person.lastName}</div>
            <div><b>Почта:</b> {person.email}</div>
            <div><b>Телефон:</b> {person.phone}</div>
            <ul style={{marginBottom: '0px'}}><b>Адрес проживания:</b></ul>
            <li><b>Штат:</b> {person.address.state}</li>
            <li><b>Город:</b> {person.address.city}</li>
            <li><b>Улица:</b> {person.address.streetAddress}</li>
            <li><b>Индекс:</b> {person.address.zip}</li>
            <div><b>Описание:</b> {person.description}</div>
        </>)
};
export default ItemUser;