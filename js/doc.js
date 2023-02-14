/** data json */
var tabPatients = [
  {
    dossier: 1,
    nom: "BA",
    prenom: "Harouna",
    adresse: "Parcelles",
    "date de naissance": "26 Mars 1997",
    sexe: "M",
    telephone: "771050232",
  },
  {
    dossier: 2,
    nom: "NDIAYE",
    prenom: "Ndeye",
    adresse: "Keur Gorgui",
    "date de naissance": "3 Fevrier 1990",
    sexe: "F",
    telephone: "771050232",
  },
  {
    dossier: 3,
    nom: "Siby",
    prenom: "Lassana",
    adresse: "Yoff",
    "date de naissance": "5 Avril 1996",
    sexe: "M",
    telephone: "771050232",
  },
  {
    dossier: 4,
    nom: "Balde",
    prenom: "Ousmane",
    adresse: "Parcelles",
    "date de naissance": "2 Septembre 1998",
    sexe: "M",
    telephone: "771050232",
  },
  {
    dossier: 5,
    nom: "Dem",
    prenom: "Thierno",
    adresse: "Parcelles",
    "date de naissance": "4 novembre 1973",
    sexe: "M",
    telephone: "771050232",
  },
  {
    dossier: 6,
    nom: "Mané",
    prenom: "Diary",
    adresse: "Parcelles",
    "date de naissance": "2 Decembre 2000",
    sexe: "F",
    telephone: "771050232",
  },
  {
    dossier: 7,
    nom: "Sonko",
    prenom: "Pauline",
    adresse: "Parcelles",
    "date de naissance": "25 janvier 1956",
    sexe: "F",
    telephone: "771050232",
  },
  {
    dossier: 8,
    nom: "Sokhna",
    prenom: "Ibrahima",
    adresse: "Parcelles",
    "date de naissance": "7 octobre 1912",
    sexe: "M",
    telephone: "771050232",
  },
  {
    dossier: 9,
    nom: "Diallo",
    prenom: "Amadou",
    adresse: "Parcelles",
    "date de naissance": "8 aout 1980",
    sexe: "M",
    telephone: "771050232",
  },
  {
    dossier: 10,
    nom: "Ba",
    prenom: "Fatoumata",
    adresse: "Parcelles",
    "date de naissance": "23 juillet 1947",
    sexe: "F",
    telephone: "771050232",
  },
  {
    dossier: 10,
    nom: "Sane",
    prenom: "Mamadou",
    adresse: "Parcelles",
    "date de naissance": "23 juillet 2020",
    sexe: "M",
    telephone: "771050232",
  },
];
var tabhopitaux = [
  {
    etablissement: 1234,
    Villes: "Dakar",
    nom: "Hopital Principal de Dakar",
    adresse: "Corniche Estate, Dakar",
    "code postal": "H2M3Y5",
    telephone: "33 839 50 50",
  },
  {
    etablissement: 2346,
    Villes: "Dakar",
    nom: "Hôpital Général IDRISSA POUYE",
    adresse: "Grand Yoff Sénégal",
    "code postal": "J4R 2Z5",
    telephone: "33 876 23",
  },
  {
    etablissement: 3980,
    Villes: "Dakar",
    nom: "Hopital Aristide LE DANTEC",
    adresse: "U Dakar",
    "code postal": "H3J 4K8",
    telephone: "33 823 58 96",
  },
  {
    etablissement: 4177,
    Villes: "Thies",
    nom: "Hôpital El Hadji Ahmadou",
    adresse: "Sedima",
    "code postal": "H3J",
    telephone: " 33 939 74 80",
  },
  {
    etablissement: 7306,
    Villes: "St Louis",
    nom: "Hôpital de Mamadou DIOUF",
    adresse: "Saint-Louis",
    "code postal": "J8H 2D4",
    telephone: "33 961 84 06",
  },
  {
    etablissement: 6895,
    Villes: "Louga",
    nom: "Hôpital régional Ahmadou",
    adresse: "Louga",
    "code postal": "J7B 3J8",
    telephone: "33 967 11 10",
  },
];
var tabHospitalisations = [
  {
    "code etablissement": 1234,
    "no dossier patient": 5,
    "date admission": "10-Aout-2022",
    "date sortie": "14-Septembre-2022",
    specialite: "Medecine",
  },
  {
    "code etablissement": 1234,
    "no dossier patient": 10,
    "date admission": "12-Décembre-2022",
    "date sortie": "20-Décembre-2022",
    specialite: "Chirurgie",
  },
  {
    "code etablissement": 2346,
    "no dossier patient": 8,
    "date admission": "03-Mars-2021",
    "date sortie": "14-Octobre-2021",
    specialite: "Medecine",
  },
  {
    "code etablissement": 2346,
    "no dossier patient": 1,
    "date admission": "11-Novembre-2020",
    "date sortie": "04-Aout-2021",
    specialite: "Orthopedie",
  },
  {
    "code etablissement": 2346,
    "no dossier patient": 3,
    "date admission": "12-Avril-2020",
    "date sortie": "14-aout-2021",
    specialite: "Medecine",
  },
  {
    "code etablissement": 4177,
    "no dossier patient": 6,
    "date admission": "14-Fevrier.-2020",
    "date sortie": "14-Aout-2021",
    specialite: "Chirugien",
  },
  {
    "code etablissement": 3980,
    "no dossier patient": 5,
    "date admission": "14-Fevrier.-2020",
    "date sortie": "14-Aout-2021",
    specialite: "Medecine",
  },
  {
    "code etablissement": 3980,
    "no dossier patient": 5,
    "date admission": "01-janv.-2021",
    "date sortie": "14-Aout-01",
    specialite: "Medecin",
  },
  {
    "code etablissement": 3980,
    "no dossier patient": 9,
    "date admission": "11-Avril-2021",
    "date sortie": "17-Octobre-2021",
    specialite: "Orthopedie",
  },
  {
    "code etablissement": 3980,
    "no dossier patient": 7,
    "date admission": "27-Novembre-2021",
    "date sortie": "13-Janvier-2022",
    specialite: "Chirugie",
  },
  {
    "code etablissement": 3980,
    "no dossier patient": 10,
    "date admission": "28-Mai-2022",
    "date sortie": "20-Decembre-2022",
    specialite: "Chirugie",
  },
  {
    "code etablissement": 4177,
    "no dossier patient": 3,
    "date admission": "03-Juin-2021",
    "date sortie": "08-Novembre-2021",
    specialite: "Medecine",
  },
  {
    "code etablissement": 4177,
    "no dossier patient": 3,
    "date admission": "02-Fevrier-2022",
    "date sortie": "11-Juillet-2022",
    specialite: "Orthopedie",
  },
  {
    "code etablissement": 7306,
    "no dossier patient": 2,
    "date admission": "23-Mai-2021",
    "date sortie": "19-Aout-2022",
    specialite: "Orthopedie",
  },
];

