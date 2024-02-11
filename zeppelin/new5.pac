function FindProxyForURL(url, host) {
    PROXY = "SOCKS5 127.0.0.1:8888"

    // Apple.com via proxy
    if (shExpMatch(host,"*.10.4.*")) {
        return PROXY;
    }
    // Everything else directly!
    return "DIRECT";
}
