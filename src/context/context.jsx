import { createContext} from 'react';
import { run } from '../config/gemini';

// Create a context
export const Context = createContext();

// Context provider component
const ContextProvider = ({children}) => {
    // Define a function to be called by child components
    const onSent = async (prompt) => {
        await run(prompt);
    }
    
    onSent("what is react js?")
    
    // useCallback(async (prompt) => {
    //     try {
    //         await run(prompt);
    //     } catch (error) {
    //         console.error('Failed to send prompt:', error);
    //     }
    // }, []);

    // Context value that will be provided to children
    const contextValue = {
        onSent,
    };

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
