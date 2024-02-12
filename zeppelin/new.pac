function FindProxyForURL(url, host) {
    PROXY = "SOCKS5 localhost:8888"

    // Apple.com via proxy
    if (shExpMatch(host,"10.79.*")) {
        return PROXY;
    }
    // Everything else directly!
    return "DIRECT";
}
