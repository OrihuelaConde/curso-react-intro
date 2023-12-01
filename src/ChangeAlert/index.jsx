import React from "react";
//import { withStorageListener } from "./withStorageListener";
import { useStorageListener } from "./useStorageListener";
import './ChangeAlert.css';

//function ChangeAlert({ show, toggleShow }) {
function ChangeAlert({ synchronize }) {
    const { show, toggleShow } = useStorageListener(synchronize); // Custom Hook

    if (show) {
        return (
            <div className="ChangeAlert-bg">
                <div className="ChangeAlert-container">
                    <p>Tus TODOs han sido cambiados en otra pestaña o ventana del navegador.</p>
                    <button
                        className="TodoForm-button TodoForm-button--add"
                        onClick={toggleShow}
                    >
                        Recargar
                    </button>
                </div>
            </div>
        );
    }
    else {
        return null;
    }
}

// const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

// export { ChangeAlertWithStorageListener }

export { ChangeAlert }