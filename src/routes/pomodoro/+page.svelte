<svelte:head>
    <title>Experiment</title>
    <meta name="description" content="Pomodoro"/>
</svelte:head>


<script>
    let pomLength = 25;
    let log = "Pom wasn't started."


    function startPom() {
        log = "Time passed instantly. You are finished with work." +
              " Don't trust what your clock is telling you"
    }
</script>


<h1>Pomodoro productivity timer.</h1>

<label>
    <input type="number" bind:value={pomLength} min=10, max=120>
    <input type="range" bind:value={pomLength} min=10, max=120>
</label>

<button on:click={startPom}>
    start pomodoro
</button>

<p>Log: {log}</p>



<style>

</style>