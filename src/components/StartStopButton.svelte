<script>
    import {isStarted} from "../stores.ts";
</script>

<button on:click={isStarted.update((n) => !$isStarted)}>
    {#if $isStarted}
        Stop
    {:else}
        Start
    {/if}
</button>