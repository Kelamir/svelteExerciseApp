

<script>
    import {isFinished, isStarted} from "../stores.js";

    import SetDuration from "../components/SetDuration.svelte";
    import InProgressPomodoro from "../components/InProgressPomodoro.svelte";
    import FinishedMenu from "../components/FinishedMenu.svelte";

    import StartStopButton from "../components/StartStopButton.svelte";
</script>


<svelte:head>
    <title>Experiment</title>
    <meta name="description" content="Pomodoro"/>
</svelte:head>

<div class="text-column">
    <h1>Pomodoro productivity timer.</h1>

    {#if $isStarted}
        <InProgressPomodoro />
    {:else if $isFinished}
        <FinishedMenu />
        <SetDuration />
    {:else}
        <SetDuration />
    {/if}

    <StartStopButton />


</div>



<style>
    div { display: flex; flex-direction: column}
</style>