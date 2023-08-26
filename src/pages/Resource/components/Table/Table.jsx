import React from "react";

const Table = ({hours, schedule, openModal}) => {


    return(
        <>      
            <table className="table">
                <thead>
                    <tr>
                        <th colSpan="1"></th>
                        <th colSpan="37">Bloque Horario</th>
                        <th colSpan="4">Hora Extras</th>
                    </tr>
                    <tr>
                        <th>Recurso</th>
                        {hours.map((hora, index) => (
                            <th key={index}>{hora}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {schedule.map((resource, row) => (
                        <tr key={row}>
                            <td>{resource.resourceName}</td>
                            {hours.map((h, column) => {

                                const reservedUser = resource.boxes.find((box) => box.column === column)?.userName
                                return (<td key={column} onClick={() => openModal(row,column,reservedUser)}>{reservedUser}</td>)
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    )
}

export default Table;