import React, { Component } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { withRouter } from './common/with-router'

class CreateStudent extends Component {
    constructor(props){
        super (props)

        this.state ={
            code:'',
            firstname:'',
            lastnsme:'',
            email:''
        }
    } 

    onChangeStudentCode = (e) => {
        this.setState({ code: e.target.value })

    }

    onChangeStudentFirstname = (e) => {
        this.setState({ firstname: e.target.value })
        
    }

    onChangeStudentLastname = (e) => {
        this.setState({ lastname: e.target.value })
        
    }

    onChangeStudentEmail = (e) => {
        this.setState({ email: e.target.value })
        
    }

    onSubmit = (e) => {
        e.preventDefault()
    
        const studentObject = {
            code: this.state.code,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email
        }
        axios.post('http://localhost:5000/students/create-student', studentObject)
        .then(res => {
            console.log(console.error)
        })
        .catch(error => {
            console.log(console.error)
        })
        this.setState({code:'', firstname:'', lastname:'', email:''})
        
        //alert('your data save')
       // window.location.replace('./student-list')
       this.props.router.navigate('/student-list')
        }

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
            <Form.Group>
                <Form.Label>COURSE</Form.Label>
                <Form.Control type='text' value={this.state.code} onChange={this.onChangeStudentCode}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>ABOUT</Form.Label>
                <Form.Control type='text'value={this.state.firstname} onChange={this.onChangeStudentFirstname}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>SKILL</Form.Label>
                <Form.Control type='text'value={this.state.lastname} onChange={this.onChangeStudentLastname}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>ATION</Form.Label>
                <Form.Control type='email'value={this.state.email} onChange={this.onChangeStudentEmail}/>
            </Form.Group>
            <Form.Group className="text-center mt-3">
                <Button variant='primary' type='submit'>
                    Create
                </Button> 
            </Form.Group>      
        </Form>
      </div>
    )
  }
}

export default  withRouter (CreateStudent)