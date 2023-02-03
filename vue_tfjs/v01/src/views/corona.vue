<template>
  <div>공공API 코로나데이터</div>
  <button @click="test">console 환경변수 테스트</button>
  <hr />
  <select name="sel" id="selbox" v-model="local">
    <option value="부산">부산</option>
    <option value="대전">대전</option>
    <option value="대구">대구</option>
    <option value="광주">광주</option>
    <option value="서울">서울</option>
  </select>
  <select name="sel2" id="selbox2" v-model="day">
    <option value="어제">어제</option>
    <option value="오늘">오늘</option>
  </select>
  <button @click="getCorona">
    {{ day }} {{ local }} 지역 코로나 데이터 가져오기
  </button>
  <div>{{ corona }}</div>
</template>

<script>
/* eslint-disable */
export default {
  name: "app",
  data() {
    return {
      local: "부산",
      corona: "",
      day: "어제",
    };
  },
  methods: {
    test: function () {
      console.log(process.env.VUE_APP_pkey);
    },
    getCorona: function () {
      const key = process.env.VUE_APP_pkey;
      // console.log(key);

      const surl =
        "http://apis.data.go.kr/1352000/ODMS_COVID_04/callCovid04Api?serviceKey=" +
        key +
        "&pageNo=1&numOfRows=5&apiType=JSON";
      this.corona = "데이터 로드 중...";

      console.log(surl);
      fetch(surl)
        .then((res) => res.json())
        .then((body) => {
          const _ = body;
          console.log(_);
          const totalnum = "누적 확진자 수 : " + body.items[1].defCnt;
          // const region = "지역 : " + items[1].gubun;
          // const indec = "전일대비 확진자 증감수 : " + items[1].incDec;
          this.corona = totalnum;
        });
    },
  },
};
</script>

<style></style>
