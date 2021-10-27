import { version } from '../package.json';

const PI2 = Math.PI * 2;

export default new class {

    static get version() {
        return version;
    }

    static get PI2() {
        return PI2;
    }

    clamp(value, min, max) {
        return Math.max(Math.min(value, max), min);
    }

    randomFloatBetween(min, max) {
        return min + Math.random() * (max - min);
    }

    randomIntBetween(min, max) {
        return Math.round(this.randomFloatBetween(min, max));
    }

    possiblility(percentage) {
        return this.randomFloatBetween(0, 100) < percentage;
    }

    deg2rad(deg) {
        return (Math.PI / 180) * deg;
    }

    rad2deg(rad) {
        return (rad * 180) / Math.PI;
    }

    rotateVector(vector, angle) {
        angle = this.deg2rad(-angle);

        const cos = Math.cos(angle);
        const sin = Math.sin(angle);

        return [
            vector[0] * cos - vector[1] * sin,
            vector[0] * sin + vector[1] * cos,
        ];
    }
}