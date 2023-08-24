import React, { useState } from "react";
import Form from "./components/Form/Form";
import Modal from "./components/Modal/Modal";
import Table from "./components/Table/Table";

const Resource = () => {


    const userRaw = JSON.parse(sessionStorage.getItem("user"))
    const userLogend = {
        id: userRaw.id,
        name: userRaw.name.givenName,
        lastName: userRaw.name.familyName,
        email: userRaw.emails[0].value
    }

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedCell, setSelectedCell] = useState({ filaIndex: -1, columnaKey: '' });

    const openModal = (filaIndex, horarioIndex) => {
        setSelectedCell({ filaIndex, horarioIndex });
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
      };

    const hours = [
        '9:00', '9:15', '9:30', '9:45', '10:00', '10:15', '10:30', '10:45',
        '11:00', '11:15', '11:30', '11:45', '12:00', '12:15', '12:30', '12:45',
        '13:00', '13:15', '13:30', '13:45', '14:00', '14:15', '14:30', '14:45',
        '15:00', '15:15', '15:30', '15:45', '16:00', '16:15', '16:30', '16:45',
        '17:00', '17:15', '17:30', '17:45', '18:00', '18:15', '18:30', '18:45', '19:00',
    ];

    const [resources, setResources] = useState([
    ]);

    const [newResource, setNewResource] = useState({
        resource: '',
        status: '',
        schedule: new Array(hours.length).fill(''),
    });

    const handleNombreClick = () => {
        const { filaIndex, horarioIndex } = selectedCell;
        const updatedResource = [...resources];
        updatedResource[filaIndex].schedule[horarioIndex] = userLogend.name;
        setResources(updatedResource);
        closeModal();
    };
    

    const handleAddResource = () => {
        if (newResource.resource) {
        setResources((prevResources) => [
            ...prevResources,
            {
            id: prevResources.length + 1,
            resource: newResource.resource,
            status: "Disponible",
            schedule: [...newResource.schedule], // Copiamos el array de horarios
            },
        ]);
        setNewResource({
            resource: '',
            status: '',
            schedule: new Array(hours.length).fill(''),
        });
        }
    };
        return (
            <>
                <Modal isOpen={modalIsOpen} onClose={closeModal} handleNombreClick= {handleNombreClick}/>
                <Form newResource = {newResource} setNewResource={setNewResource} handleAddResource={handleAddResource}/>
                <Table hours = {hours} resources = {resources} openModal={openModal}/>
            </>
        )
}

export default Resource;