<template>
  <div class="fixed-center text-center q-pa-md">
    <h1 class="q-ma-md">
      <strong>404</strong>
    </h1>
    <h5 class="q-ma-md">
      抱歉，什么也没有 ...
    </h5>
    <q-btn
      color="secondary"
      style="width:200px;"
      @click="$router.push('/')"
    >
      返回
    </q-btn>
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>
