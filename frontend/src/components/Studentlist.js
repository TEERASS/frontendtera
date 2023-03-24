import React, { Component } from 'react'
import axios from 'axios'
import  Table  from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

export default class Studentlist extends Component {
  constructor(props){
    super(props)
    this.state = {
      students: []

    }
  }

    componentDidMount(){
      this.getAllStudentS()
    }

    getAllStudentS(){
      axios.get('http://localhost:5000/students/')
      .then(res => {
        this.setState({
          students: res.data
        })
      }).catch((error)=>{ console.log(error)})
    }

    deteteStudent = (id) => {axios.delete('http://localhost:5000/students/delete-student/' + id).then((res) => {this.getAllStudentS()
  
  }).catch((error)=>{ console.log(error)})
 }
  
  render() {
    return (
      <div>
        <h5>experience</h5>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>NO.</th>
              <th>COURSE</th>
              <th>ABOUT</th>
              <th>GAIN</th>
              <th>SKILL</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {
                this.state.students.map((res,index) => (
                <tr key={res._id}>
                  <td>{index + 1}</td>
                  <td>{res.code}</td>
                  <td>{res.firstname}</td>
                  <td>{res.lastname}</td>
                  <td>{res.skill}</td>
                  <td>
                    <Link className='btn btn-warning sm' path={"edit-student/:id"} to={"/edit-student/" + res._id}>Edit</Link>
                    {' '}
                    <Button className='btn btn-danger sm' onClick={() => { window.confirm('Are you sure delete?') && 
                    this.deteteStudent(res._id)}}>Delete</Button>
                  </td>
                </tr>
                
                ))}
          </tbody>
        </Table>
      </div>

    )
  }
}