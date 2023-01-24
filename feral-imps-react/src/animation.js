class Animation {
    spd_ease_in = [];
    spd_ease_out = [];
    spd_ease_in_out = [];
    spd_linear = [];

    zoom_dir_in = -1;
    zoom_dir_out = 1;

    x_dir_left = -1;
    x_dir_right = 1;
    y_dir_down = -1;
    y_dir_up = 1;

    animations = [];

    zoom(direction, speed, duration) {}
    translate(x_dir, y_dir, speed, duration) {}
    fade_in(speed, duration) {}
    fade_out(speed, duration) {}

    constructor() {
        animations = arguments;
        for(var i = 0; i < arguments.length; i++) {
            console.log(arguments[i]);
        }
    }

    animate() {
        for(var i = 0; i < this.animations.length; i++) {
            console.log(animations[i]);
        }
    }
}