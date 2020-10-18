// Import stylesheets
import "./style.css";

var huhu = new Image();
var ct = document.getElementById("imageCropper").getContext("2d");
var draw = false;
var resizeX = false;
var resizeY = false;
var moveCoords = [null, null, null, null];
var sliding = false;
var colours = [
  {
    ColorName: "AliceBlue",
    Type: "HTML",
    Hex: "#F0F8FF",
    R: 240,
    G: 248,
    B: 255
  },
  {
    ColorName: "AntiqueWhite",
    Type: "HTML",
    Hex: "#FAEBD7",
    R: 250,
    G: 235,
    B: 215
  },
  {
    ColorName: "AppleGreen",
    Type: "Werner's",
    Hex: "#ABB796",
    R: 82,
    G: 19,
    B: 65
  },
  {
    ColorName: "Aqua",
    Type: "HTML",
    Hex: "#00FFFF",
    R: 0,
    G: 255,
    B: 255
  },
  {
    ColorName: "Aquamarine",
    Type: "HTML",
    Hex: "#7FFFD4",
    R: 127,
    G: 255,
    B: 212
  },
  {
    ColorName: "ArterialBloodRed",
    Type: "Werner's",
    Hex: "#730004",
    R: 358,
    G: 100,
    B: 23
  },
  {
    ColorName: "AshGrey",
    Type: "Werner's",
    Hex: "#D1D8DD",
    R: 137,
    G: 8,
    B: 83
  },
  {
    ColorName: "AsparagusGreen",
    Type: "Werner's",
    Hex: "#D0D9B9",
    R: 77,
    G: 30,
    B: 79
  },
  {
    ColorName: "AuriculaPurple",
    Type: "Werner's",
    Hex: "#3,61E+55",
    R: 267,
    G: 47,
    B: 22
  },
  {
    ColorName: "AuroraRed",
    Type: "Werner's",
    Hex: "#D65848",
    R: 7,
    G: 63,
    B: 56
  },
  {
    ColorName: "Azure",
    Type: "HTML",
    Hex: "#F0FFFF",
    R: 240,
    G: 255,
    B: 255
  },
  {
    ColorName: "AzureBlue",
    Type: "Werner's",
    Hex: "#5465A5",
    R: 227,
    G: 33,
    B: 49
  },
  {
    ColorName: "Beige",
    Type: "HTML",
    Hex: "#F5F5DC",
    R: 245,
    G: 245,
    B: 220
  },
  {
    ColorName: "BerlinBlue",
    Type: "Werner's",
    Hex: "#7B99DC",
    R: 221,
    G: 58,
    B: 67
  },
  {
    ColorName: "Bisque",
    Type: "HTML",
    Hex: "#FFE4C4",
    R: 255,
    G: 228,
    B: 196
  },
  {
    ColorName: "Black",
    Type: "HTML",
    Hex: "#000000",
    R: 0,
    G: 0,
    B: 0
  },
  {
    ColorName: "BlackishBrown",
    Type: "Werner's",
    Hex: "#342000",
    R: 49,
    G: 44,
    B: 14
  },
  {
    ColorName: "BlackishGreen",
    Type: "Werner's",
    Hex: "#4B5059",
    R: 219,
    G: 9,
    B: 32
  },
  {
    ColorName: "BlackishGrey",
    Type: "Werner's",
    Hex: "#494F67",
    R: 228,
    G: 17,
    B: 35
  },
  {
    ColorName: "BlanchedAlmond",
    Type: "HTML",
    Hex: "#FFEBCD",
    R: 255,
    G: 235,
    B: 205
  },
  {
    ColorName: "Blue",
    Type: "HTML",
    Hex: "#0000FF",
    R: 0,
    G: 0,
    B: 255
  },
  {
    ColorName: "BlueViolet",
    Type: "HTML",
    Hex: "#8A2BE2",
    R: 138,
    G: 43,
    B: 226
  },
  {
    ColorName: "BluishBlack",
    Type: "Werner's",
    Hex: "#2C2E3E",
    R: 233,
    G: 17,
    B: 21
  },
  {
    ColorName: "BluishGreen",
    Type: "Werner's",
    Hex: "#A4B3A6",
    R: 128,
    G: 9,
    B: 67
  },
  {
    ColorName: "BluishGrey",
    Type: "Werner's",
    Hex: "#9AA3B7",
    R: 221,
    G: 17,
    B: 66
  },
  {
    ColorName: "BluishLilacPurple",
    Type: "Werner's",
    Hex: "#D9EBFE",
    R: 211,
    G: 95,
    B: 92
  },
  {
    ColorName: "BluishPurple",
    Type: "Werner's",
    Hex: "#7B8ECA",
    R: 226,
    G: 43,
    B: 64
  },
  {
    ColorName: "BroccoliBrown",
    Type: "Werner's",
    Hex: "#958762",
    R: 44,
    G: 21,
    B: 48
  },
  {
    ColorName: "Brown",
    Type: "HTML",
    Hex: "#A52A2A",
    R: 165,
    G: 42,
    B: 42
  },
  {
    ColorName: "BrownishOrange",
    Type: "Werner's",
    Hex: "#A62500",
    R: 13,
    G: 100,
    B: 33
  },
  {
    ColorName: "BrownishPurpleRed",
    Type: "Werner's",
    Hex: "#C03C45",
    R: 356,
    G: 52,
    B: 49
  },
  {
    ColorName: "BrownishRed",
    Type: "Werner's",
    Hex: "#9A0407",
    R: 359,
    G: 95,
    B: 31
  },
  {
    ColorName: "BuffOrange",
    Type: "Werner's",
    Hex: "#FECF19",
    R: 21,
    G: 99,
    B: 55
  },
  {
    ColorName: "BurlyWood",
    Type: "HTML",
    Hex: "#DEB887",
    R: 222,
    G: 184,
    B: 135
  },
  {
    ColorName: "CadetBlue",
    Type: "HTML",
    Hex: "#5F9EA0",
    R: 95,
    G: 158,
    B: 160
  },
  {
    ColorName: "CampanulaPurple",
    Type: "Werner's",
    Hex: "#5B61A8",
    R: 235,
    G: 31,
    B: 51
  },
  {
    ColorName: "CarmineRed",
    Type: "Werner's",
    Hex: "#EC153E",
    R: 349,
    G: 85,
    B: 50
  },
  {
    ColorName: "CelandineGreen",
    Type: "Werner's",
    Hex: "#B6BDAE",
    R: 88,
    G: 10,
    B: 71
  },
  {
    ColorName: "Chartreuse",
    Type: "HTML",
    Hex: "#7FFF00",
    R: 127,
    G: 255,
    B: 0
  },
  {
    ColorName: "ChesnutBrown",
    Type: "Werner's",
    Hex: "#69411D",
    R: 28,
    G: 57,
    B: 26
  },
  {
    ColorName: "ChinaBlue",
    Type: "Werner's",
    Hex: "#262A6B",
    R: 237,
    G: 48,
    B: 28
  },
  {
    ColorName: "Chocolate",
    Type: "HTML",
    Hex: "#D2691E",
    R: 210,
    G: 105,
    B: 30
  },
  {
    ColorName: "ChocolateRed",
    Type: "Werner's",
    Hex: "#750209",
    R: 356,
    G: 97,
    B: 23
  },
  {
    ColorName: "CochinealRed",
    Type: "Werner's",
    Hex: "#A70C17",
    R: 356,
    G: 87,
    B: 35
  },
  {
    ColorName: "Coral",
    Type: "HTML",
    Hex: "#FF7F50",
    R: 255,
    G: 127,
    B: 80
  },
  {
    ColorName: "CornflowerBlue",
    Type: "HTML",
    Hex: "#6495ED",
    R: 100,
    G: 149,
    B: 237
  },
  {
    ColorName: "Cornsilk",
    Type: "HTML",
    Hex: "#FFF8DC",
    R: 255,
    G: 248,
    B: 220
  },
  {
    ColorName: "CreamYellow",
    Type: "Werner's",
    Hex: "#FFF6BA",
    R: 52,
    G: 100,
    B: 86
  },
  {
    ColorName: "Crimson",
    Type: "HTML",
    Hex: "#DC143C",
    R: 220,
    G: 20,
    B: 60
  },
  {
    ColorName: "CrimsonRed",
    Type: "Werner's",
    Hex: "#E03D55",
    R: 351,
    G: 72,
    B: 56
  },
  {
    ColorName: "Cyan",
    Type: "HTML",
    Hex: "#00FFFF",
    R: 0,
    G: 255,
    B: 255
  },
  {
    ColorName: "DarkBlue",
    Type: "HTML",
    Hex: "#00008B",
    R: 0,
    G: 0,
    B: 139
  },
  {
    ColorName: "DarkCyan",
    Type: "HTML",
    Hex: "#008B8B",
    R: 0,
    G: 139,
    B: 139
  },
  {
    ColorName: "DarkGoldenrod",
    Type: "HTML",
    Hex: "#B8860B",
    R: 184,
    G: 134,
    B: 11
  },
  {
    ColorName: "DarkGray",
    Type: "HTML",
    Hex: "#A9A9A9",
    R: 169,
    G: 169,
    B: 169
  },
  {
    ColorName: "DarkGreen",
    Type: "HTML",
    Hex: "#006400",
    R: 0,
    G: 100,
    B: 0
  },
  {
    ColorName: "DarkKhaki",
    Type: "HTML",
    Hex: "#BDB76B",
    R: 189,
    G: 183,
    B: 107
  },
  {
    ColorName: "DarkMagenta",
    Type: "HTML",
    Hex: "#8B008B",
    R: 139,
    G: 0,
    B: 139
  },
  {
    ColorName: "DarkOliveGreen",
    Type: "HTML",
    Hex: "#556B2F",
    R: 85,
    G: 107,
    B: 47
  },
  {
    ColorName: "DarkOrange",
    Type: "HTML",
    Hex: "#FF8C00",
    R: 255,
    G: 140,
    B: 0
  },
  {
    ColorName: "DarkOrchid",
    Type: "HTML",
    Hex: "#9932CC",
    R: 153,
    G: 50,
    B: 204
  },
  {
    ColorName: "DarkRed",
    Type: "HTML",
    Hex: "#8B0000",
    R: 139,
    G: 0,
    B: 0
  },
  {
    ColorName: "DarkSalmon",
    Type: "HTML",
    Hex: "#E9967A",
    R: 233,
    G: 150,
    B: 122
  },
  {
    ColorName: "DarkSeaGreen",
    Type: "HTML",
    Hex: "#8FBC8B",
    R: 143,
    G: 188,
    B: 139
  },
  {
    ColorName: "DarkSlateBlue",
    Type: "HTML",
    Hex: "#483D8B",
    R: 72,
    G: 61,
    B: 139
  },
  {
    ColorName: "DarkSlateGray",
    Type: "HTML",
    Hex: "#2F4F4F",
    R: 47,
    G: 79,
    B: 79
  },
  {
    ColorName: "DarkTurquoise",
    Type: "HTML",
    Hex: "#00CED1",
    R: 0,
    G: 206,
    B: 209
  },
  {
    ColorName: "DarkViolet",
    Type: "HTML",
    Hex: "#9400D3",
    R: 148,
    G: 0,
    B: 211
  },
  {
    ColorName: "DeepOrangeColouredBrown",
    Type: "Werner's",
    Hex: "#723B16",
    R: 24,
    G: 68,
    B: 27
  },
  {
    ColorName: "DeepPink",
    Type: "HTML",
    Hex: "#FF1493",
    R: 255,
    G: 20,
    B: 147
  },
  {
    ColorName: "DeepReddishBrown",
    Type: "Werner's",
    Hex: "#4D2A17",
    R: 21,
    G: 54,
    B: 20
  },
  {
    ColorName: "DeepReddishOrange",
    Type: "Werner's",
    Hex: "#CC4700",
    R: 21,
    G: 100,
    B: 40
  },
  {
    ColorName: "DeepSkyBlue",
    Type: "HTML",
    Hex: "#00BFFF",
    R: 0,
    G: 191,
    B: 255
  },
  {
    ColorName: "DimGray",
    Type: "HTML",
    Hex: "#696969",
    R: 105,
    G: 105,
    B: 105
  },
  {
    ColorName: "DodgerBlue",
    Type: "HTML",
    Hex: "#1E90FF",
    R: 30,
    G: 144,
    B: 255
  },
  {
    ColorName: "DuckGreen",
    Type: "Werner's",
    Hex: "#334429",
    R: 98,
    G: 25,
    B: 21
  },
  {
    ColorName: "DutchOrange",
    Type: "Werner's",
    Hex: "#F3AF00",
    R: 43,
    G: 100,
    B: 48
  },
  {
    ColorName: "EmeraldGreen",
    Type: "Werner's",
    Hex: "#97B578",
    R: 90,
    G: 29,
    B: 59
  },
  {
    ColorName: "FireBrick",
    Type: "HTML",
    Hex: "#B22222",
    R: 178,
    G: 34,
    B: 34
  },
  {
    ColorName: "Flax-FlowerBlue",
    Type: "Werner's",
    Hex: "#6D8AD2",
    R: 223,
    G: 53,
    B: 63
  },
  {
    ColorName: "FleshRed",
    Type: "Werner's",
    Hex: "#FED0A4",
    R: 29,
    G: 98,
    B: 82
  },
  {
    ColorName: "FloralWhite",
    Type: "HTML",
    Hex: "#FFFAF0",
    R: 255,
    G: 250,
    B: 240
  },
  {
    ColorName: "ForestGreen",
    Type: "HTML",
    Hex: "#228B22",
    R: 34,
    G: 139,
    B: 34
  },
  {
    ColorName: "FrenchGrey",
    Type: "Werner's",
    Hex: "#C1CAD8",
    R: 217,
    G: 23,
    B: 80
  },
  {
    ColorName: "Fuchsia",
    Type: "HTML",
    Hex: "#FF00FF",
    R: 255,
    G: 0,
    B: 255
  },
  {
    ColorName: "Gainsboro",
    Type: "HTML",
    Hex: "#DCDCDC",
    R: 220,
    G: 220,
    B: 220
  },
  {
    ColorName: "GallstoneYellow",
    Type: "Werner's",
    Hex: "#A56700",
    R: 37,
    G: 100,
    B: 32
  },
  {
    ColorName: "GambogeYellow",
    Type: "Werner's",
    Hex: "#FBEF4E",
    R: 56,
    G: 96,
    B: 65
  },
  {
    ColorName: "GhostWhite",
    Type: "HTML",
    Hex: "#F8F8FF",
    R: 248,
    G: 248,
    B: 255
  },
  {
    ColorName: "Gold",
    Type: "HTML",
    Hex: "#FFD700",
    R: 255,
    G: 215,
    B: 0
  },
  {
    ColorName: "Goldenrod",
    Type: "HTML",
    Hex: "#DAA520",
    R: 218,
    G: 165,
    B: 32
  },
  {
    ColorName: "GrassGreen",
    Type: "Werner's",
    Hex: "#86996D",
    R: 86,
    G: 18,
    B: 51
  },
  {
    ColorName: "Gray",
    Type: "HTML",
    Hex: "#808080",
    R: 128,
    G: 128,
    B: 128
  },
  {
    ColorName: "Green",
    Type: "HTML",
    Hex: "#008000",
    R: 0,
    G: 128,
    B: 0
  },
  {
    ColorName: "GreenishBlack",
    Type: "Werner's",
    Hex: "#30343E",
    R: 223,
    G: 13,
    B: 22
  },
  {
    ColorName: "GreenishBlue",
    Type: "Werner's",
    Hex: "#78A2C0",
    R: 205,
    G: 36,
    B: 61
  },
  {
    ColorName: "GreenishGrey",
    Type: "Werner's",
    Hex: "#828D96",
    R: 207,
    G: 9,
    B: 55
  },
  {
    ColorName: "GreenishWhite",
    Type: "Werner's",
    Hex: "#FBFDF8",
    R: 84,
    G: 56,
    B: 98
  },
  {
    ColorName: "GreenYellow",
    Type: "HTML",
    Hex: "#ADFF2F",
    R: 173,
    G: 255,
    B: 47
  },
  {
    ColorName: "GreyishBlack",
    Type: "Werner's",
    Hex: "#424451",
    R: 232,
    G: 10,
    B: 29
  },
  {
    ColorName: "GreyishBlue",
    Type: "Werner's",
    Hex: "#8DA9C6",
    R: 211,
    G: 33,
    B: 66
  },
  {
    ColorName: "GreyishWhite",
    Type: "Werner's",
    Hex: "#E7ECEF",
    R: 202,
    G: 20,
    B: 92
  },
  {
    ColorName: "HairBrown",
    Type: "Werner's",
    Hex: "#827748",
    R: 49,
    G: 29,
    B: 40
  },
  {
    ColorName: "HoneyDew",
    Type: "HTML",
    Hex: "#F0FFF0",
    R: 240,
    G: 255,
    B: 240
  },
  {
    ColorName: "HoneyYellow",
    Type: "Werner's",
    Hex: "#AD8404",
    R: 45,
    G: 95,
    B: 35
  },
  {
    ColorName: "HotPink",
    Type: "HTML",
    Hex: "#FF69B4",
    R: 255,
    G: 105,
    B: 180
  },
  {
    ColorName: "HyacinthRed",
    Type: "Werner's",
    Hex: "#AF3B23",
    R: 10,
    G: 67,
    B: 41
  },
  {
    ColorName: "ImperialPurple",
    Type: "Werner's",
    Hex: "#3F3982",
    R: 245,
    G: 39,
    B: 37
  },
  {
    ColorName: "IndianRed",
    Type: "HTML",
    Hex: "#CD5C5C",
    R: 205,
    G: 92,
    B: 92
  },
  {
    ColorName: "Indigo",
    Type: "HTML",
    Hex: "#4B0082",
    R: 75,
    G: 0,
    B: 130
  },
  {
    ColorName: "IndigoBlue",
    Type: "Werner's",
    Hex: "#475DA0",
    R: 225,
    G: 39,
    B: 45
  },
  {
    ColorName: "InkBlack",
    Type: "Werner's",
    Hex: "#0B0B13",
    R: 240,
    G: 27,
    B: 6
  },
  {
    ColorName: "Ivory",
    Type: "HTML",
    Hex: "#FFFFF0",
    R: 255,
    G: 255,
    B: 240
  },
  {
    ColorName: "Khaki",
    Type: "HTML",
    Hex: "#F0E68C",
    R: 240,
    G: 230,
    B: 140
  },
  {
    ColorName: "KingsYellow",
    Type: "Werner's",
    Hex: "#FFF762",
    R: 57,
    G: 100,
    B: 69
  },
  {
    ColorName: "LakeRed",
    Type: "Werner's",
    Hex: "#DA0D44",
    R: 344,
    G: 89,
    B: 45
  },
  {
    ColorName: "LavendarPurple",
    Type: "Werner's",
    Hex: "#686C8E",
    R: 234,
    G: 15,
    B: 48
  },
  {
    ColorName: "Lavender",
    Type: "HTML",
    Hex: "#E6E6FA",
    R: 230,
    G: 230,
    B: 250
  },
  {
    ColorName: "LavenderBlush",
    Type: "HTML",
    Hex: "#FFF0F5",
    R: 255,
    G: 240,
    B: 245
  },
  {
    ColorName: "LawnGreen",
    Type: "HTML",
    Hex: "#7CFC00",
    R: 124,
    G: 252,
    B: 0
  },
  {
    ColorName: "LeekGreen",
    Type: "Werner's",
    Hex: "#919682",
    R: 180,
    G: 2,
    B: 58
  },
  {
    ColorName: "LemonChiffon",
    Type: "HTML",
    Hex: "#FFFACD",
    R: 255,
    G: 250,
    B: 205
  },
  {
    ColorName: "LemonYellow",
    Type: "Werner's",
    Hex: "#F0DD5D",
    R: 52,
    G: 83,
    B: 65
  },
  {
    ColorName: "LightBlue",
    Type: "HTML",
    Hex: "#ADD8E6",
    R: 173,
    G: 216,
    B: 230
  },
  {
    ColorName: "LightCoral",
    Type: "HTML",
    Hex: "#F08080",
    R: 240,
    G: 128,
    B: 128
  },
  {
    ColorName: "LightCyan",
    Type: "HTML",
    Hex: "#E0FFFF",
    R: 224,
    G: 255,
    B: 255
  },
  {
    ColorName: "LightGoldenrodYellow",
    Type: "HTML",
    Hex: "#FAFAD2",
    R: 250,
    G: 250,
    B: 210
  },
  {
    ColorName: "LightGray",
    Type: "HTML",
    Hex: "#D3D3D3",
    R: 211,
    G: 211,
    B: 211
  },
  {
    ColorName: "LightGreen",
    Type: "HTML",
    Hex: "#90EE90",
    R: 144,
    G: 238,
    B: 144
  },
  {
    ColorName: "LightPink",
    Type: "HTML",
    Hex: "#FFB6C1",
    R: 255,
    G: 182,
    B: 193
  },
  {
    ColorName: "LightSalmon",
    Type: "HTML",
    Hex: "#FFA07A",
    R: 255,
    G: 160,
    B: 122
  },
  {
    ColorName: "LightSalmon",
    Type: "HTML",
    Hex: "#FFA07A",
    R: 255,
    G: 160,
    B: 122
  },
  {
    ColorName: "LightSeaGreen",
    Type: "HTML",
    Hex: "#20B2AA",
    R: 32,
    G: 178,
    B: 170
  },
  {
    ColorName: "LightSkyBlue",
    Type: "HTML",
    Hex: "#87CEFA",
    R: 135,
    G: 206,
    B: 250
  },
  {
    ColorName: "LightSlateGray",
    Type: "HTML",
    Hex: "#778899",
    R: 119,
    G: 136,
    B: 153
  },
  {
    ColorName: "LightSteelBlue",
    Type: "HTML",
    Hex: "#B0C4DE",
    R: 176,
    G: 196,
    B: 222
  },
  {
    ColorName: "LightYellow",
    Type: "HTML",
    Hex: "#FFFFE0",
    R: 255,
    G: 255,
    B: 224
  },
  {
    ColorName: "Lime",
    Type: "HTML",
    Hex: "#00FF00",
    R: 0,
    G: 255,
    B: 0
  },
  {
    ColorName: "LimeGreen",
    Type: "HTML",
    Hex: "#32CD32",
    R: 50,
    G: 205,
    B: 50
  },
  {
    ColorName: "Linen",
    Type: "HTML",
    Hex: "#FAF0E6",
    R: 250,
    G: 240,
    B: 230
  },
  {
    ColorName: "LiverBrown",
    Type: "Werner's",
    Hex: "#3F3114",
    R: 40,
    G: 52,
    B: 16
  },
  {
    ColorName: "Magenta",
    Type: "HTML",
    Hex: "#FF00FF",
    R: 255,
    G: 0,
    B: 255
  },
  {
    ColorName: "Maroon",
    Type: "HTML",
    Hex: "#800000",
    R: 128,
    G: 0,
    B: 0
  },
  {
    ColorName: "MediumAquamarine",
    Type: "HTML",
    Hex: "#66CDAA",
    R: 102,
    G: 205,
    B: 170
  },
  {
    ColorName: "MediumBlue",
    Type: "HTML",
    Hex: "#0000CD",
    R: 0,
    G: 0,
    B: 205
  },
  {
    ColorName: "MediumOrchid",
    Type: "HTML",
    Hex: "#BA55D3",
    R: 186,
    G: 85,
    B: 211
  },
  {
    ColorName: "MediumPurple",
    Type: "HTML",
    Hex: "#9370DB",
    R: 147,
    G: 112,
    B: 219
  },
  {
    ColorName: "MediumSeaGreen",
    Type: "HTML",
    Hex: "#3CB371",
    R: 60,
    G: 179,
    B: 113
  },
  {
    ColorName: "MediumSlateBlue",
    Type: "HTML",
    Hex: "#7B68EE",
    R: 123,
    G: 104,
    B: 238
  },
  {
    ColorName: "MediumSlateBlue",
    Type: "HTML",
    Hex: "#7B68EE",
    R: 123,
    G: 104,
    B: 238
  },
  {
    ColorName: "MediumSpringGreen",
    Type: "HTML",
    Hex: "#00FA9A",
    R: 0,
    G: 250,
    B: 154
  },
  {
    ColorName: "MediumTurquoise",
    Type: "HTML",
    Hex: "#48D1CC",
    R: 72,
    G: 209,
    B: 204
  },
  {
    ColorName: "MediumVioletRed",
    Type: "HTML",
    Hex: "#C71585",
    R: 199,
    G: 21,
    B: 133
  },
  {
    ColorName: "MidnightBlue",
    Type: "HTML",
    Hex: "#191970",
    R: 25,
    G: 25,
    B: 112
  },
  {
    ColorName: "MintCream",
    Type: "HTML",
    Hex: "#F5FFFA",
    R: 245,
    G: 255,
    B: 250
  },
  {
    ColorName: "MistyRose",
    Type: "HTML",
    Hex: "#FFE4E1",
    R: 255,
    G: 228,
    B: 225
  },
  {
    ColorName: "Moccasin",
    Type: "HTML",
    Hex: "#FFE4B5",
    R: 255,
    G: 228,
    B: 181
  },
  {
    ColorName: "MountainGreen",
    Type: "Werner's",
    Hex: "#AEB197",
    R: 67,
    G: 14,
    B: 64
  },
  {
    ColorName: "NavajoWhite",
    Type: "HTML",
    Hex: "#FFDEAD",
    R: 255,
    G: 222,
    B: 173
  },
  {
    ColorName: "Navy",
    Type: "HTML",
    Hex: "#000080",
    R: 0,
    G: 0,
    B: 128
  },
  {
    ColorName: "OchreYellow",
    Type: "Werner's",
    Hex: "#FBE573",
    R: 50,
    G: 94,
    B: 72
  },
  {
    ColorName: "OilGreen",
    Type: "Werner's",
    Hex: "#AD9F61",
    R: 49,
    G: 32,
    B: 53
  },
  {
    ColorName: "OldLace",
    Type: "HTML",
    Hex: "#FDF5E6",
    R: 253,
    G: 245,
    B: 230
  },
  {
    ColorName: "Olive",
    Type: "HTML",
    Hex: "#808000",
    R: 128,
    G: 128,
    B: 0
  },
  {
    ColorName: "OliveBrown",
    Type: "Werner's",
    Hex: "#6B5C3D",
    R: 40,
    G: 27,
    B: 33
  },
  {
    ColorName: "OliveDrab",
    Type: "HTML",
    Hex: "#6B8E23",
    R: 107,
    G: 142,
    B: 35
  },
  {
    ColorName: "OliveGreen",
    Type: "Werner's",
    Hex: "#6D7F75",
    R: 147,
    G: 8,
    B: 46
  },
  {
    ColorName: "Orange",
    Type: "HTML",
    Hex: "#FFA500",
    R: 255,
    G: 165,
    B: 0
  },
  {
    ColorName: "OrangeRed",
    Type: "HTML",
    Hex: "#FF4500",
    R: 255,
    G: 69,
    B: 0
  },
  {
    ColorName: "OrangeWhite",
    Type: "Werner's",
    Hex: "#FCFAF5",
    R: 43,
    G: 54,
    B: 97
  },
  {
    ColorName: "Orchid",
    Type: "HTML",
    Hex: "#DA70D6",
    R: 218,
    G: 112,
    B: 214
  },
  {
    ColorName: "OrpimentOrange",
    Type: "Werner's",
    Hex: "#E27000",
    R: 30,
    G: 100,
    B: 44
  },
  {
    ColorName: "PaleBluishPurple",
    Type: "Werner's",
    Hex: "#32335F",
    R: 239,
    G: 31,
    B: 28
  },
  {
    ColorName: "PaleGoldenrod",
    Type: "HTML",
    Hex: "#EEE8AA",
    R: 238,
    G: 232,
    B: 170
  },
  {
    ColorName: "PaleGreen",
    Type: "HTML",
    Hex: "#98FB98",
    R: 152,
    G: 251,
    B: 152
  },
  {
    ColorName: "PaleTurquoise",
    Type: "HTML",
    Hex: "#AFEEEE",
    R: 175,
    G: 238,
    B: 238
  },
  {
    ColorName: "PaleVioletRed",
    Type: "HTML",
    Hex: "#DB7093",
    R: 219,
    G: 112,
    B: 147
  },
  {
    ColorName: "PansyPurple",
    Type: "Werner's",
    Hex: "#1E1B48",
    R: 244,
    G: 45,
    B: 19
  },
  {
    ColorName: "PapayaWhip",
    Type: "HTML",
    Hex: "#FFEFD5",
    R: 255,
    G: 239,
    B: 213
  },
  {
    ColorName: "PeachBlossomRed",
    Type: "Werner's",
    Hex: "#FFE1D6",
    R: 16,
    G: 100,
    B: 92
  },
  {
    ColorName: "PeachPuff",
    Type: "HTML",
    Hex: "#FFDAB9",
    R: 255,
    G: 218,
    B: 185
  },
  {
    ColorName: "PearlGrey",
    Type: "Werner's",
    Hex: "#B8C0CE",
    R: 218,
    G: 18,
    B: 76
  },
  {
    ColorName: "Peru",
    Type: "HTML",
    Hex: "#CD853F",
    R: 205,
    G: 133,
    B: 63
  },
  {
    ColorName: "Pink",
    Type: "HTML",
    Hex: "#FFC0CB",
    R: 255,
    G: 192,
    B: 203
  },
  {
    ColorName: "PistachioGreen",
    Type: "Werner's",
    Hex: "#98A760",
    R: 73,
    G: 29,
    B: 52
  },
  {
    ColorName: "PitchOrBrownishBlack",
    Type: "Werner's",
    Hex: "#2B272E",
    R: 274,
    G: 8,
    B: 17
  },
  {
    ColorName: "Plum",
    Type: "HTML",
    Hex: "#DDA0DD",
    R: 221,
    G: 160,
    B: 221
  },
  {
    ColorName: "PlumPurple",
    Type: "Werner's",
    Hex: "#29205A",
    R: 249,
    G: 48,
    B: 24
  },
  {
    ColorName: "PowderBlue",
    Type: "HTML",
    Hex: "#B0E0E6",
    R: 176,
    G: 224,
    B: 230
  },
  {
    ColorName: "PrimroseYellow",
    Type: "Werner's",
    Hex: "#FFFEB2",
    R: 59,
    G: 100,
    B: 85
  },
  {
    ColorName: "PrussianBlue",
    Type: "Werner's",
    Hex: "#60740",
    R: 239,
    G: 83,
    B: 14
  },
  {
    ColorName: "Purple",
    Type: "HTML",
    Hex: "#800080",
    R: 128,
    G: 0,
    B: 128
  },
  {
    ColorName: "PurplishRed",
    Type: "Werner's",
    Hex: "#8B0013",
    R: 352,
    G: 100,
    B: 27
  },
  {
    ColorName: "PurplishWhite",
    Type: "Werner's",
    Hex: "#F4F6FB",
    R: 223,
    G: 47,
    B: 97
  },
  {
    ColorName: "RebeccaPurple",
    Type: "HTML",
    Hex: "#663399",
    R: 102,
    G: 51,
    B: 153
  },
  {
    ColorName: "Red",
    Type: "HTML",
    Hex: "#FF0000",
    R: 255,
    G: 0,
    B: 0
  },
  {
    ColorName: "ReddishBlack",
    Type: "Werner's",
    Hex: "#2B242A",
    R: 309,
    G: 9,
    B: 15
  },
  {
    ColorName: "ReddishOrange",
    Type: "Werner's",
    Hex: "#D16200",
    R: 28,
    G: 100,
    B: 41
  },
  {
    ColorName: "ReddishWhite",
    Type: "Werner's",
    Hex: "#FAF9FA",
    R: 300,
    G: 9,
    B: 98
  },
  {
    ColorName: "RedLilacPurple",
    Type: "Werner's",
    Hex: "#C1C9E8",
    R: 228,
    G: 46,
    B: 83
  },
  {
    ColorName: "RoseRed",
    Type: "Werner's",
    Hex: "#FFF2DC",
    R: 38,
    G: 100,
    B: 93
  },
  {
    ColorName: "RosyBrown",
    Type: "HTML",
    Hex: "#BC8F8F",
    R: 188,
    G: 143,
    B: 143
  },
  {
    ColorName: "RoyalBlue",
    Type: "HTML",
    Hex: "#4169E1",
    R: 65,
    G: 105,
    B: 225
  },
  {
    ColorName: "SaddleBrown",
    Type: "HTML",
    Hex: "#8B4513",
    R: 139,
    G: 69,
    B: 19
  },
  {
    ColorName: "SaffronYellow",
    Type: "Werner's",
    Hex: "#DEA916",
    R: 44,
    G: 82,
    B: 48
  },
  {
    ColorName: "Salmon",
    Type: "HTML",
    Hex: "#FA8072",
    R: 250,
    G: 128,
    B: 114
  },
  {
    ColorName: "SandyBrown",
    Type: "HTML",
    Hex: "#F4A460",
    R: 244,
    G: 164,
    B: 96
  },
  {
    ColorName: "SapGreen",
    Type: "Werner's",
    Hex: "#829249",
    R: 73,
    G: 33,
    B: 43
  },
  {
    ColorName: "ScarletRed",
    Type: "Werner's",
    Hex: "#BA1F21",
    R: 359,
    G: 71,
    B: 43
  },
  {
    ColorName: "ScotchBlue",
    Type: "Werner's",
    Hex: "#110D32",
    R: 246,
    G: 59,
    B: 12
  },
  {
    ColorName: "SeaGreen",
    Type: "HTML",
    Hex: "#2E8B57",
    R: 46,
    G: 139,
    B: 87
  },
  {
    ColorName: "SeaShell",
    Type: "HTML",
    Hex: "#FFF5EE",
    R: 255,
    G: 245,
    B: 238
  },
  {
    ColorName: "Sienna",
    Type: "HTML",
    Hex: "#A0522D",
    R: 160,
    G: 82,
    B: 45
  },
  {
    ColorName: "SiennaYellow",
    Type: "Werner's",
    Hex: "#FDEC85",
    R: 52,
    G: 97,
    B: 76
  },
  {
    ColorName: "Silver",
    Type: "HTML",
    Hex: "#C0C0C0",
    R: 192,
    G: 192,
    B: 192
  },
  {
    ColorName: "SiskinGreen",
    Type: "Werner's",
    Hex: "#D7E090",
    R: 67,
    G: 56,
    B: 72
  },
  {
    ColorName: "SkimmedMilkWhite",
    Type: "Werner's",
    Hex: "#EDF0F2",
    R: 204,
    G: 16,
    B: 94
  },
  {
    ColorName: "SkyBlue",
    Type: "HTML",
    Hex: "#87CEEB",
    R: 135,
    G: 206,
    B: 235
  },
  {
    ColorName: "SlateBlue",
    Type: "HTML",
    Hex: "#6A5ACD",
    R: 106,
    G: 90,
    B: 205
  },
  {
    ColorName: "SlateGray",
    Type: "HTML",
    Hex: "#708090",
    R: 112,
    G: 128,
    B: 144
  },
  {
    ColorName: "SmokeGrey",
    Type: "Werner's",
    Hex: "#C0C7D3",
    R: 218,
    G: 18,
    B: 79
  },
  {
    ColorName: "Snow",
    Type: "HTML",
    Hex: "#FFFAFA",
    R: 255,
    G: 250,
    B: 250
  },
  {
    ColorName: "SnowWhite",
    Type: "Werner's",
    Hex: "#F9FAF8",
    R: 90,
    G: 17,
    B: 98
  },
  {
    ColorName: "SpringGreen",
    Type: "HTML",
    Hex: "#00FF7F",
    R: 0,
    G: 255,
    B: 127
  },
  {
    ColorName: "SteelBlue",
    Type: "HTML",
    Hex: "#4682B4",
    R: 70,
    G: 130,
    B: 180
  },
  {
    ColorName: "StrawYellow",
    Type: "Werner's",
    Hex: "#FDF096",
    R: 52,
    G: 96,
    B: 79
  },
  {
    ColorName: "SulphurYellow",
    Type: "Werner's",
    Hex: "#E2D943",
    R: 45,
    G: 112,
    B: 65
  },
  {
    ColorName: "Tan",
    Type: "HTML",
    Hex: "#D2B48C",
    R: 210,
    G: 180,
    B: 140
  },
  {
    ColorName: "Teal",
    Type: "HTML",
    Hex: "#008080",
    R: 0,
    G: 128,
    B: 128
  },
  {
    ColorName: "Thistle",
    Type: "HTML",
    Hex: "#D8BFD8",
    R: 216,
    G: 191,
    B: 216
  },
  {
    ColorName: "TileRed",
    Type: "Werner's",
    Hex: "#D05438",
    R: 8,
    G: 60,
    B: 54
  },
  {
    ColorName: "Tomato",
    Type: "HTML",
    Hex: "#FF6347",
    R: 255,
    G: 99,
    B: 71
  },
  {
    ColorName: "Turquoise",
    Type: "HTML",
    Hex: "#40E0D0",
    R: 64,
    G: 224,
    B: 208
  },
  {
    ColorName: "UltramarineBlue",
    Type: "Werner's",
    Hex: "#607700",
    R: 229,
    G: 69,
    B: 63
  },
  {
    ColorName: "UmberBrown",
    Type: "Werner's",
    Hex: "#443116",
    R: 35,
    G: 51,
    B: 18
  },
  {
    ColorName: "VeinousBloodRed",
    Type: "Werner's",
    Hex: "#630108",
    R: 356,
    G: 98,
    B: 20
  },
  {
    ColorName: "VelvetBlack",
    Type: "Werner's",
    Hex: "#0A0A0F",
    R: 240,
    G: 20,
    B: 5
  },
  {
    ColorName: "VerdigrisGreen",
    Type: "Werner's",
    Hex: "#71AA89",
    R: 145,
    G: 25,
    B: 55
  },
  {
    ColorName: "VerditterBlue",
    Type: "Werner's",
    Hex: "#80C0D6",
    R: 195,
    G: 51,
    B: 67
  },
  {
    ColorName: "VermillionRed",
    Type: "Werner's",
    Hex: "#BC2D27",
    R: 2,
    G: 66,
    B: 45
  },
  {
    ColorName: "Violet",
    Type: "HTML",
    Hex: "#EE82EE",
    R: 238,
    G: 130,
    B: 238
  },
  {
    ColorName: "VioletPurple",
    Type: "Werner's",
    Hex: "#1E1753",
    R: 247,
    G: 57,
    B: 21
  },
  {
    ColorName: "WaxYellow",
    Type: "Werner's",
    Hex: "#BD9E32",
    R: 47,
    G: 58,
    B: 47
  },
  {
    ColorName: "Wheat",
    Type: "HTML",
    Hex: "#F5DEB3",
    R: 245,
    G: 222,
    B: 179
  },
  {
    ColorName: "White",
    Type: "HTML",
    Hex: "#FFFFFF",
    R: 255,
    G: 255,
    B: 255
  },
  {
    ColorName: "WhiteSmoke",
    Type: "HTML",
    Hex: "#F5F5F5",
    R: 245,
    G: 245,
    B: 245
  },
  {
    ColorName: "WineYellow",
    Type: "Werner's",
    Hex: "#E5DB75",
    R: 55,
    G: 68,
    B: 68
  },
  {
    ColorName: "WoodBrown",
    Type: "Werner's",
    Hex: "#C0A666",
    R: 43,
    G: 42,
    B: 58
  },
  {
    ColorName: "Yellow",
    Type: "HTML",
    Hex: "#FFFF00",
    R: 255,
    G: 255,
    B: 0
  },
  {
    ColorName: "YellowGreen",
    Type: "HTML",
    Hex: "#9ACD32",
    R: 154,
    G: 205,
    B: 50
  },
  {
    ColorName: "YellowishBrown",
    Type: "Werner's",
    Hex: "#87662A",
    R: 39,
    G: 53,
    B: 35
  },
  {
    ColorName: "YellowishGrey",
    Type: "Werner's",
    Hex: "#B9BBA9",
    R: 67,
    G: 12,
    B: 70
  },
  {
    ColorName: "YellowishWhite",
    Type: "Werner's",
    Hex: "#FBFBF6",
    R: 60,
    G: 38,
    B: 97
  }
];

