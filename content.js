function cleanGarbageFeed() {
    // 1. Find EVERY span on the page
    const spans = document.querySelectorAll('span');

    spans.forEach(span => {
        // 2. Check if it's our target button
        const text = span.textContent.trim();
        if (text === "Följ" || text === "Gå med") {

            // 3. CLIMB THE TREE! 
            // Look upwards for the closest parent div that acts as a feed card
            const postContainer = span.closest('[aria-posinset], [role="article"],[data-pagelet^="FeedUnit"]');

            if (postContainer) {
                // Skip if we already nuked it
                if (postContainer.hasAttribute('data-zanno-nuked')) return;

                // 4. Check for the organic friend share exception
                if (!postContainer.textContent.includes("delade ett inlägg")) {
                    console.log("💥 Zanno's Cleanser (Bottom-Up) nuked a post!");

                    // 5. THE EXECUTION
                    postContainer.style.display = 'none';
                    postContainer.setAttribute('data-zanno-nuked', 'true');
                }
            }
        }
    });
}

const observer = new MutationObserver((mutations) => {
    cleanGarbageFeed();
});

// Run immediately on load
cleanGarbageFeed();

observer.observe(document.body, { childList: true, subtree: true });
console.log("⚔️ Zanno's Feed Cleanser v1.3 (Bottom-Up Mode) is online...");