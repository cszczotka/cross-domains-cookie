// About.vue

<template>
  <div></div>
</template>

<script>
  //import { createIframe } from "cookie-toss";
  // import * as createHub from 'cross-domain-storage/host'
  export default {
    beforeMount() {
      //const dependentDomains = ["localhost:8080", "dom1.local:8080", "dom2.local:8080"];
      //createIframe({ dependentDomains });
      /* createHub([
        {
          origin: 'http://dom1.local:8080',
          allowedMethods: ['get', 'set', 'remove'],
        },
        {
          origin: 'http://dom2.local:8080',
          allowedMethods: ['get', 'set', 'remove'],
        }
      ]);
      */
        window.onmessage = (e) => {
          if (e.origin !== "http://domena1.local:8080" && e.origin !== "http://domena2.local:8080") {
            return;
          }
          var payload = JSON.parse(e.data);
          switch(payload.method) {
            case 'set':
              localStorage.setItem(payload.key, JSON.stringify(payload.data));
              break;
            case 'get':
              var parent = window.parent;
              var data = localStorage.getItem(payload.key);
              parent.postMessage(data, "*");
              break;
            case 'remove':
              localStorage.removeItem(payload.key);
              break;
          }
        }
    }
  }
</script>