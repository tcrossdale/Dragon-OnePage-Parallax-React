import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Col
} from "reactstrap";

const DemoModal = props => {
  return (
    <Modal
      className="demo-modal"
      isOpen={props.demoModalIsOpen}
      toggle={props.toggleModal}
    >
      <ModalHeader toggle={props.toggleDemoModal}>
        <span>{props.appData.demoModal.headerContent}</span>
      </ModalHeader>
      <ModalBody>
        {props.appData &&
        props.appData.demoModal &&
        props.appData.demoModal.bodyContent ? (
          <p className="text-center pt-3 pb-3">
            {props.appData.demoModal.bodyContent}
          </p>
        ) : null}

        <Form>
          <Row>
            {props.appData &&
            props.appData.demoModal &&
            props.appData.demoModal.formFields
              ? props.appData.demoModal.formFields.map((item, index) => (
                  <Col md={item.containerSize} key={index}>
                    <FormGroup>
                      {item.label ? (
                        <Label>
                          {item.required ? (
                            <span className="req">*</span>
                          ) : null}{" "}
                          {item.label && item.label}
                        </Label>
                      ) : null}

                      <Input
                        type={item.type}
                        name={item.name}
                        placeholder={item.placeholder}
                        required={item.required ? item.required : null}
                        rows={item.rows ? item.rows : null}
                      />
                    </FormGroup>
                  </Col>
                ))
              : null}
          </Row>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button className="btn-aqua">
          {props.appData.demoModal.formFieldsSubmit}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default DemoModal;
