<template>
  <div>
    <h1>API client</h1>    
    <button @click="fetchData">Fetch Data</button>   
     <div id='board'></div>
  </div>
</template>

<script>
   export default {
    beforeMount() {

    },
    methods: {
      fetchData() {
        fetch('https://api.mylocal:3000/api/products', {credentials: 'include'})
        .then(response => response.json())
        .then(data => {
            const element = document.getElementById("board");
            element.innerHTML = JSON.stringify(data);
        });
      }
    }
  }
</script>