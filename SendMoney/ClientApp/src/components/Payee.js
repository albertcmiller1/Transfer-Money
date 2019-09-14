import React, { Component } from "react";
import { AddPayee } from './AddPayee';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

export class Payee extends Component {
    constructor(props) {
        super(props)
        this.state = {
            btnClicked: true                    
        };
       
        this.clickBtn = this.clickBtn.bind(this);
        this.payeeAdded = this.payeeAdded.bind(this);
    }

    //this will let us add new payees to the list
    payeeAdded(newPayees) {
        this.setState({
            btnClicked: !this.state.btnClicked,
        });
        this.props.payeeAdded2(newPayees);
    }

    clickBtn() {
        this.setState({
            btnClicked: !this.state.btnClicked
        });
    }

    render() {
        return (
            <div>

                {this.state.btnClicked ? (

                    <div>
                        <h2>
                            Payees
                        </h2>

                        <ListGroup>
                            {this.props.Data.map(p=>(
                                <ListGroupItem key={p.payeeAccount}>{p.payeeName}</ListGroupItem>)
                            )}                                                       
                        </ListGroup>


                        <br />
                        <div>
                            <Button color="primary" onClick={this.clickBtn} size="lg">Add Payee</Button>                           
                        </div>

                    </div>

                ) : (< AddPayee goBack={this.clickBtn} payeeAdded={this.payeeAdded} />) } 
                            
            </div>
        );
    }
}

