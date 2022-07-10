<template>
    <q-toolbar class="bg-secondary text-white shadow-2">
      <p class="text-h5">Verigram</p>
      <q-space />

      <div class="q-pa-md q-gutter-sm">
        <router-link class="customers" to="/" >
            <q-btn flat style="color: yellow" label="Клиенты" />
        </router-link>
        <router-link class="customers" to="/logs" >
          <q-btn flat style="color: yellow" label="Журнал" />
        </router-link>
      </div>

    </q-toolbar>

</template>

<script>
export default {
  name: 'ToolbarComponent',
  components: {},
  methods:{
  },
  mounted (){}
}
</script>
<style scoped="scoped">
.customers, .logs{
  text-decoration: none;
  color: yellow;
}
</style>
