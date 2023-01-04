

<script>
    import {isFinished, isStarted} from "../../stores.js";

    import NotStartedMenu from "./NotStartedMenu.svelte";
    import StartedMenu from "./StartedMenu.svelte";
    import FinishedMenu from "./FinishedMenu.svelte";

    import StartStopButton from "../../components/StartStopButton.svelte";
</script>


<svelte:head>
    <title>Experiment</title>
    <meta name="description" content="Pomodoro"/>
</svelte:head>

<div class="text-column">
    <h1>Pomodoro productivity timer.</h1>

    {#if $isStarted}
        <StartedMenu />
    {:else if $isFinished}
        <FinishedMenu />
        <NotStartedMenu />
    {:else}
        <NotStartedMenu />
    {/if}

    <StartStopButton />


</div>



<style>
    div { display: flex; flex-direction: column}
</style>