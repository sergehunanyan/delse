<Block class="profile_heading">
    <Link class="back_to_user" href="/user/">
        <img src="../static/images/back.svg" alt="Back">
    </Link>
    <h2>{heading}</h2>
</Block>

<script>
    import {
        Block,
        Link
    } from 'framework7-svelte';

    export let heading = '';
</script>