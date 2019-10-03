<script>
  import NavList from "../molecules/NavList.svelte";

  export let segment = undefined;
</script>

<style>

</style>

<nav>
  <NavList
    {segment}
    routes={[{ name: 'home', href: '.', selectByDefault: true }, { name: 'about', href: 'about' }]} />
</nav>
