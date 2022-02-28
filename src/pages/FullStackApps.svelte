<script>
  const projects = [
    {
      type: 'product',
      link: 'https://www.economicmodeling.com/talent-analyst/',
      title: 'Analyst - Talent Vertical',
      company: 'Emsi Burning Glass',
      start: 'APRIL 2021',
      end: 'PRESENT',
      description: `
        The flagship software for Emsi Burning Glass,
        I worked with a team on a PHP full stack application
        that integrated React, MySQL, and JQuery to build a
        hybrid server-side and client-side rendered data analytics platform.
      `
    },
    {
      type: 'product',
      link: 'https://www.economicmodeling.com/smartreq/',
      title: 'SmartReq',
      company: 'Emsi Burning Glass',
      start: 'APRIL 2021',
      end: 'PRESENT',
      description: `
        As a team, we created the new tool for staffing
        companies led by Ron Hetrick, a Senior Labor Market Ecocnomist.
        Included job posting cards along with a full report showing
        the supply, demand, and wage of each job title or posting in a particuar region.
      `
    },
    {
      type: 'product',
      link: 'https://www.consigncloud.com/',
      title: 'ConsignCloud',
      company: 'ConsignCloud',
      start: 'SEPT 2019',
      end: 'MAY 2021',
      description: `
        A consignment store inventory management and in-store POS system.
        On a team of two, I worked on a full stack application with a React front-end,
        a Python Werkzeug API, PostgreSQL as our DB, and Heroku as our deployment and CI service.
      `
    },
  ];

  const highlights = [
    {
      type: 'feature',
      link: 'https://www.consigncloud.com/smartreq',
      title: 'Skills Parser',
      company: 'Emsi Burning Glass',
      description: `
        A text area that can parse skills as you type. I was the lead architect for
        rebuilding and implementing it all across Analyst, the flagship software for Emsi Burning Glass.
      `
    },
    {
      type: 'feature',
      link: 'http://help.consigncloud.com/en/articles/4649961-tills-and-z-reports',
      title: 'Till Management',
      company: 'ConsignCloud',
      description: `
        With the help of Jon Staab, I created a till management and z-report builder for
        our built-in POS system. Included the creation, selection, and tracking of sales,
        before generating a report which provided insight into the daily activity of that till (or register).
      `
    },
  ]

  const techStackRows = ['Client', 'Middleware', 'Database', 'Deployment'];
  const techStacks = [
    ['React.js', 'Node.js', 'DynamoDB', 'Heroku / Serverless / AWS'],
    ['Svelte.js', 'Flask', 'MongoDB', 'Serverless / AWS'],
    ['Django', '-', 'PostgreSQL', 'Heroku / AWS'],
  ];
</script>

<div class="p-6">
  <div>
    <a href="/" class="font-bold">{'< '} <span class="ml-1">Home</span></a>
  </div>
  <div class="mt-8">
    <h1 class="text-3xl font-bold">Full Stack Applications</h1>
    <hr class="my-3 w-full" />
    <p>
      Full stack applications involve three structures moving in harmony:
      the web or mobile application, the backend or API, and the database.
      My expertise lies in architecting the relationship between these structures.
      I’ve built full-stack web applications for both startup companies and
      large-scale corporations.
    </p>
  </div>
  <div class="mt-10">
    <h2 class="tracking-wide text-xl">PROJECTS</h2>
    {#each projects as {type, link, title, company, start, end, description}}
      <div class="my-4">
        <div>
          <a href={link} class="text-blue-800 hover:text-blue-900 underline">
            <span class="text-xs">[{type}]</span>
            <span>{title}</span>
          </a>
          <span> - </span>
          <span class="italic">{company}</span>
        </div>
        <span class="text-gray-600 text-sm">{start} - {end}</span>
        <p>{description}</p>
      </div>
    {/each}
  </div>
  <div class="mt-10">
    <h2 class="tracking-wide text-xl">HIGHLIGHTS</h2>
    {#each highlights as {type, link, title, company, description}}
      <div class="my-4">
        <div>
          <a href={link} class="text-blue-800 hover:text-blue-900 underline">
            <span class="text-xs">[{type}]</span>
            <span>{title}</span>
          </a>
          <span> - </span>
          <span class="italic">{company}</span>
        </div>
        <p>{description}</p>
      </div>
    {/each}
  </div>
  <div class="mt-10">
    <h2 class="tracking-wide text-xl">TECH STACKS</h2>
    <div class="flex">
      <div class="flex flex-col mt-6">
        {#each techStackRows as row}
          <span class="text-gray-400 align-middle text-right my-1">{row}</span>
        {/each}
      </div>
      {#each techStacks as stack}
        <div class="flex flex-col mt-6 ml-4 border-l pl-4">
          {#each stack as level}
            <span class="align-middle my-1">{level}</span>
          {/each}
        </div>
      {/each}
    </div>
  </div>
</div>