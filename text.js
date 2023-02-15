//
function GoogleOAuthProvider({ clientId, onScriptLoadSuccess, onScriptLoadError, children, }) {
    const scriptLoadedSuccessfully = useLoadGsiScript({
        onScriptLoadSuccess,
        onScriptLoadError,
    });
    const contextValue = React.useMemo(() => ({
        clientId,
        scriptLoadedSuccessfully,
    }), [clientId, scriptLoadedSuccessfully]);
    return (React__default["default"].createElement(GoogleOAuthContext.Provider, { value: contextValue }, children));
}