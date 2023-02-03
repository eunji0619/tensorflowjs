<template>
  <div>1.실시간 환율 API</div>
  원화로 계산할 달러는 <input v-model="input" /> 달러
  <div>현시세 : 1달러에 {{ onedollar }}원 입니다.</div>
  <br />
  <div>입력하신 {{ input }} 달러에 {{ result }}</div>
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
        "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD";

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

<style></style>
