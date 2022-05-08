<template>
  <div class="list">
    <h1>Test for mock api</h1>
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
            <td>{{ person.name }}</td>
            <td>{{ person.age }}</td>
            <td>{{ person.city }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { getList } from "@/api";
import { saveUserToCookie } from "@/utils/cookies";

export default {
  data() {
    return {
      peopleList: [],
    };
  },
  created() {
    this.callList();
  },
  methods: {
    async callList() {
      const { data } = await getList();
      this.peopleList = data;
      this.$store.commit("setUsername", this.peopleList[0].name);
      saveUserToCookie(this.peopleList[0].name);
      console.log(this.peopleList);
    },
  },
};
</script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>

