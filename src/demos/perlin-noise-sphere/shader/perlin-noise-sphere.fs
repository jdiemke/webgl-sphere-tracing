  precision highp float;

   uniform float time;

const float width  = 640.0;
const float height = 360.0;
const float delta  = 0.02;
const float PI =  3.14159265;

float sphere(vec3 position, float r)
{
        return length(position) - r ;//+ 0.53*sin(position.y*1.1 + mod(time*0.2, 2.0*PI)-PI)
        //+ 0.17*sin(position.z*2.2 + mod(time*0.02, 2.0*PI)-PI);
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
/*
float function(vec3 position) {


	return  sdTorus(

			rotateX(
			rotateY(

			translate(position.xyz,vec3(0.0,0.0,20.0))
			,
			time* 2.3),position.x*0.8 + time* 0.1)

			, vec2(4.0,2.0));
}*/




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

vec3 opTwist( vec3 p )
{
    float c = cos(sin(time)*2.0*p.y);
    float s = sin(sin(time)*2.0*p.y);
    mat2  m = mat2(c,-s,s,c);
    vec3  q = vec3(m*p.xz,p.y);
    return q;
}

float opDisplace( vec3 p )
{
    float d1 = sdTorus(p, vec2(4.0,2.0));
    float d2 = (sin(p.x*3.0) + sin(p.y*5.0)) *0.2;
    return d1+d2;
}


float opBlend( vec3 position )
{
vec3 disp = vec3(0.0+4.0*sin(time*2.2+3.0),0.0+2.0*sin(time*1.3),8.0+0.3*sin(time*1.5));

vec3 newPos = rotateY(rotateX(translate(position.xyz,disp),2.3*time),1.8*time);
    float d1 = wonderCube(position);
	vec3 p = position;
    float d2 = sin(0.800*p.x)*sin(0.800*p.y)*sin(0.800*p.z) ;

    return d1+d2;
}

//////////

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0; }

float mod289(float x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0; }

vec4 permute(vec4 x) {
     return mod289(((x*34.0)+1.0)*x);
}

float permute(float x) {
     return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float taylorInvSqrt(float r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec4 grad4(float j, vec4 ip)
  {
  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
  vec4 p,s;

  p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
  s = vec4(lessThan(p, vec4(0.0)));
  p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;

  return p;
  }

// (sqrt(5) - 1)/4 = F4, used once below
#define F4 0.309016994374947451

float snoise(vec4 v)
  {
  const vec4 C = vec4( 0.138196601125011, // (5 - sqrt(5))/20 G4
                        0.276393202250021, // 2 * G4
                        0.414589803375032, // 3 * G4
                       -0.447213595499958); // -1 + 4 * G4

// First corner
  vec4 i = floor(v + dot(v, vec4(F4)) );
  vec4 x0 = v - i + dot(i, C.xxxx);

// Other corners

// Rank sorting originally contributed by Bill Licea-Kane, AMD (formerly ATI)
  vec4 i0;
  vec3 isX = step( x0.yzw, x0.xxx );
  vec3 isYZ = step( x0.zww, x0.yyz );
// i0.x = dot( isX, vec3( 1.0 ) );
  i0.x = isX.x + isX.y + isX.z;
  i0.yzw = 1.0 - isX;
// i0.y += dot( isYZ.xy, vec2( 1.0 ) );
  i0.y += isYZ.x + isYZ.y;
  i0.zw += 1.0 - isYZ.xy;
  i0.z += isYZ.z;
  i0.w += 1.0 - isYZ.z;

  // i0 now contains the unique values 0,1,2,3 in each channel
  vec4 i3 = clamp( i0, 0.0, 1.0 );
  vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );
  vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );

  // x0 = x0 - 0.0 + 0.0 * C.xxxx
  // x1 = x0 - i1 + 1.0 * C.xxxx
  // x2 = x0 - i2 + 2.0 * C.xxxx
  // x3 = x0 - i3 + 3.0 * C.xxxx
  // x4 = x0 - 1.0 + 4.0 * C.xxxx
  vec4 x1 = x0 - i1 + C.xxxx;
  vec4 x2 = x0 - i2 + C.yyyy;
  vec4 x3 = x0 - i3 + C.zzzz;
  vec4 x4 = x0 + C.wwww;

// Permutations
  i = mod289(i);
  float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);
  vec4 j1 = permute( permute( permute( permute (
             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))
           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))
           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))
           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));

// Gradients: 7x7x6 points over a cube, mapped onto a 4-cross polytope
// 7*7*6 = 294, which is close to the ring size 17*17 = 289.
  vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;

  vec4 p0 = grad4(j0, ip);
  vec4 p1 = grad4(j1.x, ip);
  vec4 p2 = grad4(j1.y, ip);
  vec4 p3 = grad4(j1.z, ip);
  vec4 p4 = grad4(j1.w, ip);

// Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
  p4 *= taylorInvSqrt(dot(p4,p4));

// Mix contributions from the five corners
  vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);
  vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4) ), 0.0);
  m0 = m0 * m0;
  m1 = m1 * m1;
  return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))
               + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;

  }
int colorIndex = 0;

