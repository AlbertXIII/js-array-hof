const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
]

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]

// forEach
for (let i = 0; i < companies.length; i++) {
   //console.log(companies[i])
}
companies.forEach(function(company) { 
    //console.log(company)
})
// filter
let canDrink = []
for (let i = 0; i < ages.length; i++) {
    if (ages[i] >= 21) {
        //console.log(ages[i] + ' can drink !')
        canDrink.push[ages[i]]
    }
}
const canDrink2 = ages.filter(age => {
    if (age >= 21) {
        //console.log(age + ' can Drink :)')
        return true
    }
})

const canDrink3 = ages.filter(age => age >= 21)

const retailCompanies = companies.filter(company => {
    if (company.category === 'Retail') {
        //console.log(company.name + ' is a ' + company.category)
        return true
    }
})

const eightiesCompanies = companies.filter(company => {
    if (company.start >= 1980 && company.start < 1990) {
        //console.log(company.name + ' is an 80s company')
        return true
    }
})

const durableCompanies = companies.filter(company => company.end - company.start > 10)
//durableCompanies.forEach(company => console.log(company.name + ' has more than 10 years'))

// map
const companyNames = companies.map(company => company.name)
//console.log(companyNames)

const companies2 = companies.map(company => `${company.name} [${company.start} - ${company.end}]`)
//console.log(companies2)

const ageSquare = ages.map(age => Math.sqrt(age)) 
//console.log(ageSquare)
const agesTimesTwo = ages.map(age => age * 2)
//console.log(agesTimesTwo)

const ageSqr2 = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2)
//console.log(ageSqr2) 
// sort
const sortedCompanies = companies.sort((c1, c2) => c1.start > c2.start ? 1 : -1)
console.log(sortedCompanies)

const sortedAges = ages.sort((a, b) => a - b)
console.log(sortedAges)
const sortedAgesDesc = ages.sort((a, b) => b - a)
console.log(sortedAgesDesc)
// reduce
let ageSum = ages.reduce((sum, age) => sum += age)
console.log(ageSum)
let ageSumPlus100 = ages.reduce((sum, age) => sum += age, 100)
console.log(ageSumPlus100)
const companyYearsSum = companies
    .reduce((sum, company) => sum += (company.end - company.start), 0)
console.log(companyYearsSum)

// combine methods
const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 0)
console.log(combined)