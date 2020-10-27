import React, { Component } from 'react';
// reactstrap components
import { Button, Modal, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from "reactstrap";

function Example(props) {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <>
    <li className="list-group-item">
        <i onClick={() => setModalOpen(!modalOpen)} className={props.icon}/> {props.category}
    </li>
      <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
        <div className=" modal-header text-center">
          <h4 className=" modal-title  w-100" id="exampleModalLabel">
            {props.title}
          </h4>
          <button
            aria-label="Close"
            className=" close"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <ModalBody>
        <Form>
            <FormGroup>
                <Label for="exampleEmail">{props.label}</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder={props.placeholder} />
            </FormGroup>
        </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            outline
            color="danger"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            Fechar
          </Button>
          <Button outline color="success" type="button">
            Salvar {props.save}
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default Example;