for (i = 0; i < colours.length; i++) {
	if (i > 0) {
		document.getElementById("canvasBrushColour").innerHTML += "<option style='color:" + colours[i].Hex  + "; text-shadow: 1px 1px 0 black;' value='" + colours[i].Hex  + "'>" + colours[i].ColorName + "</option>"; 
	} else {
		document.getElementById("canvasBrushColour").innerHTML = "<option style='color:" + colours[i].Hex  + "; text-shadow: 1px 1px 0 black;' value='" + colours[i].Hex  + "' selected>" + colours[i].ColorName + "</option>"; 
	}	
}

ct.fillStyle = document.getElementById('canvasBrushColour').value;

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      huhu.src = e.target.result;
      document.getElementById("fileText").value = replaceInvalidCharacters(
        input.files[0].name.split(".")[0]
      );
      document.getElementById(
        "fileDescription"
      ).value = input.files[0].name.split(".")[0];
      document.getElementById("fileType").value = input.files[0].name.split(
        "."
      )[1];
      ct.clearRect(
        0,
        0,
        document.getElementById("canvasWidth").value,
        document.getElementById("canvasHeight").value
      );
      setTimeout(reDrawImage, 50);
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function resizeCanvas() {
  var w = document.getElementById("canvasWidth").value;
  var h = document.getElementById("canvasHeight").value;
  document.getElementById("rightBar").style.height =
    document.getElementById("canvasHeight").value + "px";
  document.getElementById("bottomBar").style.width = document.getElementById(
    "canvasWidth"
  ).value;
  +"px";
  document.getElementById("imageCropper").setAttribute("width", w);
  document.getElementById("imageCropper").setAttribute("height", h);
}

