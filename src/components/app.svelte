<App params={ f7params }>

    <View main class="safe-areas" url="/loading/"/>

</App>
<script>
    import {onMount} from 'svelte';

    import {
        f7ready,
        App,
        View,
    } from 'framework7-svelte';
    import api from '@/js/api'

    import routes from '../js/routes';

    let f7params = {
        name: 'Delse',
        theme: 'ios',
        routes: routes,
    };

    onMount(() => {
        f7ready((app) => {
            let f7router = app.views.main.router;
            document.app = app;
            api.get('users/api/mobile/Account/GetAccountInfo')
                    .then((response) => {
                        if (response.status === 401) {
                            api.get('users/api/Token/Refresh')
                                    .then((response) => {
                                        if (response.status === 200) {
                                            localStorage.setItem("token", response.accessToken);
                                            localStorage.setItem("refreshToken", response.refreshToken);
                                            f7router.navigate('/user/', {animate: false});
                                        } else {
                                            f7router.navigate('/login/', {animate: false});
                                        }
                                    })
                        } else {
                            f7router.navigate('/user/', {animate: false});
                        }
                    })
        });
    })
</script>