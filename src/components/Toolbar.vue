<template>
    <q-toolbar class="bg-secondary text-white shadow-2">
      <p class="text-h5">Verigram</p>
      <q-space />
      <q-btn-toggle
        v-model="model"
        flat stretch
        toggle-color="yellow"
        :options="options"
      />
<!--      <router-link to="/">Home</router-link>-->
<!--      <router-link to="/logs">About</router-link>-->
    </q-toolbar>
  <Table/>
<!--  <Logs/>-->
</template>

<script>
import Table from '@/components/Table'
import Logs from '@/components/Logs'
import { ref } from 'vue'

export default {
  name: 'ToolbarComponent',
  components: {Table, Logs},
  setup () {
    return {
      model: ref('one'),
      options: [
        { label: 'Клиенты', value: 'one' },
        { label: 'Журнал', value: 'two' },
      ]
    }
  },
  methods:{},
  mounted (){}
}
</script>
