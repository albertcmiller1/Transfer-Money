import React, { Component } from 'react';
import { InputGroup, Input, Button } from 'reactstrap';

export class AddPayee extends Component {
    constructor(props) {
        super(props)    

        this.state = {
            inputName: '',
            inputNum: ''
        };

        this.addPayee = this.addPayee.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
    }


    handleChange(event) {
        this.setState({ inputName: event.target.value });
    }
    handleChange2(event) {
        this.setState({ inputNum: event.target.value });
    }


    addPayee() {
        const PostURL = "api/payee/add";
      
        fetch(PostURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ payeeName: this.state.inputName, payeeAccount: this.state.inputNum })
        })
        .then(r => {
            return r.json();
        })
        .then(r2 => {
            console.log("Data sent up to add to list:", r2);
            this.props.payeeAdded(r2);
        });
    }
    
    

    render() {
        return (
            <div>
            <h2>Add New Payee</h2>
                <form onSubmit={this.addPayee}>
                    <InputGroup>
                        <Input placeholder="Payee Name"  onChange={this.handleChange}/>                   
                    </InputGroup>
                    <InputGroup>
                        <Input placeholder="Account Number"  onChange={this.handleChange2}/>                 
                    </InputGroup>
                    <br />
                    <div>
                        <Button color="primary" onClick={this.addPayee.bind(this)} size="lg">Add</Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button size="lg" onClick={this.props.goBack}>Cancel</Button>
                    </div>
                </form>
            </div>                                 
            );
    }
}
//onClick={this.addPayee.bind(this)}
//onClick={this.props.btn}

//value={this.state.inputName} took this out and doesnt seem to affect anything
