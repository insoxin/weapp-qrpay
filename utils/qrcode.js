!function() {
    function r(r, o) {
        var f;
        r > o && (f = r, r = o, o = f), f = o, f *= o, f += o, f >>= 1, p[f += r] = 1;
    }
    function o(o, f) {
        var e;
        for (F[o + l * f] = 1, e = -2; e < 2; e++) F[o + e + l * (f - 2)] = 1, F[o - 2 + l * (f + e + 1)] = 1, 
        F[o + 2 + l * (f + e)] = 1, F[o + e + 1 + l * (f + 2)] = 1;
        for (e = 0; e < 2; e++) r(o - 1, f + e), r(o + 1, f - e), r(o - e, f - 1), r(o + e, f + 1);
    }
    function f(r) {
        for (;r >= 255; ) r = ((r -= 255) >> 8) + (255 & r);
        return r;
    }
    function e(r, o, e, t) {
        var a, n, i;
        for (a = 0; a < t; a++) S[e + a] = 0;
        for (a = 0; a < o; a++) {
            if (255 != (i = m[S[r + a] ^ S[e]])) for (n = 1; n < t; n++) S[e + n - 1] = S[e + n] ^ w[f(i + M[t - n])]; else for (n = e; n < e + t; n++) S[n] = S[n + 1];
            S[e + t - 1] = 255 == i ? 0 : w[f(i + M[0])];
        }
    }
    function t(r, o) {
        var f;
        return r > o && (f = r, r = o, o = f), f = o, f += o * o, f >>= 1, f += r, p[f];
    }
    function a(r) {
        var o, f, e, a;
        switch (r) {
          case 0:
            for (f = 0; f < l; f++) for (o = 0; o < l; o++) o + f & 1 || t(o, f) || (F[o + f * l] ^= 1);
            break;

          case 1:
            for (f = 0; f < l; f++) for (o = 0; o < l; o++) 1 & f || t(o, f) || (F[o + f * l] ^= 1);
            break;

          case 2:
            for (f = 0; f < l; f++) for (e = 0, o = 0; o < l; o++, e++) 3 == e && (e = 0), e || t(o, f) || (F[o + f * l] ^= 1);
            break;

          case 3:
            for (a = 0, f = 0; f < l; f++, a++) for (3 == a && (a = 0), e = a, o = 0; o < l; o++, 
            e++) 3 == e && (e = 0), e || t(o, f) || (F[o + f * l] ^= 1);
            break;

          case 4:
            for (f = 0; f < l; f++) for (e = 0, a = f >> 1 & 1, o = 0; o < l; o++, e++) 3 == e && (e = 0, 
            a = !a), a || t(o, f) || (F[o + f * l] ^= 1);
            break;

          case 5:
            for (a = 0, f = 0; f < l; f++, a++) for (3 == a && (a = 0), e = 0, o = 0; o < l; o++, 
            e++) 3 == e && (e = 0), (o & f & 1) + !(!e | !a) || t(o, f) || (F[o + f * l] ^= 1);
            break;

          case 6:
            for (a = 0, f = 0; f < l; f++, a++) for (3 == a && (a = 0), e = 0, o = 0; o < l; o++, 
            e++) 3 == e && (e = 0), (o & f & 1) + (e && e == a) & 1 || t(o, f) || (F[o + f * l] ^= 1);
            break;

          case 7:
            for (a = 0, f = 0; f < l; f++, a++) for (3 == a && (a = 0), e = 0, o = 0; o < l; o++, 
            e++) 3 == e && (e = 0), (e && e == a) + (o + f & 1) & 1 || t(o, f) || (F[o + f * l] ^= 1);
        }
    }
    function n(r) {
        var o, f = 0;
        for (o = 0; o <= r; o++) x[o] >= 5 && (f += R + x[o] - 5);
        for (o = 3; o < r - 1; o += 2) x[o - 2] == x[o + 2] && x[o + 2] == x[o - 1] && x[o - 1] == x[o + 1] && 3 * x[o - 1] == x[o] && (0 == x[o - 3] || o + 3 > r || 3 * x[o - 3] >= 4 * x[o] || 3 * x[o + 3] >= 4 * x[o]) && (f += _);
        return f;
    }
    function i() {
        var r, o, f, e, t, a = 0, i = 0;
        for (o = 0; o < l - 1; o++) for (r = 0; r < l - 1; r++) (F[r + l * o] && F[r + 1 + l * o] && F[r + l * (o + 1)] && F[r + 1 + l * (o + 1)] || !(F[r + l * o] || F[r + 1 + l * o] || F[r + l * (o + 1)] || F[r + 1 + l * (o + 1)])) && (a += y);
        for (o = 0; o < l; o++) {
            for (x[0] = 0, f = e = r = 0; r < l; r++) (t = F[r + l * o]) == e ? x[f]++ : x[++f] = 1, 
            i += (e = t) ? 1 : -1;
            a += n(f);
        }
        i < 0 && (i = -i);
        var c = i, s = 0;
        for (c += c << 2, c <<= 1; c > l * l; ) c -= l * l, s++;
        for (a += s * N, r = 0; r < l; r++) {
            for (x[0] = 0, f = e = o = 0; o < l; o++) (t = F[r + l * o]) == e ? x[f]++ : x[++f] = 1, 
            e = t;
            a += n(f);
        }
        return a;
    }
