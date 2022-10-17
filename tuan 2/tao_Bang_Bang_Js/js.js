let bang, i ,j;
bang = "<table border='1' width='300' cellSpacing='0' cellPadding='3'>";
i = j = 1;
for ( ; i <= 10 ; ) {
    bang = bang + "<tr>";
    for ( ; j <= 10 ; ) {
        bang = bang + '<td>' + i * j + '</td>';
        j++
    }
   bang = bang + "</tr>";
    j = 1;
    i++;
}
bang = bang + "</table>";
document.write(bang)