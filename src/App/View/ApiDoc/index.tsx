interface AuxProps {

}

const ApiDoc: React.FC<AuxProps> = () => {
    return (
        <div className="fullscreen-iframe-container">
            <iframe
                title="Api Documentation"
                className="fullscreen-iframe"
                src="https://documenter.getpostman.com/view/29647463/2s9YC8xBEv" // Replace with the URL you want to display in the iframe
                allowFullScreen
                frameBorder="0"
            />
        </div>
    )
}

export default ApiDoc;