import React, { Component } from "react";
import { Button, Dropdown, DropdownToggle, DropdownMenu, FormGroup, Label, Input, DropdownItem, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import './style.css';

export class SendMoney extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
            inputName: '',
            inputMemo: '',
            inputDate: '',
            inputAmount: ''
        };
        this.postPayment = this.postPayment.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleChange4 = this.handleChange4.bind(this);
    }

    handleChange(e) {
        this.setState({ inputName: e });
    }
    handleChange2(event) {
        this.setState({ inputMemo: event.target.value });
    }
    handleChange3(event) {
        this.setState({ inputDate: event.target.value });
    }
    handleChange4(event) {
        this.setState({ inputAmount: event.target.value });
    }

    postPayment() {
        const PostURL = "api/payment/add";

        fetch(PostURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                paymentName: this.state.inputName,
                paymentAmount: this.state.inputAmount,
                paymentMemo: this.state.inputMemo,
                paymentDate: this.state.inputDate
            })
        })
            .then(r => {
                return r.json();
            })
            .then(r2 => {
                console.log("Payment Data sent up:", r2);
            });
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        return (
            <div>
                <h2>
                    Send Money
                </h2>
                <br />
                <div id="poop">
                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle caret color="primary" >
                            Select Payee
                                </DropdownToggle>
                        <DropdownMenu>
                            {this.props.Data.map(p => (
                                <DropdownItem
                                    key={p.payeeAccount}
                                    onClick={() => this.handleChange(p.payeeName)}
                                >
                                    {p.payeeName}
                                </DropdownItem>)
                            )}
                        </DropdownMenu>
                    </Dropdown>

                    &nbsp; &nbsp;<h4> {this.state.inputName}</h4>
                </div>
                <br />
                <div>
                    <FormGroup>
                        <Label for="exampleDate">Select Date</Label>
                        <Input
                            type="date"
                            name="date"
                            id="exampleDate"
                            placeholder="date placeholder"
                            onChange={this.handleChange3}
                        />
                    </FormGroup>
                </div>
                <br />
                <div>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>$</InputGroupText>
                        </InputGroupAddon>
                        <Input
                            placeholder="Enter Amount Here"
                            onChange={this.handleChange4} />
                        <InputGroupAddon addonType="append">
                            <InputGroupText>$</InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                </div>
                <br />
                <div>
                    <FormGroup>
                        <Label for="exampleText">Enter Memo:</Label>
                        <Input type="textarea" name="text" id="exampleText" onChange={this.handleChange2} />
                    </FormGroup>
                </div>
                <div>
                    <Button color="primary" size="lg" onClick={this.postPayment.bind(this)}>Send Payment</Button>
                </div>
                <br />
            </div>
        );
    }
}

//When the user picks a payee, the dropdown should then diplay that company
//cool addon would be to change the color="primary" to color="success" on the submit button