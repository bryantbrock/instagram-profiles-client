<script>
  import { fly, fade } from 'svelte/transition';

  export let show = false;
  export let toggleShow = () => {};
</script>

{#if show}
  <div transition:fade>
    <div on:click={toggleShow} class="absolute w-full h-full bg-black opacity-80 overflow-none fixed md:hidden" />
    <div
      on:click={toggleShow}
      class={`
        flex md:hidden cursor-pointer absolute
        ${show ? 'left-8' : 'right-8'} top-8 w-5 h-5
      `}>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
  </div>
  <div transition:fly id="inner" class="md:hidden">
    <slot></slot>
  </div>
{/if}

<style>
  #inner {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    padding: 2rem 1rem 0.6rem;
    border-left: 1px solid #aaa;
    background: #fff;
    overflow-y: auto;
    width: 70%;
    max-width: 300px;
  }
</style>