var mysearch = "";
var dom = {
  $data: $("#data"),
  $table: $("#table"),
  $etab: $("#etab"),
};

function json2table(json, $table) {
  var cols = Object.keys(json[0]);

  var headerRow = "";
  var bodyRows = "";

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  $table.html("<thead><tr></tr></thead><tbody></tbody>");

  cols.map(function (col) {
    headerRow += "<th>" + capitalizeFirstLetter(col) + "</th>";
  });

  json.map(function (row) {
    bodyRows += "<tr>";

    cols.map(function (colName) {
      bodyRows += "<td>" + row[colName] + "</td>";
    });

    bodyRows += "</tr>";
  });

  $table.find("thead tr").append(headerRow);
  $table.find("tbody").append(bodyRows);
}

var getData = function (id) {
  switch (id) {
    case 0:
      return tabPatients;
      break;
    case 1:
    case 4:
      return tabhopitaux;
      break;
    case 2:
    case 3:
      return tabHospitalisations;
      break;
  }
};

var finder = function (type, string) {};

var removedom = function () {
  document.querySelector("select#hospipatient")
    ? document.querySelector("select#hospipatient").remove()
    : "";
  document.querySelector("select#etablissementSelect")
    ? document.querySelector("select#etablissementSelect").remove()
    : "";
  document.querySelector("select#specialiteSelect")
    ? document.querySelector("select#specialiteSelect").remove()
    : "";
  document.querySelector("label#patientcode")
    ? document.querySelector("label#patientcode").remove()
    : "";
  document.querySelector("label#etablissementLabel")
    ? document.querySelector("label#etablissementLabel").remove()
    : "";
  document.querySelector("label#specialiteLabel")
    ? document.querySelector("label#specialiteLabel").remove()
    : "";

  $("#close").click();
  $("#closeEtab").remove();
};

