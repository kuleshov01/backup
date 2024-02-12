function FindProxyForURL(url, host) {
    PROXY = "SOCKS5 localhost:8888"

    // Apple.com via proxy
    if (shExpMatch(host,"10.4.*")) {
        return PROXY;
    }
    if (shExpMatch(host,"skud-parsec-01.skud.bg65.ru")) {
        return PROXY;
    }
    if (shExpMatch(host,"10.12.1.94")) {
        return PROXY;
    }
    // Everything else directly!
    return "DIRECT";
}
