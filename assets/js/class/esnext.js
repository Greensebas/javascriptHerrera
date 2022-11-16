class Rect {
    #area = 0;                        // con el '#' convertimos esa propiedad como privada y no puede ser modificada luego
    area = 0;

    constructor(base = 0, alt = 0) {
        this.base = base;
        this.alt = alt

        this.area = base * alt;
        this.#area = base * alt;
    }
};

const rect = new Rect(10, 15);

rect.area = 98765498      // esto no debería hacerse porque es un valor que debe calcularse y de esta manera lo estamos modificando caprichosamente
// rect.#area = 100     // al ser una propiedad privada no permite ser modificada


console.log(rect);
