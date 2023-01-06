
 google.charts.load('current', {'packages':['corechart']});
 google.charts.setOnLoadCallback(drawChart);

 function drawChart() {
   var data = google.visualization.arrayToDataTable([
     ['Ημέρα', 'Θερμοκρασία', 'Υγρασία'],
     ['Δευτέρα',  14,      68],
     ['Τρίτη',  16,      75],
     ['Τετάρτη',  13,       70],
     ['Πέμπτη',  12,      72],
     ['Παρασκευή',  13,      86],
     ['Σάββατο',  11,      90],
     ['Κυριακή',  9,      65]

   ]);

   var options = {
     title: 'Ο Καιρός της εβδομάδας',
     curveType: 'function',
     legend: { position: 'bottom' }
   };

   var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

   chart.draw(data, options);
 }
