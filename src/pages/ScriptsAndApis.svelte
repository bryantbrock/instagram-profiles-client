<script>
  const projects = [
    {
      type: 'API',
      link: 'https://github.com/bryantbrock/stock_symbols',
      title: 'Nasdaq Symbols API',
      company: 'Contracting',
      description: `
        While I was building Steamboat, a python framework
        for building financial algorithms for trading stocks on the market,
        I needed to know about every symbol on the stock market.
        I mocked a network request made by nasdaq.com to gather this
        public and make it available to my framework.
      `
    },
    {
      type: 'script',
      link: 'https://www.consigncloud.com',
      title: 'Move 32k Images Between Platforms',
      company: 'ConsignCloud',
      description: `
        I was tasked with downloading and then uploading over 32k files
        from one S3 Bucket to another. More than that, I needed to
        notify the new platform which inventory item belonged to the
        image being moved and where it was being moved to. Script run time: 5hrs.
      `
    },
    {
      type: 'API',
      link: 'https://github.com/bryantbrock/flask-keepa-api',
      title: 'Keepa API & Automated Decision Making',
      company: 'Contracting',
      description: `
        Early in my software development career, I built a Python Flask
        API that recieved a book ISBN (either scanned or typed in by the user),
        fetched Amazon data for that book (e.g. highest used price), and then
        automated a decision to either keep or throw away the book based on that Amazon data.
      `
    },
  ];
</script>

<div class="p-6">
  <div>
    <a href="/" class="font-bold">{'< '} <span class="ml-1">Home</span></a>
  </div>
  <div class="mt-8">
    <h1 class="text-3xl font-bold">One-off Scripts & APIs</h1>
    <hr class="my-3 w-full" />
    <p>
      I love a creative idea that can be accomplished through a single Python or
      (yes) Node.js script. The ideas and power of scripts are off the charts. With a
      script you can mock network requests which allows you to do all sorts of cool
      things: scrape web pages, automate instagram posts, automate internet browsing,
      and automate menial tasks like having to upload 100k cat memes to AWS S3.
    </p>
  </div>
  <div class="mt-10">
    <h2 class="tracking-wide text-xl">PORTFOLIO</h2>
    {#each projects as {type, link, title, company, description}}
      <div class="my-4">
        <div>
          <a href={link} class="text-blue-800 hover:text-blue-900 underline">
            <span class="text-xs">[{type}]</span>
            <span>{title}</span>
          </a>
          <span> - </span>
          <span class="italic">{company}</span>
        </div>
        <p class="mt-1">{description}</p>
      </div>
    {/each}
  </div>
</div>