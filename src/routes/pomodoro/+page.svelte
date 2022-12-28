<svelte:head>
    <title>Experiment</title>
    <meta name="description" content="Pomodoro"/>
</svelte:head>


<script>
    let pomLength = 25;

    function startPom() {
        console.log("imagine it started.")
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



<style>

</style>