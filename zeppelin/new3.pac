function FindProxyForURL(url, host) {
    PROXY = "SOCKS5 7.0.8.130:8888"

    // Apple.com via proxy
    if (shExpMatch(host,"*.apple.com")) {
        return PROXY;
    }
    // Everything else directly!
    return "DIRECT";
}
