import React from "react";

const ModalWindow = (props) => {
    return (
        <div style={{
            width: '300px',
            height: '200px',
            backgroundColor: 'white',
            border: '1px solid black',
            position: 'absolute',
            ZIndex: '2',
            padding: '7px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            left: '52%',
            top: '30%',
            transform: 'translate(-50%, -50%)'
        }}>
            <div style={{textAlign: 'center'}}>Ошибка загрузки данных, проверье корректность адреса</div>
            <div>
                <button className="btn btn-primary btn-sm" onClick={props.closeModalWindow}> закрыть</button>
            </div>
        </div>
    )
}
export default ModalWindow;