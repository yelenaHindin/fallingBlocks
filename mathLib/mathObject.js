var mathObject = mathObject || {};

mathObject.prototype.scalarMult = function (v1, v2) {
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
  
mathObject.prototype.vectorMult = function (u, v) {
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