function reDrawImage() {
  var scale = document.getElementById("canvasScale").value;
  var left = document.getElementById("canvasLeft").value;
  var top = document.getElementById("canvasTop").value;
  ct.drawImage(
    huhu,
    left,
    top,
    huhu.width * (scale / 100),
    huhu.height * (scale / 100)
  );
}

function downloadImage(filename, text) {
  var l = document.createElement("a");
  l.setAttribute("href", text);
  l.setAttribute("download", filename);
  if (document.createEvent) {
    var event = document.createEvent("MouseEvents");
    event.initEvent("click", true, true);
    l.dispatchEvent(event);
  } else {
    l.click();
  }
}

function replaceInvalidCharacters(inputSring) {
  inputSring = inputSring.replace(/\s+/g, "_");
  var outputString = "";
  for (var i = 0; i < inputSring.length; i++) {
    if (inputSring.charCodeAt(i) < 127 && inputSring.charCodeAt(i) > 32) {
      outputString += inputSring.charAt(i);
    }
  }
  return outputString;
}

function changeInput(bo) {
  for (
    var i = 0;
    i < document.getElementsByClassName("viewBandit").length;
    i++
  ) {
    document.getElementsByClassName("viewBandit")[i].style.display = "none";
  }
  document.getElementsByClassName("viewBandit")[bo].style.display = "block";
}

