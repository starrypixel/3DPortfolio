varying vec3 vtNormal;

void main() {
    float intensity = pow(0.3 - dot(vtNormal, vec3(0.0, 0.0, 1.0)), 2.0);
    gl_FragColor = vec4(0.366, 0.957, 0.937, 2.0) * intensity;
}