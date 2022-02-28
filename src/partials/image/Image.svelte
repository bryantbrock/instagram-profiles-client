<script>
  import Observer from 'partials/image/Observer.svelte';
  import ImageTag from 'partials/image/ImageTag.svelte';

  export let src;
  export let alt;
  export let classes;

  let nativeLoading = false;
</script>

<Observer once={true} let:intersecting={intersecting}>
  {#if intersecting || nativeLoading}
    <ImageTag {alt} {src} {classes} />
  {/if}
</Observer>