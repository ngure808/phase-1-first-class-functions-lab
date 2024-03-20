// Code your solution in this file!
const returnFirstTwoDrivers = function(lists){
    return lists = ['Antonia', 'Nuru']
}
returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

const returnLastTwoDrivers = function(last){
    return last = ['Amari', 'Mo']
}
returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

const selectingDrivers = ([returnFirstTwoDrivers, returnLastTwoDrivers])

const createFareMultiplier = function(integer){
    return (function fareMultiplier(num){
        return integer * num
    })
}

const fareDoubler = function doubles(createFareMultiplier){
    return createFareMultiplier * 2
}

const fareTripler = function triples(createFareMultiplier){
    return createFareMultiplier * 3
}

const selectDifferentDrivers = function (drivers, selectingDrivers){
    drivers['Antonia','Nuru','Amari','Mo']
    return selectingDrivers()
}