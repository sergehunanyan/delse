<Block class="profile_heading">
    <Link class="back_to_user" onClick={() => route.back()}>
        <svg version="1.2" xmlns="http://www.w3.org/2000/svg" overflow="visible" preserveAspectRatio="none" width="18" height="18"><path d="M9 1l6.88 12H2.12L9 1z" vector-effect="non-scaling-stroke" stroke="#000" fill="transparent"/></svg>
    </Link>
    <h2>{heading}</h2>
</Block>

<script>
    import {
        Block,
        Link
    } from 'framework7-svelte';

    export let route;
    export let heading = '';
</script>