uniform sampler2D globeTexture;
varying vec2 vertexUV;
varying vec3 vtNormal;

void main() {
    float intensity = 1.05 - dot(vtNormal, vec3(0.0, 0.0, 1.0));
    vec3 atmosphere = vec3(0.0, 0.122, 0.278) * pow(intensity, 1.5);
    gl_FragColor = vec4(atmosphere +texture2D(globeTexture, vertexUV).xyz, 1.0);
}