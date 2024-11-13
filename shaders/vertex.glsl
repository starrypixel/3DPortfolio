varying vec2 vertexUV;
varying vec3 vtNormal;

void main(){
    vertexUV = uv;
    vtNormal = normalize(normalMatrix * normal); //normal;
     gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
 }