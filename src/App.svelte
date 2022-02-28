<script>
  import DevOps from 'pages/DevOps.svelte';
  import FullStackApps from 'pages/FullStackApps.svelte';
  import ScriptsAndApis from 'pages/ScriptsAndApis.svelte';
  import Portfolio from 'pages/Portfolio.svelte';
  import About from 'pages/About.svelte';
  import Footer from 'partials/Footer.svelte';
  import Sidebar from 'partials/Sidebar.svelte';
  import Tailwind from 'partials/Tailwind.svelte';
  import {getUrlParams} from 'util/misc.js';

  const pages = [
    {page: 'dev-ops', Component: DevOps},
    {page: 'full-stack-apps', Component: FullStackApps},
    {page: 'scripts-and-apis', Component: ScriptsAndApis},
  ];

  const params = getUrlParams();
  const pageExists = pages.map(val => val.page).includes(params.page);
  const isHome = window.location.pathname.length < 2 && !window.location.search

  // Redirect to home on 404
  if ((params.page && !pageExists) || window.location.pathname.length > 1) {
    window.location.href = window.location.origin;
  }

  $: sidebarOpen  = false;
  $: outerWidth = 0;

  const toggleSidebarOpen = () => {
    sidebarOpen = !sidebarOpen
  }

  if (outerWidth >= 768) {
    toggleSidebarOpen();
  }
</script>

<Tailwind />
<svelte:window bind:outerWidth />

<body class={sidebarOpen ? 'fixed md:relative' : ''}>
  <div
    on:click={toggleSidebarOpen}
    class={`
      flex md:hidden cursor-pointer absolute
      ${sidebarOpen ? 'left-8' : 'right-8'} top-8 w-5 h-5
    `}>
    {#if !sidebarOpen}
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
    </svg>
    {/if}
  </div>

  <Sidebar show={sidebarOpen} toggleShow={toggleSidebarOpen}>
    {#if sidebarOpen}
      <About forceOpen={true} />
    {/if}
  </Sidebar>

  <div class="bg-gray-50 min-h-screen base">

    <!-- Static views -->
    <div class="max-w-screen-lg mx-auto">
      <div class="flex">
        <About />
        {#if isHome}
          <Portfolio />
        {/if}
        {#each pages as {page, Component}}
          {#if page === params.page}
            <Component />
          {/if}
        {/each}
      </div>
      <Footer />
    </div>

  </div>
</body>