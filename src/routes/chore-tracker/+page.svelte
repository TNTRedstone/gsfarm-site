<script>
    let minutes = 15;
    let chore;
    let date;

    function submit() {
        fetch(`http://10.0.0.178:5000/data/${chore}/${minutes}/${date}`, { mode: 'no-cors' });
    }
</script>

<main class="m-2">
    <h1 class="font-sans text-2xl sm:text-3xl">Chore tracker</h1>
    <form>
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label>Chore</label>
        <input
            type="text"
            name="Chore"
            id="chore"
            class="border-black border rounded mb-0.5"
            bind:value={chore}
        /><br />
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label>Minutes</label>
        <input
            type="number"
            name="Minutes"
            id="minutes"
            class="border-black border rounded mb-0.5"
            bind:value={minutes}
        /><br />
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label>Date</label>
        <input
            type="date"
            name="Date"
            id="date"
            class="border-black border rounded mb-0.5"
            bind:value={date}
        /><br />
        <button class="rounded bg-sky-400 p-2 text-center hover:bg-sky-500" on:click={submit}
            >Submit</button
        >
    </form>
</main>
