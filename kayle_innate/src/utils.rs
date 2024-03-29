use url::Url;

pub fn set_panic_hook() {
    #[cfg(feature = "console_error_panic_hook")]
    console_error_panic_hook::set_once();
}

/// get the clean domain name
pub fn domain_name(domain: &url::Url) -> &str {
    match domain.host_str() {
        Some(b) => {
            let b = b.split('.').collect::<Vec<&str>>();
            let bsize = b.len();

            if bsize > 0 {
                b[bsize - 1]
            } else {
                ""
            }
        }
        _ => "",
    }
}

/// convert to absolute path
#[inline]
pub fn convert_base_path(mut base: Url) -> Url {
    match base.path_segments_mut().map_err(|_| "cannot be base") {
        Ok(mut seg) => {
            seg.clear();
        }
        _ => (),
    };

    base
}

/// convert to absolute path
#[inline]
pub fn convert_abs_path(base: &Url, href: &str) -> Url {
    match base.join(href) {
        Ok(mut joined) => {
            joined.set_fragment(None);
            joined
        }
        Err(_) => base.clone(),
    }
}
