<template>
  <div>2.실시간 환율 API</div>
  원화로 계산할 엔은 <input v-model="input" /> 엔
  <div>현시세 : 1엔에 {{ onedollar }}원 입니다.</div>
  <br />
  <div>입력하신 {{ input }} 엔에 {{ result }}</div>
</template>

<script>
/* eslint-disable */
export default {
  name: "app",
  data() {
    return {
      input: 0, // 문자형 지정 가능
      onedollar: 0,
      result: "숫자를 입력해주세요",
    };
  },
  watch: {
    input: function () {
      // 값에 대한 변경을 감시하겠다.
      const dollar = this.input;
      if (isNaN(dollar)) {
        this.result = "계산중...";
        return;
      }
      const url =
        "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWJPY";

      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          this.onedollar = data[0].basePrice;
          const mydata = this.input * this.onedollar;
          this.result = `${mydata.toLocaleString("ko-KR")}`;
        });
    },
  },
  methods: {},
};
</script>

<style>
input {
  width: 80px;
  text-align: right;
  border-style: none;
  font-size: 1em;
  border-bottom: 1px solid cadetblue;
  border-bottom-color: cadetblue;
}
input:focus {
  outline: none;
}
</style>
