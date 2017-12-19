var video;
var vScale = 10;
var runningArray = [];
var flag_Algerian;
var flag_American;
var flag_Argentinian;
var flag_Austrian;
var flag_Bahamas;
var flag_Bangladesh;
var flag_Belgium;
var flag_Bhutan;
var flag_Brazil;
var flag_Canada;
var flag_Chile;
var flag_China;
var flag_Columbia;
var flag_Croatia;
var flag_Cuba;
var flag_Cyprus;
var flag_Czech;
var flag_Danish;
var flag_English;
var flag_Estonian;
var flag_Finland;
var flag_French;
var flag_Georgia;
var flag_German;
var flag_Greek;
var flag_Iceland;
var flag_India;
var flag_Indonesia;
var flag_Ireland;
var flag_Israel;
var flag_Italian;
var flag_Jamaican;
var flag_Japanese;
var flag_Kenyan;
var flag_Kuwait;
var flag_Lebanese;
var flag_Lesotho;
var flag_Libya;
var flag_Luxembourg;
var flag_Malta;
var flag_Nepal;
var flag_Nigeria;
var flag_North_Korea;
var flag_Norway;
var flag_Panama;
var flag_Poland;
var flag_Portugal;
var flag_Qatar;
var flag_Saudi_Arabia;
var flag_Seychelles;
var flag_South_Africa;
var flag_South_Korean;
var flag_Spain;
var flag_Swedish;
var flag_Swiss;
var flag_Thai;
var flag_Trinidad;
var flag_Tunisia;
var flag_Turkey;
var flag_UAE;
var flag_Venezuela;
var flag_Vietnam;
var flag_Yemen;
var flag_Zambia;
var flag_Zimbabwe;
var flagArray;
var flagQuestion1 = prompt("What country were you born in?");
var flagQuestion2 = prompt("What was the first country you went to which was not your home country?");
var flagQuestion3 = prompt("What is your favorite country?");
var flagQuestion4 = prompt("What country would you like to travel to the most?");
var flagQuestion5 = prompt("What is the country, in your opinion, with the coolest flag?");
var timer;


function preload(){
  flag_Algerian = loadImage("Algerian_Flag_Emoji.PNG");
  flag_American = loadImage("American_Flag_Emoji.PNG");
  flag_Argentinian = loadImage("Argentinian_Flag_Emoji.PNG");
  flag_Austrian = loadImage("Austrian_Flag_Emoji.PNG");
  flag_Bahamas = loadImage("Bahamas_Flag_Emoji.PNG");
  flag_Bangladesh = loadImage("Bangladesh_Flag_Emoji.PNG");
  flag_Belgium = loadImage("Belgium_Flag_Emoji.PNG");
  flag_Bhutan = loadImage("Bhutan_Flag_Emoji.PNG");
  flag_Brazil = loadImage("Brazilian_Flag_Emoji.PNG");
  flag_Canada = loadImage("Canadian_Flag_Emoji.PNG");
  flag_Chile = loadImage("Chilean_Flag_Emoji.PNG");
  flag_China = loadImage("Chinese_Flag_Emoji.PNG");
  flag_Columbia = loadImage("Columbian_Flag_Emoji.PNG");
  flag_Croatia = loadImage("Croatian_Flag_Emoji.PNG");
  flag_Cuba = loadImage("Cuban_Flag_Emoji.PNG");
  flag_Cyprus = loadImage("Cyrpus'_Flag_Emoji.PNG");
  flag_Czech = loadImage("Czech_Republic's_Flag_Emoji.PNG");
  flag_Danish = loadImage("Danish_Flag_Emoji.PNG");
  flag_English = loadImage("English_Flag_Emoji.PNG");
  flag_Estonian = loadImage("Estonian_Flag_Emoji.PNG");
  flag_Finland = loadImage("Finland's_Flag_Emoji.PNG");
  flag_French = loadImage("French_Flag_Emoji.PNG");
  flag_Georgia = loadImage("Georgian_Flag_Emoji.PNG");
  flag_German = loadImage("German_Flag_Emoji.PNG");
  flag_Greek = loadImage("Greek_Flag_Emoji.PNG");
  flag_Iceland = loadImage("Icelandic_Flag_Emoji.PNG");
  flag_India = loadImage("Indian_Flag_Emoji.PNG");
  flag_Indonesia = loadImage("Indonesian_Flag_Emoji.PNG");
  flag_Ireland = loadImage("Ireland's_Flag_Emoji.PNG");
  flag_Israel = loadImage("Israel's_Flag_Emoji.PNG");
  flag_Italian = loadImage("Italian_Flag_Emoji.PNG");
  flag_Jamaican = loadImage("Jamaican_Flag_Emoji.PNG");
  flag_Japanese = loadImage("Japanese_Flag_Emoji.PNG");
  flag_Kenyan = loadImage("Kenyan_Flag_Emoji.PNG");
  flag_Kuwait = loadImage("Kuwait_Flag_Emoji.PNG");
  flag_Lebanese = loadImage("Lebanese_Flag_Emoji.PNG");
  flag_Lesotho = loadImage("Lesotho_Flag_Emoji.PNG");
  flag_Libya = loadImage("Libyan_Flag_Emoji.PNG");
  flag_Luxembourg = loadImage("Luxembourg_Flag_Emoji.PNG");
  flag_Malta = loadImage("Maltan_Flag_Emoji.PNG");
  flag_Nepal = loadImage("Nepal's_Flag_Emoji.PNG");
  flag_Nigeria = loadImage("Nigerian_Flag_Emoji.PNG");
  flag_North_Korea = loadImage("North_Korean_Flag_Emoji.PNG");
  flag_Norway = loadImage("Norwegian_Flag_Emoji.PNG");
  flag_Panama = loadImage("Panama_Flag_Emoji.PNG");
  flag_Poland = loadImage("Polish_Flag_Emoji.PNG");
  flag_Portugal = loadImage("Portuguese_Flag_Emoji.PNG");
  flag_Qatar = loadImage("Qatar_Flag_Emoji.PNG");
  flag_Saudi_Arabia = loadImage("Saudi_Arabian_Flag_Emoji.PNG");
  flag_Seychelles = loadImage("Seychelles_Flag_Emoji.PNG");
  flag_South_Africa = loadImage("South_African_Flag_Emoji.PNG");
  flag_South_Korean = loadImage("South_Korean_Flag_Emoji.PNG");
  flag_Spain = loadImage("Spanish_Flag_Emoji.PNG");
  flag_Swedish = loadImage("Swedish_Flag_Emoji.PNG");
  flag_Swiss = loadImage("Swiss_Flag_Emoji.PNG");
  flag_Thai = loadImage("Thai_Flag_Emoji.PNG");
  flag_Trinidad = loadImage("Trinidad_and_Tobago_Flag_Emoji.PNG");
  flag_Tunisia = loadImage("Tunisian_Flag_Emoji.PNG");
  flag_Turkey = loadImage("Turkey_Flag_Emoji.PNG");
  flag_UAE = loadImage("UAE_Flag_Emoji.PNG");
  flag_Venezuela = loadImage("Venezuelan_Flag_Emoji.PNG");
  flag_Vietnam = loadImage("Vietnamese_Flag_Emoji.PNG");
  flag_Yemen = loadImage("Yemen_Flag_Emoji.PNG");
  flag_Zambia = loadImage("Zambian_Flag_Emoji.PNG");
  flag_Zimbabwe = loadImage("Zimbabwe_Flag_Emoji.PNG");

  flag_Algerian.resize(vScale, vScale);
  flag_American.resize(vScale, vScale);
  flag_Argentinian.resize(vScale, vScale);
  flag_Austrian.resize(vScale, vScale);
  flag_Bahamas.resize(vScale, vScale);
  flag_Bangladesh.resize(vScale, vScale);
  flag_Belgium.resize(vScale, vScale);
  flag_Bhutan.resize(vScale, vScale);
  flag_Brazil.resize(vScale, vScale);
  flag_Canada.resize(vScale, vScale);
  flag_Chile.resize(vScale, vScale);
  flag_China.resize(vScale, vScale);
  flag_Columbia.resize(vScale, vScale);
  flag_Croatia.resize(vScale, vScale);
  flag_Cuba.resize(vScale, vScale);
  flag_Cyprus.resize(vScale, vScale);
  flag_Czech.resize(vScale, vScale);
  flag_Danish.resize(vScale, vScale);
  flag_English.resize(vScale, vScale);
  flag_Estonian.resize(vScale, vScale);
  flag_Finland.resize(vScale, vScale);
  flag_French.resize(vScale, vScale);
  flag_Georgia.resize(vScale, vScale);
  flag_German.resize(vScale, vScale);
  flag_Greek.resize(vScale, vScale);
  flag_Iceland.resize(vScale, vScale);
  flag_India.resize(vScale, vScale);
  flag_Indonesia.resize(vScale, vScale);
  flag_Ireland.resize(vScale, vScale);
  flag_Israel.resize(vScale, vScale);
  flag_Italian.resize(vScale, vScale);
  flag_Jamaican.resize(vScale, vScale);
  flag_Japanese.resize(vScale, vScale);
  flag_Kenyan.resize(vScale, vScale);
  flag_Kuwait.resize(vScale, vScale);
  flag_Lebanese.resize(vScale, vScale);
  flag_Lesotho.resize(vScale, vScale);
  flag_Libya.resize(vScale, vScale);
  flag_Luxembourg.resize(vScale, vScale);
  flag_Malta.resize(vScale, vScale);
  flag_Nepal.resize(vScale, vScale);
  flag_Nigeria.resize(vScale, vScale);
  flag_North_Korea.resize(vScale, vScale);
  flag_Norway.resize(vScale, vScale);
  flag_Panama.resize(vScale, vScale);
  flag_Poland.resize(vScale, vScale);
  flag_Portugal.resize(vScale, vScale);
  flag_Qatar.resize(vScale, vScale);
  flag_Saudi_Arabia.resize(vScale, vScale);
  flag_Seychelles.resize(vScale, vScale);
  flag_South_Africa.resize(vScale, vScale);
  flag_South_Korean.resize(vScale, vScale);
  flag_Spain.resize(vScale, vScale);
  flag_Swedish.resize(vScale, vScale);
  flag_Swiss.resize(vScale, vScale);
  flag_Thai.resize(vScale, vScale);
  flag_Trinidad.resize(vScale, vScale);
  flag_Tunisia.resize(vScale, vScale);
  flag_Turkey.resize(vScale, vScale);
  flag_UAE.resize(vScale, vScale);
  flag_Venezuela.resize(vScale, vScale);
  flag_Vietnam.resize(vScale, vScale);
  flag_Yemen.resize(vScale, vScale);
  flag_Zambia.resize(vScale, vScale);
  flag_Zimbabwe.resize(vScale, vScale);
}


