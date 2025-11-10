import { useState, useEffect } from 'react';
import UserContext from './UserContext';

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            const { data } = await supabase.auth.getUser();
            setUser(data.user);
        };
        getUser();

        const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
            setUser(session?.user || null);
        });

        return () => {
            listener.subscription.unsubscribe();
        }
    }, []);

    return (
        <UserContext value={ user }>
            {children}
        </UserContext>
    )
}