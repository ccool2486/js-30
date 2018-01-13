// https://courses.wesbos.com/account/access/5922a132f552890dd32a4620/view/194130346
// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
	{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
	{ first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
	{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
	{ first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
	{ first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
	{ first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
	{ first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
	{ first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
	{ first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
	{ first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
	{ first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
	{ first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
]

const people = [
	'Beck, Glenn',
	'Becker, Carl',
	'Beckett, Samuel',
	'Beddoes, Mick',
	'Beecher, Henry',
	'Beethoven, Ludwig',
	'Begin, Menachem',
	'Belloc, Hilaire',
	'Bellow, Saul',
	'Benchley, Robert',
	'Benenson, Peter',
	'Ben-Gurion, David',
	'Benjamin, Walter',
	'Benn, Tony',
	'Bennington, Chester',
	'Benson, Leana',
	'Bent, Silas',
	'Bentsen, Lloyd',
	'Berger, Ric',
	'Bergman, Ingmar',
	'Berio, Luciano',
	'Berle, Milton',
	'Berlin, Irving',
	'Berne, Eric',
	'Bernhard, Sandra',
	'Berra, Yogi',
	'Berry, Halle',
	'Berry, Wendell',
	'Bethea, Erin',
	'Bevan, Aneurin',
	'Bevel, Ken',
	'Biden, Joseph',
	'Bierce, Ambrose',
	'Biko, Steve',
	'Billings, Josh',
	'Biondo, Frank',
	'Birrell, Augustine',
	'Black, Elk',
	'Blair, Robert',
	'Blair, Tony',
	'Blake, William'
]

// Array.prototype.filter()
// 1. 列出所有出生在14世紀的inventors
const inventorsIn50s = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600) )
console.log(inventorsIn50s)


// Array.prototype.map()
// 2. 用一個陣列列出所有inventors的「全名」
const inventorsFullName = inventors.map(inventor => {
	return inventor.first + ' ' + inventor.last // [重要！] 記得要return!
})
console.log(inventorsFullName)


// Array.prototype.sort()
// 3.1 依照年齡排序inventors
const inventorsByBirth = inventors.sort((a,b) => {
	if (a.year >= b.year) {
		return 1
	} else {
		return -1
	}
})
console.log(inventorsByBirth)


// Array.prototype.reduce()
// 4. 所有的inventor總共活了多久？
const inventorsTotalAge = inventors.reduce(function (sum, inventor) {
	return sum += (inventor.passed - inventor.year) // [重要！] 記得要return!
}, 0)
console.log(inventorsTotalAge)

// 5.1 排序所有的inventor的逝世年紀
const inventorsByAge = inventors.sort(function (a, b) {
	if ((a.passed-a.year) >= (b.passed-b.year)) {
		return 1
	} else {
		return -1
	}
})
console.log(inventorsByAge)

// 5.2 列出所有人的逝世年紀
const inventorsWithAges = inventors.map(inventor => {
	inventor.age = (inventor.passed - inventor.year)
	return inventor // [重要！] 記得要return!
})
console.log(inventorsWithAges);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// Array.prototype.sort()
// 7. 把people裡的人依照lastname排序
// ??????? 跑起來結果很怪
('Beck, Glenn').split(', ') /*?*/

const peopleByLastName = people.sort((a,b) => {
  const [aLast, aFirst] = a.split(', ')
  const [bLast, bFirst] = b.split(', ')
  aLast > bLast ? 1 : -1
})
console.log(peopleByLastName)

// Array.prototype.reduce()
// 8. 列出每個物件的數量
// 正確的寫法...
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

const viecleCounts = data.reduce(function (sum, viecle) {
  if (!sum[viecle]) {
    sum[viecle] = 0
  }
    sum[viecle]++;
    return sum;
  
},{})
console.log(viecleCounts) // ​​​​​{ car: 5, truck: 3, bike: 2, walk: 2, van: 2, pogostick: 1 }​​​​​

// Howard會想寫成... 
const viecleCounts2 = data.reduce(function (sum, viecle) {
  if (sum[viecle] === undefined) {
    sum[viecle] = 1
  } else {
    sum[viecle]++;
  }
  return sum;
  
},{})
console.log(viecleCounts2) 
// 這樣會變成 ​​​​​{ car: 0, truck: 0, bike: 0, walk: 0, van: 0, pogostick: 0 }​​​​​
// why????
