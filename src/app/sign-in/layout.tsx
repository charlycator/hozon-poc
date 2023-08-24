export default function SignInLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className="hoz-login-screen absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="selection:bg-yellow-200 selection:text-black">
                <div className="min-h-screen flex justify-center items-center">
                    <div className="p-8 flex-1">
                        {children}
                    </div>
                </div>
            </div>
        </main>
    )
}