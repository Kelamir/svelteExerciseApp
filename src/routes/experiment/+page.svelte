<svelte:head>
    <title>Experiment</title>
    <meta name="description" content="Experiments upon this app" />
</svelte:head>

<script>
    let greeting  = "Welcome";

    let linkDucks = "<a href='https://duck.com'>Ducks</a>"
    function handleClick() {
        alert("Button pressed unfortunately.")
    }
</script>

<div class="text-column">
    <h1>Experiments lab</h1>

    <p>10am. Initiating experiment.</p>

    <p>
        {greeting}! This is a wild place for experiments. 1 + 1 = {1 + 1} </p>

    <p>hmm is this a link? {@html linkDucks}</p>

    <button on:click={handleClick}>
        Don't click.
    </button>
</div>


<style>
    h1 { color: black; }
    button { width: 100px; }
</style>

