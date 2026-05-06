import fs from 'fs';
import https from 'https';

const USERNAME = 'mridulhasan13';
const REPOS_URL = `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=100`;

const headers = {
  'User-Agent': 'Node.js Fetch Script'
};

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(e);
          }
        } else {
          reject(new Error(`Status Code: ${res.statusCode} for ${url}`));
        }
      });
    }).on('error', reject);
  });
}

async function main() {
  console.log('Fetching repositories...');
  try {
    const repos = await fetchJson(REPOS_URL);
    
    // Filter out forks if desired, or keep them. Let's keep non-forks.
    const originalRepos = repos.filter(repo => !repo.fork);
    console.log(`Found ${originalRepos.length} original repositories.`);

    const projectsData = [];

    for (const repo of originalRepos) {
      console.log(`Fetching languages for ${repo.name}...`);
      let languages = [];
      try {
        const langData = await fetchJson(repo.languages_url);
        const totalBytes = Object.values(langData).reduce((a, b) => a + b, 0);
        
        for (const [lang, bytes] of Object.entries(langData)) {
          const percentage = ((bytes / totalBytes) * 100).toFixed(1);
          languages.push(`${lang} ${percentage}%`);
        }
      } catch (err) {
        console.log(`Failed to fetch languages for ${repo.name}`);
        if (repo.language) {
           languages = [`${repo.language} 100%`];
        }
      }

      projectsData.push({
        name: repo.name,
        description: repo.description || '',
        languages: languages,
        url: repo.html_url,
        demoUrl: repo.homepage || '',
        updatedAt: repo.updated_at
      });
      
      // Wait a bit to avoid rate limits
      await new Promise(r => setTimeout(r, 200));
    }

    fs.writeFileSync('repos.json', JSON.stringify(projectsData, null, 2));
    console.log('Successfully wrote repos.json');
  } catch (err) {
    console.error('Error:', err.message);
  }
}

main();
