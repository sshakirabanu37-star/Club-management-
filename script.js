function loadData(key, fallback) {
 try {
 const raw = localStorage.getItem(key);
 return raw === null ? fallback : JSON.parse(raw);
 } catch (err) {
 return fallback;
 }
}
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[6-9]\d{9}$/;
function validateRegistration(data) {
 const errors = {};
 if (data.name.length < 3) errors.name = 'Enter at least 3 characters.';
 if (!EMAIL_RE.test(data.email)) errors.email = 'Enter a valid email address.';
 if (!PHONE_RE.test(data.phone)) errors.phone = 'Enter a valid 10-digit mobile 
number.';
 return errors;
}
function renderClubs() {
 const query = $('search').value.trim().toLowerCase();
 const category = $('category-filter').value;
 const matches = CLUBS.filter((c) => {
 const matchCat = category === 'all' || c.category === category;
 const matchText = c.name.toLowerCase().includes(query);
 return matchCat && matchText;
 });
}