function grayScale(id) {
  var context = document.getElementById(id).getContext("2d");
  var canvas = document.getElementById(id);
  if (context != null) {
    var imgData = context.getImageData(0, 0, canvas.width, canvas.height);
    var pxl = imgData.data;
    for (var i = 0, n = pxl.length; i < n; i += 4) {
      var grayscale = pxl[i] * 0.3 + pxl[i + 1] * 0.59 + pxl[i + 2] * 0.11;
      pxl[i] = grayscale;
      pxl[i + 1] = grayscale;
      pxl[i + 2] = grayscale;
    }
    context.putImageData(imgData, 0, 0);
  }
}

function invert(id) {
  var context = document.getElementById(id).getContext("2d");
  var canvas = document.getElementById(id);
  if (context != null) {
    var imgData = context.getImageData(0, 0, canvas.width, canvas.height);
    var pxl = imgData.data;
    for (var i = 0; i < pxl.length; i += 4) {
      pxl[i] = 255 - pxl[i];
      pxl[i + 1] = 255 - pxl[i + 1];
      pxl[i + 2] = 255 - pxl[i + 2];
    }
    context.putImageData(imgData, 0, 0);
  }
}

function brighten(id, adjustment) {
  var context = document.getElementById(id).getContext("2d");
  var canvas = document.getElementById(id);
  if (context != null) {
    var imgData = context.getImageData(0, 0, canvas.width, canvas.height);
    var pxl = imgData.data;
    for (var i = 0; i < pxl.length; i += 4) {
      pxl[i] -= adjustment;
      pxl[i + 1] -= adjustment;
      pxl[i + 2] -= adjustment;
    }
    context.putImageData(imgData, 0, 0);
  }
}

