<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn label="Full Width" color="primary" @click="fullWidth = true" />
    <q-dialog v-model="fullWidth" full-width>

      <q-card>

        <q-card-section>
          <div class="text-h6">Full Width</div>
        </q-card-section>

        <q-card-section class="q-pt-none" >
          <div class="q-pa-md">
            <q-table
                v-for="customer in [customers]"
                :key="customer"
                :rows="customer"
                row-key="name"
            />
          </div>
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="Закрыть" v-close-popup />
        </q-card-actions>

      </q-card>

    </q-dialog>
  </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
import config from '../../config.json'
export default {
  name: 'dialog-menu',
  data() {
    return {
      customers: [],
    }
  },
  methods: {
    async getAllStarWarsPeople () {
      const res = await axios.get(config.api.customers)
      this.customers = res.data
    }
  },
  created() {
    this.getAllStarWarsPeople();
  },
  setup () {
    return {
      fullWidth: ref(false),
    }
  }
}
</script>
