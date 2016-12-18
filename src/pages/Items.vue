<template>
  <div class="container">
    <div class="columns">
      <div class="column col-12">
        <h4 class="text-center">Bingo Card Items</h4>
      </div>
      
      <div class="column col-12">
        <router-link :to="{ name: 'start'}">Back</router-link>
      </div>

      <div class="column col-12">
        <table class="table">
          <tr v-for="(item, index) in list">
            <td><h2>{{ index }}</h2></td>
            <td><img class="img-responsive img" :src="item.path"></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img {width: 120px}
</style>

<script>
  import list from 'src/assets/list'

  export default {
    name: 'items',
    data: function () {
      return {
        list
      }
    }
  }
</script>