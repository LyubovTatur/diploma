import React from 'react';
// import {styles} from './canvas_component.module.css'
import {styles} from  './canvas_component.module.css'

// window.location = canvas.toDataURL();

const CanvasComponent = () => {
    let canvas;
    let context;
    let isDrawing = false
    function heheAfterLoad (){
        canvas = document.getElementById("drawingCanvas");
        context = canvas.getContext("2d");


        // Подключаем требуемые для рисования события
        canvas.onmousedown = startDrawing;
        canvas.onmouseup = stopDrawing;
        // canvas.onmouseout = stopDrawing;
        canvas.onmousemove = draw;
        console.log('mlem');
    }


    function changeColor(color, imgElement)
    {
        // 	Меняем текущий цвет рисования
        context.strokeStyle = color;

        // Меняем стиль элемента <img>, по которому щелкнули
        imgElement.className = "Selected";

        // Возвращаем ранее выбранный элемент <img> в нормальное состояние
        if (previousColorElement != null)
            previousColorElement.className = "";

        previousColorElement = imgElement;
    }

    var previousColorElement;
    function clearCanvas() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    var previousThicknessElement;

    function changeThickness (thickness, imgElement)
    {
        // Изменяем текущую толщину линии
        context.lineWidth = thickness;

        // Меняем стиль элемента <img>, по которому щелкнули
        imgElement.className = "Selected";

        // Возвращаем ранее выбранный элемент <img> в нормальное состояние
        if (previousThicknessElement != null)
            previousThicknessElement.className = "";

        previousThicknessElement = imgElement;
    }

    function startDrawing(e) {
        // Начинаем рисовать
        isDrawing = true;

        // Создаем новый путь (с текущим цветом и толщиной линии)
        context.beginPath();
        console.log('start drawing')
        // Нажатием левой кнопки мыши помещаем "кисть" на холст
        context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
    }
    function draw(e) {
        if (isDrawing === true)
        {
            // Определяем текущие координаты указателя мыши
            var x = e.pageX - canvas.offsetLeft;
            var y = e.pageY - canvas.offsetTop;

            // Рисуем линию до новой координаты
            context.lineTo(x, y);
            context.stroke();
        }
    }

    function saveCanvas() {
        // Находим элемент <img>
        var imageCopy = document.getElementById("savedImageCopy");

        // Отображаем данные холста в элементе <img>
        imageCopy.src = canvas.toDataURL();

        // Показываем элемент <div>, делая изображение видимым
        // делая изображение видимым
        var imageContainer = document.getElementById("savedCopyContainer");
        imageContainer.style.display = "block";
    }
    function stopDrawing() {
        isDrawing = false;
        console.log('stop drawing')

    }


    return (
        <div>

            <div className="Toolbar">
                <button onClick={() => heheAfterLoad()}>startttttt</button>
                {/*<img id="redPen" src="https://professorweb.ru/downloads/pen_red.gif" alt="Красная кисть"*/}
                {/*     onClick={()=>changeColor('rgb(212,21,29)', this)}/>*/}
                {/*<img id="greenPen" src="https://professorweb.ru/downloads/pen_green.gif" alt="Зеленая кисть"*/}
                {/*     onClick={()=>changeColor('rgb(131,190,61)', this)}/>*/}
                {/*<img id="bluePen" src="https://professorweb.ru/downloads/pen_blue.gif" alt="Синяя кисть"*/}
                {/*     onClick={()=>changeColor('rgb(0,86,166)', this)}/>*/}
            </div>
            <div className="Toolbar">
                <input type="range"  max='40' min='1' onChange={(e)=>changeThickness(e.target.value, this)} />

                <img src="https://professorweb.ru/downloads/pen_thin.gif" alt="Тонкая кисть"
                     onClick={()=>changeThickness(1, this)}/>
                <img src="https://professorweb.ru/downloads/pen_medium.gif" alt="Нормальная кисть"
                     onClick={()=>changeThickness(5, this)}/>
                <img src="https://professorweb.ru/downloads/pen_thick.gif" alt="Толстая кисть"
                     onClick={()=>changeThickness(10, this)}/>
            </div>
            <div className="CanvasContainer">
                <canvas id="drawingCanvas" width="700" height="300"/>
            </div>
            <div className="Toolbar">
                - Операции-<br/>
                <button onClick={()=>saveCanvas()}>Сохранить содержимое Canvas</button>
                <button onClick={()=>clearCanvas()}>Очистить Canvas</button>
                <div id="savedCopyContainer">
                    <img id="savedImageCopy"/><br/>
                        Щелкните правой кнопкой мыши для сохранения ...
                </div>
            </div>
        </div>

);
};

export default CanvasComponent;