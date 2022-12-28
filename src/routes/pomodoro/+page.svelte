<svelte:head>
    <title>Experiment</title>
    <meta name="description" content="Pomodoro"/>
</svelte:head>


<script>
    import { writable } from 'svelte/store';
    import { onDestroy } from "svelte";

    let countdown = writable(1500); // 25 minutes default

    function startPomTheProWay() {
        let intervalID = setInterval(() => {
            countdown.update(n => n - 1);
        }, 1000);

        onDestroy(() => {
            clearInterval(intervalID);
        });
    }
</script>


<div>
    <h1>Pomodoro productivity timer.</h1>

    <label>
        <input type="number" bind:value={countdown} min=10 max=120>
        <br>
        <input type="range" bind:value={countdown} min=10 max=120> Minutes
    </label>


    <button on:click={startPomTheProWay}>
        start pomodoro
    </button>

    <p>Countdown: {$countdown}</p>
</div>



<style>
    button { margin-top: 10px; width: fit-content}
    div { display: flex; flex-direction: column}
</style>