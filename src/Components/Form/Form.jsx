import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Select from "react-select";
import 'react-notifications-component/dist/theme.css';
import { Store } from 'react-notifications-component';
// import { NotificationContainer, NotificationManager } from 'react-notifications';

// import Notifications from "../Notifications/Notifications";
import "./styleForm.css";


const Form = () => {
  const form = useRef();

  const [enviado, setEnviado] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_si5jp3w",
        "template_x5o6it6",
        form.current,
        "x50rDjx4x4TvrLH4t"
      )
      .then(
        (result) => {
          // console.log(result.text);
          setEnviado(true);
          Store.addNotification({
            title: "Envío exitoso",
            message: "El formulario fue enviado correctamente",
            type: "success",
            insert: "bottom",
            container: "bottom-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true
            }
          });
          // NotificationManager.success('El formulario fue enviado correctamente', 'Envío exitoso',);
          // console.log("mensaje enviado")
        },
        (error) => {
          // console.log(error.text);
          // setEnviado(false);
          // NotificationManager.error('Hubo un error al enviar el formulario', 'Error');
          Store.addNotification({
            title: "Error",
            message: "Hubo un error al enviar el formulario",
            type: "danger",
            insert: "bottom",
            container: "bottom-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true
            }
          });
        }
      );
    e.target.reset();
  };

  

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedMachines, setSelectedMachines] = useState([]);

  const options = [
    { value: 'SOLICITUD DE PRESUPUESTO MÁQUINA', label: 'SOLICITUD DE PRESUPUESTO MÁQUINA' },
    { value: 'CONSULTA MÁQUINA', label: 'CONSULTA MÁQUINA' },
    { value: 'PLANTA RECICLAJE', label: 'PLANTA RECICLAJE' }
  ];

  const machineOptions = [
    { value: 'HORNO COMPRESIÓN', label: 'HORNO COMPRESIÓN ' },
    { value: 'TRITURADORA BÁSICA', label: 'TRITURADORA BÁSICA ' },
    { value: 'TRITURADORA PRO', label: 'TRITURADORA PRO ' },
    { value: 'KIT DE TRITURACIÓN BÁSICO', label: 'KIT DE TRITURACIÓN BÁSICO ' },
    { value: 'KIT DE TRITURACIÓN PRO', label: 'KIT DE TRITURACIÓN PRO ' },
    { value: 'EXTRUSORA BÁSICA', label: 'EXTRUSORA BÁSICA ' },
    { value: 'EXTRUSORA PRO', label: 'EXTRUSORA PRO ' },
    { value: 'EXTRUSORA PRO MAX', label: 'EXTRUSORA PRO MAX ' },
    { value: 'INYECTORA MANUAL', label: 'INYECTORA MANUAL ' },
    { value: 'INYECTORA NEUMÁTICA', label: 'INYECTORA NEUMÁTICA ' },
    { value: 'PRENSA TABLA 1M X 1M', label: 'PRENSA TABLA 1M X 1M ' },
    { value: 'PRENSA TABLA 60CM X 60CM', label: 'PRENSA TABLA 60CM X 60CM ' },
    { value: 'INYECTORA Y TRITURADORA', label: 'INYECTORA Y TRITURADORA ' },
    { value: 'EXTRUSORA Y TRITURADORA', label: 'EXTRUSORA Y TRITURADORA ' }
  ];

  const renderMachineSelect = () => {
    if (selectedOptions.value === 'SOLICITUD DE PRESUPUESTO MÁQUINA' || selectedOptions.value === 'CONSULTA MÁQUINA') {
      return (
        <>
          <div className="form_campo col-lg-6">
            <label htmlFor="maquinas">Seleccione la/s máquina/s:</label>
            <Select
              name="user_machine"
              options={machineOptions}
              isMulti
              value={selectedMachines}
              onChange={setSelectedMachines}
              required
            />
          </div>
        </>
      );
    }
  };
  

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className="form row">
        <div className="form_campo col-lg-6">
          <label>nombre</label>
          <input type="text" name="user_name" required />
        </div>
        <div className="form_campo col-lg-6">
          <label>email</label>
          <input type="email" name="user_email" required />
        </div>
        <div className="form_campo col-lg-6">
          <label>celular</label>
          <input type="number" name="user_celular" required />
        </div>
        <div className="form_campo col-lg-6">
          <label htmlFor="select">asunto</label>
          <Select
            name="user_subject"
            options={options}
            value={selectedOptions}
            onChange={setSelectedOptions}
            required
          />
          {renderMachineSelect()}
          {/* <input type="text" name="user_subject" required /> */}
        </div>
        <div className="form_campo col-lg-12">
          <label>Mensaje</label>
          <textarea name="message" />
        </div>
        <button className="boton mt-4" type="submit">
          <span className="text">enviar</span>
        </button>
      </form>
      {/* <NotificationContainer /> */}
    </>
  );
};

export default Form;
