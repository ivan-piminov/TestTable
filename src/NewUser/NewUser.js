import React, {useState} from "react";

const NewUser = (props) => {
    const [newId, setNewId] = useState('');
    const setId = (e) => {
        setNewId(e.target.value)
    };

    const [newFirstName, setNewFirstName] = useState('');
    const setFirstName = (e) => {
        setNewFirstName(e.target.value)
    };

    const [newLastName, setNewLastName] = useState('');
    const setLastName = (e) => {
        setNewLastName(e.target.value)
    };

    const [newEmail, setNewEmail] = useState('');
    const setEmail = (e) => {
        setNewEmail(e.target.value)
    };

    const [newPhone, setNewPhone] = useState('');
    const setPhone = (e) => {
        setNewPhone(e.target.value)
    };

    const [newState, setNewState] = useState('');
    const setState = (e) => {
        setNewState(e.target.value)
    };

    const [newCity, setNewCity] = useState('');
    const setCity = (e) => {
        setNewCity(e.target.value)
    };

    const [newStreet, setNewStreet] = useState('');
    const setStreet = (e) => {
        setNewStreet(e.target.value)
    };

    const [newZip, setNewZip] = useState('');
    const setZip = (e) => {
        setNewZip(e.target.value)
    };

    const [newDescription, setNewDescription] = useState('');
    const setDescription = (e) => {
        setNewDescription(e.target.value)
    };


    const addNewUser = () => {
        props.addNewUser({
            'description': newDescription,
            "id": newId,
            "firstName": newFirstName,
            "lastName": newLastName,
            "email": newEmail,
            "phone": newPhone,
            address: {
                'zip': newZip,
                'streetAddress': newStreet,
                'state': newState,
                'city': newCity,
            }
        });
        setNewId('');
        setNewFirstName('');
        setNewLastName('');
        setNewEmail('');
        setNewPhone('');
        setNewState('');
        setNewCity('');
        setNewStreet('');
        setNewZip('')
        setNewDescription('')
    };


    const buttonStatus = !(newId && newFirstName && newLastName && newEmail && newPhone && newState && newCity && newStreet && newZip && newDescription !== '');

    return (
        <>
            <div className="form-group">
                <input type="number" placeholder="введите ID" className="form-control" value={newId} onChange={setId}/>
            </div>
            <div className="form-group">
                <input type="text" placeholder="введите имя" className="form-control" value={newFirstName}
                       onChange={setFirstName}/>
            </div>
            <div className="form-group">
                <input type="text" placeholder="введите фамилию" className="form-control" value={newLastName}
                       onChange={setLastName}/>
            </div>
            <div className="form-group">
                <input type="text" placeholder="введите E-mail " className="form-control" value={newEmail}
                       onChange={setEmail}/>
            </div>
            <div className="form-group">
                <input type="text" placeholder="введите телефон" className="form-control" value={newPhone}
                       onChange={setPhone}/>
            </div>
            <div className="form-group">
                <input type="text" placeholder="введите название штата" className="form-control" value={newState}
                       onChange={setState}/>
            </div>
            <div className="form-group">
                <input type="text" placeholder="введите название города" className="form-control" value={newCity}
                       onChange={setCity}/>
            </div>
            <div className="form-group">
                <input type="text" placeholder="введите название улицы" className="form-control" value={newStreet}
                       onChange={setStreet}/>
            </div>
            <div className="form-group">
                <input type="number" placeholder="введите индекс" className="form-control" value={newZip}
                       onChange={setZip}/>
            </div>
            <div className="form-group">
                <textarea placeholder="введите описание" className="form-control" value={newDescription}
                          onChange={setDescription}/>
            </div>
            <button type='submit' className="btn btn-primary mb-2" disabled={buttonStatus} onClick={addNewUser}>Добавить
                в таблицу
            </button>
        </>
    )
};
export default NewUser;