$("#close").click(function () {
  $("#table tr").each(function () {
    $(this).remove();
  });
  $(this).css({ display: "none" });
  $(".status").text("");
  $("#table").empty();
  $("#etab").empty();
});

var status_messages = [
  " patients en sous traitement.",
  " hôpitaux au Sénégal.",
  " patients hospitalisés.",
];

$('a[href^="#expe"]').each(function (i) {
  //les listes ... 0 à 2
  if (i <= 2) {
    var data = getData(i);
    $(this).click(function () {
      $('a[href^="#expe"]').attr("class", "");
      $(this).attr("class", "currentPage");
      removedom();
      $("#close").css({
        display: "block",
        "text-align": "center",
        position: "relative",
        left: "97%",
        color: "red",
        top: "5px",
        "z-index": "1",
        cursor: "pointer",
        "font-size": "20px",
      });
      json2table(data, dom.$table);
      $(".status").text("STATUS : Il y a " + data.length + status_messages[i]);
    });
  } else {
    //les selections a voir pour dynamisé
    if (i === 3) {
      var data_search = getData(i);
      var data_select = tabPatients;
    } else {
      var data_search = getData(i);
      var data_select = tabPatients;
    }
    $(this).click(function () {
      $('a[href^="#expe"]').attr("class", "");
      $(this).attr("class", "currentPage");
    });
  }
});

$('a[href="#expe4"]').click(function () {
  removedom();

  var select = document.querySelector("select")
    ? document.querySelector("select")
    : document.createElement("select");
  var label = document.querySelector("label")
    ? document.querySelector("label")
    : document.createElement("label");

  select.id = "hospipatient";
  select.style = "color:black";
  label.id = "patientcode";
  label.textContent = "Choisir le code de patient";

  //first options
  var option = document.createElement("option");
  option.value = "0";
  option.textContent = "Choisir";
  select.appendChild(option);

  //options added
  for (var i in tabPatients) {
    var option = document.createElement("option");

    option.value = tabPatients[i].dossier;
    option.textContent =
      tabPatients[i].dossier +
      "(" +
      tabPatients[i].prenom +
      " " +
      tabPatients[i].nom +
      ")";
    select.appendChild(option);
  }

  select.onchange = function () {
    var client = this.options[this.value].textContent;
    console.log(client);
    mysearch = parseInt(this.value);
    var search = [];

    if (mysearch !== 0) {
      $(tabHospitalisations).filter(function (j, n) {
        if (n["no dossier patient"] === mysearch) {
          search.push(n);
          $(".status").text(
            "STATUS : Il y a " +
              search.length +
              " hospitalisation(s) pour le patient : dossier n°" +
              client
          );
          return json2table(search, dom.$table);
        } else {
          if (search.length === 0) {
            $("#table").empty();
          }
        }
      });
    } else {
      $("#table").empty();
    }
  };
  $(".status").text(
    "Choisir le code de patient pour afficher tous ses hospitalisations."
  );
  $(".content").append(label);
  $(".content").append(select);
});

