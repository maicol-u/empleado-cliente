<template>
    <div class="container">
      <div class="m-2 col col-sm-6">
        <label for="">Buscar por correo: </label>
        <input type="text" v-model="search" class="form-control" placeholder="Email" v-on:keyup="searchByEmail()">
      </div>
      <hr>
      <div class="m-2 col col-sm-6">
        <label for="">Buscar por rango salarial: </label>
        <input type="text" name="" id="" v-memo="min" placeholder="Salario minimo" class="form-control form-control-sm mb-1">
        <input type="text" name="" id="" v-memo="max" placeholder="Salario maximo" class="form-control form-control-sm">
        <button class="btn btn-dark" v-on:click="findBySalary()">Buscar</button>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Position</th>
            <th scope="col">Salary</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee in employees" :key="employee.id">
            <td>{{ employee.id }}</td>
            <td>{{ employee.name }}</td>
            <td>{{ employee.email }}</td>
            <td>{{ employee.position }}</td>
            <td>$ {{ employee.salary }}</td>
            <td>
              <router-link :to="'/empleado/' + employee.id" class="nav-link"> <button class="btn btn-primary">Ver</button> </router-link> 
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  
  <script>
  import EmployeeService from '../services/EmployeeService';
  
  export default {
    name: 'ListEmployees',
    data() {
      return {
        employees: [],
        search: "",
        min: "",
        max: ""
      }
    },
    methods: {
  
      getAllEmployees() {
        const service = new EmployeeService();
        service.getAllEmployees().then((response) => {
          this.employees = response
        });
      },
  
      searchByEmail() {
        if (this.search.length > 2) {
          const service = new EmployeeService();
          console.log(this.search)
          service.findByEmail(this.search).then((response) => {
            this.employees = response
          }); 
        } else if(this.search.length == 0){
          this.getAllEmployees();
        } 
      },
      findBySalary(){
  
      }
  
    },
    mounted() {
      this.getAllEmployees();
    },
  }
  </script>
  