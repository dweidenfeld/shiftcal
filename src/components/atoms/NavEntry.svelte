<script>
  export let name = undefined;
  export let href = undefined;
  export let segment = undefined;
  export let prefetch = false;
  export let selectByDefault = false;

  let selected = false;
  if (segment === undefined && selectByDefault) {
    selected = true;
  } else if (segment === name) {
    selected = true;
  }
</script>

{#if name && href}
  <li>
    <a class={selected && 'selected'} {href} rel={prefetch && 'prefetch'}>
      {name}
    </a>
  </li>
{/if}