$('a[href="#expe5"]').click(function () {
  removedom();
  var select = document.querySelector("select")
    ? document.querySelector("select")
    : document.createElement("select");
  var labelSpec = document.querySelector("label#specialiteLabel")
    ? document.querySelector("label#specialiteLabel")
    : document.createElement("label");
  var labelEtab = document.querySelector("label#etablissementLabel")
    ? document.querySelector("label#etablissementLabel")
    : document.createElement("label");
  var button = document.querySelector('input[type="button"]')
    ? document.querySelector('input[type="button"]')
    : document.createElement("input");

  var mysearch = 0;
  var selectEtab = document.createElement("select");
  var noEtab = "";
  var noClient = "";
  var etabSpec = "";

  selectEtab.style = "color:black";
  selectEtab.id = "etablissementSelect";
  labelEtab.id = "etablissementLabel";
  labelEtab.textContent = "Choisir l'hôpital";

  //first options
  var optionEtab = document.createElement("option");

  optionEtab.value = "0";
  optionEtab.textContent = "Choisir";
  selectEtab.appendChild(optionEtab);

  button.id = "closeEtab";
  button.type = "button";
  button.value = "Fermer";

  button.onclick = function () {
    removedom();
    this.remove();
  };

  for (var i in tabhopitaux) {
    var optionEtab = document.createElement("option");

    optionEtab.value = tabhopitaux[i].etablissement;
    optionEtab.textContent =
      tabhopitaux[i].etablissement + "(" + tabhopitaux[i].nom + ")";
    selectEtab.appendChild(optionEtab);
  }
  $(".status").text("Choisir l'hôpital pour afficher les spécialités.");
  selectEtab.onchange = function () {
    $("#specialiteSelect").remove();
    var selectSpec = document.createElement("select");
    var optionSpec = document.createElement("option");
    selectSpec.style = "color:black";
    selectSpec.id = "specialiteSelect";
    labelSpec.id = "specialiteLabel";
    labelSpec.textContent =
      "Choisir la specialité. Seules les specialités présentes dans nos dossiers pour cet établissement apparaissent dans la liste déroulante)";

    optionSpec.value = "0";
    optionSpec.textContent = "Choisir la specialité";
    selectSpec.appendChild(optionSpec);

    mysearch1 = parseInt(this.value);
    var search = [];
    var i = 0;
    var check = [];

    if (mysearch1 !== 0)
      $(tabHospitalisations).filter(function (j, n) {
        if (n["code etablissement"] === mysearch1) {
          if ($.inArray(n.specialite, check) === -1) {
            check.push(n.specialite);
            var optionSpec = document.createElement("option");
            optionSpec.value = n.specialite;
            optionSpec.textContent = n.specialite;
            selectSpec.appendChild(optionSpec);
            i++;
            noEtab = n["code etablissement"];
            noClient = n["no dossier patient"];
            etabSpec = n.specialite;
            $(".status").text("STATUS : Code établissement : " + mysearch1);
          }
        }
      });

    selectSpec.onchange = function () {
      mysearch2 = this.value;
      var search = [];
      var search2 = [];

      if (mysearch2 !== 0)
        $(tabHospitalisations).filter(function (j, n) {
          if (
            n["specialite"] === mysearch2 &&
            n["code etablissement"] === mysearch1
          ) {
            search.push(n);
            $(tabhopitaux).filter(function (k, m) {
              if (mysearch1 === m["etablissement"] && search2.length === 0) {
                search2.push(m);
                json2table(search2, dom.$etab);
                $(".status").text(
                  "STATUS : " +
                    m.nom +
                    " (code:" +
                    noEtab +
                    ") Service en " +
                    mysearch2 +
                    " pour l'admission du client dossier n° : " +
                    noClient
                );
              }
            });
            return json2table(search, dom.$table);
          }
        });
    };
    $(".content").append(labelSpec);
    $(".content").append(selectSpec);
  };

  $(".content").append(labelEtab);
  $(".content").append(selectEtab);
  $(".content").append(button);
});

$(document).ready(function () {
  $("#close").css({ display: "none" });
});
