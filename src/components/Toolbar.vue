<template>
    <q-toolbar class="bg-secondary text-white shadow-2">
      <p class="text-h5">Verigram</p>
      <q-space />
      <q-tabs >
        <router-link to="/" class="customers">
            <q-tab label="Клиенты" />
        </router-link>
        <router-link to="/logs" class="customers">
            <q-tab  label="Журнал" />
        </router-link>
      </q-tabs>
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
.customers{
  text-decoration: none;
  color: yellow;
}

</style>
