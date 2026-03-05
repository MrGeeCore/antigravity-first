/**
 * Agentic Template Builder - Core Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    // State management
    const state = {
        currentFile: 'perplexity.md',
        content: '',
        isDirty: false,
        templates: [
            { id: 'perplexity.md', name: 'perplexity.md', icon: '🔍', content: `## Role\n<role>\nYou are Perplexity, a helpful search assistant...\n</role>\n\n## Tools Workflow\n<tools_workflow>\n- Use short, keyword-based queries...\n</tools_workflow>` },
            { id: 'github-agent.md', name: 'github-agent.md', icon: '📦', content: `## Role\n<role>\nYou are the GitHub Agent, a specialist in repository management...\n</role>` },
            { id: 'context-architect.md', name: 'context-architect.md', icon: '🏗️', content: `## Role\n<role>\nYou are the Context Architect, a specialist in documentation...\n</role>` },
            { id: 'verification-agent.md', name: 'verification-agent.md', icon: '✅', content: `## Role\n<role>\nYou are the Verification Agent, a persona dedicated to QA...\n</role>` },
            { id: 'frontend-architect.md', name: 'frontend-architect.md', icon: '🎨', content: `## Role\n<role>\nYou are the Frontend Architect, an expert in premium UIs...\n</role>` },
            { id: 'coordinator-agent.md', name: 'coordinator-agent.md', icon: '🧠', content: `## Role\n<role>\nYou are the Coordinator Agent, the strategic brain...\n</role>` }
        ]
    };

    // DOM Elements
    const libraryItems = document.getElementById('libraryItems');
    const editor = document.getElementById('promptEditor');
    const previewPane = document.getElementById('previewPane');
    const previewContent = document.getElementById('previewContent');
    const previewToggle = document.getElementById('previewToggle');
    const saveBtn = document.getElementById('saveBtn');
    const currentFileName = document.getElementById('currentFileName');
    const saveStatus = document.getElementById('saveStatus');
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notificationText');
    const newTemplateBtn = document.getElementById('newTemplateBtn');

    // Initial Load
    loadTemplate(state.templates[0]);

    // Handle Template Selection
    libraryItems.addEventListener('click', (e) => {
        const li = e.target.closest('li');
        if (!li || li.classList.contains('active')) return;

        if (state.isDirty && !confirm('You have unsaved changes. Discard them?')) return;

        const fileId = li.dataset.file;
        const template = state.templates.find(t => t.id === fileId);
        if (template) {
            loadTemplate(template);

            // Update UI
            document.querySelectorAll('#libraryItems li').forEach(el => el.classList.remove('active'));
            li.classList.add('active');
        }
    });

    // Handle New Template
    newTemplateBtn.addEventListener('click', () => {
        const name = prompt('Enter template name:', 'new-agent.md');
        if (!name) return;

        const newT = { id: name, name: name, icon: '🤖', content: '# New Agent Template\n\n## Role\nDefine the role here...' };
        state.templates.push(newT);

        // Add to DOM
        const li = document.createElement('li');
        li.dataset.file = name;
        li.innerHTML = `<span class="icon">🤖</span><span class="name">${name}</span>`;
        libraryItems.appendChild(li);

        loadTemplate(newT);
        document.querySelectorAll('#libraryItems li').forEach(el => el.classList.remove('active'));
        li.classList.add('active');
    });

    function loadTemplate(template) {
        state.currentFile = template.id;
        state.content = template.content;
        state.isDirty = false;

        editor.value = template.content;
        currentFileName.innerText = template.name;
        updateStatus('Synced', 'success');
        updatePreview();
    }

    // Handle Editor Input
    editor.addEventListener('input', (e) => {
        state.content = e.target.value;
        state.isDirty = true;
        updateStatus('Modified', 'warning');
        updatePreview();
    });

    // Toggle Preview
    previewToggle.addEventListener('click', () => {
        previewPane.classList.toggle('hidden');
        updatePreview();
    });

    // Simulated Save
    saveBtn.addEventListener('click', () => {
        if (!state.isDirty) return;

        // In a real app, this would be an API call
        // Here, we'll simulate a save process
        updateStatus('Saving...', 'accent');

        setTimeout(() => {
            state.isDirty = false;
            const t = state.templates.find(t => t.id === state.currentFile);
            if (t) t.content = state.content;

            updateStatus('Synced', 'success');
            showNotification('Template saved successfully!');

            // Log for the agent to potentially pick up
            console.log('SAVE_REQUEST:', JSON.stringify({
                file: state.currentFile,
                content: state.content
            }));
        }, 800);
    });

    // Helper: Update Status UI
    function updateStatus(text, type) {
        saveStatus.innerText = text;
        const colors = {
            success: '#10b981',
            warning: '#f59e0b',
            accent: '#818cf8'
        };
        saveStatus.style.background = `${colors[type]}33`; // 20% opacity
        saveStatus.style.color = colors[type];
    }

    // Helper: Simple Preview Generator
    function updatePreview() {
        if (previewPane.classList.contains('hidden')) return;

        // Simple regex-based markdown-ish preview
        let html = state.content
            .replace(/^# (.*$)/gim, '<h1>$1</h1>')
            .replace(/^## (.*$)/gim, '<h2>$1</h2>')
            .replace(/^### (.*$)/gim, '<h3>$1</h3>')
            .replace(/^\- (.*$)/gim, '<li>$1</li>')
            .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
            .replace(/\n$/gim, '<br />');

        previewContent.innerHTML = html;
    }

    // Helper: Show notification
    function showNotification(text) {
        notificationText.innerText = text;
        notification.classList.remove('hidden');
        setTimeout(() => {
            notification.classList.add('hidden');
        }, 3000);
    }
});
