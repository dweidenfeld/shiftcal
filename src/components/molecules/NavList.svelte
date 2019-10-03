<script>
  import NavEntry from "../atoms/NavEntry.svelte";

  export let routes = [];
  export let segment = undefined;
</script>

<ul>
  {#each routes as route}
    <NavEntry {segment} {...route} />
  {/each}
</ul>
