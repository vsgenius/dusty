var lengthOfLastWord = function(s) {
    return s.split(/[ ,]+/)
};
console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("   fly me   to   the moon  "))
console.log(lengthOfLastWord("luffy is still joyboy"))