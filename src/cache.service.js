// The Cache class, using localStorage
// Creates a CacheService class with optional key param
// It stores a location [long,lat] for the most recent request for up to 5 minutes before deleting
function CacheService(key = null) {
	this.key = key;
	this.storage = localStorage;
}

// Set a new item key
CacheService.prototype.setItemKey = function (key) {
	this.key = key;
};

// Get an item by key
CacheService.prototype.getItem = function () {
	let obj = this.storage.getItem(this.key);
	if(!obj) {
		return null;
	}
	try{
		obj = JSON.parse(obj);
		return obj.item;
	} catch (e) {
		console.log('Parse error ', e.message);
	}
	return null;
};

// Store a new item with expiration(default is 5minutes/300000 milli sec)
CacheService.prototype.store = function (item, duration = 300000) {
	const obj = {expiration: Date.now() + duration, item};
	return this.storage.setItem(this.key, JSON.stringify(obj));
};

// Check if item is expired
CacheService.prototype.expired = function () {
	const item = this.getItem();
    return Date.now() > item.expiration;
};

// Remove the current item
CacheService.prototype.removeItem = function () {
	this.storage.removeItem(this.key);
};

// Remove every expired item
CacheService.prototype.removeExpired = function() {
	const keys = Object.keys(localStorage);
	for(let key of keys) {
		if(key === 'location') {
			const json = localStorage.getItem(key);
			if(json) {
				try{
					const item = JSON.parse(json);
					if(item && item.expiration && (Date.now() > item.expiration)) {
						localStorage.removeItem(key);
					}
				} catch (e) {
					console.log('parse error ', e.message);
				}
			}
		}
	}
};

module.exports = CacheService;


