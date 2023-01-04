<script>
    import { inputMinutes} from "../stores.js";

</script>


<div>
    <label>
        <input type="range" bind:value={$inputMinutes} min=10 max=120 step=5>
    </label>
    <p>Pom length: {$inputMinutes}</p>


</div>