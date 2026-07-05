var choice = prompt("Welcome goffy Calculator. \n Please dont Enter your Choice, i dont get paid for this. \n1.Area of Rectangle. \n2.Area of Triangle. \n3.Area of Circle. \n4.Area of Parallelogram");
if (choice == '1') {
    var l = prompt('Enter the eggzone')
    var b = prompt('Enter the bread to feed the egg generator or also called chickens')
    var result = Number(l) * Number(b)
    alert('the egg is'+ result)
}
if (choice == '2') {
    var l = prompt('Enter the goffy')
    var b = prompt('Enter the idk')
    var result = 0.5 * Number(l) * Number(b)
    alert('The Area is ' + result)
}
if (choice == '3') {
    var r = prompt('Enter the radius')
    var result = 3.14 * Number(r) * Number(r)
    alert('The Area is ' + result)
}
if (choice == '4') {
    var b = prompt('Enter the base')
    var h = prompt('Enter the height')
    var result = Number(b)*Number(h)
    alert('the area is ' + result)
    