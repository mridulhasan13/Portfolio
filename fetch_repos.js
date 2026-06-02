import fs from 'fs';
import https from 'https';

// Load environment variables from .env.local if it exists
if (fs.existsSync('.env.local')) {
  const envContent = fs.readFileSync('.env.local', 'utf8');
  envContent.split('\n').forEach(line => {
    const parts = line.split('=');
    if (parts.length >= 2) {
      const key = parts[0].trim();
      const val = parts.slice(1).join('=').trim().replace(/^['"]|['"]$/g, '');
      process.env[key] = val;
    }
  });
}

const USERNAME = 'mridulhasan13';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

// If GITHUB_TOKEN is present, fetch all repos (including private ones) owned by the user.
// Otherwise, fetch public repos for the username.
const REPOS_URL = GITHUB_TOKEN
  ? `https://api.github.com/user/repos?sort=updated&per_page=100&type=owner`
  : `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=100`;

const headers = {
  'User-Agent': 'Node.js Fetch Script'
};

if (GITHUB_TOKEN) {
  headers['Authorization'] = `token ${GITHUB_TOKEN}`;
  console.log('Using GITHUB_TOKEN for authenticated request (fetching public and private repos)...');
} else {
  console.log('No GITHUB_TOKEN found. Fetching public repos only...');
}

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
    
    if (!Array.isArray(repos)) {
      throw new Error(`Invalid response format from GitHub API: ${JSON.stringify(repos)}`);
    }
    
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
        updatedAt: repo.updated_at,
        isPrivate: repo.private || false
      });
      
      // Wait a bit to avoid rate limits
      await new Promise(r => setTimeout(r, 200));
    }

    // Sort projects from latest to oldest based on updatedAt
    projectsData.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

    fs.writeFileSync('repos.json', JSON.stringify(projectsData, null, 2));
    console.log(`Successfully wrote ${projectsData.length} projects to repos.json`);
  } catch (err) {
    console.error('Error:', err.message);
  }
}

main();
