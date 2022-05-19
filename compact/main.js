
lineSize =  5;
line_white = 30;
MAX = 20;






const config = {
     //���� �������� �������� + -
    'color1': 'red',
	'color3': 'green',
	'color4': 'white',
 	'color2': 'blue',
	'color_yellow': 'yellow',
	'color_orange': 'orange',
	'color_purple': 'purple',
	'color_black': 'black'
}

window.onload = () => {

    // �������������� html ��������
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const indicator = document.getElementById('indicator');

    // ������������� ������ ������
    canvas.setAttribute('width', window.innerWidth);
    canvas.setAttribute('height', window.innerHeight);

	// �������������� ����� �����
	
 
    
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';	









    var isRec = false,
        newDraw = false,
        posX = [],
        posY = []

    // ��� ������� �� ����
        // ��� ������� �� ����
    /*document.addEventListener("keydown", (e) => {
        if(e.code == "KeyR"){ctx.strokeStyle = config.color1;
    ctx.fillStyle = config.color1; if (isRec) return;
        clearCanvas();
        canvas.onmousemove = (e) => recordMousePos(e);}
	else{if(e.code == "KeyB"){    ctx.strokeStyle = config.color2;
    ctx.fillStyle = config.color2; if (isRec) return;
        clearCanvas();
        canvas.onmousemove = (e) => recordMousePos(e);}


    });
*/	document.addEventListener("keydown", (e) => {
		if(e.code == "KeyR")
		{
			changeR();
			if (isRec) return;
        clearCanvas();
        canvas.onmousemove = (e) => recordMousePos(e);     
}
		if(e.code == "KeyB")
		{
			changeB();
			if (isRec) return;
        clearCanvas();
        canvas.onmousemove = (e) => recordMousePos(e);     
}

		if(e.code == "KeyO")
		{
			changeO();
			if (isRec) return;
        clearCanvas();
        canvas.onmousemove = (e) => recordMousePos(e);     
}



		if(e.code == "KeyY")
		{
			changeY();
			if (isRec) return;
        clearCanvas();
        canvas.onmousemove = (e) => recordMousePos(e);     
}


		if(e.code == "KeyP")
		{
			changeP();
			if (isRec) return;
        clearCanvas();
        canvas.onmousemove = (e) => recordMousePos(e);     
}




		if(e.code == "KeyG")
		{
			changeG();
			if (isRec) return;
        clearCanvas();
        canvas.onmousemove = (e) => recordMousePos(e);     
}

		if(e.code == "ControlLeft" || e.code == "ControlRight")
		{
			changeBlack();
			if (isRec) return;
        clearCanvas();
        canvas.onmousemove = (e) => recordMousePos(e);     
}



		if(e.code == "ShiftLeft")
		{
			changeA();
			if (isRec) return;
        clearCanvas();
        canvas.onmousemove = (e) => recordMousePos(e);     
}

		if(e.code == "Equal") 
{
	if(lineSize != MAX)
		lineSize = lineSize + 1;
	console.log(lineSize);
	ctx.beginPath();
ctx.arc(40, 30, lineSize, 0, 2 * Math.PI); // lineSize - �������!

ctx.strokeStyle = 'black'; // ����-����� ����
ctx.lineWidth = 1; // ������� ����� � 1px

ctx.fill(); // ������ ����
ctx.closePath();
ctx.stroke();
}

		if(e.code == "Minus") 
{
	if(lineSize != 1)
	lineSize = lineSize - 1;
	console.log(lineSize);
ctx.beginPath();
ctx.arc(40, 30, lineSize, 0, 2 * Math.PI); // lineSize - �������!

ctx.strokeStyle = 'black'; // ����-����� ����
ctx.lineWidth = 1; // ������� ����� � 1px

ctx.fill(); // ������ ����
ctx.closePath();
ctx.stroke();
}
	   
}

);


    // ����� ���� ��������
    document.addEventListener("keyup", () => stopDrawing());

    // ����� ���� ��������
   // document.addEventListener("keyup", () => stopDrawing());


	//document.addEventListener("keydown", (e) => {
	//	if(e.code == "KeyR")
	//	{
	//		changeR();}
    //    })
		

	//canvas.addEventListener("KeyB", () => changeB());


    // ��� ������� �� ������
    document.addEventListener("keydown", (e) => {
        if(e.code == "Space") {
            if(!isRec) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.beginPath();
                isRec = true;
                switchIndicator(false);
                autoDraw();
            }
        }
    })






   /* document.addEventListener("keydown", (e) => {
        if(e.code == "Space") {
            if(!isRec) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.beginPath();
                isRec = true;
                switchIndicator(false);
                autoDraw();
            }
        }
    })*/


    // ��������� ������� X � Y ���� � ������� arrayX � arrayY
    function recordMousePos(e) {
        posX.push(e.clientX);
        posY.push(e.clientY);
        drawLine(e.clientX, e.clientY);
    }

    // ��������� �����
    function drawLine(x, y) {
        ctx.lineTo(x, y);
        ctx.stroke();
    }

    // �������� �����
    function clearCanvas() {
        if(newDraw) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            newDraw = false;
            if(sketch != null) {
                sketch.style.visibility = 'visible';
            }
        }
        ctx.beginPath();
    }

	function changeR() {
		ctx.lineWidth = lineSize;
    ctx.strokeStyle = config.color1;
    ctx.fillStyle = config.color1;
    }

	function changeB() {
		ctx.lineWidth = lineSize;
    ctx.strokeStyle = config.color2;
    ctx.fillStyle = config.color2;
    }

	function changeO() {
		ctx.lineWidth = lineSize;
    ctx.strokeStyle = config.color_orange;
    ctx.fillStyle = config.color_orange;
    }


	function changeBlack() {
		ctx.lineWidth = lineSize;
    ctx.strokeStyle = config.color_black;
    ctx.fillStyle = config.color_black;
    }

	function changeY() {
		ctx.lineWidth = lineSize;
    ctx.strokeStyle = config.color_yellow;
    ctx.fillStyle = config.color_yellow;
    }



	function changeP() {
		ctx.lineWidth = lineSize;
    ctx.strokeStyle = config.color_purple;
    ctx.fillStyle = config.color_purple;
    }

	function changeG() {
		ctx.lineWidth = lineSize;
    ctx.strokeStyle = config.color3;
    ctx.fillStyle = config.color3;
    }

	function changeA() { //����� ���� - �������
	ctx.lineWidth = line_white;
    ctx.strokeStyle = config.color4;
    ctx.fillStyle = config.color4;
    }


    // ��������� ���������
    function stopDrawing() {
        canvas.onmousemove = null;
        posX.push(undefined);
        posY.push(undefined);
    }

    // �������� ���� ����������
    function switchIndicator(enable) {
        if(enable) {
            indicator.classList.add('isWrite');
        }else {
            indicator.classList.remove('isWrite');
        }
    }

 // �������������� ���������
    function autoDraw() {
        
        var x = posX;
        var y = posY;

        var drawing = setInterval(() => {
            var currentX = x.shift();
            var currentY = y.shift();
            if (x.length <= 0 && y.length <= 0) {
                clearInterval(drawing);
                switchIndicator(true);
                isRec = false;
                newDraw = true;
            }else {
                if(currentX == undefined && currentY == undefined) {
                    ctx.beginPath();
                }else {
                    drawLine(currentX, currentY);
                }
            }
        }, 1);

        
    }
    
}