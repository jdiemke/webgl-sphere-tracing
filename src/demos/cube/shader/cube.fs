precision mediump float;

uniform float time;

const float width  = 640.0;
const float height = 360.0;
const float delta  = 0.06;
const float PI =  3.14159265;

const vec3 lightDirection = vec3(-0.5, 0.5, -1.0);

vec3 rotateX(vec3 pos, float alpha) {
    mat4 trans = mat4(
        1.0,        0.0,         0.0, 0.0,
		0.0, cos(alpha), -sin(alpha), 0.0,
		0.0, sin(alpha),  cos(alpha), 0.0,
		0.0,        0.0,         0.0, 1.0
    );

	return vec3(trans * vec4(pos, 1.0));
}

vec3 rotateY(vec3 pos, float alpha) {
	mat4 trans2= mat4(cos(alpha), 0.0, sin(alpha), 0.0,
				0.0, 1.0, 0.0, 0.0,
				-sin(alpha), 0.0, cos(alpha), 0.0,
				0.0, 0.0, 0.0, 1.0);

	return vec3(trans2 * vec4(pos, 1.0));
}

vec3 translate(vec3 position, vec3 translation) {
	return position - translation;
}

float udRoundBox(vec3 p, vec3 b, float r) {
    return length(max(abs(p) - b, 0.0)) - r;
}

float sdSphere(vec3 p, float s) {
    return length(p) - s;
}

float opS(float d1, float d2) {
    return max(-d1, d2);
}

float opRep( vec3 p, vec3 c ) {
    vec3 q = mod(p, c) - 0.5 * c;
    return sdSphere(q, 0.5);
}

float wonderCube(vec3 position) {
    vec3 disp = vec3(0.0,0.0,8.9);
    vec3 newPos = rotateY(rotateX(translate(position.xyz,disp),2.3*time),1.8*time);
    return opS( opRep(newPos, vec3(1.2,1.2,1.2)),udRoundBox(newPos, vec3(2.2,2.2,2.2), 0.5));
}

float opCheapBend(vec3 p) {
    float c = cos(1.9*(1.0+sin(time*0.3))+p.y*0.19);
    float s = sin(1.9*(1.0+sin(time*0.3))+p.y*0.18);
    mat2  m = mat2(c,-s,s,c);
    vec3  q = vec3(m*p.xy,p.z);
    return wonderCube(q);
}

float opU(float d1, float d2) {
    return min(d1,d2);
}

float function(vec3 position) {
	return opCheapBend(position);
}

vec3 ray(vec3 start, vec3 direction, float t) {
	return start + t * direction;
}

vec3 gradient(vec3 position) {
	return vec3(
        function(position + vec3(delta, 0.0, 0.0)) - function(position - vec3(delta, 0.0, 0.0)),
	    function(position + vec3(0.0, delta, 0.0)) - function(position - vec3(0.0, delta, 0.0)),
	    function(position + vec3(0.0, 0.0, delta)) - function(position - vec3(0.0, 0.0, delta))
    );
}

// FIXME: format correctly
vec4 plasma2() {
    float color1, color2, color;
	color1 =(sin(dot(gl_FragCoord.xy,vec2(sin(time*3.0),cos(time*3.0)))*0.02+time*3.0)+1.0)/2.0;
	vec2 center = vec2(640.0/2.0, 360.0/2.0) + vec2(640.0/2.0*sin(-time*3.0),360.0/2.0*cos(-time*3.0));
	color2 =(cos(length(gl_FragCoord.xy - center)*0.03)+1.0)/2.0;
	color = (color1+ color2)/2.0;
	float red = (cos(PI*color/0.5+time*2.0)+1.0)/2.0;
	float green = (sin(PI*color/0.5+time*2.0)+1.0)/2.0;
	float blue = (sin(+time*2.0)+1.0)/2.0;
	return vec4(red,green,blue, 1.0);
}

// optimize: dont compute const stuff in main but precompute
void main() {
	vec3 cameraPosition = vec3(0.0, 0.0, -1.4);
	float aspect = 360.0 / 640.0;

	vec3 nearPlanePosition = vec3(
        (gl_FragCoord.x - 0.5 * width) / width * 2.0,
		(gl_FragCoord.y - 0.5 * height) / height * 2.0 * aspect,
		0.0
    );

	vec3 viewDirection = normalize(nearPlanePosition - cameraPosition);

    // optimization: start at near plane position
	float t = 0.0;
	float distance;
	vec3 position;
	vec4 color = plasma2();
	vec3 normal;
	vec3 up = normalize(vec3(0.0, 1.0, 0.0));

	for(int i = 0; i < 64; i++) {
		position = ray(cameraPosition,	viewDirection, t);
		distance = function(position);

		if(abs(distance) < 0.005) {
			normal = normalize(gradient(position));

			vec4 color1 = vec4(0.5, 0.9, 0.5, 1.0);
			vec4 color2 = vec4(1.0, 0.1, 0.1, 1.0);

            // mix color based on normal and up vector
			vec4 color3 = mix(color2, color1, (1.0 + dot(up, normal)) / 2.0);
			color = color3 * max(dot(normal, normalize(lightDirection)), 0.0) + vec4(0.1, 0.1, 0.1, 1.0);

			// specular color computation
			vec3 E = normalize(cameraPosition - position);
			vec3 R = reflect(normalize(-lightDirection), normal);
			float specular = pow(max(dot(R, E), 0.0), 8.0);

            // Add specular color to diffuse color
			color += vec4(0.6, 0.4, 0.4, 0.0) * specular;
			break;
		}

		t = t + distance;
	}

	gl_FragColor = color;
}
