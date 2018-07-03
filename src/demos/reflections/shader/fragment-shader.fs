
precision mediump float;

uniform float time;

const float width  = 640.0;
const float height = 360.0;
const float delta  = 0.01;
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




float opS( float d1, float d2 )
{
    return max(-d1,d2);
}


	vec3 opRep2( vec3 p, vec3 c )
{
   return mod(p,c)-0.5*c;

}





float opU( float d1, float d2 )
{
    return min(d1,d2);
}



float opDisplace( vec3 p )
{
    float d1 = sdTorus(p, vec2(4.0,2.0));
    float d2 = (sin(p.x*3.0) + sin(p.y*5.0)) *0.2;
    return d1+d2;
}




float length2(vec2 vector, float n) {

 return pow(pow(vector.x,n)+pow(vector.y,n),(1.0/n));
}

float sdTorus82( vec3 p, vec2 t )
{
  vec2 q = vec2(length2(p.xz,2.0)-t.x,p.y);
  return length2(q,8.0)-t.y;
}

float sdBox( vec3 p, vec3 b )
{
  vec3  di = abs(p) - b;
  float mc = max(di.x, max(di.y,di.z));
  return min(mc,length(max(di,0.0)));
}

float sdCross( in vec3 p )
{
  float da = udRoundBox(p.xyz,vec3(3.0,0.5,0.5), 0.2);
  float db = udRoundBox(p.yzx,vec3(0.5,3.0,0.5), 0.2);
  float dc = udRoundBox(p.zxy,vec3(0.5,0.5,3.0), 0.2);
  return min(da,min(db,dc));
}
int material = 0;

float opRep( vec3 p, vec3 c )
{
    vec3 q = mod(p,c)-0.5*c;
    return sdSphere( q ,0.1);
}
vec3 lightPosition = vec3(0.0,0.0,-1.5);
float function(vec3 position) {

	vec3 pos = rotateY(rotateX(position,time*0.7),time*0.8)+vec3(-0.6,0.6,-0.6)+vec3(60.0*sin(time*0.1),0.0,0.0);

	float cc = 6.;
	vec3 q = mod(pos,cc)-0.5*cc;
	float b =// udRoundBox(q, vec3(1.0,1.0,1.0), 0.2)
sdCross(q);

vec3 pos2 =rotateY(rotateX(position+vec3(0.0,0.0,0.2),time*1.7),time*1.8);



float a = opS( opRep(pos2, vec3(0.21)),udRoundBox(pos2, vec3(0.4,0.4,0.4), 0.05));

//sphere(position-vec3(0.0,0.0,0.5), 0.7));

float c = udRoundBox(q, vec3(1.0,1.0,1.0), 0.2);

material = 0;
if( c < b)
material = 1;
b= min(b,c);

if(a < b)
material = 2;

b =min(b, a);

;//+0.07*perlin(q*3.0) ;


	//if((mod(pos,cc)-0.5*cc).x> 0.3)


	return b;

}





vec3 ray(vec3 start, vec3 direction, float t) {
	return start + t * direction;
}

vec3 gradient(vec3 position) {

	return vec3(function(position + vec3(delta, 0.0, 0.0)) - function(position - vec3(delta, 0.0, 0.0)),
	function(position + vec3(0.0,delta, 0.0)) - function(position - vec3(0.0, delta, 0.0)),
	function(position + vec3(0.0, 0.0, delta)) - function(position - vec3(0.0, 0.0, delta)));


}



vec4 computeReflection(vec3 pos, vec3 viewDirection) {
	float t = 0.0;
	float distance;
	vec3 position;
       vec3 cameraPosition = pos;
	vec4 color = vec4(0.0,0.0,0.0,1.0);//vec4(0.0,0.2,0.0,1);
	vec3 normal;
	vec3 up = normalize(vec3(-0.0, 1.0,0.0));

	for(int i=0; i < 32; i++) {
		position = ray(cameraPosition,	viewDirection, t);
		distance = function(position);

		if(distance < 0.04) {

			break;
		}
		//color += 0.6*vec4(vec3(0.4, 0.9,0.1)*pow(float(i)/64.0*2.6, 2.0) *1.0,1.0);
			t = t + distance * 1.0;
	}

		normal = normalize(gradient(position));



			float ambient = max(dot(normal, normalize(lightPosition-position)),0.0) ;

			//specular
			vec3 E = normalize(cameraPosition - position);
			vec3 R = reflect(-normalize(lightPosition-position), normal);


			float specular = pow( max(dot(R, E), 0.0),
		                 8.0);

						float alpha = 1.0-clamp( pow(length(position-vec3(0.0,0.0,1.0)),2.0)*0.0016,0.0, 1.0);



			vec3 mycolor = vec3(0.9, 0.4, 0.4);

			if(material == 1)
				mycolor = vec3(0.4, 0.9, 0.4);

			color = vec4((  0.6* mycolor)*(0.3+ambient*0.7),1.0);
			color += vec4(vec3(1.0)*1.0*specular, 1.0);

			color = color * alpha + vec4(0.0,0.0,0.0,1.0) *(1.0 -alpha);





	return color;
}

void main() {
	vec3 cameraPosition = vec3(0.0, 0.0, -1.2);

	float aspect = 360.0/640.0;
	vec3 nearPlanePosition = vec3(((gl_FragCoord.x/width)-0.5),
							      ((gl_FragCoord.y/height)-0.5)*aspect,
							       -1.0);

	vec3 viewDirection = normalize(nearPlanePosition - cameraPosition);
	float t = 0.0;
float l=length(nearPlanePosition - cameraPosition);

	 t =l;
	float distance;
	vec3 position;
	vec4 color =vec4(0.0,0.0,0.0,1.0);
	vec3 normal;
	vec3 up = normalize(vec3(-0.0, 1.0,0.0));

	for(int i=0; i < 32; i++) {
		position = ray(cameraPosition,	viewDirection, t);
		distance = function(position);

		if(distance < 0.005) {
			break;
		}

		t = t + distance;
	}


			normal = normalize(gradient(position));



			float ambient = max(dot(normal, normalize(lightPosition-position)),0.0) ;

			//specular
			vec3 E = normalize(cameraPosition - position);
			vec3 R = reflect(-normalize(lightPosition-position), normal);


			float specular = pow( max(dot(R, E), 0.0),
		                 6.0);

			float alpha = 1.0-clamp( pow(length(position-vec3(0.0,0.0,1.0)),2.0)*0.0026,0.0, 1.0);


			vec3 mycolor = vec3(255.0/255.0,127.0/255.0,36.0/255.0);

			if(material == 1) mycolor = vec3(0.45, 0.9, 0.45);
			if(material == 2) mycolor = vec3(0.8, 0.8, 1.0) ;
			vec4 refl = computeReflection(position+normal *0.04, reflect(viewDirection, normal));
						float shad = 1.0;//computeShadow(position+normalize(lightPosition-position)*0.008);
			color = vec4(( refl.xyz*0.5 + 0.6* mycolor)*(0.4+ambient*0.7)*shad,1.0);

			color += vec4(vec3(0.7)*1.0*specular, 1.0);

			color = color * alpha + vec4(0.3,1.0,0.3,1.0) *(1.0 -alpha);



	gl_FragColor = vec4(vec3(((color-0.5)*1.7+0.5)+0.2),1.0);
	//discard;
}