function makeRed(id, adjustment) {
  var context = document.getElementById(id).getContext("2d");
  var canvas = document.getElementById(id);
  if (context != null) {
    var imgData = context.getImageData(0, 0, canvas.width, canvas.height);
    var pxl = imgData.data;
    for (var i = 0; i < pxl.length; i += 4) {
      pxl[i] -= adjustment;
    }
    context.putImageData(imgData, 0, 0);
  }
}

function makeGreen(id, adjustment) {
  var context = document.getElementById(id).getContext("2d");
  var canvas = document.getElementById(id);
  if (context != null) {
    var imgData = context.getImageData(0, 0, canvas.width, canvas.height);
    var pxl = imgData.data;
    for (var i = 0; i < pxl.length; i += 4) {
      pxl[i + 1] -= adjustment;
    }
    context.putImageData(imgData, 0, 0);
  }
}

function makeBlue(id, adjustment) {
  var context = document.getElementById(id).getContext("2d");
  var canvas = document.getElementById(id);
  if (context != null) {
    var imgData = context.getImageData(0, 0, canvas.width, canvas.height);
    var pxl = imgData.data;
    for (var i = 0; i < pxl.length; i += 4) {
      pxl[i + 2] -= adjustment;
    }
    context.putImageData(imgData, 0, 0);
  }
}

