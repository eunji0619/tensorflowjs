<template>
  <button @click="getData">명령 후 데이터 가져오기</button>
  <div v-html="data"></div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      data: "",
    };
  },
  methods: {
    getData: function () {
      this.data = "크롤링 중....";
      axios.get("/hak").then((res) => {
        this.data = res.data;
      });
    },
  },
};
</script>

<style></style>
