<template>
    <q-toolbar class="bg-secondary text-white shadow-2">
      <p class="text-h5 cursor" @click="$router.push('/')">Verigram</p>
      <q-space />
      <q-tabs >
            <q-tab
                class="customers"
                label="Клиенты"
                @click="$router.push('/')"
            />
            <q-tab
                class="customers"
                label="Журнал"
                @click="$router.push('/logs')"
            />
      </q-tabs>
    </q-toolbar>

</template>

<script>
export default {
  name: 'ToolbarComponent',
  components: {},
  methods:{},
  mounted (){}
}
</script>
<style scoped="scoped">
.customers{
  text-decoration: none;
  color: yellow;
}
.cursor:hover{
  cursor: default;
}

</style>
