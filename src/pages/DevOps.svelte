<script>
  const projects = [
    {
      type: 'product',
      link: 'https://github.com/bryantbrock',
      title: 'Personal Applications on Heroku/AWS',
      company: 'Contracting',
      start: 'OCT 2018',
      end: 'PRESENT',
      description: `
        I’ve deployed dozens of APIs & full stack applications to Heroku
        and AWS. See my Github repository page for a sense of the types
        of apps I deploy (most are not actively deployed to avoid costs).
      `
    },
    {
      type: 'product',
      link: 'https://www.consigncloud.com',
      title: 'ConsignCloud on Heroku',
      company: 'ConsignCloud',
      start: 'SEPT 2019',
      end: 'MAY 2021',
      description: `
        Jon Staab did the setup long before I arrived at ConsignCloud,
        but I learned the ropes and was able to make modifcations to the
        multiple apps (and PostgreSQL DB) hosted on Heroku. A great PaaS,
        Heroku continues to be my go-to platform.
      `
    },
  ];
</script>

<div class="p-6">
  <div>
    <a href="/" class="font-bold">{'< '} <span class="ml-1">Home</span></a>
  </div>
  <div class="mt-8">
    <h1 class="text-3xl font-bold">Development Operations</h1>
    <hr class="my-3 w-full" />
    <p>
      Dev Ops requires the ability to read documentation well and be able
      to piece of the puzzel together. It can be the most complex part of the
      development cycle, and thus it requires an engaged and able-to-learn mind.
      I’ve deployed personal (and company) projects primarily to AWS and
      Heroku with the help of configuration services like Terraform and Serverless Framework.
    </p>
  </div>
  <div class="mt-10">
    <h2 class="tracking-wide text-xl">PORTFOLIO & EXPERIENCE</h2>
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
    <h2 class="tracking-wide text-xl">SERVICES</h2>
    <ul class="list-disc ml-6 mt-3">
      <li><strong>Heroku</strong>: platform for full-stack applications</li>
      <li><strong>AWS Lambda</strong>: platform for resource-light APIs</li>
      <li><strong>Docker & AWS ECS + S3 + RDS</strong>: everything for a fully customizable full-stack application deployment process</li>
    </ul>
  </div>
</div>