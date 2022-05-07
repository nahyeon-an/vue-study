<template>
    <div class="list">
        <h1>Test for mock api ('/list')</h1>
        <div>
            <table>
                <thead>
                <tr>
                <th>이름</th>
                <th>나이</th>
                <th>도시</th>
                </tr>
                </thead>
                <tbody>
                <tr :key="index" v-for="(person, index) in peopleList">
                <td>{{person.name}}</td>
                <td>{{person.age}}</td>
                <td>{{person.city}}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import mixins from '@/mixins';

export default {
  mixins: [mixins],
  data() {
    return {
      peopleList: []
    };
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      this.peopleList = await this.$api("https://e7e11338-b727-4fe7-ba46-f67c4b22f6c1.mock.pstmn.io/list", "get");
      console.log(this.peopleList);
    }
  }
}
</script>

<style scoped>
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
</style>

