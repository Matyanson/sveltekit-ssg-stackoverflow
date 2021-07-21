<script lang="ts">
import { onMount } from "svelte";
import { username } from "../store";


    let m = {x: 0, y: 0};

    const handleMousemove = (e: MouseEvent) => {
        m.x = e.clientX;
        m.y = e.clientY;
    }
</script>

<h1>Dynamic</h1>
<p>the content bellow is rendered by JS.</p>

<p>{`${m.x} : ${m.y}`}</p>

<input type="text" placeholder="Enter Username" bind:value={$username} />
<p>{$username}</p>

<svelte:window on:mousemove={handleMousemove} />