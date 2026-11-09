/**
 * Loyola AI Assistant - Local Static & Environment Server
 * Zero external dependencies. Uses Node.js standard library.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

// ── 1. Simple .env Loader ─────────────────────────────────────
function loadEnv() {
    const envPath = path.join(__dirname, '.env');
    if (!fs.existsSync(envPath)) return;

    try {
        const content = fs.readFileSync(envPath, 'utf8');
        content.split('\n').forEach(line => {
            const trimmed = line.trim();
            if (trimmed && !trimmed.startsWith('#')) {
                const eqIdx = trimmed.indexOf('=');
                if (eqIdx > 0) {
                    const key = trimmed.substring(0, eqIdx).trim();
                    const val = trimmed.substring(eqIdx + 1).trim().replace(/^["']|["']$/g, '');
                    if (!process.env[key]) {
                        process.env[key] = val;
                    }
                }
            }
        });
    } catch (e) {
        console.warn('Could not read .env file:', e.message);
    }
}

loadEnv();

const PORT = parseInt(process.env.PORT, 10) || 3000;

// ── 2. MIME Types ─────────────────────────────────────────────
const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.txt': 'text/plain; charset=utf-8'
};

// ── 3. HTTP Server ────────────────────────────────────────────
const server = http.createServer((req, res) => {
    // Enable CORS for local development
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    let reqPath = req.url.split('?')[0];
    if (reqPath === '/') reqPath = '/index.html';

    // Dynamic runtime environment script: /js/env.js
    if (reqPath === '/js/env.js') {
        // If a physical js/env.js exists, serve it; otherwise synthesize from process.env
        const localEnvFile = path.join(__dirname, 'js', 'env.js');
        if (fs.existsSync(localEnvFile)) {
            const data = fs.readFileSync(localEnvFile);
            res.writeHead(200, { 'Content-Type': 'application/javascript; charset=utf-8' });
            res.end(data);
            return;
        }

        const envPayload = {
            API_KEY: process.env.API_KEY || '',
            API_PROVIDER: process.env.API_PROVIDER || 'openai',
            OPENAI_MODEL: process.env.OPENAI_MODEL || 'llama-3.1-8b-instant',
            GEMINI_MODEL: process.env.GEMINI_MODEL || 'gemini-2.0-flash'
        };

        const script = `// Auto-generated from .env by Loyola Assistant Server\nwindow.__ENV__ = ${JSON.stringify(envPayload, null, 4)};\n`;
        res.writeHead(200, { 'Content-Type': 'application/javascript; charset=utf-8' });
        res.end(script);
        return;
    }

    // Static file serving
    const filePath = path.join(__dirname, reqPath);

    // Prevent directory traversal
    if (!filePath.startsWith(__dirname)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('403 Forbidden');
        return;
    }

    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found: ' + reqPath);
            return;
        }

        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';

        res.writeHead(200, { 'Content-Type': contentType });
        const stream = fs.createReadStream(filePath);
        stream.pipe(res);
    });
});

server.listen(PORT, () => {
    const hasKey = Boolean(process.env.API_KEY);
    const provider = process.env.API_PROVIDER || 'openai';

    console.log('\n============================================================');
    console.log('   🎓 Loyola AI Assistant - Development Server');
    console.log('============================================================');
    console.log(`   ➜ Showcase Demo  : http://localhost:${PORT}/`);
    console.log(`   ➜ Fullscreen Chat: http://localhost:${PORT}/chat.html`);
    console.log(`   ➜ Mode           : ${hasKey ? provider.toUpperCase() : 'OFFLINE (Knowledge Base)'}`);
    console.log(`   ➜ API Key Config : ${hasKey ? 'Configured via .env' : 'Running without key (offline mode)'}`);
    console.log('============================================================\n');
});
