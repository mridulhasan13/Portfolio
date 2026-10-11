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
    
    const EXCLUDED_REPOS = [
      'vote-for-ipe-cr',
      'notemate.seu',
      'standard_business',
      'approaching-web',
      'ipe-butex'
    ];

    // Filter out forks and user-excluded repositories
    const originalRepos = repos.filter(repo => {
      if (repo.fork) return false;
      const lower = repo.name.toLowerCase();
      return !EXCLUDED_REPOS.includes(lower);
    });
    console.log(`Found ${originalRepos.length} filtered repositories.`);

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

      let demoUrl = repo.homepage || '';
      let playStoreUrl = repo.playStoreUrl || '';
      let adminUrl = repo.adminUrl || '';
      let credentials = repo.credentials || null;
      let projectUrl = repo.html_url || '';
      let description = repo.description || '';
      const nameLower = repo.name.toLowerCase();

      if (nameLower.includes('unigrid')) {
        demoUrl = 'https://unigrid.netlify.app/';
        playStoreUrl = 'https://play.google.com/store/apps/details?id=com.unigrid.app';
        credentials = {
          username: 'demo.reviewer@unigrid.app',
          password: 'UniGrid@2026',
          label: 'UniGrid — Reviewer Access'
        };
        projectUrl = '';
        description = 'An enterprise-grade academic hub unifying the campus ecosystem across Android, iOS, and Web with real-time communication, grading ledgers, and secure file repositories. [Details of the app](https://info-unigrid.netlify.app/)';
      } else if (nameLower.includes('aipe-butex')) {
        demoUrl = 'https://aipe-butex.netlify.app';
      } else if (nameLower.includes('premium')) {
        demoUrl = 'https://premium-b.netlify.app/';
        adminUrl = 'https://premium-b.netlify.app/admin.html';
        credentials = {
          username: 'login@test.com',
          password: '123456',
          label: 'Mimosa Pizza — Staff Portal'
        };
        description = 'A full-featured commercial restaurant web platform for Mimosa Pizza featuring dining menus, table reservations, inventory tracking, and staff management.';
      } else if (nameLower.includes('smart-tutoring')) {
        demoUrl = 'https://smarttutoringmonitor.netlify.app/';
      } else if (nameLower.includes('vote-for-ipe-cr')) {
        demoUrl = 'https://voteforipe.netlify.app/';
      } else if (nameLower.includes('notebot')) {
        demoUrl = 'https://notebot3.netlify.app';
        if (!description) description = 'An automated academic note management and assistant platform designed to streamline study resources for students. This is an updated UI model of https://notebot.netlify.app/';
      } else if (nameLower.includes('butexdc')) {
        demoUrl = 'https://butexdc.netlify.app';
        if (!description) description = 'Official website for the BUTEX Debating Club (Est. 1993) built with Vanilla JS, featuring interactive event showcases, debate archives, and member directories.';
      } else if (nameLower.includes('satprp') || nameLower.includes('sat-prp')) {
        demoUrl = 'https://sat-prp4.netlify.app/';
        credentials = {
          username: 'sat6066@preparation.com',
          password: '60606060',
          label: 'SAT Prep — Student Portal'
        };
        if (!description) description = 'An interactive diagnostic, tracking, and mock testing platform designed to help students master the Scholastic Assessment Test (SAT) with real-time scoring and custom analytics.';
      }

      projectsData.push({
        name: repo.name,
        description: description,
        languages: languages,
        url: projectUrl,
        demoUrl: demoUrl,
        playStoreUrl: playStoreUrl,
        ...(adminUrl ? { adminUrl } : {}),
        ...(credentials ? { credentials } : {}),
        updatedAt: repo.updated_at,
        isPrivate: repo.private || false
      });
      
      // Wait a bit to avoid rate limits
      await new Promise(r => setTimeout(r, 200));
    }

    // Sort projects: UniGrid -> premium_business -> satprp -> AIPE -> BUTEXDC -> Smart -> Notebot3
    const SORT_ORDER = ['unigrid', 'premium', 'satprp', 'aipe', 'butexdc', 'smart', 'notebot'];
    projectsData.sort((a, b) => {
      const getIndex = (name) => {
        const lower = name.toLowerCase();
        const idx = SORT_ORDER.findIndex(key => lower.includes(key));
        return idx !== -1 ? idx : 99;
      };
      return getIndex(a.name) - getIndex(b.name);
    });

    fs.writeFileSync('repos.json', JSON.stringify(projectsData, null, 2));
    console.log(`Successfully wrote ${projectsData.length} projects to repos.json`);
  } catch (err) {
    console.error('Error:', err.message);
  }
}

main();
