<script>
    export let date;
    export let label = 'Countdown';

    let countdown = [];

    function updateCountdown() {
        let now = new Date();
        let targetDate = new Date(date);
        let differenceInMilliseconds = targetDate.getTime() - now.getTime();

        if (differenceInMilliseconds > 0) {
            let days = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
            let hours = Math.floor(
                (differenceInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            let minutes = Math.floor((differenceInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((differenceInMilliseconds % (1000 * 60)) / 1000);

            countdown = [
                days.toString() + ' days',
                hours.toString() + ' hours',
                minutes.toString() + ' minutes',
                seconds.toString() + ' seconds'
            ];
        } else {
            countdown = ['Event has passed'];
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
</script>

<div class="bg-sky-300 rounded">
    <h2 class="sm:text-sm md:text-md lg:text-lg xl:text-xl">{label}:</h2>
    {#each countdown as event}
        <li class="sm:text-sm md:text-md lg:text-lg">{event}</li>
    {/each}
</div>
