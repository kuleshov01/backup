function FindProxyForURL(url, host) {
    if (shExpMatch(host, "10.4.*")) {
        return "SOCKS5 7.0.8.130:1080; SOCKS5-User=v.a.kuleshov; SOCKS5-Pass=eks!0123";
    } else {
        return "DIRECT";
    }
}
