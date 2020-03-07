new Vue({
  el: "#app",
  data() {
    return {
      rates: null,
      base: {},
      date: null
    };
  },
  created() {
    axios
      .get("https://api.exchangeratesapi.io/latest")
      .then(response => {
        this.rates = response.data.rates;
        this.base = response.data.base;
        this.date = response.data.date;
        console.log(this.rates);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
});
