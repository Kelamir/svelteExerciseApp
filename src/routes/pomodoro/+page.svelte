<svelte:head>
    <title>Experiment</title>
    <meta name="description" content="Pomodoro"/>
</svelte:head>


<script>

    let inputMinutes = 25;

    let start = new Date().getTime() / 1000;
    $: end = start + (inputMinutes * 60);

</script>


<div class="text-column">
    <h1>Pomodoro productivity timer.</h1>

    <label>
        <input type="range" bind:value={inputMinutes} min=10 max=120>
    </label>
    <p>Pom length: {inputMinutes}</p>
    <p>difference: {(end - start) / 60} minutes</p>

    <p>current date: {start}</p>
    <p>date to finish: {end}</p>
</div>



<style>
    button { width: fit-content}
    div { display: flex; flex-direction: column}
</style>