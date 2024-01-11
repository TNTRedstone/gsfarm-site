<script>
    import Countdown from './countdown.svelte';
    let countdowns = [
        { date: '1/10/2024', label: "Calvin's birthday" }
        // Add more countdowns as needed
    ];
</script>
<main>
    <h1 class="sm:text-sm md:text-md lg:text-lg xl:text-xl">Countdowns:</h1>
    <div class="grid gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 m-1">
        {#each countdowns as card}
            <Countdown date={card.date} label={card.label} />
        {/each}
    </div>
</main>
