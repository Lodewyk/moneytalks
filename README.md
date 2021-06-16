# MONEYTALKS
 This will not handle negative amounts, and will only accept `.` as the decimal character
 Commas are not supported and will return weird results.
 I am assuming that whatever is entered is a valid amount, string values e.g. 15yyy will not work.
 Any amount over 1000 will be ignored.
 
 The dollar and cent amounts are always returned, even if zero e.g. 
 100 will return one hundred dollards and zero cents, and 
 0.80 will return zero dollards and eighty cents
  
 The result is printed out to the console.

 No real validation yet, though the input string will have non-numerical characters (other than the decimal point) stripped out

 Some rudimentary tests have been implemented. I've tried playing around with
 mocking methods but haven't cracked it yet. Also haven't tested the methods in
 app.js yet, which are perhaps the most important to test, though I've tested
 most of the other parts of the code.
