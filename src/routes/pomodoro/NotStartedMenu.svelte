<script>
    import {interval, inputMinutes, countdown} from "./stores.ts";
    import StartedMenu from "./StartedMenu.svelte";

    export let started = false;


    export function startPom() {
        started = !started;
        let start = new Date().getTime() / 1000;
        let end = start + (inputMinutes * 60);

        countdown.set(end - start);

        let interval = setInterval(() => {
            countdown.update(n => n - 1);
        }, 1000);
    }

</script>


<div>
    <label>
        <input type="range" bind:value={$inputMinutes} min=9 max=120 step=5>
    </label>
    <p>Pom length: {inputMinutes}</p>

    <button on:click={startPom}>
        Start
    </button>
    <p>Countdown: {$countdown}</p>
</div>

