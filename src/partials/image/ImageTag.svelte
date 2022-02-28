<script>
  import { onMount } from 'svelte';

  export let src;
  export let alt;
  export let classes;

  let loaded = false;
  let thisImage;

  onMount(
    () => {
      thisImage.onload = () => {
        loaded = true;
      };
    }
  );
</script>

<img {src} {alt} class:loaded bind:this={thisImage} loading="lazy" class={classes} />

<style>
  img {
    height: 200px;
    opacity: 0;
    border: 1px solid #00000082;
    border-radius: 3px;
    transition: opacity 1200ms ease-out;
  }
  img.loaded {
    opacity: 1;
    border: none;
  }
</style>