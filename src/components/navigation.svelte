<Block class="main_navigation">
    <Link href="/ride/" class="{current === 'ride' ? 'active' : ''}" on:click="{() => current = 'ride'}">
        <img src="../static/images/nav_1.svg" alt="Nav">
    </Link>
    <Link href="/bid/" class="{current === 'bid' ? 'active' : ''}" on:click="{() => current = 'bid'}">
        <img src="../static/images/nav_2.svg" alt="Nav">
    </Link>
    <div class="nav_middle">
        <Link href="/user/" class="{current === 'user' ? 'active' : ''}" on:click="{() => current = 'user'}">
            <img src="../static/images/nav_3.svg" alt="Nav">
        </Link>
    </div>
    <Link href="/package/" class="{current === 'package' ? 'active' : ''}" on:click="{() => current = 'package'}">
        <img src="../static/images/nav_4.svg" alt="Nav">
    </Link>
    <Link href="/notifications/" class="{current === 'notifications' ? 'active' : ''}" on:click="{() => current = 'notifications'}">
        <img src="../static/images/nav_5.svg" alt="Nav">
    </Link>
</Block>

<script>
    import {
        Block,
        Link,
    } from 'framework7-svelte';

    let current = 'user';
</script>