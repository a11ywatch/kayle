# kayle_innate

The incomplete Rust lib for accessibility things. 

Check out [accessibility-rs](https://github.com/a11ywatch/accessibility-rs) to make updates and add new rules.

## Building

Target the platform that you need like nodejs or browsers etc.

`wasm-pack build --target nodejs --release`

## Testing

1. `wasm-pack test --node --firefox --chrome --headless`

In order to test the accessibility parser in Rust run.

`RUST_LOG=info wasm-pack test --firefox --headless --release`.

## Debugging

1. `wasm-pack test --node --firefox --chrome`.
1. navigate to `http://127.0.0.1:8000/`.
1. use the `console_log!` macro to output logs if needed.

## API Changes

In order to make a better accessibility runner from the ground up we are adding shape changes as needed.

1. `selector` is named `selectors` and now returns an array to determine multiple elements along with the `occurence` counter.

## Publishing

1. `wasm-pack build`
1. `wasm-pack publish`
