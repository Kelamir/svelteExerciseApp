<script>
    import { inputMinutes } from "../../stores.ts";

    let start = new Date().getTime() / 1000;
    $: end = start + ($inputMinutes * 60);
    $: totalSeconds = end - start;
    let minutes = 0
    let seconds = 0

    let timeRemaining = totalSeconds;
        setInterval(() => {
            if (timeRemaining !== 0) {
                const current = new Date().getTime() / 1000
                timeRemaining = end - current;
                minutes = Math.floor(timeRemaining / 60);
                seconds = Math.floor(timeRemaining % 60);
            }
            else console.log("Congrats, pom finished.")

        }, 1000);

</script>

<div>
    <p>Pomodoro has been started.</p>
    <p>Seconds left: {minutes} mins and {seconds} secs</p>
</div>