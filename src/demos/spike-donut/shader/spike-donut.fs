precision mediump float;

uniform float time;

const float width  = 640.0;
const float height = 360.0;

#define iResolution vec2(width, height)

const float delta  = 0.05;
const float PI =  3.14159265;

float sphere(vec3 position, float r) {
        return length(position) - r ;
}


vec3 rotateX(vec3 pos, float alpha) {
	mat4 trans= mat4(1.0, 0.0, 0.0, 0.0,
				0.0, cos(alpha), -sin(alpha), 0.0,
				0.0, sin(alpha), cos(alpha), 0.0,
				0.0, 0.0, 0.0, 1.0);


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


float cube(vec3 pos,float size){
    return max(max(abs(pos.x)-size,abs(pos.y)-size),abs(pos.z)-size) ;//+ 0.17*sin(pos.z*2.2 + mod(time*0.02, 2.0*PI)-PI);
}

float sdTorus( vec3 p, vec2 t )
{
  vec2 q = vec2(length(p.xz)-t.x,p.y);
  return length(q)-t.y;
}

float udRoundBox( vec3 p, vec3 b, float r )
{
  return length(max(abs(p)-b,0.0))-r;
}

float sdSphere( vec3 p, float s )
{
  return length(p)-s;
}




float opS( float d1, float d2 )
{
    return max(-d1,d2);
}

float opRep( vec3 p, vec3 c )
{
    vec3 q = mod(p,c)-0.5*c;
    return sdSphere( q ,0.5);
}

	vec3 opRep2( vec3 p, vec3 c )
{
   return mod(p,c)-0.5*c;

}

float wonderCube(vec3 position) {

vec3 disp = vec3(0.0,0.0,6.0);

vec3 newPos = rotateY(rotateX(translate(position.xyz,disp),1.3*time),1.0*time);
return opS( opRep(newPos, vec3(1.3,1.3,1.3)),udRoundBox(newPos, vec3(8.2,6.2,9.2), 0.5))
;
}

float opCheapBend( vec3 p )
{



    float c = cos(0.9*(1.0+sin(time*0.2))+p.y*0.18);
    float s = sin(0.9*(1.0+sin(time*0.2))+p.y*0.18);
    mat2  m = mat2(c,-s,s,c);
    vec3  q = vec3(m*p.xy,p.z);
	float alpha =//(1.0+sin(time*1.0))/4.0;
0.38;//(1.0+sin(time*1.0))/4.0;

vec3 disp = vec3(0.0,0.0,6.0);

vec3 newPos = rotateY(rotateX(translate(q.xyz,disp),1.3*time),1.0*time);
   // newPos = opRep2(newPos, vec3(8.0));
    return wonderCube(q)*(1.0-alpha) + sdTorus(newPos, vec2(3.8,1.0))*alpha;
}

float opU( float d1, float d2 )
{
    return min(d1,d2);
}

float opTwist( vec3 p )
{
    float c = cos(0.90*p.y);
    float s = sin(0.90*p.y);
    mat2  m = mat2(c,-s,s,c);
    vec3  q = vec3(m*p.xz,p.y);
    return wonderCube(q);
}

float opDisplace( vec3 p )
{
    float d1 = sdTorus(p, vec2(4.0,2.0));
    float d2 = (sin(p.x*3.0) + sin(p.y*5.0)) *0.2;
    return d1+d2;
}

int colorIndex = 0;

#define pi 3.14159265



float function(vec3 position) {

	float a =opCheapBend(position);
	float b = udRoundBox(rotateY(rotateX(position+vec3(0.0,0.0,-6.0),time*3.0),time*3.0), vec3(0.7,0.7,0.7), 0.4);// - 0.03* perlin(position*3.8);

	float c =  udRoundBox(position+vec3(0,0,-16), vec3(25.6,15.6,0.6), 0.2 );

	colorIndex = 0;
	if(b < a) colorIndex = 1;
	float dist =opU(a,b);
	if(c < dist) colorIndex =2;

	return opU(dist,c) ;



}





vec3 ray(vec3 start, vec3 direction, float t) {
	return start + t * direction;
}

vec3 gradient(vec3 position) {

	return vec3(function(position + vec3(delta, 0.0, 0.0)) - function(position - vec3(delta, 0.0, 0.0)),
	function(position + vec3(0.0,delta, 0.0)) - function(position - vec3(0.0, delta, 0.0)),
	function(position + vec3(0.0, 0.0, delta)) - function(position - vec3(0.0, 0.0, delta)));


}

vec4 plasma(vec2 fragCoord) {
 vec2 p = -1.0 +2.0 * fragCoord.xy / iResolution.xy;
float cossin1 = ((cos(p.x * 2.50 +time*2.5) +sin(p.y*3.70-time*4.5) +sin(time*2.5))+3.0)/6.0;
float cossin2 = (cos(p.y * 2.30 +time*3.5) +sin(p.x*2.90-time*1.5) +cos(time)+3.0)/6.0;
float cossin3 = (cos(p.x * 3.10 +time*5.5) +0.5*sin(p.y*2.30-time) +cos(time*3.5)+3.0)/6.0;
return vec4(vec3(cossin1, cossin2, cossin3)*0.6, 1.0);

}

const vec3 lightPosition = vec3(3.5,3.5,-1.0);

float aoScale = 0.3; // smaller aoScale = more AO
float computeAO(vec3 position, vec3 normal) {

float sum = 0.0;
float stepSize = 0.0019;
float t = stepSize;

	for(int i=0; i < 8; i++) {
		position = ray(position, normal, t);
		sum += max(function(position),0.0);
		t+=stepSize;
	}
	return 1.0-clamp(1.0 -(sum * aoScale),0.0, 1.0);
}

float computeShadow(vec3 pos) {

	float t = 0.0;
	float distance;
vec3 position;
float res = 1.0;
float k = 90.0;
	for(int i=0; i < 64; i++) {
		position = ray(pos,normalize(lightPosition-pos) , t);
		distance = function(position);

		if(abs(distance) < 0.001) {
			break;

		}
		res = min(res, k*distance/t);
		t = t + distance ;
	}
	if(length(pos - lightPosition) < t) return res;
	return 0.0;
}


vec4 trace(vec2 fragCoord)  {

	vec3 cameraPosition = vec3(0.0, 0.0, -1.4);

	float aspect = width /height;
	vec3 nearPlanePosition = vec3((fragCoord.x - 0.5 * width) / width * 2.0  * aspect,
							      (fragCoord.y - 0.5 * height) / height * 2.0,
							       0.0);

	vec3 viewDirection = normalize(nearPlanePosition - cameraPosition);

	float t = 0.0;
	float distance;
	vec3 position;
	vec4 color = vec4(vec3(1.0),1.0);
	vec3 normal;
	vec3 up = normalize(vec3(-0.0, 1.0,0.0));
	int k=0;
	for(int i=0; i <64; i++) {
		position = ray(cameraPosition,	viewDirection, t);
		distance = function(position);



		if(distance < 0.004) {
			break;
		}

			t = t + distance;
        k=i;
	}


			normal = normalize(gradient(position));

			vec4 color1 = vec4(0.5, 0.9, 0.5,1.0);
			vec4 color2 = vec4(1.0, 0.1, 0.1,1.0);

			vec4 color3 = mix(color2, color1, (1.0+dot(up, normal))/2.0)
                 +vec4(vec3(0.3, 0.4,0.6),1.0);

			if(colorIndex == 1) color3 += vec4(float(0xFf)/255.0,float(0x3F)/255.0,float(0x3F)/255.0,1.0);
			if(colorIndex == 2) color3 = vec4(0.3, 0.3, 0.3,1.0);//plasma(fragCoord);
			color = color3*0.7 * max(dot(normal, normalize(lightPosition-position)),0.0) ;//+vec4(0.1,0.1,0.1,1.0);

			//specular
			vec3 E = normalize(cameraPosition - position);
			vec3 R = reflect(-normalize(lightPosition-position), normal);


			float specular = pow( max(dot(R, E), 0.0),
		                 24.0);

			float ao = computeAO(position, normal);
			//color = vec4(color.xyz * ao, 1.0);


			float shad = computeShadow(position+normalize(lightPosition-position)*0.1);

			  color = vec4(color.xyz *shad+ color3.xyz*0.4*ao, 1.0);


			color +=vec4(0.6, 0.6,0.6,0.0)*specular *shad;

	// interation glow
	color += vec4(vec3(1.0, 0.5, 0.1) * pow(float(k)/64.0*1.7, 2.0) *0.4,1.0);

	return color;
}

void main() {

    // 4x FSAA
    vec4 color = vec4(0.0);

    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 4; j++) {
            vec2 offset = vec2(i, j) / 4.0 - 0.5;
            color += trace(gl_FragCoord.xy + offset);
    	}
    }

    color /= 16.0;

    // vignetting
	vec2 q = gl_FragCoord.xy / vec2(width, height);
    color *= 0.3 + 0.7 * pow(56.0 * q.x * q.y *(1.0 - q.x) * (1.0 - q.y), 0.25);

	gl_FragColor = color;
}
