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
import config from '../../config.json'


export default {
  name: 'TableComponent',
  components: {
    Toolbar
  },
  data () {
    return {
      customers: [],
      search: "",
      id: ''
    }
  },
  methods: {
    async getAllStarWarsPeople() {
      const res = await axios.get(config.api.customers)
      if (this.search) {
        this.customers = res.data.filter(data =>
        data.name.toLowerCase().includes(this.search.toLowerCase()) ||
        data.second_name.toLowerCase().includes(this.search.toLowerCase()) ||
        data.pin.toLowerCase().includes(this.search.toLowerCase()) ||
        data.ref_id.toLowerCase().includes(this.search.toLowerCase()) ||
        data.customer_id.toLowerCase().includes(this.search.toLowerCase())
        );
      } else {
        this.customers = res.data;
      }
    },
    eventOne(evt, row){
      this.$store.commit('getId', row.customer_id)
      this.$router.push('/dialog')
    },
  },
  created() {
    this.getAllStarWarsPeople();
  }
}
</script>
<style scoped="scoped">

</style>
