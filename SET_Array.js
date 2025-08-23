// It only stores unique values (no duplicates allowed).
// It has faster lookups (checking if a value exists is O(1) on average).
// It doesn’t care about indexes (no direct arr[0], you iterate instead).


// 🔹 Why use Set? (Problems it solves)
// Remove duplicates from arrays easily.
// Fast existence check (set.has(val) is quicker than array.includes(val)).
// Mathematical operations (union, intersection, difference).
// Storing unique items like user IDs, tags, visited pages, etc.


// Removing duplicates
const arr = [1, 2, 3, 2, 4, 1, 5];
const unique = new Set(arr);

console.log(unique); // Set { 1, 2, 3, 4, 5 }
console.log([...unique]); // Convert back to array → [1,2,3,4,5]


// ======================================================================================
// Example: Fast existence check
const visitedUsers = new Set();

visitedUsers.add("user1");
visitedUsers.add("user2");

console.log(visitedUsers.has("user1")); // true
console.log(visitedUsers.has("user3")); // false
// 👉 With an array, you’d need arr.includes("user1") which is slower for large data.



// ======================================================================================
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

// Union
const union = new Set([...setA, ...setB]);
console.log(union); // {1,2,3,4,5,6}

// Intersection
const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log(intersection); // {3,4}

// Difference
const difference = new Set([...setA].filter(x => !setB.has(x)));
console.log(difference); // {1,2}



// ======================================================================
// 🔹 Example: Using Object/Array as keys in Set

const userSet = new Set();

const userObj1 = { id: 1, name: "Alice" };
const userObj2 = { id: 2, name: "Bob" };
const coords = [10, 20];

userSet.add(userObj1);
userSet.add(userObj2);
userSet.add(coords);

console.log(userSet.has(userObj1)); // true
console.log(userSet.has([10, 20])); // false (different reference)
console.log(userSet.has(coords)); // true


// ===============================================================
// Best Practices
// Use Array when order matters or duplicates are allowed.
// Use Set when you only care about uniqueness & fast lookups.
// Convert between them when needed:
// new Set(array) → remove duplicates.
// [...set] → back to array.









// Simulating an API call
function fetchUserFromAPI(id) {
  console.log(`⏳ Fetching user ${id} from API...`);
  return { id, name: `User_${id}` };
}

// ✅ Cache using Map
const userCache = new Map();

// ✅ Track requested users using Set (to avoid duplicate calls)
const requestedUsers = new Set();

function getUser(id) {
  // 1. Check cache
  if (userCache.has(id)) {
    console.log(`✅ Returning user ${id} from cache`);
    return userCache.get(id);
  }

  // 2. Avoid fetching same user multiple times
  if (requestedUsers.has(id)) {
    console.log(`⚠️ Already requested user ${id}, skipping duplicate fetch`);
    return null;
  }

  // 3. Mark as requested
  requestedUsers.add(id);

  // 4. Fetch from API and cache it
  const user = fetchUserFromAPI(id);
  userCache.set(id, user);

  return user;
}

// -------------------------------
// 🎯 Usage
getUser(1); // Fetches from API
getUser(2); // Fetches from API
getUser(1); // Returns from cache
getUser(2); // Returns from cache
getUser(1); // Still from cache (no duplicate fetch)
