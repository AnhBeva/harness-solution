const fs = require('fs');
const { execSync } = require('child_process');

try {
  console.log('Đang chuyển đổi Markdown sang HTML bằng marked...');
  // Chạy npx marked để lấy HTML raw
  const rawHtml = execSync('npx marked -i cam_nang_harness_engineering_va_ai_agents.md --gfm').toString();

  // Template HTML phong cách Apple
  const template = `<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cẩm Nang Harness Engineering & AI Agents</title>
    <!-- SF Pro Font or Inter from Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <!-- Mermaid.js to render the diagram -->
    <script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
    <script>
        mermaid.initialize({
            startOnLoad: true,
            theme: 'default',
            securityLevel: 'loose',
            themeVariables: {
                primaryColor: '#e1f5fe',
                edgeLabelBackground: '#ffffff',
                lineColor: '#0066cc'
            }
        });
    </script>
    <style>
        :root {
            --bg-color: #f5f5f7;
            --card-bg: #ffffff;
            --text-main: #1d1d1f;
            --text-secondary: #86868b;
            --accent-blue: #0066cc;
            --border-color: #d2d2d7;
            --sidebar-width: 280px;
        }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            color: var(--text-main);
            background-color: var(--bg-color);
            margin: 0;
            padding: 0;
            display: flex;
            min-height: 100vh;
            -webkit-font-smoothing: antialiased;
        }

        /* Sidebar Navigation */
        aside {
            width: var(--sidebar-width);
            background-color: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(20px);
            border-right: 1px solid var(--border-color);
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            padding: 2.5rem 1.5rem;
            box-sizing: border-box;
            overflow-y: auto;
            z-index: 10;
        }

        .logo {
            font-weight: 700;
            font-size: 1.25rem;
            color: var(--text-main);
            margin-bottom: 2.5rem;
            display: flex;
            align-items: center;
            gap: 10px;
            letter-spacing: -0.02em;
        }

        .logo-icon {
            width: 24px;
            height: 24px;
            background: linear-gradient(135deg, #0066cc, #54a0ff);
            border-radius: 6px;
            box-shadow: 0 2px 10px rgba(0, 102, 204, 0.2);
        }

        aside ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        aside li {
            margin-bottom: 0.5rem;
        }

        aside a {
            color: #424245;
            text-decoration: none;
            font-size: 0.95rem;
            display: block;
            padding: 0.6rem 0.8rem;
            border-radius: 8px;
            transition: all 0.2s ease;
        }

        aside a:hover {
            background-color: rgba(0, 102, 204, 0.08);
            color: var(--accent-blue);
        }

        aside a.active {
            background-color: var(--accent-blue);
            color: white;
            font-weight: 500;
        }

        /* Main Content Container */
        main {
            margin-left: var(--sidebar-width);
            flex-grow: 1;
            padding: 3rem 4rem;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
        }

        article {
            max-width: 800px;
            width: 100%;
            background-color: var(--card-bg);
            padding: 4rem 5rem;
            border-radius: 20px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.015);
            border: 1px solid rgba(0, 0, 0, 0.04);
            box-sizing: border-box;
        }

        /* Typography */
        h1 {
            font-size: 2.6rem;
            font-weight: 800;
            letter-spacing: -0.03em;
            margin-top: 0;
            margin-bottom: 2rem;
            line-height: 1.15;
            background: linear-gradient(135deg, #1d1d1f 30%, #515154 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        h2 {
            font-size: 1.8rem;
            font-weight: 700;
            letter-spacing: -0.02em;
            margin-top: 3.5rem;
            margin-bottom: 1.5rem;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid #e5e5ea;
            color: var(--text-main);
        }

        h3 {
            font-size: 1.35rem;
            font-weight: 600;
            margin-top: 2.2rem;
            margin-bottom: 1rem;
            color: var(--text-main);
        }

        p {
            font-size: 1.05rem;
            line-height: 1.625;
            margin-bottom: 1.5rem;
            color: #3a3a3c;
        }

        a {
            color: var(--accent-blue);
            text-decoration: none;
            transition: opacity 0.2s ease;
        }

        a:hover {
            text-decoration: underline;
        }

        ul, ol {
            margin-bottom: 1.5rem;
            padding-left: 1.5rem;
        }

        li {
            font-size: 1.05rem;
            line-height: 1.6;
            margin-bottom: 0.5rem;
            color: #3a3a3c;
        }

        /* Code and Preformatted */
        pre {
            background-color: #f5f5f7;
            padding: 1.2rem;
            border-radius: 12px;
            overflow-x: auto;
            border: 1px solid #e5e5ea;
            margin: 1.5rem 0;
        }

        code {
            font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace;
            font-size: 0.9rem;
            background-color: #f5f5f7;
            padding: 0.2rem 0.4rem;
            border-radius: 4px;
            color: #bf4080;
        }

        pre code {
            padding: 0;
            background-color: transparent;
            color: inherit;
            font-size: 0.85rem;
        }

        /* Blockquotes */
        blockquote {
            margin: 2rem 0;
            padding: 1rem 1.5rem;
            border-left: 4px solid var(--accent-blue);
            background-color: rgba(0, 102, 204, 0.03);
            border-radius: 0 12px 12px 0;
        }

        blockquote p {
            margin: 0;
            font-style: italic;
            color: #1d1d1f;
        }

        /* Divider */
        hr {
            border: 0;
            height: 1px;
            background: #e5e5ea;
            margin: 3.5rem 0;
        }

        /* Mermaid diagram wrapper */
        .mermaid {
            background-color: white;
            padding: 2rem;
            border-radius: 12px;
            border: 1px solid #e5e5ea;
            margin: 2rem 0;
            display: flex;
            justify-content: center;
        }

        /* Image styling */
        img {
            max-width: 100%;
            height: auto;
            border-radius: 12px;
            margin: 2rem 0;
            box-shadow: 0 8px 30px rgba(0,0,0,0.04);
            border: 1px solid #e5e5ea;
        }

        /* Task List styling */
        ul li input[type="checkbox"] {
            margin-right: 0.5rem;
            accent-color: var(--accent-blue);
        }

        /* Table Styles */
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 2rem 0;
        }

        th, td {
            text-align: left;
            padding: 0.8rem 1rem;
            border-bottom: 1px solid #e5e5ea;
            font-size: 0.95rem;
        }

        th {
            font-weight: 600;
            background-color: #f5f5f7;
            color: var(--text-main);
        }

        /* Responsive */
        @media (max-width: 1024px) {
            body {
                flex-direction: column;
            }
            aside {
                width: 100%;
                position: relative;
                border-right: none;
                border-bottom: 1px solid var(--border-color);
                padding: 1.5rem;
            }
            .logo {
                margin-bottom: 1rem;
            }
            aside ul {
                display: flex;
                flex-wrap: wrap;
                gap: 5px;
            }
            aside li {
                margin-bottom: 0;
            }
            aside a {
                padding: 0.4rem 0.6rem;
            }
            main {
                margin-left: 0;
                padding: 2rem 1.5rem;
            }
            article {
                padding: 2.5rem 2rem;
                border-radius: 12px;
            }
        }
    </style>
</head>
<body>
    <aside>
        <div class="logo">
            <div class="logo-icon"></div>
            <span>Harness Manual</span>
        </div>
        <ul>
            <li><a href="#mindset-shift" class="active">Mindset Shift</a></li>
            <li><a href="#chuong-1">Chương 1: Case Architecture</a></li>
            <li><a href="#chuong-2">Chương 2: Evidence Verification</a></li>
            <li><a href="#chuong-3">Chương 3: Gotchas Curation</a></li>
            <li><a href="#chuong-4">Chương 4: Retro & Memory</a></li>
            <li><a href="#chuong-5">Chương 5: Checklist & Plan</a></li>
        </ul>
    </aside>
    <main>
        <article>
            {{CONTENT}}
        </article>
    </main>
    
    <script>
        // Smooth scroll sidebar linking
        document.querySelectorAll('aside a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    document.querySelectorAll('aside a').forEach(a => a.classList.remove('active'));
                    this.classList.add('active');
                }
            });
        });

        // Add IDs to markdown headers to enable smooth scrolling
        document.addEventListener("DOMContentLoaded", () => {
            const h2Elements = document.querySelectorAll("article h2");
            const ids = ["mindset-shift", "chuong-1", "chuong-2", "chuong-3", "chuong-4", "chuong-5"];
            h2Elements.forEach((h2, index) => {
                if (index < ids.length) {
                    h2.id = ids[index];
                }
            });
        });
    </script>
</body>
</html>`;

  // Nhúng code HTML raw vào template
  const finalHtml = template.replace('{{CONTENT}}', rawHtml);
  fs.writeFileSync('index.html', finalHtml);
  console.log('Đã tạo thành công tệp index.html hoàn chỉnh!');
} catch (error) {
  console.error('Đã xảy ra lỗi khi tạo HTML:', error);
  process.exit(1);
}