function makeAlpha(id, adjustment) {
  var context = document.getElementById(id).getContext("2d");
  var canvas = document.getElementById(id);
  if (context != null) {
    var imgData = context.getImageData(0, 0, canvas.width, canvas.height);
    var pxl = imgData.data;
    for (var i = 0; i < pxl.length; i += 4) {
      pxl[i + 3] -= adjustment;
    }
    context.putImageData(imgData, 0, 0);
  }
}

function threshold(id, threshold) {
  var context = document.getElementById(id).getContext("2d");
  var canvas = document.getElementById(id);
  if (context != null) {
    var imgData = context.getImageData(0, 0, canvas.width, canvas.height);
    var pxl = imgData.data;
    for (var i = 0; i < pxl.length; i += 4) {
      var r = pxl[i];
      var g = pxl[i + 1];
      var b = pxl[i + 2];
      var v = 0.2126 * r + 0.7152 * g + 0.0722 * b >= threshold ? 255 : 0;
      pxl[i] = pxl[i + 1] = pxl[i + 2] = v;
    }
    context.putImageData(imgData, 0, 0);
  }
}

function noise(id, adjustment) {
  var context = document.getElementById(id).getContext("2d");
  var canvas = document.getElementById(id);
  if (context != null) {
    var imgData = context.getImageData(0, 0, canvas.width, canvas.height);
    var pxl = imgData.data;
    for (var i = 0; i < pxl.length; i += 4) {
      let random = (0.5 - Math.random()) * adjustment;
      pxl[i] += random;
      pxl[i + 1] += random;
      pxl[i + 2] += random;
    }
    context.putImageData(imgData, 0, 0);
  }
}

