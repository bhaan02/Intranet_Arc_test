import React from "react";

const Table = ({hours, resources, openModal}) => {

    return(
        <>      
            <table className="table">
                <thead>
                    <tr>
                        <th colSpan="2"></th>
                        <th colSpan="37">Bloque Horario</th>
                        <th colSpan="4">Hora Extras</th>
                    </tr>
                    <tr>
                        <th>Recurso</th>
                        <th>Estado actual</th>
                        {hours.map((hora, index) => (
                            <th key={index}>{hora}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {resources.map((resource, index) => (
                        <tr key={index}>
                            <td>{resource.resource}</td>
                            <td>{resource.status}</td>
                            {resource.schedule.map((valor, horarioIndex) => (
                                <td key={horarioIndex} onClick={() => openModal(index,horarioIndex)}>{valor}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    )
}

export default Table;