// Import stylesheets
import "./style.css";
import { colourNames } from "./colours.js";

var huhu = new Image();
var ct = document.getElementById("imageCropper").getContext("2d");
var draw = false;
var resizeX = false;
var resizeY = false;
var moveCoords = [null, null, null, null];
var sliding = false;
var colours = colourNames;

ct.fillStyle = document.getElementById("canvasBrushColour").value;
document.getElementById(
  "canvasBrushColour"
).style.color = ct.fillStyle = document.getElementById(
  "canvasBrushColour"
).value;

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
  return selectedColour.ColorName + " " + selectedColour.Div;
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
    console.log(getColour(x, y));

    if (
      draw == true &&
      document.getElementById("showDrawingTools").checked == true
    ) {
      var ib = event.pageX - document.getElementById("imageCropper").offsetLeft;
      var bo = event.pageY - document.getElementById("imageCropper").offsetTop;
      var per = document.getElementById("canvasBrush").value;
      ct.fillRect(ib + 12, bo, per, per);
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
    document.getElementById(
      "canvasBrushColour"
    ).style.color = ct.fillStyle = document.getElementById(
      "canvasBrushColour"
    ).value;
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