function setup() {
  for(var i = 0; i < 1; i++){
    runningArray[i] = new flagPixelReplacement();
  }
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(64, 48);

}

function draw() {
  background(0);
  timer = second();
  for(var i = 0; i < 1; i++){
    runningArray[i].imagePlacement();
  }

}

function flagPixelReplacement(){
  this.rangeValue = 255 / 65;
  this.flagImage;
  this.flagChoiceRange = 255 / 5;
  this.flagArray = [flag_Algerian, flag_American, flag_Argentinian, flag_Austrian, flag_Bahamas, flag_Bangladesh, flag_Belgium, flag_Bhutan, flag_Brazil, flag_Canada, flag_Chile, flag_China, flag_Columbia, flag_Croatia, flag_Cuba, flag_Cyprus, flag_Czech, flag_Danish, flag_English, flag_Estonian, flag_Finland, flag_French, flag_Georgia, flag_German, flag_Greek, flag_Iceland, flag_India, flag_Indonesia, flag_Ireland, flag_Israel, flag_Italian, flag_Jamaican, flag_Japanese, flag_Kenyan, flag_Kuwait, flag_Lebanese, flag_Lesotho, flag_Libya, flag_Luxembourg, flag_Malta, flag_Nepal, flag_Nigeria, flag_North_Korea, flag_Norway, flag_Panama, flag_Poland, flag_Portugal, flag_Qatar, flag_Saudi_Arabia, flag_Seychelles, flag_South_Africa, flag_South_Korean, flag_Spain, flag_Swedish, flag_Swiss, flag_Thai, flag_Trinidad, flag_Tunisia, flag_Turkey, flag_UAE, flag_Venezuela, flag_Vietnam, flag_Yemen, flag_Zambia, flag_Zimbabwe];
  this.flagArray = shuffle(this.flagArray, true);
  this.answerCountry1;
  this.answerCountry2;
  this.answerCountry3;
  this.answerCountry4;
  this.answerCountry5;
  this.numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64];
  this.numberArray1 = [];
  this.numberArray2 = [];
  this.numberArray3 = [];
  this.numberArray4 = [];
  this.numberArray5 = [];
  this.numberArray6 = [];
  this.numberArray7 = [];
  this.randomValue1 = round(random(64));
  this.randomValue2 = round(random(63));
  this.randomValue3 = round(random(62));
  this.randomValue4 = round(random(61));
  this.randomValue5 = round(random(60));
  this.randomValue6 = round(random(59));
  this.randomValue7 = round(random(58));
  this.randomValue8 = round(random(57));
  this.randomValue9 = round(random(56));
  this.subsetArray1 = [];
  this.subsetArray2 = [];

  this.imagePlacement = function(){

    video.loadPixels();
    loadPixels();
    for (var y = 0; y < 48; y++) {
      for (var x = 0; x < 64; x++) {
        var index = (64 - x + 1 + (y * 64))*4;
        var r = video.pixels[index+0];
        var g = video.pixels[index+1];
        var b = video.pixels[index+2];

        var average = (r + g + b) / 3;


        if(timer <= 30){
          if(flagQuestion1 === "America") this.answerCountry1 = flag_American;
          else if(flagQuestion1 === "Algeria") this.answerCountry1 = flag_Algerian;
          else if(flagQuestion1 === "Argentina") this.answerCountry1 = flag_Argentinian;
          else if(flagQuestion1 === "Austria") this.answerCountry1 = flag_Austrian;
          else if(flagQuestion1 === "Bahamas") this.answerCountry1 = flag_Bahamas;
          else if(flagQuestion1 === "Banglagesh") this.answerCountry1 = flag_Bangladesh;
          else if(flagQuestion1 === "Belgium") this.answerCountry1 = flag_Belgium;
          else if(flagQuestion1 === "Bhutan") this.answerCountry1 = flag_Bhutan;
          else if(flagQuestion1 === "Brazil") this.answerCountry1 = flag_Brazil;
          else if(flagQuestion1 === "Canada") this.answerCountry1 = flag_Canada;
          else if(flagQuestion1 === "Chile") this.answerCountry1 = flag_Chile;
          else if(flagQuestion1 === "China") this.answerCountry1 = flag_China;
          else if(flagQuestion1 === "Columbia") this.answerCountry1 = flag_Columbia;
          else if(flagQuestion1 === "Croatia") this.answerCountry1 = flag_Croatia;
          else if(flagQuestion1 === "Cuba") this.answerCountry1 = flag_Cuba;
          else if(flagQuestion1 === "Cyprus") this.answerCountry1 = flag_Cyprus;
          else if(flagQuestion1 === "Czech" || flagQuestion1 === "Czech Republic") this.answerCountry1 = flag_Czech;
          else if(flagQuestion1 === "Denmark") this.answerCountry1 = flag_Danish;
          else if(flagQuestion1 === "England" || flagQuestion1 === "United Kingdom" || flagQuestion1 === "Britain") this.answerCountry1 = flag_English;
          else if(flagQuestion1 === "Estonia") this.answerCountry1 = flag_Estonian;
          else if(flagQuestion1 === "Finland") this.answerCountry1 = flag_Finland;
          else if(flagQuestion1 === "France") this.answerCountry1 = flag_French;
          else if(flagQuestion1 === "Georgia") this.answerCountry1 = flag_Georgia;
          else if(flagQuestion1 === "Germany") this.answerCountry1 = flag_German;
          else if(flagQuestion1 === "Greece") this.answerCountry1 = flag_Greek;
          else if(flagQuestion1 === "Iceland") this.answerCountry1 = flag_Iceland;
          else if(flagQuestion1 === "India") this.answerCountry1 = flag_India;
          else if(flagQuestion1 === "Indonesia") this.answerCountry1 = flag_Indonesia;
          else if(flagQuestion1 === "Ireland") this.answerCountry1 = flag_Ireland;
          else if(flagQuestion1 === "Israel") this.answerCountry1 = flag_Israel;
          else if(flagQuestion1 === "Italy") this.answerCountry1 = flag_Italian;
          else if(flagQuestion1 === "Jamaica") this.answerCountry1 = flag_Jamaican;
          else if(flagQuestion1 === "Japan") this.answerCountry1 = flag_Japanese;
          else if(flagQuestion1 === "Kenya") this.answerCountry1 = flag_Kenyan;
          else if(flagQuestion1 === "Kuwait") this.answerCountry1 = flag_Kuwait;
          else if(flagQuestion1 === "Lebanon") this.answerCountry1 = flag_Lebanese;
          else if(flagQuestion1 === "Lesotho") this.answerCountry1 = flag_Lesotho;
          else if(flagQuestion1 === "Libya") this.answerCountry1 = flag_Libya;
          else if(flagQuestion1 === "Luxembourg") this.answerCountry1 = flag_Luxembourg;
          else if(flagQuestion1 === "Malta") this.answerCountry1 = flag_Malta;
          else if(flagQuestion1 === "Nepal") this.answerCountry1 = flag_Nepal;
          else if(flagQuestion1 === "Nigeria") this.answerCountry1 = flag_Nigeria;
          else if(flagQuestion1 === "North Korea") this.answerCountry1 = flag_North_Korea;
          else if(flagQuestion1 === "Norway") this.answerCountry1 = flag_Norway;
          else if(flagQuestion1 === "Panama") this.answerCountry1 = flag_Panama;
          else if(flagQuestion1 === "Poland") this.answerCountry1 = flag_Poland;
          else if(flagQuestion1 === "Portugal") this.answerCountry1 = flag_Portugal;
          else if(flagQuestion1 === "Qatar") this.answerCountry1 = flag_Qatar;
          else if(flagQuestion1 === "Saudi Arabia") this.answerCountry1 = flag_Saudi_Arabia;
          else if(flagQuestion1 === "Seychelles") this.answerCountry1 = flag_Seychelles;
          else if(flagQuestion1 === "South Africa") this.answerCountry1 = flag_South_Africa;
          else if(flagQuestion1 === "South Korea") this.answerCountry1 = flag_South_Korean;
          else if(flagQuestion1 === "Spain") this.answerCountry1 = flag_Spain;
          else if(flagQuestion1 === "Sweden") this.answerCountry1 = flag_Swedish;
          else if(flagQuestion1 === "Switzerland") this.answerCountry1 = flag_Swiss;
          else if(flagQuestion1 === "Thailand") this.answerCountry1 = flag_Thai;
          else if(flagQuestion1 === "Trinidad" || flagQuestion1 === "Trinidad and Tobago") this.answerCountry1 = flag_Trinidad;
          else if(flagQuestion1 === "Tunisia") this.answerCountry1 = flag_Tunisia;
          else if(flagQuestion1 === "Turkey") this.answerCountry1 = flag_Turkey;
          else if(flagQuestion1 === "UAE" || flagQuestion1 === "United Arab Emirates") this.answerCountry1 = flag_UAE;
          else if(flagQuestion1 === "Venezuela") this.answerCountry1 = flag_Venezuela;
          else if(flagQuestion1 === "Vietnam") this.answerCountry1 = flag_Vietnam;
          else if(flagQuestion1 === "Yemen") this.answerCountry1 = flag_Yemen;
          else if(flagQuestion1 === "Zambia") this.answerCountry1 = flag_Zambia;
          else this.answerCountry1 = flag_Zimbabwe;

          if(flagQuestion2 === "America") this.answerCountry2 = flag_American;
          else if(flagQuestion2 === "Algeria") this.answerCountry2 = flag_Algerian
          else if(flagQuestion2 === "Argentina") this.answerCountry2 = flag_Argentinian;
          else if(flagQuestion2 === "Austria") this.answerCountry2 = flag_Austrian;
          else if(flagQuestion2 === "Bahamas") this.answerCountry2 = flag_Bahamas;
          else if(flagQuestion2 === "Banglagesh") this.answerCountry2 = flag_Bangladesh;
          else if(flagQuestion2 === "Belgium") this.answerCountry2 = flag_Belgium;
          else if(flagQuestion2 === "Bhutan") this.answerCountry2 = flag_Bhutan;
          else if(flagQuestion2 === "Brazil") this.answerCountry2 = flag_Brazil;
          else if(flagQuestion2 === "Canada") this.answerCountry2 = flag_Canada;
          else if(flagQuestion2 === "Chile") this.answerCountry2 = flag_Chile;
          else if(flagQuestion2 === "China") this.answerCountry2 = flag_China;
          else if(flagQuestion2 === "Columbia") this.answerCountry2 = flag_Columbia;
          else if(flagQuestion2 === "Croatia") this.answerCountry2 = flag_Croatia;
          else if(flagQuestion2 === "Cuba") this.answerCountry2 = flag_Cuba;
          else if(flagQuestion2 === "Cyprus") this.answerCountry2 = flag_Cyprus;
          else if(flagQuestion2 === "Czech" || flagQuestion2 === "Czech Republic") this.answerCountry1 = flag_Czech;
          else if(flagQuestion2 === "Denmark") this.answerCountry2 = flag_Danish;
          else if(flagQuestion2 === "England" || flagQuestion2 === "United Kingdom" || flagQuestion1 === "Britain") this.answerCountry1 = flag_English;
          else if(flagQuestion2 === "Estonia") this.answerCountry2 = flag_Estonian;
          else if(flagQuestion2 === "Finland") this.answerCountry2 = flag_Finland;
          else if(flagQuestion2 === "France") this.answerCountry2 = flag_French;
          else if(flagQuestion2 === "Georgia") this.answerCountry2 = flag_Georgia;
          else if(flagQuestion2 === "Germany") this.answerCountry2 = flag_German;
          else if(flagQuestion2 === "Greece") this.answerCountry2 = flag_Greek;
          else if(flagQuestion2 === "Iceland") this.answerCountry2 = flag_Iceland;
          else if(flagQuestion2 === "India") this.answerCountry2 = flag_India;
          else if(flagQuestion2 === "Indonesia") this.answerCountry2 = flag_Indonesia;
          else if(flagQuestion2 === "Ireland") this.answerCountry2 = flag_Ireland;
          else if(flagQuestion2 === "Israel") this.answerCountry2 = flag_Israel;
          else if(flagQuestion2 === "Italy") this.answerCountry2 = flag_Italian;
          else if(flagQuestion2 === "Jamaica") this.answerCountry2 = flag_Jamaican;
          else if(flagQuestion2 === "Japan") this.answerCountry2 = flag_Japanese;
          else if(flagQuestion2 === "Kenya") this.answerCountry2 = flag_Kenyan;
          else if(flagQuestion2 === "Kuwait") this.answerCountry2 = flag_Kuwait;
          else if(flagQuestion2 === "Lebanon") this.answerCountry2 = flag_Lebanese;
          else if(flagQuestion2 === "Lesotho") this.answerCountry2 = flag_Lesotho;
          else if(flagQuestion2 === "Libya") this.answerCountry2 = flag_Libya;
          else if(flagQuestion2 === "Luxembourg") this.answerCountry2 = flag_Luxembourg;
          else if(flagQuestion2 === "Malta") this.answerCountry2 = flag_Malta;
          else if(flagQuestion2 === "Nepal") this.answerCountry2 = flag_Nepal;
          else if(flagQuestion2 === "Nigeria") this.answerCountry2 = flag_Nigeria;
          else if(flagQuestion2 === "North Korea") this.answerCountry2 = flag_North_Korea;
          else if(flagQuestion2 === "Norway") this.answerCountry2 = flag_Norway;
          else if(flagQuestion2 === "Panama") this.answerCountry2 = flag_Panama;
          else if(flagQuestion2 === "Poland") this.answerCountry2 = flag_Poland;
          else if(flagQuestion2 === "Portugal") this.answerCountry2 = flag_Portugal;
          else if(flagQuestion2 === "Qatar") this.answerCountry2 = flag_Qatar;
          else if(flagQuestion2 === "Saudi Arabia") this.answerCountry2 = flag_Saudi_Arabia;
          else if(flagQuestion2 === "Seychelles") this.answerCountry2 = flag_Seychelles;
          else if(flagQuestion2 === "South Africa") this.answerCountry2 = flag_South_Africa;
          else if(flagQuestion2 === "South Korea") this.answerCountry2 = flag_South_Korean;
          else if(flagQuestion2 === "Spain") this.answerCountry2 = flag_Spain;
          else if(flagQuestion2 === "Sweden") this.answerCountry2 = flag_Swedish;
          else if(flagQuestion2 === "Switzerland") this.answerCountry2 = flag_Swiss;
          else if(flagQuestion2 === "Thailand") this.answerCountry2 = flag_Thai;
          else if(flagQuestion2 === "Trinidad" || flagQuestion2 === "Trinidad and Tobago") this.answerCountry2 = flag_Trinidad;
          else if(flagQuestion2 === "Tunisia") this.answerCountry2 = flag_Tunisia;
          else if(flagQuestion2 === "Turkey") this.answerCountry2 = flag_Turkey;
          else if(flagQuestion2 === "UAE" || flagQuestion2 === "United Arab Emirates") this.answerCountry2 = flag_UAE;
          else if(flagQuestion2 === "Venezuela") this.answerCountry2 = flag_Venezuela;
          else if(flagQuestion2 === "Vietnam") this.answerCountry1 = flag_Vietnam;
          else if(flagQuestion2 === "Yemen") this.answerCountry2 = flag_Yemen;
          else if(flagQuestion2 === "Zambia") this.answerCountry2 = flag_Zambia;
          else this.answerCountry2 = flag_Zimbabwe;

          if(flagQuestion3 === "America") this.answerCountry3 = flag_American;
          else if(flagQuestion3 === "Algeria") this.answerCountry3 = flag_Algerian;
          else if(flagQuestion3 === "Argentina") this.answerCountry3 = flag_Argentinian;
          else if(flagQuestion3 === "Austria") this.answerCountry3 = flag_Austrian;
          else if(flagQuestion3 === "Bahamas") this.answerCountry3 = flag_Bahamas;
          else if(flagQuestion3 === "Banglagesh") this.answerCountry3 = flag_Bangladesh;
          else if(flagQuestion3 === "Belgium") this.answerCountry3 = flag_Belgium;
          else if(flagQuestion3 === "Bhutan") this.answerCountry3 = flag_Bhutan;
          else if(flagQuestion3 === "Brazil") this.answerCountry3 = flag_Brazil;
          else if(flagQuestion3 === "Canada") this.answerCountry3 = flag_Canada;
          else if(flagQuestion3 === "Chile") this.answerCountry3 = flag_Chile;
          else if(flagQuestion3 === "China") this.answerCountry3 = flag_China;
          else if(flagQuestion3 === "Columbia") this.answerCountry3 = flag_Columbia;
          else if(flagQuestion3 === "Croatia") this.answerCountry3 = flag_Croatia;
          else if(flagQuestion3 === "Cuba") this.answerCountry3 = flag_Cuba;
          else if(flagQuestion3 === "Cyprus") this.answerCountry3 = flag_Cyprus;
          else if(flagQuestion3 === "Czech" || flagQuestion3 === "Czech Republic") this.answerCountry1 = flag_Czech;
          else if(flagQuestion3 === "Denmark") this.answerCountry3 = flag_Danish;
          else if(flagQuestion3 === "England" || flagQuestion3 === "United Kingdom" || flagQuestion1 === "Britain") this.answerCountry1 = flag_English;
          else if(flagQuestion3 === "Estonia") this.answerCountry3 = flag_Estonian;
          else if(flagQuestion3 === "Finland") this.answerCountry3 = flag_Finland;
          else if(flagQuestion3 === "France") this.answerCountry3 = flag_French;
          else if(flagQuestion3 === "Georgia") this.answerCountry3 = flag_Georgia;
          else if(flagQuestion3 === "Germany") this.answerCountry3 = flag_German;
          else if(flagQuestion3 === "Greece") this.answerCountry3 = flag_Greek;
          else if(flagQuestion3 === "Iceland") this.answerCountry3 = flag_Iceland;
          else if(flagQuestion3 === "India") this.answerCountry3 = flag_India;
          else if(flagQuestion3 === "Indonesia") this.answerCountry3 = flag_Indonesia;
          else if(flagQuestion3 === "Ireland") this.answerCountry3 = flag_Ireland;
          else if(flagQuestion3 === "Israel") this.answerCountry3 = flag_Israel;
          else if(flagQuestion3 === "Italy") this.answerCountry3 = flag_Italian;
          else if(flagQuestion3 === "Jamaica") this.answerCountry3 = flag_Jamaican;
          else if(flagQuestion3 === "Japan") this.answerCountry3 = flag_Japanese;
          else if(flagQuestion3 === "Kenya") this.answerCountry3 = flag_Kenyan;
          else if(flagQuestion3 === "Kuwait") this.answerCountry3 = flag_Kuwait;
          else if(flagQuestion3 === "Lebanon") this.answerCountry3 = flag_Lebanese;
          else if(flagQuestion3 === "Lesotho") this.answerCountry3 = flag_Lesotho;
          else if(flagQuestion3 === "Libya") this.answerCountry3 = flag_Libya;
          else if(flagQuestion3 === "Luxembourg") this.answerCountry3 = flag_Luxembourg;
          else if(flagQuestion3 === "Malta") this.answerCountry3 = flag_Malta;
          else if(flagQuestion3 === "Nepal") this.answerCountry3 = flag_Nepal;
          else if(flagQuestion3 === "Nigeria") this.answerCountry3 = flag_Nigeria;
          else if(flagQuestion3 === "North Korea") this.answerCountry3 = flag_North_Korea;
          else if(flagQuestion3 === "Norway") this.answerCountry3 = flag_Norway;
          else if(flagQuestion3 === "Panama") this.answerCountry3 = flag_Panama;
          else if(flagQuestion3 === "Poland") this.answerCountry3 = flag_Poland;
          else if(flagQuestion3 === "Portugal") this.answerCountry3 = flag_Portugal;
          else if(flagQuestion3 === "Qatar") this.answerCountry3 = flag_Qatar;
          else if(flagQuestion3 === "Saudi Arabia") this.answerCountry3 = flag_Saudi_Arabia;
          else if(flagQuestion3 === "Seychelles") this.answerCountry3 = flag_Seychelles;
          else if(flagQuestion3 === "South Africa") this.answerCountry3 = flag_South_Africa;
          else if(flagQuestion3 === "South Korea") this.answerCountry3 = flag_South_Korean;
          else if(flagQuestion3 === "Spain") this.answerCountry3 = flag_Spain;
          else if(flagQuestion3 === "Sweden") this.answerCountry3 = flag_Swedish;
          else if(flagQuestion3 === "Switzerland") this.answerCountry3 = flag_Swiss;
          else if(flagQuestion3 === "Thailand") this.answerCountry3 = flag_Thai;
          else if(flagQuestion3 === "Trinidad" || flagQuestion3 === "Trinidad and Tobago") this.answerCountry3 = flag_Trinidad;
          else if(flagQuestion3 === "Tunisia") this.answerCountry3 = flag_Tunisia;
          else if(flagQuestion3 === "Turkey") this.answerCountry3 = flag_Turkey;
          else if(flagQuestion3 === "UAE" || flagQuestion3 === "United Arab Emirates") this.answerCountry3 = flag_UAE;
          else if(flagQuestion3 === "Venezuela") this.answerCountry3 = flag_Venezuela;
          else if(flagQuestion3 === "Vietnam") this.answerCountry1 = flag_Vietnam;
          else if(flagQuestion3 === "Yemen") this.answerCountry3 = flag_Yemen;
          else if(flagQuestion3 === "Zambia") this.answerCountry3 = flag_Zambia;
          else this.answerCountry3 = flag_Zimbabwe;

          if(flagQuestion4 === "America") this.answerCountry4 = flag_American;
          else if(flagQuestion4 === "Algeria") this.answerCountry4 = flag_Algerian;
          else if(flagQuestion4 === "Argentina") this.answerCountry4 = flag_Argentinian;
          else if(flagQuestion4 === "Austria") this.answerCountry4 = flag_Austrian;
          else if(flagQuestion4 === "Bahamas") this.answerCountry4 = flag_Bahamas;
          else if(flagQuestion4 === "Banglagesh") this.answerCountry4 = flag_Bangladesh;
          else if(flagQuestion4 === "Belgium") this.answerCountry4 = flag_Belgium;
          else if(flagQuestion4 === "Bhutan") this.answerCountry4 = flag_Bhutan;
          else if(flagQuestion4 === "Brazil") this.answerCountry4 = flag_Brazil;
          else if(flagQuestion4 === "Canada") this.answerCountry4 = flag_Canada;
          else if(flagQuestion4 === "Chile") this.answerCountry4 = flag_Chile;
          else if(flagQuestion4 === "China") this.answerCountry4 = flag_China;
          else if(flagQuestion4 === "Columbia") this.answerCountry4 = flag_Columbia;
          else if(flagQuestion4 === "Croatia") this.answerCountry4 = flag_Croatia;
          else if(flagQuestion4 === "Cuba") this.answerCountry4 = flag_Cuba;
          else if(flagQuestion4 === "Cyprus") this.answerCountry4 = flag_Cyprus;
          else if(flagQuestion4 === "Czech" || flagQuestion4 === "Czech Republic") this.answerCountry1 = flag_Czech;
          else if(flagQuestion4 === "Denmark") this.answerCountry4 = flag_Danish;
          else if(flagQuestion4 === "England" || flagQuestion4 === "United Kingdom" || flagQuestion1 === "Britain") this.answerCountry1 = flag_English;
          else if(flagQuestion4 === "Estonia") this.answerCountry4 = flag_Estonian;
          else if(flagQuestion4 === "Finland") this.answerCountry4 = flag_Finland;
          else if(flagQuestion4 === "France") this.answerCountry4 = flag_French;
          else if(flagQuestion4 === "Georgia") this.answerCountry4 = flag_Georgia;
          else if(flagQuestion4 === "Germany") this.answerCountry4 = flag_German;
          else if(flagQuestion4 === "Greece") this.answerCountry4 = flag_Greek;
          else if(flagQuestion4 === "Iceland") this.answerCountry4 = flag_Iceland;
          else if(flagQuestion4 === "India") this.answerCountry4 = flag_India;
          else if(flagQuestion4 === "Indonesia") this.answerCountry4 = flag_Indonesia;
          else if(flagQuestion4 === "Ireland") this.answerCountry4 = flag_Ireland;
          else if(flagQuestion4 === "Israel") this.answerCountry4 = flag_Israel;
          else if(flagQuestion4 === "Italy") this.answerCountry4 = flag_Italian;
          else if(flagQuestion4 === "Jamaica") this.answerCountry4 = flag_Jamaican;
          else if(flagQuestion4 === "Japan") this.answerCountry4 = flag_Japanese;
          else if(flagQuestion4 === "Kenya") this.answerCountry4 = flag_Kenyan;
          else if(flagQuestion4 === "Kuwait") this.answerCountry4 = flag_Kuwait;
          else if(flagQuestion4 === "Lebanon") this.answerCountry4 = flag_Lebanese;
          else if(flagQuestion4 === "Lesotho") this.answerCountry4 = flag_Lesotho;
          else if(flagQuestion4 === "Libya") this.answerCountry4 = flag_Libya;
          else if(flagQuestion4 === "Luxembourg") this.answerCountry4 = flag_Luxembourg;
          else if(flagQuestion4 === "Malta") this.answerCountry4 = flag_Malta;
          else if(flagQuestion4 === "Nepal") this.answerCountry4 = flag_Nepal;
          else if(flagQuestion4 === "Nigeria") this.answerCountry4 = flag_Nigeria;
          else if(flagQuestion4 === "North Korea") this.answerCountry4 = flag_North_Korea;
          else if(flagQuestion4 === "Norway") this.answerCountry4 = flag_Norway;
          else if(flagQuestion4 === "Panama") this.answerCountry4 = flag_Panama;
          else if(flagQuestion4 === "Poland") this.answerCountry4 = flag_Poland;
          else if(flagQuestion4 === "Portugal") this.answerCountry4 = flag_Portugal;
          else if(flagQuestion4 === "Qatar") this.answerCountry4 = flag_Qatar;
          else if(flagQuestion4 === "Saudi Arabia") this.answerCountry4 = flag_Saudi_Arabia;
          else if(flagQuestion4 === "Seychelles") this.answerCountry4 = flag_Seychelles;
          else if(flagQuestion4 === "South Africa") this.answerCountry4 = flag_South_Africa;
          else if(flagQuestion4 === "South Korea") this.answerCountry4 = flag_South_Korean;
          else if(flagQuestion4 === "Spain") this.answerCountry4 = flag_Spain;
          else if(flagQuestion4 === "Sweden") this.answerCountry4 = flag_Swedish;
          else if(flagQuestion4 === "Switzerland") this.answerCountry4 = flag_Swiss;
          else if(flagQuestion4 === "Thailand") this.answerCountry4 = flag_Thai;
          else if(flagQuestion4 === "Trinidad" || flagQuestion4 === "Trinidad and Tobago") this.answerCountry4 = flag_Trinidad;
          else if(flagQuestion4 === "Tunisia") this.answerCountry4 = flag_Tunisia;
          else if(flagQuestion4 === "Turkey") this.answerCountry4 = flag_Turkey;
          else if(flagQuestion4 === "UAE" || flagQuestion4 === "United Arab Emirates") this.answerCountry4 = flag_UAE;
          else if(flagQuestion4 === "Venezuela") this.answerCountry4 = flag_Venezuela;
          else if(flagQuestion4 === "Vietnam") this.answerCountry1 = flag_Vietnam;
          else if(flagQuestion4 === "Yemen") this.answerCountry4 = flag_Yemen;
          else if(flagQuestion4 === "Zambia") this.answerCountry4 = flag_Zambia;
          else this.answerCountry4 = flag_Zimbabwe;

          if(flagQuestion5 === "America") this.answerCountry5 = flag_American;
          else if(flagQuestion5 === "Algeria") this.answerCountry5 = flag_Algerian;
          else if(flagQuestion5 === "Argentina") this.answerCountry5 = flag_Argentinian;
          else if(flagQuestion5 === "Austria") this.answerCountry5 = flag_Austrian;
          else if(flagQuestion5 === "Bahamas") this.answerCountry5 = flag_Bahamas;
          else if(flagQuestion5 === "Banglagesh") this.answerCountry5 = flag_Bangladesh;
          else if(flagQuestion5 === "Belgium") this.answerCountry5 = flag_Belgium;
          else if(flagQuestion5 === "Bhutan") this.answerCountry5 = flag_Bhutan;
          else if(flagQuestion5 === "Brazil") this.answerCountry5 = flag_Brazil;
          else if(flagQuestion5 === "Canada") this.answerCountry5 = flag_Canada;
          else if(flagQuestion5 === "Chile") this.answerCountry5 = flag_Chile;
          else if(flagQuestion5 === "China") this.answerCountry5 = flag_China;
          else if(flagQuestion5 === "Columbia") this.answerCountry5 = flag_Columbia;
          else if(flagQuestion5 === "Croatia") this.answerCountry5 = flag_Croatia;
          else if(flagQuestion5 === "Cuba") this.answerCountry5 = flag_Cuba;
          else if(flagQuestion5 === "Cyprus") this.answerCountry5 = flag_Cyprus;
          else if(flagQuestion5 === "Czech" || flagQuestion5 === "Czech Republic") this.answerCountry1 = flag_Czech;
          else if(flagQuestion5 === "Denmark") this.answerCountry5 = flag_Danish;
          else if(flagQuestion5 === "England" || flagQuestion5 === "United Kingdom" || flagQuestion1 === "Britain") this.answerCountry1 = flag_English;
          else if(flagQuestion5 === "Estonia") this.answerCountry5 = flag_Estonian;
          else if(flagQuestion5 === "Finland") this.answerCountry5 = flag_Finland;
          else if(flagQuestion5 === "France") this.answerCountry5 = flag_French;
          else if(flagQuestion5 === "Georgia") this.answerCountry5 = flag_Georgia;
          else if(flagQuestion5 === "Germany") this.answerCountry5 = flag_German;
          else if(flagQuestion5 === "Greece") this.answerCountry5 = flag_Greek;
          else if(flagQuestion5 === "Iceland") this.answerCountry5 = flag_Iceland;
          else if(flagQuestion5 === "India") this.answerCountry5 = flag_India;
          else if(flagQuestion5 === "Indonesia") this.answerCountry5 = flag_Indonesia;
          else if(flagQuestion5 === "Ireland") this.answerCountry5 = flag_Ireland;
          else if(flagQuestion5 === "Israel") this.answerCountry5 = flag_Israel;
          else if(flagQuestion5 === "Italy") this.answerCountry5 = flag_Italian;
          else if(flagQuestion5 === "Jamaica") this.answerCountry5 = flag_Jamaican;
          else if(flagQuestion5 === "Japan") this.answerCountry5 = flag_Japanese;
          else if(flagQuestion5 === "Kenya") this.answerCountry5 = flag_Kenyan;
          else if(flagQuestion5 === "Kuwait") this.answerCountry5 = flag_Kuwait;
          else if(flagQuestion5 === "Lebanon") this.answerCountry5 = flag_Lebanese;
          else if(flagQuestion5 === "Lesotho") this.answerCountry5 = flag_Lesotho;
          else if(flagQuestion5 === "Libya") this.answerCountry5 = flag_Libya;
          else if(flagQuestion5 === "Luxembourg") this.answerCountry5 = flag_Luxembourg;
          else if(flagQuestion5 === "Malta") this.answerCountry5 = flag_Malta;
          else if(flagQuestion5 === "Nepal") this.answerCountry5 = flag_Nepal;
          else if(flagQuestion5 === "Nigeria") this.answerCountry5 = flag_Nigeria;
          else if(flagQuestion5 === "North Korea") this.answerCountry5 = flag_North_Korea;
          else if(flagQuestion5 === "Norway") this.answerCountry5 = flag_Norway;
          else if(flagQuestion5 === "Panama") this.answerCountry5 = flag_Panama;
          else if(flagQuestion5 === "Poland") this.answerCountry5 = flag_Poland;
          else if(flagQuestion5 === "Portugal") this.answerCountry5 = flag_Portugal;
          else if(flagQuestion5 === "Qatar") this.answerCountry5 = flag_Qatar;
          else if(flagQuestion5 === "Saudi Arabia") this.answerCountry5 = flag_Saudi_Arabia;
          else if(flagQuestion5 === "Seychelles") this.answerCountry5 = flag_Seychelles;
          else if(flagQuestion5 === "South Africa") this.answerCountry5 = flag_South_Africa;
          else if(flagQuestion5 === "South Korea") this.answerCountry5 = flag_South_Korean;
          else if(flagQuestion5 === "Spain") this.answerCountry5 = flag_Spain;
          else if(flagQuestion5 === "Sweden") this.answerCountry5 = flag_Swedish;
          else if(flagQuestion5 === "Switzerland") this.answerCountry5 = flag_Swiss;
          else if(flagQuestion5 === "Thailand") this.answerCountry5 = flag_Thai;
          else if(flagQuestion5 === "Trinidad" || flagQuestion5 === "Trinidad and Tobago") this.answerCountry5 = flag_Trinidad;
          else if(flagQuestion5 === "Tunisia") this.answerCountry5 = flag_Tunisia;
          else if(flagQuestion5 === "Turkey") this.answerCountry5 = flag_Turkey;
          else if(flagQuestion5 === "UAE" || flagQuestion5 === "United Arab Emirates") this.answerCountry5 = flag_UAE;
          else if(flagQuestion5 === "Venezuela") this.answerCountry5 = flag_Venezuela;
          else if(flagQuestion5 === "Vietnam") this.answerCountry1 = flag_Vietnam;
          else if(flagQuestion5 === "Yemen") this.answerCountry5 = flag_Yemen;
          else if(flagQuestion5 === "Zambia") this.answerCountry5 = flag_Zambia;
          else this.answerCountry5 = flag_Zimbabwe;

          if (average < this.flagChoiceRange) this.flagImage = this.answerCountry1;
          else if (average < this.flagChoiceRange * 2) this.flagImage = this.answerCountry2;
          else if (average < this.flagChoiceRange * 3) this.flagImage = this.answerCountry3;
          else if (average < this.flagChoiceRange * 4) this.flagImage = this.answerCountry4;
          else this.flagImage = this.answerCountry5;
        }


        if(timer > 30 && timer <= 35){
          this.flagImage = this.flagArray[this.numberArray[this.randomValue1]];

        }

        if(timer > 35 && timer <= 40){
          if(average < 255 / 2) {
            this.flagImage = this.flagArray[this.numberArray[this.randomValue1]];
            this.subsetArray1 = subset(this.numberArray, 0, this.randomValue1);
            this.subsetArray2 = subset(this.numberArray, this.randomValue1, 64);
            this.numberArray1 = concat(this.subsetArray1, this.subsetArray2);
          }

          else this.flagImage = this.flagArray[this.numberArray1[this.randomValue2]];
        }

        if(timer > 40 && timer <= 45){
          if(average < 255 / 3){
            this.flagImage = this.flagArray[this.numberArray[this.randomValue1]];
            this.subsetArray1 = subset(this.numberArray, 0, this.randomValue1);
            this.subsetArray2 = subset(this.numberArray, this.randomValue1, 64);
            this.numberArray1 = concat(this.subsetArray1, this.subsetArray2);
          }

          else if(average < 255 / 3 * 2){
            this.flagImage = this.flagArray[this.numberArray1[this.randomValue2]];
            this.flagImage = this.flagArray[this.numberArray1[this.randomValue2]];
            this.subsetArray1 = subset(this.numberArray, 0, this.randomValue2);
            this.subsetArray2 = subset(this.numberArray, this.randomValue2, 63);
            this.numberArray2 = concat(this.subsetArray1, this.subsetArray2);

          }

          else this.flagImage = this.flagArray[this.numberArray2[this.randomValue3]];

        }

        if(timer > 45 && timer <= 50){
          if(average < 255 / 4){
            this.flagImage = this.flagArray[this.numberArray[this.randomValue1]];
            this.subsetArray1 = subset(this.numberArray, 0, this.randomValue1);
            this.subsetArray2 = subset(this.numberArray, this.randomValue1, 64);
            this.numberArray1 = concat(this.subsetArray1, this.subsetArray2);
          }

          else if(average < 255 / 4 * 2){
            this.flagImage = this.flagArray[this.numberArray1[this.randomValue2]];
            this.subsetArray1 = subset(this.numberArray, 0, this.randomValue2);
            this.subsetArray2 = subset(this.numberArray, this.randomValue2, 63);
            this.numberArray2 = concat(this.subsetArray1, this.subsetArray2);
          }

          else if(average < 255 / 4 * 3){
            this.flagImage = this.flagArray[this.numberArray2[this.randomValue3]];
            this.subsetArray1 = subset(this.numberArray, 0, this.randomValue3);
            this.subsetArray2 = subset(this.numberArray, this.randomValue3, 62);
            this.numberArray3 = concat(this.subsetArray1, this.subsetArray2);

          }

          else this.flagImage = this.flagArray[this.numberArray3[this.randomValue4]];

        }

        if(timer > 50 && timer <= 51){
          if(average < 255 / 5){
            this.flagImage = this.flagArray[this.numberArray[this.randomValue1]];
            this.subsetArray1 = subset(this.numberArray, 0, this.randomValue1);
            this.subsetArray2 = subset(this.numberArray, this.randomValue1, 64);
            this.numberArray1 = concat(this.subsetArray1, this.subsetArray2);
          }

          else if(average < 255 / 5 * 2){
            this.flagImage = this.flagArray[this.numberArray1[this.randomValue2]];
            this.subsetArray1 = subset(this.numberArray, 0, this.randomValue2);
            this.subsetArray2 = subset(this.numberArray, this.randomValue2, 63);
            this.numberArray2 = concat(this.subsetArray1, this.subsetArray2);
          }

          else if(average < 255 / 5 * 3){
            this.flagImage = this.flagArray[this.numberArray2[this.randomValue3]];
            this.subsetArray1 = subset(this.numberArray, 0, this.randomValue3);
            this.subsetArray2 = subset(this.numberArray, this.randomValue3, 62);
            this.numberArray3 = concat(this.subsetArray1, this.subsetArray2);
          }

          else if(average < 255 / 5 * 4){
            this.flagImage = this.flagArray[this.numberArray3[this.randomValue4]];
            this.subsetArray1 = subset(this.numberArray, 0, this.randomValue4);
            this.subsetArray2 = subset(this.numberArray, this.randomValue4, 61);
            this.numberArray4 = concat(this.subsetArray1, this.subsetArray2);

          }

          else this.flagImage = this.flagArray[this.numberArray4[this.randomValue5]];

        }

        if(timer > 51 && timer <= 52){
          if(average < 255 / 6){
            this.flagImage = this.flagArray[this.numberArray[this.randomValue1]];
            this.subsetArray1 = subset(this.numberArray, 0, this.randomValue1);
            this.subsetArray2 = subset(this.numberArray, this.randomValue1, 64);
            this.numberArray1 = concat(this.subsetArray1, this.subsetArray2);
          }

          else if(average < 255 / 6 * 2){
            this.flagImage = this.flagArray[this.numberArray1[this.randomValue2]];
            this.subsetArray1 = subset(this.numberArray, 0, this.randomValue2);
            this.subsetArray2 = subset(this.numberArray, this.randomValue2, 63);
            this.numberArray2 = concat(this.subsetArray1, this.subsetArray2);
          }

          else if(average < 255 / 6 * 3){
            this.flagImage = this.flagArray[this.numberArray2[this.randomValue3]];
            this.subsetArray1 = subset(this.numberArray, 0, this.randomValue3);
            this.subsetArray2 = subset(this.numberArray, this.randomValue3, 62);
            this.numberArray3 = concat(this.subsetArray1, this.subsetArray2);
          }

          else if(average < 255 / 6 * 4){
            this.flagImage = this.flagArray[this.numberArray3[this.randomValue4]];
            this.subsetArray1 = subset(this.numberArray, 0, this.randomValue4);
            this.subsetArray2 = subset(this.numberArray, this.randomValue4, 61);
            this.numberArray4 = concat(this.subsetArray1, this.subsetArray2);
          }

          else if(average < 255 / 6 * 5){
            this.flagImage = this.flagArray[this.numberArray4[this.randomValue5]];
            this.subsetArray1 = subset(this.numberArray, 0, this.randomValue5);
            this.subsetArray2 = subset(this.numberArray, this.randomValue5, 60);
            this.numberArray5 = concat(this.subsetArray1, this.subsetArray2);

          }

          else this.flagImage = this.flagArray[this.numberArray5[this.randomValue6]];

        }

        if(timer > 52 && timer <= 53){
          if(average < 255 / 7){
            this.flagImage = this.flagArray[this.numberArray[this.randomValue1]];
            this.subsetArray1 = subset(this.numberArray, 0, this.randomValue1);
            this.subsetArray2 = subset(this.numberArray, this.randomValue1, 64);
            this.numberArray1 = concat(this.subsetArray1, this.subsetArray2);
          }

          else if(average < 255 / 7 * 2){
            this.flagImage = this.flagArray[this.numberArray1[this.randomValue2]];
            this.subsetArray1 = subset(this.numberArray, 0, this.randomValue2);
            this.subsetArray2 = subset(this.numberArray, this.randomValue2, 63);
            this.numberArray2 = concat(this.subsetArray1, this.subsetArray2);
          }

          else if(average < 255 / 7 * 3){
            this.flagImage = this.flagArray[this.numberArray2[this.randomValue3]];
            this.subsetArray1 = subset(this.numberArray, 0, this.randomValue3);
            this.subsetArray2 = subset(this.numberArray, this.randomValue3, 62);
            this.numberArray3 = concat(this.subsetArray1, this.subsetArray2);
          }

          else if(average < 255 / 7 * 4){
            this.flagImage = this.flagArray[this.numberArray3[this.randomValue4]];
            this.subsetArray1 = subset(this.numberArray, 0, this.randomValue4);
            this.subsetArray2 = subset(this.numberArray, this.randomValue4, 61);
            this.numberArray4 = concat(this.subsetArray1, this.subsetArray2);
          }

          else if(average < 255 / 7 * 5){
            this.flagImage = this.flagArray[this.numberArray4[this.randomValue5]];
            this.subsetArray1 = subset(this.numberArray, 0, this.randomValue5);
            this.subsetArray2 = subset(this.numberArray, this.randomValue5, 60);
            this.numberArray5 = concat(this.subsetArray1, this.subsetArray2);
          }

          else if(average < 255 / 7 * 6){
            this.flagImage = this.flagArray[this.numberArray5[this.randomValue6]];
            this.subsetArray1 = subset(this.numberArray, 0, this.randomValue6);
            this.subsetArray2 = subset(this.numberArray, this.randomValue6, 59);
            this.numberArray6 = concat(this.subsetArray1, this.subsetArray2);

          }

          else this.flagImage = this.flagArray[this.numberArray6[this.randomValue7]];

        }

        if(timer > 53 && timer <= 54){
          if(average < 255 / 8){
            this.flagImage = this.flagArray[this.numberArray[this.randomValue1]];
            this.subsetArray1 = subset(this.numberArray, 0, this.randomValue1);
            this.subsetArray2 = subset(this.numberArray, this.randomValue1, 64);
            this.numberArray1 = concat(this.subsetArray1, this.subsetArray2);
          }

          else if(average < 255 / 8 * 2){
            this.flagImage = this.flagArray[this.numberArray1[this.randomValue2]];
            this.subsetArray1 = subset(this.numberArray, 0, this.randomValue2);
            this.subsetArray2 = subset(this.numberArray, this.randomValue2, 63);
            this.numberArray2 = concat(this.subsetArray1, this.subsetArray2);
          }

          else if(average < 255 / 8 * 3){
            this.flagImage = this.flagArray[this.numberArray2[this.randomValue3]];
            this.subsetArray1 = subset(this.numberArray, 0, this.randomValue3);
            this.subsetArray2 = subset(this.numberArray, this.randomValue3, 62);
            this.numberArray3 = concat(this.subsetArray1, this.subsetArray2);
          }

          else if(average < 255 / 8 * 4){
            this.flagImage = this.flagArray[this.numberArray3[this.randomValue4]];
            this.subsetArray1 = subset(this.numberArray, 0, this.randomValue4);
            this.subsetArray2 = subset(this.numberArray, this.randomValue4, 61);
            this.numberArray4 = concat(this.subsetArray1, this.subsetArray2);
          }

          else if(average < 255 / 8 * 5){
            this.flagImage = this.flagArray[this.numberArray4[this.randomValue5]];
            this.subsetArray1 = subset(this.numberArray, 0, this.randomValue5);
            this.subsetArray2 = subset(this.numberArray, this.randomValue5, 60);
            this.numberArray5 = concat(this.subsetArray1, this.subsetArray2);
          }

          else if(average < 255 / 8 * 6){
            this.flagImage = this.flagArray[this.numberArray5[this.randomValue6]];
            this.subsetArray1 = subset(this.numberArray, 0, this.randomValue6);
            this.subsetArray2 = subset(this.numberArray, this.randomValue6, 59);
            this.numberArray6 = concat(this.subsetArray1, this.subsetArray2);
          }

          else if(average < 255 / 8 * 7){
            this.flagImage = this.flagArray[this.numberArray6[this.randomValue7]];
            this.subsetArray1 = subset(this.numberArray, 0, this.randomValue7);
            this.subsetArray2 = subset(this.numberArray, this.randomValue7, 58);
            this.numberArray7 = concat(this.subsetArray1, this.subsetArray2);

          }

          else this.flagImage = this.flagArray[this.numberArray7[this.randomValue8]];
        }

        if(timer > 54 && timer <= 55){
          if(average < 255 / 9){
            this.flagImage = this.flagArray[this.numberArray[this.randomValue1]];
            this.subsetArray1 = subset(this.numberArray, 0, this.randomValue1);
            this.subsetArray2 = subset(this.numberArray, this.randomValue1, 64);
            this.numberArray1 = concat(this.subsetArray1, this.subsetArray2);
          }

          else if(average < 255 / 9 * 2){
            this.flagImage = this.flagArray[this.numberArray1[this.randomValue2]];
            this.subsetArray1 = subset(this.numberArray, 0, this.randomValue2);
            this.subsetArray2 = subset(this.numberArray, this.randomValue2, 63);
            this.numberArray2 = concat(this.subsetArray1, this.subsetArray2);
          }

          else if(average < 255 / 9 * 3){
            this.flagImage = this.flagArray[this.numberArray2[this.randomValue3]];
            this.subsetArray1 = subset(this.numberArray, 0, this.randomValue3);
            this.subsetArray2 = subset(this.numberArray, this.randomValue3, 62);
            this.numberArray3 = concat(this.subsetArray1, this.subsetArray2);
          }

          else if(average < 255 / 9 * 4){
            this.flagImage = this.flagArray[this.numberArray3[this.randomValue4]];
            this.subsetArray1 = subset(this.numberArray, 0, this.randomValue4);
            this.subsetArray2 = subset(this.numberArray, this.randomValue4, 61);
            this.numberArray4 = concat(this.subsetArray1, this.subsetArray2);
          }

          else if(average < 255 / 9 * 5){
            this.flagImage = this.flagArray[this.numberArray4[this.randomValue5]];
            this.subsetArray1 = subset(this.numberArray, 0, this.randomValue5);
            this.subsetArray2 = subset(this.numberArray, this.randomValue5, 60);
            this.numberArray5 = concat(this.subsetArray1, this.subsetArray2);
          }

          else if(average < 255 / 9 * 6){
            this.flagImage = this.flagArray[this.numberArray5[this.randomValue6]];
            this.subsetArray1 = subset(this.numberArray, 0, this.randomValue6);
            this.subsetArray2 = subset(this.numberArray, this.randomValue6, 59);
            this.numberArray6 = concat(this.subsetArray1, this.subsetArray2);
          }

          else if(average < 255 / 9 * 7){
            this.flagImage = this.flagArray[this.numberArray6[this.randomValue7]];
            this.subsetArray1 = subset(this.numberArray, 0, this.randomValue7);
            this.subsetArray2 = subset(this.numberArray, this.randomValue7, 58);
            this.numberArray7 = concat(this.subsetArray1, this.subsetArray2);
          }

          else if(average < 255 / 9 * 8){
            this.flagImage = this.flagArray[this.numberArray7[this.randomValue8]];
            this.subsetArray1 = subset(this.numberArray, 0, this.randomValue7);
            this.subsetArray2 = subset(this.numberArray, this.randomValue7, 57);
            this.numberArray8 = concat(this.subsetArray1, this.subsetArray2);

          }

          else this.flagImage = this.flagArray[this.numberArray8[this.randomValue9]];

        }

        if(timer > 55 && timer <= 60){
          if (average < this.rangeValue) this.flagImage = this.flagArray[0];
          else if (average < this.rangeValue * 2) this.flagImage = this.flagArray[1];
          else if (average < this.rangeValue * 3) this.flagImage = this.flagArray[2];
          else if (average < this.rangeValue * 4) this.flagImage = this.flagArray[3];
          else if (average < this.rangeValue * 5) this.flagImage = this.flagArray[4];
          else if (average < this.rangeValue * 6) this.flagImage = this.flagArray[5];
          else if (average < this.rangeValue * 7) this.flagImage = this.flagArray[6];
          else if (average < this.rangeValue * 8) this.flagImage = this.flagArray[7];
          else if (average < this.rangeValue * 9) this.flagImage = this.flagArray[8];
          else if (average < this.rangeValue * 10) this.flagImage = this.flagArray[9];
          else if (average < this.rangeValue * 11) this.flagImage = this.flagArray[10];
          else if (average < this.rangeValue * 12) this.flagImage = this.flagArray[11];
          else if (average < this.rangeValue * 13) this.flagImage = this.flagArray[12];
          else if (average < this.rangeValue * 14) this.flagImage = this.flagArray[13];
          else if (average < this.rangeValue * 15) this.flagImage = this.flagArray[14];
          else if (average < this.rangeValue * 16) this.flagImage = this.flagArray[15];
          else if (average < this.rangeValue * 17) this.flagImage = this.flagArray[16];
          else if (average < this.rangeValue * 18) this.flagImage = this.flagArray[17];
          else if (average < this.rangeValue * 19) this.flagImage = this.flagArray[18];
          else if (average < this.rangeValue * 20) this.flagImage = this.flagArray[19];
          else if (average < this.rangeValue * 21) this.flagImage = this.flagArray[20];
          else if (average < this.rangeValue * 22) this.flagImage = this.flagArray[21];
          else if (average < this.rangeValue * 23) this.flagImage = this.flagArray[22];
          else if (average < this.rangeValue * 24) this.flagImage = this.flagArray[23];
          else if (average < this.rangeValue * 25) this.flagImage = this.flagArray[24];
          else if (average < this.rangeValue * 26) this.flagImage = this.flagArray[25];
          else if (average < this.rangeValue * 27) this.flagImage = this.flagArray[26];
          else if (average < this.rangeValue * 28) this.flagImage = this.flagArray[27];
          else if (average < this.rangeValue * 29) this.flagImage = this.flagArray[28];
          else if (average < this.rangeValue * 30) this.flagImage = this.flagArray[29];
          else if (average < this.rangeValue * 31) this.flagImage = this.flagArray[30];
          else if (average < this.rangeValue * 32) this.flagImage = this.flagArray[31];
          else if (average < this.rangeValue * 33) this.flagImage = this.flagArray[32];
          else if (average < this.rangeValue * 34) this.flagImage = this.flagArray[33];
          else if (average < this.rangeValue * 35) this.flagImage = this.flagArray[34];
          else if (average < this.rangeValue * 36) this.flagImage = this.flagArray[35];
          else if (average < this.rangeValue * 37) this.flagImage = this.flagArray[36];
          else if (average < this.rangeValue * 38) this.flagImage = this.flagArray[37];
          else if (average < this.rangeValue * 39) this.flagImage = this.flagArray[38];
          else if (average < this.rangeValue * 40) this.flagImage = this.flagArray[39];
          else if (average < this.rangeValue * 41) this.flagImage = this.flagArray[40];
          else if (average < this.rangeValue * 42) this.flagImage = this.flagArray[41];
          else if (average < this.rangeValue * 43) this.flagImage = this.flagArray[42];
          else if (average < this.rangeValue * 44) this.flagImage = this.flagArray[43];
          else if (average < this.rangeValue * 45) this.flagImage = this.flagArray[44];
          else if (average < this.rangeValue * 46) this.flagImage = this.flagArray[45];
          else if (average < this.rangeValue * 47) this.flagImage = this.flagArray[46];
          else if (average < this.rangeValue * 48) this.flagImage = this.flagArray[47];
          else if (average < this.rangeValue * 49) this.flagImage = this.flagArray[48];
          else if (average < this.rangeValue * 50) this.flagImage = this.flagArray[49];
          else if (average < this.rangeValue * 51) this.flagImage = this.flagArray[50];
          else if (average < this.rangeValue * 52) this.flagImage = this.flagArray[51];
          else if (average < this.rangeValue * 53) this.flagImage = this.flagArray[52];
          else if (average < this.rangeValue * 54) this.flagImage = this.flagArray[53];
          else if (average < this.rangeValue * 55) this.flagImage = this.flagArray[54];
          else if (average < this.rangeValue * 56) this.flagImage = this.flagArray[55];
          else if (average < this.rangeValue * 57) this.flagImage = this.flagArray[56];
          else if (average < this.rangeValue * 58) this.flagImage = this.flagArray[57];
          else if (average < this.rangeValue * 59) this.flagImage = this.flagArray[58];
          else if (average < this.rangeValue * 60) this.flagImage = this.flagArray[59];
          else if (average < this.rangeValue * 61) this.flagImage = this.flagArray[60];
          else if (average < this.rangeValue * 62) this.flagImage = this.flagArray[61];
          else if (average < this.rangeValue * 63) this.flagImage = this.flagArray[62];
          else if (average < this.rangeValue * 64) this.flagImage = this.flagArray[63];
          else this.flagImage = this.flagArray[64];
        }

        rectMode(CENTER);

        image(this.flagImage, x*vScale, y*vScale);


      }
    }
  }
}