float function(vec3 position) {

vec3 pos = rotateY(rotateX(position, time*2.0),time*2.4);

	return opU(sphere(pos, 0.8)-0.21*snoise(vec4(pos*2.+vec3(5), time*1.9)),
udRoundBox( position-vec3(0.0,0.0,4.0), vec3(8.0,4.0,1.0), 0.2 ))
;

//return opBlend(position);

}





vec3 ray(vec3 start, vec3 direction, float t) {
	return start + t * direction;
}

vec3 gradient(vec3 position) {

	return vec3(function(position + vec3(delta, 0.0, 0.0)) - function(position - vec3(delta, 0.0, 0.0)),
	function(position + vec3(0.0,delta, 0.0)) - function(position - vec3(0.0, delta, 0.0)),
	function(position + vec3(0.0, 0.0, delta)) - function(position - vec3(0.0, 0.0, delta)));


}

vec4 plasma() {
 vec2 p = -1.0 +2.0 * gl_FragCoord.xy / vec2(640, 360);
float cossin1 = ((cos(p.x * 2.50 +time*2.5) +sin(p.y*3.70-time*4.5) +sin(time*2.5))+3.0)/6.0;
float cossin2 = (cos(p.y * 2.30 +time*3.5) +sin(p.x*2.90-time*1.5) +cos(time)+3.0)/6.0;
float cossin3 = (cos(p.x * 3.10 +time*5.5) +0.5*sin(p.y*2.30-time) +cos(time*3.5)+3.0)/6.0;
return vec4(vec3(cossin1, cossin2, cossin3)*0.6, 1.0);

}

const vec3 lightPosition = vec3(0.1,0.1,-1.0);

float aoScale = 0.3; // smaller aoScale = more AO
float computeAO(vec3 position, vec3 normal) {

float sum = 0.0;
float stepSize = 0.015;
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
float k = 40.0;
	for(int i=0; i < 64; i++) {
		position = ray(pos,normalize(lightPosition-pos) , t);
		distance = function(position);

		if(abs(distance) < 0.005) {
			break;

		}
		res = min(res, k*distance/t);
		t = t + distance *0.5;
	}
	if(length(pos - lightPosition) < t) return res;
	return 0.0;
}

float computeShadow2(vec3 pos) {

	float t = 0.0;
	float distance;
vec3 position;
	vec3 startPos = lightPosition +normalize(pos-lightPosition)*0.;
float k = 160.0;
	float res = 1.0;
	for(int i=0; i < 64; i++) {

		position = ray(startPos,normalize(pos-lightPosition) , t);
		distance = function(position);

		if(abs(distance) < 0.05) {
			return 0.0;
		}
	res = min(res, k*distance/t);
		t = t + distance;
		if(  t >(length(pos - lightPosition))-0.0) break;
	}

	return res;
}

void main()
{
	vec3 cameraPosition = vec3(0.0, 0.0, -1.6);

	float aspect = width/height;
	vec3 nearPlanePosition = vec3((gl_FragCoord.x - 0.5 * width) / width * 2.0  * aspect,
							      (gl_FragCoord.y - 0.5 * height) / height * 2.0,
							       0.0);

	vec3 viewDirection = normalize(nearPlanePosition - cameraPosition);

	float t = 0.0;
	float distance;
	vec3 position;
	vec4 color = vec4(vec3(1.,1.,0.4),1.0);// plasma();//vec4(0.0,0.2,0.0,1);
	vec3 normal;
	vec3 up = normalize(vec3(-0.0, 1.0,0.0));

    int k=0;

	for(int i=0; i < 32; i++) {
		position = ray(cameraPosition,	viewDirection, t);
		distance = function(position);

		if(distance < 0.002) {
			break;
		}

		t = t + distance*0.9;
        k=i;
	}


			normal = normalize(gradient(position));

			vec4 color1 = vec4(0.5, 0.9, 0.5,1.0);
			vec4 color2 = vec4(1.0, 0.1, 0.1,1.0);

			vec4 color3 = mix(color2, color1, (1.0+dot(up, normal))/2.0);

			color = color3*0.7 * max(dot(normal, normalize(lightPosition-position)),0.0) ;//+vec4(0.1,0.1,0.1,1.0);

			//specular
			vec3 E = normalize(cameraPosition - position);
			vec3 R = reflect(-normalize(lightPosition-position), normal);


			float specular = pow( max(dot(R, E), 0.0),
		                 39.0);

			float alpha = 1.0-clamp( pow(length(position-vec3(0.0,0.0,1.0)),3.0)*0.0018,0.0, 1.0);

			float ao = 1.0;

			//sss
			float sss = 1.0 ;//-computeAO(position,viewDirection)*3.0;
			float shad = 1.0;//computeShadow(position+normalize(lightPosition-position)*0.1);
			float shadow =0.3+ 0.7 * shad;

			  color = vec4(color.xyz *shad+ color3.xyz*0.4*ao, 1.0);


			color +=vec4(0.6, 0.4,0.4,0.0)*specular *shad;
            color =mix( color,vec4(1.0, 0.5,0.1,1.0),(1.0-sss));

			// interation glow
			color += vec4(vec3(1.0, 0.8,0.1)*pow(float(k)/32.0*1.0, 2.0) *1.0,1.0);


	gl_FragColor = color;
}
