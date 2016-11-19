Linear = function() {};

Linear.prototype.scalarMult = function (v1, v2) {
    if (!Array.isArray(v1) || !Array.isArray(v2))
        throw new Error("Not arrays")

    if (v1.length != v2.length)
        throw new Error("Different length");

    var res  = 0;
    for (var i = 0; i < v1.length; i++) {
        res += v1[i] * v2[i];
    }

    return res;
}
  
Linear.prototype.vectorMult = function (u, v) {
    if (!Array.isArray(u) || !Array.isArray(v))
        throw new Error("Not arrays")

    if (u.length != v.length)
        throw new Error("Different length");

    if (u.length != 3)
        throw new Error("Applicable to 3D vectors only");


    var res=[];

    res[0] = u[1] * v[2] - u[2] * v[1];
    res[1] = u[2] * v[0] - u[0] * v[2];
    res[2] = u[0] * v[1] - u[1] * v[0];

    return res;
}


Linear.prototype.vectorMatrixMult = function(v, m) {
    var x = v[0], y = v[1], z = v[2];
    var out = [];
    out[0] = x * m[0][0] + y * m[1][0] + z * m[2][0];
    out[1] = x * m[0][1] + y * m[1][1] + z * m[2][1];
    out[2] = x * m[0][2] + y * m[1][2] + z * m[2][2];

    return out;
};
