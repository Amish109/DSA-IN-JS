// Map is a built-in object introduced in ES6.

// It lets you store key → value pairs, just like a hashtable.

// Unlike a plain Object, any type of key is allowed (not just strings/symbols).

// It remembers the insertion order of keys

const myMap = new Map();
myMap.set("name", "Amish");
myMap.set(123, "ID number");
myMap.set(true, "isActive");
myMap.set({ x: 10 }, "object as key");

const grid = new Map();
const pos = [0, 0];
grid.set(pos, "rook");
console.log(grid.get(pos)); // "rook"



console.log(myMap.get("name"));  // Amish
console.log(myMap.get(123));  //"ID number"


console.log(myMap.has("name"));  // true
console.log(myMap.has("age"));   // false


myMap.delete(123);
console.log(myMap.has(123)); // false

console.log(myMap.size); // 3



for (let [key, value] of myMap) {
  console.log(key, value);
}
// OR
myMap.forEach((value, key) => {
  console.log(`${key} => ${value}`);
});



console.log([...myMap]); 
// [ ["name","Amish"], [true,"isActive"], [{x:10},"object as key"] ]




const map = new Map();
map.set("name", "Amish");
map.set(123, "ID");
console.log(map.get(123));  // "ID"
console.log(map);           // Map(2) { 'name' => 'Amish', 123 => 'ID' }







const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
const freq = new Map();

for (let word of words) {
  freq.set(word, (freq.get(word) || 0) + 1);
}

console.log(freq);
// Map(3) { 'apple' => 3, 'banana' => 2, 'orange' => 1 }














// 



// Create a cache
const apiCache = new Map();

// Simulated API fetch function
function fetchUserData(userId) {
  console.log("Fetching data for user:", userId);
  return { id: userId, name: `User${userId}`, age: 25 + userId };
}

// Function to get user data with caching
function getUserData(userId) {
  if (apiCache.has(userId)) {
    console.log("Cache hit for user:", userId);
    return apiCache.get(userId);
  }

  console.log("Cache miss for user:", userId);
  const response = fetchUserData(userId);
  apiCache.set(userId, response);
  return response;
}

// Example usage with userId as key
console.log(getUserData(1)); // cache miss
console.log(getUserData(1)); // cache hit


// 🔹 Using object as key
const requestOptions = { endpoint: "/users", page: 1 };

if (!apiCache.has(requestOptions)) {
  console.log("Cache miss for requestOptions");
  apiCache.set(requestOptions, { users: ["Alice", "Bob"] });
} else {
  console.log("Cache hit for requestOptions");
}
console.log(apiCache.get(requestOptions));


// 🔹 Using array as key
const params = ["/posts", 10]; // endpoint + limit

if (!apiCache.has(params)) {
  console.log("Cache miss for params");
  apiCache.set(params, { posts: ["Post1", "Post2"] });
} else {
  console.log("Cache hit for params");
}
console.log(apiCache.get(params));
