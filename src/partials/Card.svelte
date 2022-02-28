<script>
  export let title, body, path;
  export let classes = '';
</script>

<div id="card" class={`rounded border border-gray-400 p-4 flex flex-col ${classes}`}>
  <h3 class="my-1 text-lg font-bold">{title}</h3>
  <p class="leading-5 mb-4 flex-grow">{body}</p>
  <a
    href={path}
    class={`
      rounded bg-gray-800 hover:opacity-80 text-white
      transition py-2 px-3 mt-1 text-sm w-28 text-center self-end
    `}>
    Learn More
  </a>
</div>
