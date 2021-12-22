const express = require('express');
const os = require('os');
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'job_description.txt');

const app = express();

// const fileData = ReadFile();
app.use(express.static('dist'));
app.get('/api/getJobDesc', async function(req, res, next) {

  // call the get on users and retrieve all data from that request
  try {
    let data = fs.readFileSync(path.join(filePath), {encoding:'utf8'});
    const _Keys = [
      "Job Title",
      "Job Location",
      "Company Name",
      "Job Description",
      "Hiring Manager",
      "Min Comp",
      "Max Comp",
      "Posted Date",
      "About",
      "Job Category",
      "Recruiters",
      "Skills",
      "Qualifications"
    ];
    const content = {};

  _Keys.forEach((elt, index) => {
    const firstKey = _Keys[index];
    const secondKey = _Keys[index + 1];
    const start = data.indexOf(firstKey) + firstKey.length;
    let end = data.indexOf(secondKey);
    if (end < 0) {
      end = data.length - 1;
    }
     content[elt] = data.substring(start, end).trim();

    });
    console.log("DATA", content);
    res.send(content);
  } catch(e) {
    console.log("something is wrong", e);
  }
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
