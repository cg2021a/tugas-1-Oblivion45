function main() {
    var canvas = document.getElementById('myCanvas');
    var gl = canvas.getContext('webgl');

    const object_aquarium = {
        line_top_color: [0.945, 0.945, 0.945],
        line_top_a: [-0.85, 1],
        line_top_b: [-1, 0.8],
        line_top_c: [0, 0.8],
        line_top_d: [-0.15, 1],
        line_top_e: [-0.3, 1],
        line_top_f: [-0.25, 0.9],
        line_top_g: [-0.75, 0.9],
        line_top_h: [-0.7, 1],

        line_top_mid_color: [0, 0, 1],
        line_top_mid_a: [-1, 0.8],
        line_top_mid_b: [0, 0.8],
        line_top_mid_c: [0, 0.7],
        line_top_mid_d: [-1, 0.7],

        line_mid_color: [0.945, 0.945, 0.945],
        line_mid_a :[-0.99,0.7],
        line_mid_b :[-0.01,0.7],
        line_mid_c :[-0.05,-0.5],
        line_mid_d :[-0.95,-0.5],

        line_bot_color: [0, 0, 1],
        line_bot_a:[-0.95,-0.5],
        line_bot_b:[-0.05,-0.5],
        line_bot_c:[-0.053,-0.55],
        line_bot_d:[-0.947,-0.55],
    };


    const object_aquarium_2 = {
        line_top_color: [0.945, 0.945, 0.945],
        line_top_a: [0.15, 1],
        line_top_b: [0, 0.6],
        line_top_c: [1, 0.6],
        line_top_d: [0.85, 1],
        line_top_e: [0.2, 0.9],
        line_top_f: [0.125, 0.7],
        line_top_g: [0.875, 0.7],
        line_top_h: [0.8, 0.9],

        line_mid_color: [0,0,1],
        line_mid_a:[0, 0.6],
        line_mid_b:[1, 0.6],
        line_mid_c:[0.95, -0.2],
        line_mid_d:[0.05, -0.2],

        line_bot_color: [0.945, 0.945, 0.945],
        line_bot_a:[0.05, -0.2],
        line_bot_b:[0.95, -0.2],
        line_bot_c:[0.945,-0.22],
        line_bot_d:[0.055,-0.22],
    };

    const vertices = [
        ...object_aquarium.line_top_a, ...object_aquarium.line_top_color,
        ...object_aquarium.line_top_h, ...object_aquarium.line_top_color,
        ...object_aquarium.line_top_g, ...object_aquarium.line_top_color,
        ...object_aquarium.line_top_a, ...object_aquarium.line_top_color,
        ...object_aquarium.line_top_b, ...object_aquarium.line_top_color,
        ...object_aquarium.line_top_g, ...object_aquarium.line_top_color, // 30

        ...object_aquarium.line_top_b, ...object_aquarium.line_top_color,
        ...object_aquarium.line_top_g, ...object_aquarium.line_top_color,
        ...object_aquarium.line_top_f, ...object_aquarium.line_top_color,
        ...object_aquarium.line_top_b, ...object_aquarium.line_top_color,
        ...object_aquarium.line_top_c, ...object_aquarium.line_top_color,
        ...object_aquarium.line_top_f, ...object_aquarium.line_top_color, // 60

        ...object_aquarium.line_top_d, ...object_aquarium.line_top_color,
        ...object_aquarium.line_top_e, ...object_aquarium.line_top_color,
        ...object_aquarium.line_top_f, ...object_aquarium.line_top_color,
        ...object_aquarium.line_top_d, ...object_aquarium.line_top_color,
        ...object_aquarium.line_top_c, ...object_aquarium.line_top_color,
        ...object_aquarium.line_top_f, ...object_aquarium.line_top_color, // 90

        ...object_aquarium.line_top_mid_a, ...object_aquarium.line_top_mid_color,
        ...object_aquarium.line_top_mid_b, ...object_aquarium.line_top_mid_color,
        ...object_aquarium.line_top_mid_c, ...object_aquarium.line_top_mid_color,
        ...object_aquarium.line_top_mid_a, ...object_aquarium.line_top_mid_color,
        ...object_aquarium.line_top_mid_d, ...object_aquarium.line_top_mid_color,
        ...object_aquarium.line_top_mid_c, ...object_aquarium.line_top_mid_color, // 120

        ...object_aquarium.line_mid_a, ...object_aquarium.line_mid_color,
        ...object_aquarium.line_mid_b, ...object_aquarium.line_mid_color,
        ...object_aquarium.line_mid_c, ...object_aquarium.line_mid_color,
        ...object_aquarium.line_mid_a, ...object_aquarium.line_mid_color,
        ...object_aquarium.line_mid_d, ...object_aquarium.line_mid_color,
        ...object_aquarium.line_mid_c, ...object_aquarium.line_mid_color, // 150

        ...object_aquarium.line_bot_a, ...object_aquarium.line_bot_color,
        ...object_aquarium.line_bot_b, ...object_aquarium.line_bot_color,
        ...object_aquarium.line_bot_c, ...object_aquarium.line_bot_color,
        ...object_aquarium.line_bot_a, ...object_aquarium.line_bot_color,
        ...object_aquarium.line_bot_d, ...object_aquarium.line_bot_color,
        ...object_aquarium.line_bot_c, ...object_aquarium.line_bot_color, //180

        // gambar kanan
        ...object_aquarium_2.line_top_a, ...object_aquarium_2.line_top_color,
        ...object_aquarium_2.line_top_b, ...object_aquarium_2.line_top_color,
        ...object_aquarium_2.line_top_f, ...object_aquarium_2.line_top_color,
        ...object_aquarium_2.line_top_a, ...object_aquarium_2.line_top_color,
        ...object_aquarium_2.line_top_e, ...object_aquarium_2.line_top_color,
        ...object_aquarium_2.line_top_f, ...object_aquarium_2.line_top_color, // 210

        ...object_aquarium_2.line_top_a, ...object_aquarium_2.line_top_color,
        ...object_aquarium_2.line_top_d, ...object_aquarium_2.line_top_color,
        ...object_aquarium_2.line_top_h, ...object_aquarium_2.line_top_color,
        ...object_aquarium_2.line_top_a, ...object_aquarium_2.line_top_color,
        ...object_aquarium_2.line_top_e, ...object_aquarium_2.line_top_color,
        ...object_aquarium_2.line_top_h, ...object_aquarium_2.line_top_color, // 240

        ...object_aquarium_2.line_top_d, ...object_aquarium_2.line_top_color,
        ...object_aquarium_2.line_top_h, ...object_aquarium_2.line_top_color,
        ...object_aquarium_2.line_top_g, ...object_aquarium_2.line_top_color,
        ...object_aquarium_2.line_top_d, ...object_aquarium_2.line_top_color,
        ...object_aquarium_2.line_top_c, ...object_aquarium_2.line_top_color,
        ...object_aquarium_2.line_top_g, ...object_aquarium_2.line_top_color, // 270

        ...object_aquarium_2.line_top_c, ...object_aquarium_2.line_top_color,
        ...object_aquarium_2.line_top_g, ...object_aquarium_2.line_top_color,
        ...object_aquarium_2.line_top_f, ...object_aquarium_2.line_top_color,
        ...object_aquarium_2.line_top_c, ...object_aquarium_2.line_top_color,
        ...object_aquarium_2.line_top_b, ...object_aquarium_2.line_top_color,
        ...object_aquarium_2.line_top_f, ...object_aquarium_2.line_top_color, // 300

        ...object_aquarium_2.line_mid_a, ...object_aquarium_2.line_mid_color,
        ...object_aquarium_2.line_mid_b, ...object_aquarium_2.line_mid_color,
        ...object_aquarium_2.line_mid_c, ...object_aquarium_2.line_mid_color,
        ...object_aquarium_2.line_mid_a, ...object_aquarium_2.line_mid_color,
        ...object_aquarium_2.line_mid_d, ...object_aquarium_2.line_mid_color,
        ...object_aquarium_2.line_mid_c, ...object_aquarium_2.line_mid_color, // 330
        
        ...object_aquarium_2.line_bot_a, ...object_aquarium_2.line_bot_color,
        ...object_aquarium_2.line_bot_b, ...object_aquarium_2.line_bot_color,
        ...object_aquarium_2.line_bot_c, ...object_aquarium_2.line_bot_color,
        ...object_aquarium_2.line_bot_a, ...object_aquarium_2.line_bot_color,
        ...object_aquarium_2.line_bot_d, ...object_aquarium_2.line_bot_color,
        ...object_aquarium_2.line_bot_c, ...object_aquarium_2.line_bot_color, // 360

    ];

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);


    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform float uChange;
        void main() {
            gl_Position = vec4(aPosition.x, aPosition.y, 1.0, 1.0);
            vColor = aColor;
        }
    `;

    var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;
        void main() {
            gl_FragColor = vec4(vColor, 1.0);
        }
    `;

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);


    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);


    var shaderProgram = gl.createProgram();


    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);


    gl.linkProgram(shaderProgram);


    gl.useProgram(shaderProgram);


    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition,2,gl.FLOAT,false,5 * Float32Array.BYTES_PER_ELEMENT,0);
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(aColor,3,gl.FLOAT,false,5 * Float32Array.BYTES_PER_ELEMENT,2 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aColor);

    var freeze = false;
    // Interactive graphics with mouse
    function onMouseClick(event) {
        freeze = !freeze;
    }
    document.addEventListener("click", onMouseClick);
    // Interactive graphics with keyboard
    function onKeydown(event) {
        if (event.keyCode == 32) freeze = true;
    }

    function onKeyup(event) {
        if (event.keyCode == 32) freeze = false;
    }
    document.addEventListener("keydown", onKeydown);
    document.addEventListener("keyup", onKeyup);

    var speed = 0.0068;
    var change = 0;
    var uChange = gl.getUniformLocation(shaderProgram, "uChange");

    function moveVertices() {

        if (vertices[181] > 1.0 || vertices[331] < -1.0) {
            speed = speed * -1;
        }

        for (let i = 181; i < vertices.length; i += 5) {
            vertices[i] = vertices[i] + speed;
        }
    }


    function render() {
        moveVertices();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        change = change + speed;
        gl.uniform1f(uChange, change);

        gl.clearColor(0.5,0.798,0.745, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        var primitive = gl.TRIANGLES;
        var offset = 0;
        var nVertex = 120;
        gl.drawArrays(primitive, offset, nVertex);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}