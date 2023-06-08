// $(function () {

//     var start = moment().subtract(29, 'days');
//     var end = moment();

//     function cb(start, end) {
//         $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
//     }

//     $('#reportrange').daterangepicker({
//         startDate: start,
//         endDate: end,
//         ranges: {
//             'Today': [moment(), moment()],
//             'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
//             'Last 7 Days': [moment().subtract(6, 'days'), moment()],
//             'Last 30 Days': [moment().subtract(29, 'days'), moment()],
//             'This Month': [moment().startOf('month'), moment().endOf('month')],
//             'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
//         }
//     }, cb);

//     cb(start, end);

// });



$(function () {

    var dateRanges = [
      { id: 'reportrange1', startDate: moment().subtract(7, 'days'), endDate: moment() },
      { id: 'reportrange2', startDate: moment().subtract(7, 'days'), endDate: moment() },
      { id: 'reportrange3', startDate: moment().subtract(7, 'days'), endDate: moment() },
      { id: 'reportrange4', startDate: moment().subtract(7, 'days'), endDate: moment() },
      { id: 'reportrange4', startDate: moment().subtract(7, 'days'), endDate: moment() },
      { id: 'reportrange5', startDate: moment().subtract(7, 'days'), endDate: moment() },
      { id: 'reportrange6', startDate: moment().subtract(7, 'days'), endDate: moment() },
      { id: 'reportrange7', startDate: moment().subtract(7, 'days'), endDate: moment() },
      { id: 'reportrange8', startDate: moment().subtract(7, 'days'), endDate: moment() },
      { id: 'reportrange9', startDate: moment().subtract(7, 'days'), endDate: moment() },
      { id: 'reportrange10', startDate: moment().subtract(7, 'days'), endDate: moment() },
      { id: 'reportrange11', startDate: moment().subtract(7, 'days'), endDate: moment() },
      { id: 'reportrange12', startDate: moment().subtract(7, 'days'), endDate: moment() },
      { id: 'reportrange13', startDate: moment().subtract(7, 'days'), endDate: moment() },
      { id: 'reportrange14', startDate: moment().subtract(7, 'days'), endDate: moment() },
      { id: 'reportrange35', startDate: moment().subtract(7, 'days'), endDate: moment() },
      { id: 'reportrange36', startDate: moment().subtract(7, 'days'), endDate: moment() },
      { id: 'reportrange40', startDate: moment().subtract(7, 'days'), endDate: moment() },
      { id: 'reportrange41', startDate: moment().subtract(7, 'days'), endDate: moment() },
      { id: 'reportrange42', startDate: moment().subtract(7, 'days'), endDate: moment() },
      { id: 'reportrange43', startDate: moment().subtract(7, 'days'), endDate: moment() },
      { id: 'reportrange44', startDate: moment().subtract(7, 'days'), endDate: moment() },



      
      // Add more date range objects if needed
    ];
  
    function cb(start, end) {
      $(this.element).find('span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    }
  
    dateRanges.forEach(function (range) {
      $('#' + range.id).daterangepicker({
        startDate: range.startDate,
        endDate: range.endDate,
        ranges: {
          'Today': [moment(), moment()],
          'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
          'Last 7 Days': [moment().subtract(6, 'days'), moment()],
          'Last 30 Days': [moment().subtract(29, 'days'), moment()],
          'This Month': [moment().startOf('month'), moment().endOf('month')],
          'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
      }, cb);
      
      cb.call({ element: document.getElementById(range.id) }, range.startDate, range.endDate);
    });
  
  });
  