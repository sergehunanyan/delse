<Page name="user" class="user_page">

    <ProfileHeading heading={content.policyName} route={f7router}/>

    <Block class="user_rating_block">
        <p>{content.description}</p>
    </Block>
</Page>

<script>
    import ProfileHeading from '@/components/profileHeading.svelte'
    import {
        Page,
        Block
    } from 'framework7-svelte';
    import api from '@/js/api'

    export let f7router;
    let content = '';

    api.get('users/api/Policies/GeneralRule?lang=1') // lang_id
            .then((response) => {
                content = response
            })
</script>