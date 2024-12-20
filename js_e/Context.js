const { createContext, useState } = React;
window.Context = createContext();
window.ContextProvider = ({ children }) => {
    const [freight, setFreight] = useState(100);
    return (
        <Context.Provider value={{ freight, setFreight }}>
            {children}
        </Context.Provider>
    );
};