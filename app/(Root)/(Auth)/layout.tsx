import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center"> 
            {children}
        </div>
    );
};

export default Layout;
