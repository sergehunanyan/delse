<App params={ f7params } >

  <!-- Your main view, should have "view-main" class -->
  <View main class="safe-areas" url="/" />

</App>
<script>
  import { onMount } from 'svelte';

  import {
    f7,
    f7ready,
    App,
    View,
  } from 'framework7-svelte';

  import routes from '../js/routes';

  let f7params = {
    name: 'Delse',
    theme: 'ios',
    routes: routes,
  };

  onMount(() => {
    f7ready(() => {

    });
  })
</script>