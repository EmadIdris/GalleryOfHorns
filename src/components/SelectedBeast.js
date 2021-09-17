import React  from "react";
// to show model 
import Modal from 'react-bootstrap/Modal';
// to show close button when i open the model
import Button from 'react-bootstrap/Button';

class  SelectedBeast extends React.Component 
{
    render(){
        return(
            <>
            <Modal show={this.props.show} onHide={this.props.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.sTitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img src={this.props.sImg} alt=""  width='350' />
                        <br />
                        {this.props.sDesc}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.close}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}
export default SelectedBeast;
