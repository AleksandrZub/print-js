const canvas=document.getElementById('jsCanvas');
const ctx= canvas.getContext('2d');
const colors= document.getElementsByClassName('jsColors');
const cursor_circle= document.getElementById('cursor-circle');
const range=document.getElementById('jsRange');
const mode= document.getElementById('jsMode');
const savebtn= document.getElementById('jsSave');
const initial_color= 'white';
const canvas_size_y= 700;
let points = []; // array of points in action {type: "moveTo"/"lineTo", x: number, y: number}
let paths = []; // array of actions
let currentPathIndex = -1;
canvas_size_x=1300;
canvas.height= canvas_size_y;
canvas.width=canvas_size_x;

ctx.fillStyle='white';
ctx.fillRect(0,0,canvas_size_x,canvas_size_y)
ctx.lineWidth=2.5;
cursor_circle.style.width=2.5+"px";
cursor_circle.style.height=2.5+"px";
ctx.strokeStyle='white';
ctx.fillStyle=initial_color;

let painting=false;
let filling= false;

function stopPainting() {
    if (points.length > 0) {
        currentPathIndex += 1;
        paths.splice(currentPathIndex, paths.length + 1 - currentPathIndex);
        paths.push(points);
    }
    points = [];
    painting=false;
}

function startPainting() {
    painting=true;
}
function erasing() {
    ctx.strokeStyle='white';
    painting=true;
}
function repaintToCurrentIndex() {
    ctx.stroke();
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for (let ind = 0; ind <= currentPathIndex; ind++){
        const path = paths[ind];
        if (path.length > 0) {
            ctx.beginPath();
            ctx.moveTo(path[0].x,path[0].y);
            for(let i = 1; i < path.length; i++){
                ctx.strokeStyle = path[i].strokeStyle;
                ctx.lineTo(path[i].x,path[i].y); 
            }
            ctx.stroke();
        }
    }
}
function onMouseMove(event) {
    x=event.offsetX;
    y=event.offsetY;
    cursor_circle.style.top= (event.pageY - ctx.lineWidth / 2) + "px";
    cursor_circle.style.left= (event.pageX - ctx.lineWidth / 2) + "px";
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        points.push({x: x, y: y, strokeStyle: ctx.strokeStyle});
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}
function onMouseDown(event) {
    painting=true;
}

function changeColor(event) {
    const color= event.target.style.backgroundColor;
    ctx.strokeStyle=color;
    ctx.fillStyle=color;
}
function handleRangeChange(event) {
    const rangeValue=event.target.value;
    ctx.lineWidth=rangeValue;
    cursor_circle.style.width=rangeValue+"px";
    cursor_circle.style.height=rangeValue+"px";
}
function handleModeClick() {
if (filling ===true) {
    filling=false;
    mode.innerText='Заливка';
} else {
    filling=true;
    mode.innerText='Рисование';
}
}
function handleCanvasClick() {
    if (filling) {
        ctx.fillRect(0,0,canvas_size_x,canvas_size_y);
    }
}
function handleSaveClick() {
    const image=canvas.toDataURL('image/jpeg');
    const link=document.createElement('a');
    link.href=image;
    link.download="PaintJS(Export).jpg";
    link.click();
}


if (canvas) {
    canvas.addEventListener('mousemove',onMouseMove);
    canvas.addEventListener('mousedown',onMouseDown);
    canvas.addEventListener('mouseup',stopPainting);
    canvas.addEventListener('mouseleave',stopPainting);
    canvas.addEventListener('click',handleCanvasClick);
}
document.addEventListener("keyup", function(event) {
    if (event.ctrlKey && event.shiftKey) {
        // Ctrl + shift + key press
        switch (event.code) {
            case "KeyZ":
                if (currentPathIndex < paths.length - 1) {
                    currentPathIndex += 1;
                    repaintToCurrentIndex();
                }
                ctx.strokeStyle='#2c2c2c';
                break;
        }    
    }
    else if (event.ctrlKey) {
        // Ctrl + key press
        switch (event.code) {
            case "KeyZ":
                if (currentPathIndex >= 0) {
                    currentPathIndex -= 1;
                    repaintToCurrentIndex();
                }
                ctx.strokeStyle='#2c2c2c';
                break;
        }    
    } else {
        switch (event.code) {
            case 'ArrowLeft':
                if (currentPathIndex >= 0) {
                    currentPathIndex -= 1;
                    repaintToCurrentIndex();
                }
                ctx.strokeStyle='#2c2c2c';
                break;
            case 'ArrowRight':
                if (currentPathIndex < paths.length - 1) {
                    currentPathIndex += 1;
                    repaintToCurrentIndex();
                }
                ctx.strokeStyle='#2c2c2c';
                break;
            case 'KeyR':
                ctx.strokeStyle='#2c2c2c';
                stopPainting();
                break;
            case 'KeyW':
                ctx.strokeStyle='#2c2c2c';
                stopPainting();
                break;
            case 'KeyG':
                ctx.strokeStyle='#2c2c2c';
                stopPainting();
                break;
            case 'KeyY':
                ctx.strokeStyle='#2c2c2c';
                stopPainting();
                break;
            case 'KeyB':
                ctx.strokeStyle='#2c2c2c';
                stopPainting();
                break;
            case 'KeyO':
                ctx.strokeStyle='#2c2c2c';
                stopPainting();
                break;
            case 'ControlRight':
                ctx.strokeStyle='#2c2c2c';
                stopPainting();
                break;
            case 'KeyP':
                ctx.strokeStyle='#2c2c2c';
                stopPainting();
                break;
            case 'ShiftLeft':
                ctx.strokeStyle='#2c2c2c';
                stopPainting();
                break;
            case 'ControlLeft':
                ctx.strokeStyle='#2c2c2c';
                stopPainting();
                break;
            default:
                break;
        }
    }
});

document.addEventListener("keypress", function(event) {
        // Key press
        switch (event.code) {
            case "KeyR":
                ctx.strokeStyle='red';
                startPainting();
                break;
            case "KeyW":
                ctx.strokeStyle='white';
                startPainting();
                break;
            case "KeyG":
                ctx.strokeStyle='green';
                startPainting();
                break;
            case "KeyY":
                ctx.strokeStyle='yellow';
                startPainting();
                break;
            case "KeyB":
                ctx.strokeStyle='blue';
                startPainting();
                break;
            case "KeyO":
                ctx.strokeStyle='orange';
                startPainting();
                break;
            case 'KeyP':
                ctx.strokeStyle='rgb(95,26,234)';
                painting=true;
                break;
            default:
                break;
        }
    }
)

document.addEventListener("keydown", function(event) {
    switch (event.code) {
        case 'ControlLeft':
            ctx.strokeStyle='#2c2c2c';
            painting=true;
            break;

        case 'ControlRight':
            ctx.strokeStyle='#2c2c2c';
            painting=true;
            break;

        case 'ShiftLeft':
            ctx.strokeStyle=ctx.fillStyle;
            painting=true;
            break;
    }
})

Array.from(colors).forEach(color => color.addEventListener('click', changeColor));

if (range) {
    range.addEventListener('input',handleRangeChange)
}
if (mode) {
    mode.addEventListener('click', handleModeClick)
}
if (savebtn) {
    savebtn.addEventListener('click',handleSaveClick);
}