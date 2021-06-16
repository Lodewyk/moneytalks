# MONEYTALKS
 This will not handle negative amounts, and will only accept `.` as the decimal character
 Commas are not supported and will return weird results.
 I am assuming that whatever is entered is a valid amount, string values e.g. 15yyy will not work.
 Any amount over 1000 will be ignored.
 
 The dollar and cent amounts are always returned, even if zero e.g. 
 100 will return one hundred dollards and zero cents, and 
 0.80 will return zero dollards and eighty cents
  
 The result is printed out to the console.
