<svelte:head>
    <title>Experiment</title>
    <meta name="description" content="Pomodoro"/>
</svelte:head>


<script>
    let pomLength = 25;
</script>

<div>
    <h1>Pomodoro productivity timer.</h1>

    <label>
        <input type="number" bind:value={pomLength} min=10, max=120, step=5>
        <input type="range" bind:value={pomLength} min=10, max=120, step=5>
    </label>
</div>



<style>

</style>