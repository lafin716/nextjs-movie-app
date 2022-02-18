export default function NotFound() {
    return (
        <>
            <div className="container">
                <h2>404 Not Found</h2>
                <h2>What are you doing here?</h2>
            </div>
            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    font-weight: bold;
                    margin-top: 120px;
                }
            `}</style>
        </>
    );
}