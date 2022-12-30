<script>
    import {inputMinutes, isStarted, countdown} from "./stores.ts";

    export function startPom() {
        $isStarted = true;
        let start = new Date().getTime() / 1000;
        let end = start + (inputMinutes * 60);
        let countdown = end - start;

        let interval = setInterval(() => {
            $countdown.update(n => n - 1);
        }, 1000);
    }

</script>

<div>
    <p>Pomodoro has been started.</p>
</div>