const axios = require('axios');

async function getJobs(request, response) {
  try {
    const url = `https://boards-api.greenhouse.io/v1/boards/vaulttec/jobs?content=true`;
    const jobResponse = await axios.get(url);

    const jobs = jobResponse.data.jobs.map(job => new Job(job));
    response.status(200).send(jobs);

  } catch (error) {
    console.error('error fetching jobs', error);
    response.status(500).send(`server error ${error}`);
  }
}

class Job {
  constructor(obj) {
    this.name = obj.title;
    this.description = obj.content;
    this.departments = this.getNames(obj.departments);
    this.offices = this.getNames(obj.offices);
    this.location = obj.location.name;
    this.url = obj.absolute_url;
  }

  getNames(objects) {
    return objects.map(object => object.name);
  }
}

module.exports = getJobs;
