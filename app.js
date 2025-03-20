document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.getElementById('home-link');
    const uploadLink = document.getElementById('upload-link');
    const uploadSection = document.getElementById('upload-section');
    const papersContainer = document.getElementById('papers-container');
    const uploadForm = document.getElementById('upload-form');

    // Dummy data simulating question papers
    let papers = [
        {
            id: 1,
            title: "Math Exam Question Paper",
            type: "pdf",
            fileUrl: "files/math_exam.pdf",
            date: "2025-03-01"
        },
        {
            id: 2,
            title: "Physics Lecture - Topic Highlights",
            type: "video",
            fileUrl: "files/physics_lecture.mp4",
            date: "2025-03-05"
        }
    ];

    function renderPapers() {
        papersContainer.innerHTML = "";
        papers.sort((a, b) => new Date(b.date) - new Date(a.date));
        papers.forEach(paper => {
            const paperDiv = document.createElement('div');
            paperDiv.classList.add('paper');
            paperDiv.innerHTML = `
                <h3>${paper.title}</h3>
                <p>Type: ${paper.type.toUpperCase()}</p>
                <p>Date: ${paper.date}</p>
                <button class="download-btn" data-url="${paper.fileUrl}">Install</button>
            `;
            papersContainer.appendChild(paperDiv);
        });
    }

    papersContainer.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('download-btn')) {
            const fileUrl = e.target.getAttribute('data-url');
            // Simulate a download action.
            alert("Starting download for: " + fileUrl);
            // In a real application, you might redirect or trigger a file download.
        }
    });

    homeLink.addEventListener('click', function(e) {
        e.preventDefault();
        uploadSection.classList.add('hidden');
        document.getElementById('news-feed').classList.remove('hidden');
    });

    uploadLink.addEventListener('click', function(e) {
        e.preventDefault();
        uploadSection.classList.remove('hidden');
        document.getElementById('news-feed').classList.add('hidden');
    });

    uploadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const title = document.getElementById('paper-title').value;
        const type = document.getElementById('paper-type').value;
        const fileInput = document.getElementById('paper-file');

        // In an actual application, upload handling happens server-side.
        // Here we simulate adding a new paper.
        const newPaper = {
            id: papers.length + 1,
            title: title,
            type: type,
            fileUrl: "files/" + fileInput.files[0].name,
            date: new Date().toISOString().slice(0,10)
        };
        papers.push(newPaper);
        alert("Paper uploaded successfully!");
        uploadForm.reset();
        renderPapers();
        // Switch back to the home/news feed view.
        uploadSection.classList.add('hidden');
        document.getElementById('news-feed').classList.remove('hidden');
    });

    renderPapers();
});