<svelte:head>
    <title>Experiment</title>
    <meta name="description" content="Pomodoro"/>
</svelte:head>


<script>
    import NotStartedMenu from "./NotStartedMenu.svelte";
    import StartedMenu from "./StartedMenu.svelte";
    import {started} from "./stores.ts";
</script>


<div class="text-column">
    <h1>Pomodoro productivity timer.</h1>

    {#if $started}
        <StartedMenu />
    {:else}
        <NotStartedMenu />
    {/if}


</div>



<style>
    button { width: fit-content}
    div { display: flex; flex-direction: column}
</style>