        // Posts Data
        let allPosts = [
            { title: "Adamas S01", tags: ["Mystery", "Thriller"], img: "https://i.ibb.co/mXpCXHr/Adamas-S01.jpg" },
        { title: "Alice in Borderland S02", tags: ["Thriller", "Sci-Fi"], img: "https://i.ibb.co/rHj1VL2/Alice-in-Borderland-S02.jpg" },
        { title: "All I Want for Love Is You S01", tags: ["Romance", "Comedy"], img: "https://i.ibb.co/LPBYThK/All-I-Want-for-Love-Is-You-S01.jpg" },
        { title: "Beyond Goodbye S01", tags: ["Romance", "Drama"], img: "https://i.ibb.co/fN15Vzj/Beyond-Goodbye-S01.jpg" },
        { title: "Crash Landing on You S01", tags: ["Romance", "Drama"], img: "https://i.ibb.co/zmML8T4/Crash-Landing-on-You-S01.jpg" },
        { title: "Do You Like Brahms? S01", tags: ["Romance", "Music"], img: "https://i.ibb.co/JR9yRby/Do-You-Like-Brahms-S01.jpg" },
        { title: "Emergency Couple S01", tags: ["Romance", "Comedy"], img: "https://i.ibb.co/2v1zhtS/Emergency-Couple-S01.jpg" },
        { title: "Gaus Electronics S01", tags: ["Comedy", "Workplace"], img: "https://i.ibb.co/nrnG3q4/Gaus-Electronics-S01.jpg" },
        { title: "Healer S01", tags: ["Action", "Romance"], img: "https://i.ibb.co/zrFpMvh/Healer-S01-E01.jpg" },
        { title: "Here to Heart S01", tags: ["Romance", "Drama"], img: "https://i.ibb.co/DK67GTv/Here-to-Heart-S01.jpg" },
        { title: "Hospital Ship S01", tags: ["Medical", "Drama"], img: "https://i.ibb.co/fxw0vbp/Hospital-Ship-S01.jpg" },
        { title: "Itaewon Class S01", tags: ["Drama", "Business"], img: "https://i.ibb.co/WxjGCDn/Itaewon-Class-S01.jpg" },
        { title: "Jumping Girl S01", tags: ["Romance", "Comedy"], img: "https://i.ibb.co/W6XxPbF/Jumping-Girl-S01.jpg" },
        { title: "Kill Me, Heal Me S01", tags: ["Romance", "Psychological"], img: "https://i.ibb.co/q0Wx8PF/Kill-Me-Heal-Me-S01.jpg" },
        { title: "Love Is Sweet S01", tags: ["Romance", "Drama"], img: "https://i.ibb.co/Y77tyzV/Love-Is-Sweet-S01.jpg" },
        { title: "Love to Hate You S01", tags: ["Romance", "Comedy"], img: "https://i.ibb.co/2KsYcG2/Love-to-Hate-You-S01.jpg" },
        { title: "Love With Flaws S01", tags: ["Romance", "Comedy"], img: "https://i.ibb.co/9cPPXZD/Love-With-Flaws-S01.jpg" },
        { title: "Lover Stranger S01", tags: ["Romance", "Mystery"], img: "https://i.ibb.co/DM7Mz9c/Lover-Stranger-S01.jpg" },
        { title: "Mirror: A Tale of Twin Cities S01", tags: ["Fantasy", "Romance"], img: "https://i.ibb.co/Y3yTMXc/Mirror-A-Tale-of-Twin-Cities-S01.jpg" },
        { title: "Missing 9 S01", tags: ["Mystery", "Thriller"], img: "https://i.ibb.co/qRGh60Y/Missing-9-S01.jpg" },
        { title: "Move to Heaven S01", tags: ["Drama", "Slice of Life"], img: "https://i.ibb.co/QcH8bXF/Move-to-Heaven-S01.jpg" },
        { title: "Mr. Plankton S01", tags: ["Romance", "Drama"], img: "https://i.ibb.co/3MX6cLC/Mr-Plankton-S01.jpg" },
        { title: "My Dear Brothers S01", tags: ["Fantasy", "Romance"], img: "https://i.ibb.co/qCP3RZN/My-Dear-Brothers-S01.jpg" },
        { title: "My Family S01", tags: ["Thriller", "Drama"], img: "https://i.ibb.co/0n9BNNJ/My-Family-S01.jpg" },
        { title: "My Girlfriend is an Alien S01", tags: ["Fantasy", "Romance"], img: "https://i.ibb.co/qCrKGtp/My-Girlfriend-is-an-Alien-S01.jpg" },
        { title: "My Horrible Boss S01", tags: ["Comedy", "Drama"], img: "https://i.ibb.co/TcqCPMZ/My-Horrible-Boss-S01.jpg" },
        { title: "My Little Happiness S01", tags: ["Romance", "Drama"], img: "https://i.ibb.co/gj4StpW/My-Little-Happiness-S01.jpg" },
        { title: "My Love from the Star S01", tags: ["Romance", "Fantasy"], img: "https://i.ibb.co/727XT68/My-Love-from-the-Star-S01.jpg" },
        { title: "My Name S01", tags: ["Action", "Thriller"], img: "https://i.ibb.co/sP03ZwR/My-Name-S01.jpg" },
        { title: "My Star Bride S01", tags: ["Romance", "Drama"], img: "https://i.ibb.co/fpTN7xw/My-Star-Bride-S01.jpg" },
        { title: "Oppa Saranghaei S01", tags: ["Romance", "Comedy"], img: "https://i.ibb.co/9g6JJ3y/Oppa-Saranghaei-S01.jpg" },
        { title: "Queen and I S01", tags: ["Fantasy", "Romance"], img: "https://i.ibb.co/yFTVYJz/Queen-and-I-S01.jpg" },
        { title: "Radiant Office S01", tags: ["Comedy", "Workplace"], img: "https://i.ibb.co/F5bCV77/Radiant-Office-S01.jpg" },
        { title: "Rope A Dope S01", tags: ["Action", "Comedy"], img: "https://i.ibb.co/fCtBfFC/Rope-A-Dope-S01.jpg" },
        { title: "School 2017 S01", tags: ["Teen", "Drama"], img: "https://i.ibb.co/S6RTFhm/School-2017-S01.jpg" },
        { title: "She and Her Perfect Husband S01", tags: ["Romance", "Drama"], img: "https://i.ibb.co/Fgfc7HH/She-and-Her-Perfect-Husband-S01.jpg" },
        { title: "Start-Up S01", tags: ["Business", "Drama"], img: "https://i.ibb.co/BPtbbQV/Start-Up-S01.jpg" }
            ];
    
            let postsPerPage = 8; // Adjust as needed
            let currentPage = 1;
            let currentTag = "";
            let filteredPosts = [...allPosts];
            let downloadEnabled = false; // Initially, download button is disabled
    
            // Populate Tags
            function populateTags() {
                let tagSet = new Set();
                allPosts.forEach(post => post.tags.forEach(tag => tagSet.add(tag)));
                let tagFilter = document.getElementById("tag-filter");
                tagFilter.innerHTML = '<option value="">All Tags</option>';
                tagSet.forEach(tag => {
                    let option = document.createElement("option");
                    option.value = tag;
                    option.textContent = tag;
                    tagFilter.appendChild(option);
                });
            }
    
            // Display Posts
            function displayPosts() {
                let container = document.getElementById("post-container");
                container.innerHTML = "";
                let start = (currentPage - 1) * postsPerPage;
                let end = start + postsPerPage;
                let postsToShow = filteredPosts.slice(start, end);
    
                postsToShow.forEach(post => {
                    let postDiv = document.createElement("div");
                    postDiv.className = "col";
                    postDiv.innerHTML = `
                        <div class="post">
                            <img src="${post.img}" alt="${post.title}" onclick="openPostInNewTab('${post.title}')">
                            <h2 onclick="openPostInNewTab('${post.title}')">${post.title}</h2>
                            <button class="btn btn-primary" onclick="openPostInNewTab('${post.title}')">Watch Now</button>
                            ${downloadEnabled ? `<button class="btn btn-success download-btn" onclick="downloadPost('${post.title}')">Download</button>` : ''}
                            <p class="tags">Tags: ${post.tags.map(tag => `<span onclick="filterByTag('${tag}')">${tag}</span>`).join(", ")}</p>
                        </div>
                    `;
                    container.appendChild(postDiv);
                });
                displayPagination();
                updateURL();
            }
    
            // Filter by Tag
            function filterByTag(tag) {
                currentTag = tag || document.getElementById("tag-filter").value;
                filteredPosts = currentTag ? allPosts.filter(post => post.tags.includes(currentTag)) : [...allPosts];
                currentPage = 1;
                displayPosts();
            }
    
            // Search Posts
            function searchPosts() {
                let searchTerm = document.getElementById("search").value.toLowerCase();
                filteredPosts = allPosts.filter(post => post.title.toLowerCase().includes(searchTerm));
                currentPage = 1;
                displayPosts();
            }
    
            // Open Post in New Tab
            function openPostInNewTab(title) {
                let formattedTitle = title.replace(/\s+/g, '-');
                window.open(`/p/${formattedTitle}.html`, '_blank');
            }
    
            // Download Post
            function downloadPost(title) {
                let formattedTitle = title.replace(/\s+/g, '-');
                window.open(`/d/${formattedTitle}`, '_blank');
            }
    
            // Toggle Download Button
            function toggleDownloadButton() {
                downloadEnabled = !downloadEnabled;
                document.getElementById("toggle-download-btn").textContent = downloadEnabled ? "Disable Download" : "Enable Download";
                displayPosts(); // Refresh posts to show/hide download buttons
            }
    
            // Display Pagination
            function displayPagination() {
                let pagination = document.getElementById("pagination");
                pagination.innerHTML = "";
                let totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    
                // Previous Button
                if (currentPage > 1) {
                    let prevButton = document.createElement("button");
                    prevButton.className = "btn btn-primary mx-1";
                    prevButton.textContent = "Previous";
                    prevButton.onclick = () => goToPage(currentPage - 1);
                    pagination.appendChild(prevButton);
                }
    
                // Page Numbers
                let startPage = Math.max(1, currentPage - 1);
                let endPage = Math.min(totalPages, currentPage + 1);
    
                for (let i = startPage; i <= endPage; i++) {
                    let button = document.createElement("button");
                    button.className = currentPage === i ? "btn btn-primary mx-1 active" : "btn btn-primary mx-1";
                    button.textContent = i;
                    button.onclick = () => goToPage(i);
                    pagination.appendChild(button);
                }
    
                // Next Button
                if (currentPage < totalPages) {
                    let nextButton = document.createElement("button");
                    nextButton.className = "btn btn-primary mx-1";
                    nextButton.textContent = "Next";
                    nextButton.onclick = () => goToPage(currentPage + 1);
                    pagination.appendChild(nextButton);
                }
    
                // Last Button
                if (currentPage < totalPages) {
                    let lastButton = document.createElement("button");
                    lastButton.className = "btn btn-primary mx-1";
                    lastButton.textContent = "Last";
                    lastButton.onclick = () => goToPage(totalPages);
                    pagination.appendChild(lastButton);
                }
            }
    
            // Go to Page
            function goToPage(page) {
                currentPage = page;
                displayPosts();
            }
    
            // Update URL
            function updateURL() {
                let params = new URLSearchParams();
                if (currentTag) params.set("tag", currentTag);
                if (currentPage > 1) params.set("page", currentPage); // Only add page if it's not the first page
                let newURL = `${window.location.pathname}?${params.toString()}`;
                window.history.replaceState(null, "", newURL);
            }
    
            // Get Parameters from URL
            function getParamsFromURL() {
                let params = new URLSearchParams(window.location.search);
                currentTag = params.get("tag") || "";
                currentPage = params.get("page") ? parseInt(params.get("page")) : 1;
            }
    
            // Initialize
            document.addEventListener("DOMContentLoaded", () => {
                getParamsFromURL();
                populateTags();
                filterByTag(currentTag);
                displayPosts();
    
                // Add event listener for toggle download button
                document.getElementById("toggle-download-btn").addEventListener("click", toggleDownloadButton);
            });