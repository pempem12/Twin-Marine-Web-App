
export class Endpoint {
    /**
     * @param {*} ep Either string or another Endpoint
     */
    constructor(ep) {
        this.ep = toString(ep);
    }

    toString() {
        return this.ep;
    }
} 