// URL: https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
// Difficulty: 6-Kyu
// Time Complexity: O(1) or Constant Time

function likes(names) {
    let like = " like this";
    let likes = " likes this";

    if(names.length === 0) {
        return "no one" + likes;
    } else if (names.length === 1) {
        return names[0] + likes;
    } else if(names.length === 2) {
        return names[0] + " and " + names[1] + like;
    } else if(names.length === 3) {
        return names[0] + ", " + names[1] + " and " + names[2] + like;
    } else {
        return names[0] + ", " + names[1] +  " and " + names.length - 2 + "others" + like;
    }
}

