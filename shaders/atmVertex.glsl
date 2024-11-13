varying vec2 vertexUV;
varying vec3 vtNormal;

void main(){
//    vertexUV = uv; no texture required
    vtNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
}