function saturate(id, adjustment) {
  var context = document.getElementById(id).getContext("2d");
  var canvas = document.getElementById(id);
  if (context != null) {
    var imgData = context.getImageData(0, 0, canvas.width, canvas.height);
    var pxl = imgData.data;
    for (var i = 0; i < pxl.length; i += 4) {
      let thispixel = new Array(0);
      thispixel[0] = pxl[i];
      thispixel[1] = pxl[i + 1];
      thispixel[2] = pxl[i + 2];
      let rgb = saturatePixel(thispixel);
      pxl[i] = rgb[0];
      pxl[i + 1] = rgb[1];
      pxl[i + 2] = rgb[2];
    }
    context.putImageData(imgData, 0, 0);
  }
}

function saturatePixel(pixel, factor) {
  var hsl = RGBtoHSL(pixel);
  hsl[1] *= factor;
  return HSLtoRGB(hsl);
}

function RGBtoHSL(rgb) {
  var r = rgb[0],
    g = rgb[1],
    b = rgb[2];

  r /= 255;
  g /= 255;
  b /= 255;

  var max = Math.max(r, g, b),
    min = Math.min(r, g, b),
    h,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return [h, s, l];
}

function HSLtoRGB(hsl) {
  var h = hsl[0],
    s = hsl[1],
    l = hsl[2],
    r,
    g,
    b,
    hue2rgb = function(p, q, t) {
      if (t < 0) {
        t += 1;
      }
      if (t > 1) {
        t -= 1;
      }
      if (t < 1 / 6) {
        return p + (q - p) * 6 * t;
      }
      if (t < 1 / 2) {
        return q;
      }
      if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
      }
      return p;
    };

  if (s === 0) {
    r = g = b = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s,
      p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [r * 0xff, g * 0xff, b * 0xff];
}

function getColour(x, y) {
  var i = ct.getImageData(x, y, 1, 1);
  var r = i.data[0];
  var g = i.data[1];
  var b = i.data[2];
  var a = i.data[3];
  var selectedColour = colours[0];
  selectedColour.Div = 0;

  for (let i = 1; i < colours.length; i++) {
    let curR = convertNumber(colours[i].R - r);
    let selR = convertNumber(selectedColour.R - r);
    let curG = convertNumber(colours[i].G - g);
    let selG = convertNumber(selectedColour.G - g);
    let curB = convertNumber(colours[i].B - b);
    let selB = convertNumber(selectedColour.B - b);
    let curT = curR + curG + curB;
    let selT = selR + selG + selB;

    if (curT <= selT) {
      selectedColour = colours[i];
      selectedColour.Div = curT;
    }
  }
  return selectedColour.ColorName + " (" + selectedColour.Div + ")";
}

function convertNumber(number) {
  return number < 0 ? -number : number;
}

document.getElementById("imgInp").addEventListener("change", function() {
  readURL(this);
});

for (
  var i = 0;
  i < document.getElementsByClassName("canvasBandit").length;
  i++
) {
  document
    .getElementsByClassName("canvasBandit")
    [i].addEventListener("change", function() {
      resizeCanvas();
      reDrawImage();
    });
}

document
  .getElementById("imageCropper")
  .addEventListener("mousedown", function(event) {
    draw = true;
    if (document.getElementById("showDrawingTools").checked != true) {
      document.getElementById("imageCropper").style.cursor = "grabbing";
      var x = parseInt(document.getElementById("canvasLeft").value);
      var y = parseInt(document.getElementById("canvasTop").value);
      moveCoords[0] =
        -x + event.pageX - document.getElementById("imageCropper").offsetLeft;
      moveCoords[1] =
        -y + event.pageY - document.getElementById("imageCropper").offsetTop;
    }
  });

document
  .getElementById("imageCropper")
  .addEventListener("mouseup", function(event) {
    draw = false;
    if (document.getElementById("showDrawingTools").checked != true) {
      document.getElementById("imageCropper").style.cursor = "grab";
      moveCoords = [null, null, null, null];
    }
  });

