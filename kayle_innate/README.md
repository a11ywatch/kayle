# kayle_innate

The rust lib for accessibility things.

## Building

`wasm-pack build`

## Testing

1. `wasm-pack test --node --firefox --chrome --headless`

## Debugging

1. `wasm-pack test --node --firefox --chrome`.
1. navigate to `http://127.0.0.1:8000/`.
1. use the `console_log!` macro to output logs if needed.

## Publishing

1. `wasm-pack build`
1. `wasm-pack publish`

## Todo

1. Port expensive functions to wasm with preloading capabilities injection into browsers.
1. Reborn the accessibility testing in rust.
