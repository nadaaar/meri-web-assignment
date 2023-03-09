document.addEventListener('DOMContentLoaded', function() {


    document.querySelector('#add-row-btn').addEventListener('click', function() {
      var rowHeader = document.querySelector('#add-row-header').value;
      console.log("rowHeader:", rowHeader);
      var lastColIndex = document.querySelectorAll('#schedule-table > thead > tr > th').length - 1;
      var newRow = document.createElement('tr');
      var newRowHeader = document.createElement('th');
      newRowHeader.textContent = rowHeader;
      newRow.appendChild(newRowHeader);
      for (var i = 0; i < lastColIndex; i++) {
        newRow.appendChild(document.createElement('td'));
      }
      document.querySelector('#schedule-table > tbody:last-child').appendChild(newRow);
      var optionToRemove = document.querySelector('.add-header-select option[value="' + rowHeader + '"]');
      optionToRemove.parentNode.removeChild(optionToRemove);
    });
  
  
  
  
    document.querySelector('#add-col-btn').addEventListener('click', function() {
      var colHeader = document.querySelector('#add-col-header').value;
      console.log("colHeader:", colHeader);
      var newColHeader = document.createElement('th');
      newColHeader.textContent = colHeader;
      document.querySelector('#schedule-table > thead > tr').appendChild(newColHeader);
      document.querySelectorAll('#schedule-table > tbody > tr').forEach(function(tr) {
        tr.appendChild(document.createElement('td'));
      });
      var optionToRemove = document.querySelector('.add-header-select option[value="' + colHeader + '"]');
      optionToRemove.parentNode.removeChild(optionToRemove);
    });
  
  
  
    document.querySelector('#add-btn').addEventListener('click', function() {
      var agendaHeader = document.querySelector('#add-agenda-header').value;
      var agenda1Header = document.querySelector('#add-agenda1-header').value;
      var agendaText = document.querySelector('#add-agenda-input').value;
      var rowIndex = document.querySelector('#add-agenda-header').selectedIndex;
      var colIndex = document.querySelector('#add-agenda1-header').selectedIndex;
      console.log(rowIndex)
      console.log(colIndex)
      var cell = document.querySelector('#schedule-table > tbody > tr:nth-child(' + (rowIndex+1) + ') > td:nth-child(' + (colIndex+2) + ')');
      if (!cell.textContent) {
        cell.textContent = agendaText;
        var deleteIcon = document.createElement('span');
        deleteIcon.classList.add('delete');
        deleteIcon.textContent = '✖';
        cell.appendChild(deleteIcon);
      } else {
        //alert('Cell is not empty');
      }
    });
    $('#schedule-table').on('mouseenter', 'td', function() {
      $(this).find('.delete').css('visibility', 'visible');
    }).on('mouseleave', 'td', function() {
      $(this).find('.delete').css('visibility', 'hidden');
    }).on('click', '.delete', function() {
      $(this).parent().text('');
      $(this).remove();
    });
  });