<script>
    import {isTimeToResetInterval, isStarted} from "../stores.js";

    function handleClick() {
        if ($isStarted) {
            isStarted.set(false);
            isTimeToResetInterval.set(true)
        } else {
            isStarted.set(true);

        }

    }

</script>

<button on:click={handleClick}>
    {#if $isStarted}
        Stop
    {:else}
        Start
    {/if}
</button>