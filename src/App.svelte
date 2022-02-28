<script>
  import Tailwind from 'partials/Tailwind.svelte';
  import Profiles from 'pages/Profiles.svelte';
  import {getUrlParams} from 'util/misc.js';

  const pages = [];

  const params = getUrlParams();
  const pageExists = pages.map(val => val.page).includes(params.page);
  const isHome = window.location.pathname.length < 2 && !window.location.search

  // Redirect to home on 404
  if ((params.page && !pageExists) || window.location.pathname.length > 1) {
    window.location.href = window.location.origin;
  }
</script>

<Tailwind />

<body class="bg-gray-50 min-h-screen base">

  <div class="max-w-screen-lg mx-auto">
    <div class="flex">
      {#if isHome}
        <Profiles />
      {/if}
      {#each pages as {page, Component}}
        {#if page === params.page}
          <Component />
        {/if}
      {/each}
    </div>
  </div>

</body>