function showEnglish() {
  document.getElementById("engVer1").style.display = "none";
  document.getElementById("order").style.display = ""
  document.getElementById("engVer").style.display = "";
  document.getElementById("chiVer").style.display = "none";
  document.getElementById("toptitle").innerHTML = "Fitness Walking Tracks";
  document.getElementById("engInput").style.display = "";
  document.getElementById("chiInput").style.display = "none";
  document.getElementById("Engdistrictselect").style.display = "";
  document.getElementById("EnglishDistrictfuncButton").style.display = "";
  document.getElementById("Chidistrictselect").style.display = "none";
  document.getElementById("ChineseDistrictfuncButton").style.display = "none";
  document.getElementById("engVerwithdistrict").style.display = "none";
  document.getElementById("chiVerwithdistrict").style.display = "none";

}

function showChinese() {
  document.getElementById("engVer1").style.display = "none";
  document.getElementById("order").style.display = "none"
  document.getElementById("engVer").style.display = "none";
  document.getElementById("chiVer").style.display = "";
  document.getElementById("toptitle").innerHTML = "健步行徑";
  document.getElementById("engInput").style.display = "none";
  document.getElementById("chiInput").style.display = "";
  document.getElementById("Engdistrictselect").style.display = "none";
  document.getElementById("EnglishDistrictfuncButton").style.display = "none";
  document.getElementById("Chidistrictselect").style.display = "";
  document.getElementById("ChineseDistrictfuncButton").style.display = "";
  document.getElementById("engVerwithdistrict").style.display = "none";
  document.getElementById("chiVerwithdistrict").style.display = "none";
  
}

function searchEngTable() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("engInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("tb1");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

function searchChiTable() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("chiInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("tb2");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

/*13033972*/
function showengorder() {
  document.getElementById("engVer1").style.display = "";
  document.getElementById("engVer").style.display = "none";
  document.getElementById("engInput").style.display = "none";
  document.getElementById("chiInput").style.display = "none";

}
/*13033972*/