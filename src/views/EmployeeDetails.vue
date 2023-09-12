<template>
    <div class="card mt-4">
        <div class="card-body">
            <h5 class="card-title">{{ employee.name }}</h5>
            <p class="card-text"><strong>Email:</strong> {{ employee.email }}</p>
            <p class="card-text"><strong>Dirección:</strong> {{ employee.address }}</p>
            <p class="card-text"><strong>Teléfono:</strong> {{ employee.phone }}</p>
            <p class="card-text"><strong>Posicion:</strong> {{ employee.position }}</p>
            <p class="card-text"><strong>Salario:</strong> {{ employee.salary }}</p>
            <p class="card-text"><strong>Habilidades:</strong> {{ employee.skills }}</p>
        </div>
    </div>
</template>

<script>
import EmployeeService from '../services/EmployeeService';

export default {

    data() {
        return {
            employee: [],
            id: 0 
        }
    },
    methods: {
        async getEmployee(id) {
            const service = new EmployeeService();
            service.getEmployeebyId(id).then((response) => {
                this.employee = response
            });
        },
    },
    created(){
        this.id = this.$route.params.id
    },
    mounted() {
        this.getEmployee(this.id)
    },
}

</script>
