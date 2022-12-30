<script>

    import {boolean} from "svelte-check";
    let minAge = 1;
    let maxAge = 5000;
    export let dragons = ["Ruffle", "Kaeli", "Dinwua"];
    const dragon = {
        name: "",
        age: "",
        summoned: boolean,
        minAge: 1,
        maxAge: 5000,
    }
    function toggleDragon() {
        dragon.summoned = !dragon.summoned;
        if (dragon.summoned) {
            dragon.name =
            dragon.age = Math.random() * (maxAge - minAge) + minAge;

        }
    }

</script>

<input />

{#if summoned}
    <Button onClick={}>
        Summon a dragon.
    </Button>
{:else}
    <Button onClick={}>
        Send dragon away.
    </Button>
{/if}


<style>

</style>