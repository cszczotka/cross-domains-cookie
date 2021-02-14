<template>
  <div>
    <h1>Home</h1>
    <iframe width="0" height="0" frameborder="0" src="http://localhost:8080/hub"></iframe>
    <button @click="setValue">Set Value</button>    
  </div>
</template>

<script>
  import { set } from "cookie-toss";
  import * as createGuest from 'cross-domain-storage/guest';
  export default {
    beforeMount() {

    },
    methods: {
      async onClick() {
        try {
        const result = await set({
          iframeUrl: 'http://localhost:8080/hub',
          dataKey: 'test',
          data: {
            token: '00-00-11-22-33',
          }
        });
        console.log(result);
        } catch(err) {
          console.log(err);
        }

      },
      
      onClickV2() {
        const bazStorage = createGuest('http://dom1.local:8080/hub');
        bazStorage.set('foo', 'bar', function(error, data) {
            console.log(data, error);
        });  
      },
     setValue() {
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
        cartId: Math.random().toString(36).substring(7)
      };
      // save obj in subdomain localStorage
      win.postMessage(JSON.stringify({key: 'storage', method: "set", data: obj}), "*");
    }

    }
  }
</script>