document
  .getElementById("imageCropper")
  .addEventListener("mouseover", function(event) {
    if (document.getElementById("showDrawingTools").checked != true) {
      document.getElementById("imageCropper").style.cursor = "grab";
    } else {
      document.getElementById("imageCropper").style.cursor = "default";
    }
  });

document
  .getElementById("imageCropper")
  .addEventListener("mouseleave", function(event) {
    document.getElementById("imageCropper").style.cursor = "default";
    draw = false;
  });

document
  .getElementById("imageCropper")
  .addEventListener("mousemove", function(event) {
    var x = event.clientX - document.getElementById("imageCropper").offsetLeft;
    var y = event.clientY - document.getElementById("imageCropper").offsetTop;
    document.getElementById('colourBox').innerHTML = getColour(x, y)
	
    if (
      draw == true &&
      document.getElementById("showDrawingTools").checked == true
    ) {
      var ib = event.pageX - document.getElementById("imageCropper").offsetLeft;
      var bo = event.pageY - document.getElementById("imageCropper").offsetTop;
      var per = document.getElementById("canvasBrush").value;
      ct.beginPath();
      ct.arc(ib, bo, per, 0, 2 * Math.PI);
      ct.closePath();
      ct.fill();
    } else if (
      draw == true &&
      document.getElementById("showDrawingTools").checked == false
    ) {
      moveCoords[2] =
        event.pageX - document.getElementById("imageCropper").offsetLeft;
      moveCoords[3] =
        event.pageY - document.getElementById("imageCropper").offsetTop;
      var moveX = moveCoords[2] - moveCoords[0];
      var moveY = moveCoords[3] - moveCoords[1];
      document.getElementById("canvasLeft").value = moveX;
      document.getElementById("canvasTop").value = moveY;

      ct.clearRect(
        0,
        0,
        document.getElementById("imageCropper").width,
        document.getElementById("imageCropper").height
      );
      reDrawImage();
    }
  });

document
  .getElementById("clearRectBandit")
  .addEventListener("click", function() {
    ct.clearRect(
      0,
      0,
      document.getElementById("imageCropper").width,
      document.getElementById("imageCropper").height
    );
  });

document
  .getElementById("canvasBrushColour")
  .addEventListener("change", function() {
    ct.fillStyle = document.getElementById("canvasBrushColour").value;
  });

for (var i = 0; i < document.getElementsByName("inputType").length; i++) {
  document
    .getElementsByName("inputType")
    [i].addEventListener("change", function() {
      changeInput(this.value);
    });
}

document.getElementById("URLBandit").addEventListener("change", function() {
  huhu.src = document.getElementById("URLBandit").value;
  reDrawImage();
});

document.getElementById("fileText").addEventListener("change", function(event) {
  this.value = replaceInvalidCharacters(this.value);
});

document.getElementById("downloadBandit").addEventListener("click", function() {
  downloadImage(
    document.getElementById("fileText").value +
      "." +
      document.getElementById("fileType").value,
    document.getElementById("imageCropper").toDataURL()
  );
});

document.getElementById("rightBar").addEventListener("mousedown", function() {
  resizeX = true;
});

document.getElementById("bottomBar").addEventListener("mousedown", function() {
  resizeY = true;
});

document.addEventListener("mouseup", function() {
  resizeX = false;
  resizeY = false;
});

document
  .getElementById("imageZone")
  .addEventListener("mousemove", function(event) {
    if (resizeX == true) {
      var ib = event.pageX - document.getElementById("imageCropper").offsetLeft;
      document.getElementById("bottomBar").style.width = ib + "px";
      document.getElementById("imageCropper").width = ib;
      document.getElementById("canvasWidth").value = ib;
      reDrawImage();
    }
    if (resizeY == true) {
      var bo = event.pageY - document.getElementById("imageCropper").offsetTop;
      document.getElementById("rightBar").style.height = bo + "px";
      document.getElementById("imageCropper").height = bo;
      document.getElementById("canvasHeight").value = bo;
      reDrawImage();
    }
  });

document
  .getElementById("showDrawingTools")
  .addEventListener("click", function(event) {
    this.checked == true
      ? (document.getElementById("drawingTools").style.display = "block")
      : (document.getElementById("drawingTools").style.display = "none");
  });

document
  .getElementById("showFilters")
  .addEventListener("click", function(event) {
    this.checked == true
      ? (document.getElementById("filters").style.display = "block")
      : (document.getElementById("filters").style.display = "none");
  });

document.getElementById("hideTools").addEventListener("click", function(event) {
  this.checked != true
    ? (document.getElementById("editField").style.display = "block")
    : (document.getElementById("editField").style.display = "none");
});

document.addEventListener("keydown", function(event) {
  //event.preventDefault();
  var x = parseInt(document.getElementById("canvasLeft").value);
  var y = parseInt(document.getElementById("canvasTop").value);
  switch (event.keyCode) {
    case 37:
      document.getElementById("canvasLeft").value = x - 1;
      ct.clearRect(
        0,
        0,
        document.getElementById("imageCropper").width,
        document.getElementById("imageCropper").height
      );
      reDrawImage();
      break;
    case 38:
      document.getElementById("canvasTop").value = y - 1;
      ct.clearRect(
        0,
        0,
        document.getElementById("imageCropper").width,
        document.getElementById("imageCropper").height
      );
      reDrawImage();
      break;
    case 39:
      document.getElementById("canvasLeft").value = x + 1;
      ct.clearRect(
        0,
        0,
        document.getElementById("imageCropper").width,
        document.getElementById("imageCropper").height
      );
      reDrawImage();
      break;
    case 40:
      document.getElementById("canvasTop").value = y + 1;
      ct.clearRect(
        0,
        0,
        document.getElementById("imageCropper").width,
        document.getElementById("imageCropper").height
      );
      reDrawImage();
      break;
  }
});

document
  .getElementById("grayScaleFilter")
  .addEventListener("click", function() {
    grayScale("imageCropper");
  });

document.getElementById("invertFilter").addEventListener("click", function() {
  invert("imageCropper");
});

document
  .getElementById("brightnessFilter")
  .addEventListener("change", function(event) {
    brighten("imageCropper", -this.value);
    this.value = 0;
  });

document
  .getElementById("redFilter")
  .addEventListener("change", function(event) {
    makeRed("imageCropper", -this.value);
    this.value = 0;
  });

document
  .getElementById("greenFilter")
  .addEventListener("change", function(event) {
    makeGreen("imageCropper", -this.value);
    this.value = 0;
  });

document
  .getElementById("blueFilter")
  .addEventListener("change", function(event) {
    makeBlue("imageCropper", -this.value);
    this.value = 0;
  });

document
  .getElementById("alphaFilter")
  .addEventListener("change", function(event) {
    makeAlpha("imageCropper", this.value);
    this.value = 0;
  });

document
  .getElementById("thresholdFilter")
  .addEventListener("change", function(event) {
    threshold("imageCropper", this.value);
    this.value = 0;
  });

document
  .getElementById("noiseFilter")
  .addEventListener("change", function(event) {
    noise("imageCropper", this.value);
    this.value = 0;
  });

document
  .getElementById("saturateFilter")
  .addEventListener("change", function(event) {
    saturate("imageCropper", this.value);
    this.value = 0;
  });

document.getElementById("slider").addEventListener("mousedown", function() {
  sliding = true;
});

window.addEventListener("mouseup", function(event) {
  if (sliding == true) {
    document.getElementById("editField").style.width =
      window.innerWidth - event.pageX + "px";
    sliding = false;
  }
});

window.addEventListener("mousemove", function(event) {
  if (sliding == true) {
    document.getElementById("editField").style.width =
      window.innerWidth - event.pageX + "px";
  }
});
