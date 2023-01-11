function verification(a, b) {
    console.log(!(a && b));
    console.log(!(a || b));
    console.log(!a && b);
    console.log(!a || b);
    console.log(!b);
    console.log(!b && !a);
    console.log(!b || !a);
    console.log(a && !b);
    console.log(a || !b);
}

verification(1,0);