<template>
  <div class="home">
    <ListEmployees />
  </div>
</template>

<script>
// @ is an alias to /src
import ListEmployees from '@/components/ListEmployees.vue'

export default {
  name: 'HomeView',
  components: {
    ListEmployees
  }
}
</script>
