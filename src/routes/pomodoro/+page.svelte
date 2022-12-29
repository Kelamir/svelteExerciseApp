<svelte:head>
    <title>Experiment</title>
    <meta name="description" content="Pomodoro"/>
</svelte:head>


<script>
    import {writable} from "svelte/store";

    let started = false;

    let interval;
    let inputMinutes = 25;
    $: countdown = writable(inputMinutes * 60);

    function startPom() {
        started = !started;
        let start = new Date().getTime() / 1000;
        let end = start + (inputMinutes * 60);

        countdown = end - start;

        let interval = setInterval(() => {
            countdown.update(n => n - 1);
        }, 1000);
    }

</script>


<div class="text-column">
    <h1>Pomodoro productivity timer.</h1>

    {#if (!started)}
        <label>
            <input type="range" bind:value={inputMinutes} min=9 max=120 step=5>
        </label>
        <p>Pom length: {inputMinutes}</p>

        <button on:click={startPom}>
            Start
        </button>
        <p>Countdown: {$countdown}</p>

        {:else}
        <p>Pom started.</p>
    {/if}

</div>



<style>
    button { width: fit-content}
    div { display: flex; flex-direction: column}
</style>