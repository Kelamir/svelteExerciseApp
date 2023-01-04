

<script>
    import {isFinished, isStarted} from "../../stores.js";

    import NewPomodoro from "./NewPomodoro.svelte";
    import InProgressPomodoro from "./InProgressPomodoro.svelte";
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
        <InProgressPomodoro />
    {:else if $isFinished}
        <FinishedMenu />
        <NewPomodoro />
    {:else}
        <NewPomodoro />
    {/if}

    <StartStopButton />


</div>



<style>
    div { display: flex; flex-direction: column}
</style>