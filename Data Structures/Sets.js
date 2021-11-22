/*
JavaScript Set Objects
- The Set objects lets you store unique values of any type, whether primitive values or object references.
- Set objects are collections of values. You can iterate through the elements of a set in insertion order.
- A value in the Set may only occur once; it is unique in the Set's collection. Item uniqueness is checked with ===
- Nan and undefined can also be stored in a Set.
- To create an new Set Object... let set1 = new Set();
- The set has() method checks if a value is in a Set object, using an approach that is, on average, quicker than testing
  if a value exists in an array using the Array.include() method.

JavaScript Set Object Properties
1. Getting the Size of a Set Object
   set.size;

2. Clear all Values stored in the Set Object
   set.clear();

3. Delete a Specific Value within a Set
   set.delete(value);

4. Check if a Value is Stored in the Set
   set.has(value);

5. Retrieve an Array of all Values in the Set
   set.values();

6. Adding Values into the Set
   set.add(value);

7. Iterating through Values of a Set
   set.forEach();

   for(let item of set) {};

 */
