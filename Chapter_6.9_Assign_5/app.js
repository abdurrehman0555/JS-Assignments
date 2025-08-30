var a = 10;
document.writeln('Result:<br> The Value of is:'+ '' + 10 +'<br>');
document.writeln('.................................<br><br>');
document.writeln('The value of ++a is:'+ (++a)+ '<br>');
document.writeln('Now the value of a is:'+ a + '<br><br>');
document.writeln('The value of a++ is :' + (a++)+ '<br>');
document.writeln('Now the value of a is:'+ a + '<br><br>');
document.writeln('The value of --a is:'+ (--a)+ '<br>');
document.writeln('Now the value of a is:'+ a + '<br><br>');
document.writeln('The value of a-- is:'+ (a--)+ '<br>');
document.writeln('Now the value of a is:'+ a + '<br><br>');

var a = 2, b  = 1;
var result=--a- --b + ++b + b--;

document.writeln('a is' + a + '<br>');
document.writeln('b is' + b + '<br>');
document.writeln('result is' + result + '<br>');
document.writeln('--a; <br>');
document.writeln('--a- --b; <br>');
document.writeln('--a- --b+ ++b; <br>');
document.writeln('--a- --b+ ++b +b--; <br>');

var userName = prompt('what is your name');
alert('welcom' + ' ' + userName);

var userNumber = prompt('type your number');
if (isNaN(userNumber)) {
    document.writeln(`${userNumber} x 1 = ${userNumber * 1} <br>
          ${userNumber} x 2 = ${userNumber * 2} <br>
          ${userNumber} x 3 = ${userNumber * 3} <br>
          ${userNumber} x 4 = ${userNumber * 4} <br>
          ${userNumber} x 5 = ${userNumber * 5} <br>
          ${userNumber} x 6 = ${userNumber * 6} <br>
          ${userNumber} x 7 = ${userNumber * 7} <br>
          ${userNumber} x 8 = ${userNumber * 8} <br>
          ${userNumber} x 9 = ${userNumber * 9} <br>
          ${userNumber} x 10 = ${userNumber *10} <br>`) ;
    
} else {
    document.writeln(`${5} x 1 = ${5 * 1} <br>
         5 x 2 = ${5 * 2} <br> 
         5 x 3 = ${5 * 3} <br> 
         5 x 4 = ${5 * 4} <br> 
         5 x 5 = ${5 * 5} <br> 
         5 x 6 = ${5 * 6} <br>
         5 x 7 = ${5 * 7} <br>
         5 x 8 = ${5 * 8} <br>
         5 x 9 = ${5 * 9} <br>
         5 x 10 = ${5 * 10} <br>`);
}

var sub1 = 'English';
var sub2 = 'Math';
var sub3 = 'Urdu';
var totalMarks = 100;

var marks1 = +prompt(`Enter obtained marks ${sub1}`);
var marks2 = +prompt(`Enter obtained marks ${sub2}`);
var marks3 = +prompt(`Enter obtained marks ${sub3}`);

var totalObtained = marks1 + marks2 + marks3;
var Marks = totalMarks * 3;
var percentage = (totalObtained / Marks) * 100;

document.write("<h2>Marks Sheet</h2>");
document.write("<table border='1' cellpadding='10'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write(`<tr><td>${sub1}</td><td>${totalMarks}</td><td>${marks1}</td></tr>`);
document.write(`<tr><td>${sub2}</td><td>${totalMarks}</td><td>${marks2}</td></tr>`);
document.write(`<tr><td>${sub3}</td><td>${totalMarks}</td><td>${marks3}</td></tr>`);
document.write("<tr><th>Total</th><th>" + Marks + "</th><th>" + totalObtained + "</th></tr>");
document.write("<tr><th colspan='2'>Percentage</th><th>" + percentage.toFixed(2) + "%</th></tr>");
document.write("</table>");

