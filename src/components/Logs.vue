<template>
  <Toolbar/>
  <p class="text-h5">Журнал клиентов</p>

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
        v-for="log in [logs]"
        :key="log"
        :rows="log"
        row-key="name"
    />
  </div>
</template>

<script>
import Toolbar from '@/components/Toolbar'
import axios from 'axios'
import config from '../../config.json'
export default {
  name: 'LogsComponent',
  components: {Toolbar},
  data() {
    return {
      logs: [],
      search: "",
      mokData: [
        {
          id: 1,
          name: 'журнал клиента M',
          age: 28,
          gender: 'M',
          date: '2022-20-20'
        },
        {
          id: 2,
          name: 'журнал клиента',
          age: 28,
          gender: 'M',
          date: '2022-20-20'
        },
        {
          id: 3,
          name: 'журнал клиента',
          age: 28,
          gender: 'M',
          date: '2022-20-20'
        },
        {
          id: 4,
          name: 'журнал клиента',
          age: 28,
          gender: 'M',
          date: '2022-20-20'
        },
      ]
    }
  },
  methods: {
    getAllStarWarsPeople() {

      // const res = await axios.get(config.api.logs)
      // if (this.search) {
      //   this.logs = res.data.filter(data =>
      //       data.name.toLowerCase().includes(this.search.toLowerCase())
      //   );
      // } else {
      //   this.logs = res.data;
      // }

      const res = this.mokData
      if (this.search) {
        this.logs = res.filter(data =>
            data.name.toLowerCase().includes(this.search.toLowerCase())
        );
      } else {
        this.logs = res;
      }
    }
  },
  created() {
    this.getAllStarWarsPeople();
  }

}
</script>

<style scoped>

</style>
