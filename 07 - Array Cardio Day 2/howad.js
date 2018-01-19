const people = [
	{ name: 'Wes', year: 1988 },
	{ name: 'Kait', year: 1986 },
	{ name: 'Irv', year: 1970 },
	{ name: 'Lux', year: 2015 }
]

const comments = [
	{ text: 'Love this!', id: 523423 },
	{ text: 'Super good', id: 823423 },
	{ text: 'You are the best', id: 2039842 },
	{ text: 'Ramen is my fav food ever', id: 123523 },
	{ text: 'Nice Nice Nice!', id: 542328 }
]

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const isSomeAdult = people.some(person => {
  const yearNow = (new Date()).getFullYear()
  return (yearNow - person.year) <= 19
})
console.log(isSomeAdult) // true

// Array.prototype.every() // is everyone 19 or older?
const isEveryAdult = people.every(person => {
  const yearNow = (new Date()).getFullYear()
  return (yearNow - person.year) <= 19
})
console.log(isEveryAdult) // ​​​​​false​​​​​

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const findID = comments.find(elem => {
  return (elem.id === 823423)
})

console.log(findID) // ​​​​​{ text: 'Super good', id: 823423 }​​​​​

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const findIDIndex = comments.findIndex(elem => {
  return (elem.id === 823423)
})
console.log(findIDIndex) // 1

const newComments = [
  ...comments.slice(0, findIDIndex),
  ...comments.slice(findIDIndex + 1)
] 

console.log(newComments) // 被刪除了