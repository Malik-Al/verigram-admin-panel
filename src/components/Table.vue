<template>
  <Toolbar/>
  <p class="text-h5">Cписок клиентов</p>
  <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 300px">
      <q-input
          color="teal"
          v-model.trim="search"
          label="Search ..."
          @keyup="getAllStarWarsPeople"
      />
    </div>
  </div>

  <br />

  <div class="q-pa-md">
    <q-table
        v-for="customer in [customers]"
        :key="customer"
        :rows="customer"
        row-key="name"
        @row-click="eventOne"
    />
  </div>
</template>

<script>
import Toolbar from '@/components/Toolbar'
import axios from 'axios'
export default {
  name: 'TableComponent',
  components: {
    Toolbar
  },
  data () {
    return {
      customers: [],
      search: ""
    }
  },
  methods: {
    async getAllStarWarsPeople() {
      const res = await axios.get('http://localhost:3000/customers')
      if (this.search) {
        this.customers = res.data.filter(people =>
        people.name.toLowerCase().includes(this.search.toLowerCase()) ||
        people.second_name.toLowerCase().includes(this.search.toLowerCase()) ||
        people.pin.toLowerCase().includes(this.search.toLowerCase()) ||
        people.ref_id.toLowerCase().includes(this.search.toLowerCase()) ||
        people.customer_id.toLowerCase().includes(this.search.toLowerCase())
        );
      } else {
        this.customers = res.data;
      }
    },
    eventOne(evt, row){ // возврат по полю pin
      console.log('row', row);
    }
  },
  created() {
    this.getAllStarWarsPeople();
  }
}
</script>
<style scoped="scoped">

</style>
