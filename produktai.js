var produktai = [
[ "1", "kosmetinė", "rožinė", "15,99", "5" ],
[ "2", "kuprinė", "balta", "27,36" ,""],
[ "3", "kosmetinė", "mėlyna", "15,99", "" ],
[ "4", "kosmetinė", "juoda", "15,99", "" ],
[ "5", "pieštukinė", "raudona", "8,69", "" ],
[ "6", "kosmetinė", "juoda", "15,99", "5" ],
[ "7", "pieštukinė", "rožinė", "8,69", "10" ],
[ "8", "kuprinė", "pilka", "27,36", "" ],
[ "9", "kuprinė", "žalia", "27,36", "" ],
[ "10", "kuprinė", "bordo", "27,36", "" ],
[ "11", "kuprinė", "balta", "27,36", "" ],
[ "12", "kosmetinė", "rusva", "15,99", "25" ],
[ "13", "kuprinė", "žydra", "27,36", "" ],
[ "14", "pieštukinė", "magenta", "8,69", "" ],
[ "15", "kosmetinė", "rožinė", "15,99", "5" ],
[ "16", "kuprinė", "juoda", "27,36", "5" ],
[ "17", "kuprinė", "rožinė", "27,36", "5" ],
[ "18", "kuprinė", "rožinė", "27,36", "10" ],
[ "19", "kosmetinė", "juoda", "15,99", "" ],
[ "20", "pieštukinė", "pilka", "8,69", "" ],
[ "21", "pieštukinė", "rožinė", "8,69", "" ],
[ "22", "kosmetinė", "pilka", "15,99", "" ],
[ "23", "kuprinė", "balta", "27,36", "10" ],
[ "24", "kosmetinė", "mėlyna", "15,99", "15" ],
[ "25", "kosmetinė", "bordo", "15,99", "" ],
[ "26", "kosmetinė", "pilka", "15,99", "" ],
[ "27", "kuprinė", "balta", "27,36", "" ],
[ "28", "kosmetinė", "raudona", "15,99", "" ],
[ "29", "kosmetinė", "balta", "15,99", "5" ],
[ "30", "kosmetinė", "raudona", "15,99", "5" ],
[ "31", "pieštukinė", "pilka", "8,69", "10" ],
[ "32", "pieštukinė", "rožinė", "8,69", "" ],
[ "33", "kosmetinė", "bordo", "15,99", "" ],
[ "34", "kuprinė", "mėlyna", "27,36", "" ],
[ "35", "kosmetinė", "rožinė", "15,99", "25" ],
[ "36", "kuprinė", "balta", "27,36", "" ],
[ "37", "pieštukinė", "bordo", "8,69", "" ],
[ "38", "kosmetinė", "rožinė", "15,99", "" ],
[ "39", "kuprinė", "pilka", "27,36", "15" ],
[ "40", "kosmetinė", "mėlyna", "15,99", "20" ],
[ "41", "kosmetinė", "pilka", "15,99", "5" ],
[ "42", "kosmetinė", "rožinė", "15,99", "" ],
[ "43", "kosmetinė", "balta", "15,99", "" ],
[ "44", "kuprinė", "bordo", "27,36", "" ],
[ "45", "kuprinė", "rožinė", "27,36", "15" ],
[ "46", "kuprinė", "mėlyna", "27,36", "" ],
[ "47", "kosmetinė", "rožinė", "15,99", "" ],
[ "48", "kosmetinė", "bordo", "15,99", "" ],
[ "49", "pieštukinė", "raudona", "8,69", "" ],
[ "50", "pieštukinė", "pilka", "8,69", "5" ],
[ "51", "kosmetinė", "pilka", "15,99", "" ],
[ "52", "kuprinė", "mėlyna", "27,36", "5" ],
[ "53", "kosmetinė", "balta", "15,99", "" ]
];

var createProductaiDataTable = function() {
   $('#produktuTable').DataTable( {
        data: produktai,
        columns: [
            { title: "Inv. nr." },
            { title: "Tipas" },
            { title: "Spalva" },
            { title: "Kaina, €" },
            { title: "Nuolaida, %" }
        ]
    } );
}