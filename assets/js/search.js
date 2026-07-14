/* ms-jascp-website/assets/js/search.js */

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const subjectFilter = document.getElementById('subject-filter');
  const secondaryFilter = document.getElementById('secondary-filter'); // This could be class-filter or year-filter
  const items = document.querySelectorAll('.searchable-item');
  const noResults = document.getElementById('no-results');
  
  if (!searchInput && !subjectFilter && !secondaryFilter) return;

  const performSearch = () => {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const subject = subjectFilter ? subjectFilter.value : 'all';
    const secondary = secondaryFilter ? secondaryFilter.value : 'all';
    
    let visibleCount = 0;
    
    items.forEach(item => {
      // Get text content to search inside
      const searchText = item.getAttribute('data-search-text') 
        ? item.getAttribute('data-search-text').toLowerCase() 
        : item.textContent.toLowerCase();
        
      const itemSubject = item.getAttribute('data-subject') || 'all';
      
      // Secondary attribute can be "class" or "year"
      const itemSecondary = item.getAttribute('data-class') || item.getAttribute('data-year') || 'all';
      
      const queryMatch = searchText.includes(query);
      const subjectMatch = (subject === 'all' || itemSubject === subject);
      const secondaryMatch = (secondary === 'all' || itemSecondary === secondary);
      
      if (queryMatch && subjectMatch && secondaryMatch) {
        // Show item (handling table row vs grid card)
        if (item.tagName === 'TR') {
          item.style.display = '';
        } else {
          item.style.display = 'flex';
        }
        visibleCount++;
      } else {
        item.style.display = 'none';
      }
    });
    
    if (noResults) {
      if (visibleCount === 0) {
        noResults.style.display = 'block';
      } else {
        noResults.style.display = 'none';
      }
    }
  };

  if (searchInput) searchInput.addEventListener('input', performSearch);
  if (subjectFilter) subjectFilter.addEventListener('change', performSearch);
  if (secondaryFilter) secondaryFilter.addEventListener('change', performSearch);
});
