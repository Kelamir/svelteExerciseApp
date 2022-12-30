<script>
    import { inputMinutes, isStarted } from "./stores.ts";

</script>


<div>
    <label>
        <input type="range" bind:value={$inputMinutes} min=10 max=120 step=5>
    </label>
    <p>Pom length: {$inputMinutes}</p>

    <button on:click={isStarted.update((n) => !$isStarted)}>
        Start
    </button>
</div>


<style>
    button { width: fit-content}
</style>

