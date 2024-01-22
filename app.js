console.log('Hello World!');

var date = document.getElementById("date");

var title = document.getElementById("title5");

var note = document.getElementById("note");

function dateset() {
  var today = new Date();

  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();

  var vdate = day + "/" + month + "/" + year;
  date.value = vdate;
}

function setstoreg() {
  dateset();
  var dateu = document.getElementById("date").value;
  localStorage.setItem('1date', dateu);
}


function backdate() {
  var bdate = localStorage.getItem("1date");

  date.value = bdate;

}
backdate();

function savetitle() {
var titleData =  document.getElementById("title5").value;
  localStorage.setItem('title', titleData);
  document.getElementById("titlehand").innerText=titleData;

}



function logger() {
  var rust = localStorage.getItem('title');
 document.getElementById("title5").value = rust;
var titleData = document.getElementById("title");
document.getElementById("titlehand").innerText=rust;
}
logger();

function onnote() {
  var valuenote = note.value;
  localStorage.setItem('note', valuenote);
}



function setnote(e) {
  var servernote = localStorage.getItem('note');
  note.value = servernote;
}
setnote();

// set to the router creal

function rout8(){
  date.value=""
  note.value=""
  title.value=""
  // creare all local storege data 
  
  localStorage.clear();
  
}


/*
function WhichButton(event) {
  let text = "Not Allowed" + event.button;
 alert(text);
}*/

  function youri(){
    document.getElementById("sider").style.display="block";
    document.getElementById("cabtn").style.display="block"
        document.getElementById("dbtn").style.display="none"

  }
  function cansale(){
        document.getElementById("sider").style.display="none";
 document.getElementById("cabtn").style.display="none"
        document.getElementById("dbtn").style.display="block"

  }
  
  
  
  
  
  /// The TXT Download Function
  
    
/// server Router data seVER//
  var servernote = localStorage.getItem('note');
  var rust = localStorage.getItem('title');
  var bdate = localStorage.getItem("1date");

var data1 = bdate;
var data2 = rust;
var data3 = servernote;
//// END DATA LINE ////


function downloadTextFile() {
  window.location.href="index.html"
  // Get values from input fields
        var dateValue = data1;
        var titleValue = data2;
        var noteValue = data3;
  
        // Create a blob with the text content
        var textContent = "Date: " + dateValue + "\nTitle: " + titleValue + "\nNote: " + noteValue;
        var blob = new Blob([textContent], { type: 'text/plain' });
  
        // Create a link element and trigger the download
        var a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = titleValue+'.txt';
        a.click();
      }
      


