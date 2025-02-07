const ErrorMessage = () => {
    return (
        <img
            style={{ display: 'block', width: '250px', height: '250px', objectFit: 'contain', margin: '0 auto' }}
            src={`${process.env.PUBLIC_URL}/images/error.gif`} // Ensure the correct path
            alt="Error"
        />
    );
};

export default ErrorMessage;