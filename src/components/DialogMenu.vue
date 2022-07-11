<template>
  <Toolbar/>
  <div class="text-h5"> Журнал пользователя: </div>

<!--  <div style="display: flex" v-for="customer in customer">         перебор данных пользователя-->
<!--    <div class="text-h6"> {{customer.name }} </div>-->
<!--  </div>-->

  <q-card-section class="q-pt-none" >
    <div class="q-pa-md">
      <q-table
          v-for="customer in customers"
          :key="customer"
          :rows="customer"
          row-key="name"
      />
    </div>
  </q-card-section>
</template>

<script>
import Toolbar from '@/components/Toolbar'
import axios from 'axios'
import config from '../../config.json'
export default {
  name: 'dialog-menu',
  components: {
    Toolbar,
  },
  data() {
    return {
      customers: [],
      customer: []
    }
  },
  methods: {
    async getAllStarWarsPeople () {
      const res = await axios.get("http://localhost:3000/customers")
      this.customers = [res.data]
      this.customer = res.data
    }
  },
  created() {
    this.getAllStarWarsPeople()
    console.log('this.store.state.id===', this.$store.getters.getOne)// возврощает id клиента
  }
}
</script>
