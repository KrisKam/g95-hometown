
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("studentinfo").del()
    .then(function () {
      // Inserts seed entries
      return knex("studentinfo").insert([
        {first:"Joey", last:"Walter", lat:"40.0150", long:"105.2705",favAnimal:"https://2.bp.blogspot.com/-Oz9tTxpw6Qk/WqLPVFXfLfI/AAAAAAAB41Q/Y2jyYo1QuhUstXG2Z3TZ06LOqRmys_sKwCLcBGAs/s1600/funny-animals-307-01.jpg", prevOccupation: "Warehouse"},
        {first:"Maddie", last:"Kreamer", lat:"41.673153", long:"-93.697342",favAnimal:"https://pbs.twimg.com/media/B6CO2wGIEAAaDcc.jpg", prevOccupation: "Server/Bartender"},
        {first:"Cory", last:"Pease", lat:"39.739235", long:"-104.990250",favAnimal:"https://vignette.wikia.nocookie.net/best-tv-shows1923/images/3/30/Property-header-catdog-480x270.png/revision/latest?cb=20180405002021", prevOccupation: "Boss"},
        {first:"Hunt", last:"Applegate", lat:"32.7765", long:"79.9311",favAnimal:"hhttps://i.ytimg.com/vi/bx7BjjqHf2U/maxresdefault.jpg", prevOccupation: "Benefits Advisor"},
        {first:"Jose", last:"Stricklin", lat:"39.740959", long:"-104.985798",favAnimal:"http://3.bp.blogspot.com/-jveaI4eli_g/T1UkNs37IzI/AAAAAAAAAmA/UuJX-CWkYFI/s1600/Baby_elephant.jpg", prevOccupation: "Retail"},
        {first:"Jed", last:"Walter", lat:"40.015", long:"105.2705",favAnimal:"http://www.happydogheaven.com/wp-content/uploads/english-black-lab-golden-retriever-spencer-the-black-labrador.jpg%E2%80%9D", prevOccupation: "Poker Dealer"},
        {first:"Nick", last:"Lee", lat:"37.3852", long:"122.1141",favAnimal:"https://c1.staticflickr.com/4/3072/2836269719_f1038ae2c8_b.jpg", prevOccupation: "Ditch Digger"},
        {first:"Brice", last:"Sinkule", lat:"40.628143", long:"-96.961372",favAnimal:"http://dogsaholic.com/wp-content/uploads/2018/02/%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F-5-810x490.jpg", prevOccupation: "Sale Consultant"},
        {first:"Anhuelita", last:"LaChica", lat:"39.905271", long:"-104.994178",favAnimal:"https://media1.tenor.com/images/0e3f49f5355ac2f28756f0a0b65562b0/tenor.gif?itemid=5386474", prevOccupation: "Masseuse"},
        {first:"Conrad", last:"Wright", lat:"-23.87435", long:"98.42153",favAnimal:"https://bit.ly/2xhgkD6", prevOccupation: "Rural Development Consultant"},
        {first:"Kevin", last:"Potts", lat:"33.684566", long:"-117.826508",favAnimal:"https://usercontent2.hubstatic.com/13746147_f496.jpg", prevOccupation: "Skydiver"},
        {first:"Kris", last:"Kamikawa", lat:"21.451330", long:"-158.015274",favAnimal:"http://sisinmaru.com/wp-content/uploads/2018/08/20180830_DSC_0391.jpg", prevOccupation: "Legislative Aide"},
        {first:"Jared", last:"Candelaria", lat:"39.7392", long:"104.9903",favAnimal:"http://static.ddmcdn.com/en-us/apl/breedselector/images/breed-selector/dogs/breeds/miniature-schnauzer_01_lg.jpg", prevOccupation: "Student"},
        {first:"Damon", last:"Chivers", lat:"21.278492", long:"-157.832754",favAnimal:"https://upload.wikimedia.org/wikipedia/commons/6/63/African_elephant_warning_raised_trunk.jpg", prevOccupation: "Artist"}
      ]);
    });
};

