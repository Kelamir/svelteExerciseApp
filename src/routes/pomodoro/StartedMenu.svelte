<script>
    import { inputMinutes } from "../../stores.ts";

    let start = new Date().getTime() / 1000;
    $: end = start + ($inputMinutes * 60);
    $: totalSeconds = end - start;
    let minutes = 0;
    let seconds = 0;

    let timeRemaining = totalSeconds;
    const interval = setInterval(() => {
        const current = new Date().getTime() / 1000
        timeRemaining = end - current;
        minutes = Math.floor(timeRemaining / 60);
        seconds = Math.floor(timeRemaining % 60);
        if (timeRemaining === 0) {
            console.log("Congrats, pom finished.");
            clearInterval(interval);
        }

    }, 1000);

</script>

<div>
    <p>Pomodoro has been started.</p>
    <p>Seconds left: {minutes} mins and {seconds} secs</p>
</div>