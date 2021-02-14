<template>
  <div>
    <h1>Client</h1>
    <iframe width="0" height="0" frameborder="0" src="http://localhost:8080/hub"></iframe>
    <button @click="getValue">Get value</button>
  </div>
</template>

<script>

export default {    
  beforeMount() {
    window.onmessage = function(e) {
      if (e.origin != "http://localhost:8080") {
        return;
      }
      alert(e.data);
    };
  },
  methods: {
    getValue() {
        const iframe = document.getElementsByTagName('iframe')[0];
        let win;
        // some browser (don't remember which one) throw exception when you try to access
        // contentWindow for the first time, it work when you do that second time
        try {
          win = iframe.contentWindow;
        } catch(e) {
          win = iframe.contentWindow;
        }
        const obj = {
          token: Math.random().toString(36).substring(7)
        };
  
        win.postMessage(JSON.stringify({key: 'storage', method: "get", data: obj}), "*");    
    }
  }
}
</script>